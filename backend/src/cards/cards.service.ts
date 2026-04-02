import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

async findAll(game?: string, search?: string) {
  return this.prisma.card.findMany({
    where: {
      AND: [
        game ? { game: { contains: game, mode: 'insensitive' } } : {},
        search ? { name: { contains: search, mode: 'insensitive' } } : {},
      ],
    },
  });
}
}