// src/lists/lists.controller.ts
import { Controller, Get, Post, Patch, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ListsService } from './lists.service';
import { IList } from '@shared/interfaces/list.interface';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  async createList(@Body() body: { email: string; name: string }): Promise<IList> {
    return this.listsService.createList(body.email, body.name);
  }
  @Get() 
  async findAll(
    @Query('email') email: string, 
    @Query('q') searchTerm?: string 
  ): Promise<IList[]> {
    return this.listsService.searchLists(email, searchTerm);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.listsService.getListById(id);
  }

  @Patch('items/:itemId')
  async updateListItem(
    @Param('itemId', ParseIntPipe) itemId: number,
    @Body() body: { qty?: number; condition?: string; extra?: string; lang?: string }
  ) {
    return this.listsService.updateListItem(itemId, body);
  }
}