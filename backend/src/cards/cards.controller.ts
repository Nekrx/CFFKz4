import { Controller, Get, Query } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  getCards(@Query('game') game: string, @Query('search') search: string) {
    return this.cardsService.findAll(game, search);
  }
}