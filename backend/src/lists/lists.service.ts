import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';

@Injectable()
export class ListsService {
  private lists = [
    { id: 1, name: 'Lista OP Joãozinho' },
    { id: 2, name: 'Lista OP Mariazinha' },
  ];

  create(createListDto: CreateListDto) {
    const newList = {
      id: Math.floor(Math.random() * 10000),
      ...createListDto,
    };
    this.lists.push(newList);
    return newList;
  }

  findAll() {
    return this.lists;
  }
}