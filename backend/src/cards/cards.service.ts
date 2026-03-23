import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsService {
  private cards = [
    { id: 1, name: 'Ace & Sabo & Luffy', game: 'One Piece TCG', rarity: 'Super Parallel' },
    { id: 2, name: 'Roronoa Zoro', game: 'One Piece TCG', rarity: 'SR' },
    { id: 3, name: 'Draven', game: 'Riftbound', rarity: 'Rare' },
  ];

  findAll(game?: string, search?: string) {
    let filtered = this.cards;
    if (game) filtered = filtered.filter(c => c.game === game);
    if (search) filtered = filtered.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    return filtered;
  }
}