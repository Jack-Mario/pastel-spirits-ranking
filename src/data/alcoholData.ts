
export interface AlcoholItem {
  id: number;
  name: string;
  type: 'vin' | 'öl' | 'sprit';
  description: string;
  rating: number;
  origin: string;
  alcoholContent: string;
}

export const alcoholData: AlcoholItem[] = [
  // Viner
  {
    id: 1,
    name: "Château Margaux 2010",
    type: "vin",
    description: "En exceptionell Bordeaux med komplex smak av svarta bär, kryddor och ek.",
    rating: 9.8,
    origin: "Frankrike",
    alcoholContent: "13.5%"
  },
  {
    id: 2,
    name: "Dom Pérignon Vintage 2012",
    type: "vin",
    description: "Prestigefull champagne med elegant mousse och toner av citrus och brioche.",
    rating: 9.6,
    origin: "Frankrike",
    alcoholContent: "12.5%"
  },
  {
    id: 3,
    name: "Barolo Brunate 2018",
    type: "vin",
    description: "Kraftfullt italienskt rödvin med toner av körsbär, tryffel och läder.",
    rating: 9.4,
    origin: "Italien",
    alcoholContent: "14.5%"
  },
  {
    id: 4,
    name: "Sancerre Henri Bourgeois",
    type: "vin",
    description: "Elegant Loire-vin med mineraliska toner och fräsch syra.",
    rating: 8.9,
    origin: "Frankrike",
    alcoholContent: "13%"
  },

  // Öl
  {
    id: 5,
    name: "Westvleteren 12",
    type: "öl",
    description: "Belgisk trapistöl som ofta rankas som världens bästa öl.",
    rating: 9.7,
    origin: "Belgien",
    alcoholContent: "10.2%"
  },
  {
    id: 6,
    name: "Pliny the Elder",
    type: "öl",
    description: "Legendarisk amerikansk IPA med intensiv humlearom.",
    rating: 9.5,
    origin: "USA",
    alcoholContent: "8%"
  },
  {
    id: 7,
    name: "Cantillon Gueuze",
    type: "öl",
    description: "Traditionell belgisk lambic med komplex syrlig profil.",
    rating: 9.2,
    origin: "Belgien",
    alcoholContent: "5%"
  },
  {
    id: 8,
    name: "Founders KBS",
    type: "öl",
    description: "Bourbon barrel-aged stout med toner av kaffe och choklad.",
    rating: 8.8,
    origin: "USA",
    alcoholContent: "11.2%"
  },

  // Sprit
  {
    id: 9,
    name: "Macallan 25 Year",
    type: "sprit",
    description: "Exklusiv skotsk single malt whisky med djup komplexitet.",
    rating: 9.9,
    origin: "Skottland",
    alcoholContent: "43%"
  },
  {
    id: 10,
    name: "Hennessy Paradis",
    type: "sprit",
    description: "Premium cognac med blend av över 100 eau-de-vie.",
    rating: 9.3,
    origin: "Frankrike",
    alcoholContent: "40%"
  },
  {
    id: 11,
    name: "Grey Goose Vodka",
    type: "sprit",
    description: "Premium fransk vodka destillerad från finaste vintervetat.",
    rating: 8.7,
    origin: "Frankrike",
    alcoholContent: "40%"
  },
  {
    id: 12,
    name: "Don Julio 1942",
    type: "sprit",
    description: "Årgångstequila med rik smak av agave och ekfat.",
    rating: 9.1,
    origin: "Mexiko",
    alcoholContent: "38%"
  }
];
