export interface Option {
  label: string;
  shortLabel?: string;
  value: string;
}

export const GAMES: Option[] = [
  { label: 'One Piece TCG', value: 'one-piece' },
  { label: 'Riftbound', value: 'riftbound' },
];

export const QUALITIES: Option[] = [
  { label: 'Nova (M)', shortLabel: 'M', value: 'm' },
  { label: 'Praticamente Nova (NM)', shortLabel: 'NM', value: 'nm' },
  { label: 'Usada Levemente (SP)', shortLabel: 'SP', value: 'sp' },
  { label: 'Usada Moderadamente (MP)', shortLabel: 'MP', value: 'mp' },
  { label: 'Muito Usada (HP)', shortLabel: 'HP', value: 'hp' },
  { label: 'Danificada (D)', shortLabel: 'D', value: 'd' },
];

export const LANGUAGES: Option[] = [
  { label: 'Inglês (EN)', shortLabel: 'EN', value: 'en' },
  { label: 'Japonês (JP)', shortLabel: 'JP', value: 'jp' },
  { label: 'Francês (FR)', shortLabel: 'FR', value: 'fr' },
  { label: 'Alemão (AL)', shortLabel: 'AL', value: 'al' },
  { label: 'Português (PT)', shortLabel: 'PT', value: 'pt' },
  { label: 'Espanhol (ES)', shortLabel: 'ES', value: 'es' },
  { label: 'Italiano (IT)', shortLabel: 'IT', value: 'it' },
  { label: 'Chinês (CN)', shortLabel: 'CN', value: 'cn' },
];

export const EXTRAS: Option[] = [
  { label: 'Foil', value: 'foil' },
  { label: 'Promo', value: 'promo' },
  { label: 'Alterada', value: 'alterada' },
  { label: 'Assinada', value: 'assinada' },
  { label: 'Misprint', value: 'misprint' },
];