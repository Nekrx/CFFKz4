import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IList } from '@shared/interfaces/list.interface'; 

@Injectable()
export class ListsService {
  constructor(private prisma: PrismaService) {}

  async searchLists(email: string, searchTerm?: string): Promise<IList[]> {
    const lists = await this.prisma.list.findMany({
      where: {
        user: { email },
        ...(searchTerm && {
          name: { contains: searchTerm, mode: 'insensitive' },
        }),
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
      },
      orderBy: { name: 'asc' },
    });

    return lists.map(list => ({
      id: list.id,
      name: list.name,
      userEmail: email,
      createdAt: list.createdAt,
    }));
  }

  async createList(email: string, name: string): Promise<IList> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com email ${email} não encontrado.`);
    }

    const newList = await this.prisma.list.create({
      data: {
        name,
        userId: user.id,
      },
    });
    return {
      id: newList.id,
      name: newList.name,
      userEmail: email,
      createdAt: newList.createdAt,
    };
  }

  async getListById(id: number) {
    const list = await this.prisma.list.findUnique({
      where: { id },
      include: {
        items: {
          include: { card: true },
        },
      },
    });

    if (!list) throw new NotFoundException(`Lista não encontrada`);
    
    return list;
  }

  async updateListItem(
    itemId: number, 
    data: { qty?: number; condition?: string; extra?: string; lang?: string }
  ) {
    const itemExists = await this.prisma.listItem.findUnique({ where: { id: itemId } });
    if (!itemExists) throw new NotFoundException(`Item ID ${itemId} não encontrado.`);

    return this.prisma.listItem.update({
      where: { id: itemId },
      data,
    });
  }
}