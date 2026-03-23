
export interface Option {
  label: string;
  value: string;
}

export const LANGUAGES: Option[] = [
  { label: 'EN', value: 'en' },
  { label: 'PT', value: 'pt' },
  { label: 'JP', value: 'jp' },
];

export const QUALITIES: Option[] = [
  { label: 'NM', value: 'nm' },
  { label: 'SP', value: 'sp' },
  { label: 'MP', value: 'mp' },
];

export const GAMES: Option[] = [
  { label: 'One Piece TCG', value: 'one-piece' },
  { label: 'Digimon TCG', value: 'Digimon' },
  { label: 'Riftbound', value: 'Riftbound' },
];