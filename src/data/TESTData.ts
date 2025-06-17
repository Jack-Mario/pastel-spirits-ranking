export interface AlcoholItem {
  id: number;
  name: string;
  type: 'vin' | 'öl' | 'sprit' | 'blanddryck';
  description: string;
  rating: number;
  origin: string;
  alcoholContent: string;
  volume: string;
  price: string;
}

export const alcoholData: AlcoholItem[] = [
  // Blanddrycker
  {"id": 13132, "name": "Watermelon", "type": "blanddryck", "description": "Cocktail Collective", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "13:90*"},
  {"id": 55035, "name": "Mango Passion", "type": "blanddryck", "description": "Halmstad Crush", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "14:90"},
  {"id": 1707, "name": "Lemon", "type": "blanddryck", "description": "Halmstad Crush", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "14:90*"},
  {"id": 1805, "name": "The Apple Sour Project", "type": "blanddryck", "description": "Liquid Industries", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "14:90*"},
  {"id": 13073, "name": "Cola Sour", "type": "blanddryck", "description": "Halmstad Crush", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "14:90*"},
  {"id": 10461, "name": "Ice Tea", "type": "blanddryck", "description": "Halmstad Crush", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "14:90*"},
  {"id": 13113, "name": "Candy", "type": "blanddryck", "description": "Halmstad Crush", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "14:90*"},
  {"id": 1086, "name": "Tropical Punch", "type": "blanddryck", "description": "Tropida", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "250 ml", "price": "15:90*"},
  {"id": 1721, "name": "Mango Passion", "type": "blanddryck", "description": "Halmstad Crush", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "16:90*"},
  {"id": 1089, "name": "The Bellini Project", "type": "blanddryck", "description": "Liquid Industries", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "16:90*"},
  {"id": 10731, "name": "The Mojito Project", "type": "blanddryck", "description": "Liquid Industries", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "16:90*"},
  {"id": 56240, "name": "Joluca Lada Pineapple & Coconut", "type": "blanddryck", "description": "Joluca Cocktails", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "275 ml", "price": "16:90"},
  {"id": 1742, "name": "Jordgubb", "type": "blanddryck", "description": "Halmstad Crush", "rating": 0, "origin": "Sverige", "alcoholContent": "7%", "volume": "330 ml", "price": "17:90"},
  {"id": 89081, "name": "Hard Lemonade", "type": "blanddryck", "description": "Adams", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "19:10"},
  {"id": 56176, "name": "Strawberry Cosmo", "type": "blanddryck", "description": "Kopparberg Cocktail Collection", "rating": 0, "origin": "Sverige", "alcoholContent": "5%", "volume": "250 ml", "price": "19:50*"},
  {"id": 56799, "name": "Grapefrukt", "type": "blanddryck", "description": "KUBIK Hard Seltzer", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "19:90*"},
  {"id": 58760, "name": "Granatäpple", "type": "blanddryck", "description": "KUBIK Hard Seltzer", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "19:90*"},
  {"id": 57004, "name": "Rosé Spritz", "type": "blanddryck", "description": "LowLow Hard Seltzer", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "19:90*"},
  {"id": 18042, "name": "Margarita Classic Style", "type": "blanddryck", "description": "Azuca", "rating": 0, "origin": "Tyskland", "alcoholContent": "4,5%", "volume": "250 ml", "price": "19:90*"},
  {"id": 89169, "name": "Persika", "type": "blanddryck", "description": "KUBIK Hard Seltzer", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "19:90*"},
  {"id": 89045, "name": "Raspberry", "type": "blanddryck", "description": "Sellow Hard Seltzer", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "19:90*"},
  {"id": 89042, "name": "Strawberry & Rhubarb", "type": "blanddryck", "description": "Sellow Hard Seltzer", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "19:90*"},
  {"id": 59732, "name": "Fläder", "type": "blanddryck", "description": "KUBIK Hard Seltzer", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "19:90*"},
  {"id": 89060, "name": "Sour Passion", "type": "blanddryck", "description": "LowLow Hard Seltzer", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "330 ml", "price": "19:90*"},
  {"id": 1169, "name": "Margarita Organic Spritz", "type": "blanddryck", "description": "Punch Club", "rating": 0, "origin": "Estland", "alcoholContent": "4%", "volume": "250 ml", "price": "19:90*"},
  {"id": 37308, "name": "SKNY BTCH Raspberry Vodka Soda", "type": "blanddryck", "description": "Savings Mat & Dryck", "rating": 0, "origin": "Sverige", "alcoholContent": "4,5%", "volume": "200 ml", "price": "20:-"},
];
