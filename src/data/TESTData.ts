export interface AlcoholItem {
  id: number;
  name: string;
  type: 'vin' | 'öl' | 'sprit' | 'blanddryck';;
  description: string;
  rating: number;
  origin: string;
  alcoholContent: string;
}

export const alcoholData: AlcoholItem[] = [
  // Blanddrycker
];
