
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
  },

  // Fler viner
  {
    id: 13,
    name: "Opus One 2018",
    type: "vin",
    description: "Kultvin från Napa Valley med elegant struktur och långt eftersmak.",
    rating: 8.8,
    origin: "USA",
    alcoholContent: "14.5%"
  },
  {
    id: 14,
    name: "Sassicaia 2019",
    type: "vin",
    description: "Ikonisk Super Tuscan med Cabernet Sauvignon-dominans.",
    rating: 8.6,
    origin: "Italien",
    alcoholContent: "13.5%"
  },
  {
    id: 15,
    name: "Krug Grande Cuvée",
    type: "vin",
    description: "Prestigefull champagne med komplexa nötiga toner.",
    rating: 8.9,
    origin: "Frankrike",
    alcoholContent: "12%"
  },
  {
    id: 16,
    name: "Riesling Kabinett",
    type: "vin",
    description: "Elegant tysk vit med balanserad sötma och syra.",
    rating: 8.4,
    origin: "Tyskland",
    alcoholContent: "11.5%"
  },
  {
    id: 17,
    name: "Rioja Gran Reserva",
    type: "vin",
    description: "Klassisk spansk röd med lång lagring på ekfat.",
    rating: 8.3,
    origin: "Spanien",
    alcoholContent: "13.5%"
  },
  {
    id: 18,
    name: "Château d'Yquem",
    type: "vin",
    description: "Legendarisk Sauternes dessertvin med honungstoner.",
    rating: 9.1,
    origin: "Frankrike",
    alcoholContent: "14%"
  },
  {
    id: 19,
    name: "Amarone della Valpolicella",
    type: "vin",
    description: "Kraftfull italiensk röd med torkade druvor.",
    rating: 8.5,
    origin: "Italien",
    alcoholContent: "15%"
  },
  {
    id: 20,
    name: "Chablis Premier Cru",
    type: "vin",
    description: "Mineralsrik Chardonnay från Burgund.",
    rating: 8.2,
    origin: "Frankrike",
    alcoholContent: "12.5%"
  },

  // Fler öl
  {
    id: 21,
    name: "Trappistes Rochefort 10",
    type: "öl",
    description: "Belgisk quadrupel med rik karamell- och fruktsmak.",
    rating: 8.7,
    origin: "Belgien",
    alcoholContent: "11.3%"
  },
  {
    id: 22,
    name: "Russian River Consecration",
    type: "öl",
    description: "Sour ale lagrat med körsbär och vinbakterier.",
    rating: 8.5,
    origin: "USA",
    alcoholContent: "10%"
  },
  {
    id: 23,
    name: "Samuel Smith's Imperial Stout",
    type: "öl",
    description: "Klassisk engelsk imperial stout med chokladtoner.",
    rating: 8.3,
    origin: "England",
    alcoholContent: "7%"
  },
  {
    id: 24,
    name: "Chimay Blue",
    type: "öl",
    description: "Belgisk trapistöl med komplex fruktighet.",
    rating: 8.4,
    origin: "Belgien",
    alcoholContent: "9%"
  },
  {
    id: 25,
    name: "Schneider Weisse TAP 7",
    type: "öl",
    description: "Klassisk bayersk hefeweizen med banankaraktär.",
    rating: 8.1,
    origin: "Tyskland",
    alcoholContent: "5.4%"
  },
  {
    id: 26,
    name: "Dogfish Head 120 Minute IPA",
    type: "öl",
    description: "Extrem IPA med kontinuerlig humletillsats.",
    rating: 8.6,
    origin: "USA",
    alcoholContent: "15-20%"
  },
  {
    id: 27,
    name: "Orval Trappist Ale",
    type: "öl",
    description: "Unikt belgiskt öl med vild jäst och torra humletoner.",
    rating: 8.2,
    origin: "Belgien",
    alcoholContent: "6.2%"
  },
  {
    id: 28,
    name: "Duvel Golden Ale",
    type: "öl",
    description: "Ikonisk belgisk strong ale med elegant bitterhet.",
    rating: 8.0,
    origin: "Belgien",
    alcoholContent: "8.5%"
  },

  // Fler sprit
  {
    id: 29,
    name: "Johnnie Walker Blue Label",
    type: "sprit",
    description: "Premium skotsk whisky blend med silkeslen textur.",
    rating: 8.5,
    origin: "Skottland",
    alcoholContent: "40%"
  },
  {
    id: 30,
    name: "Rémy Martin XO",
    type: "sprit",
    description: "Äldre cognac med rik smak av torkade frukter och kryddor.",
    rating: 8.4,
    origin: "Frankrike",
    alcoholContent: "40%"
  },
  {
    id: 31,
    name: "Patron Silver Tequila",
    type: "sprit",
    description: "Premium 100% agave tequila med ren smak.",
    rating: 8.1,
    origin: "Mexiko",
    alcoholContent: "40%"
  },
  {
    id: 32,
    name: "Bombay Sapphire Gin",
    type: "sprit",
    description: "Klassisk London Dry Gin med 10 botanicals.",
    rating: 7.9,
    origin: "England",
    alcoholContent: "40%"
  },
  {
    id: 33,
    name: "Captain Morgan Spiced Rum",
    type: "sprit",
    description: "Kryddad rom med vanilj och karamellnoter.",
    rating: 7.5,
    origin: "Jamaica",
    alcoholContent: "35%"
  },
  {
    id: 34,
    name: "Absolut Vodka",
    type: "sprit",
    description: "Klassisk svensk vodka med ren och neutral smak.",
    rating: 7.8,
    origin: "Sverige",
    alcoholContent: "40%"
  },
  {
    id: 35,
    name: "Jack Daniel's Old No. 7",
    type: "sprit",
    description: "Ikonisk Tennessee whiskey med mjuk vaniljkaraktär.",
    rating: 7.6,
    origin: "USA",
    alcoholContent: "40%"
  },
  {
    id: 36,
    name: "Jameson Irish Whiskey",
    type: "sprit",
    description: "Mjuk irländsk whiskey med lätt fruktighet.",
    rating: 7.7,
    origin: "Irland",
    alcoholContent: "40%"
  },

  // Ytterligare produkter för att nå 100
  {
    id: 37,
    name: "Veuve Clicquot Brut",
    type: "vin",
    description: "Klassisk champagne med frisk syra och citrusnoter.",
    rating: 8.0,
    origin: "Frankrike",
    alcoholContent: "12%"
  },
  {
    id: 38,
    name: "Stella Artois",
    type: "öl",
    description: "Belgisk lager med klassisk pilsnerkaraktär.",
    rating: 7.2,
    origin: "Belgien",
    alcoholContent: "5%"
  },
  {
    id: 39,
    name: "Bacardi White Rum",
    type: "sprit",
    description: "Ljus rom perfect för cocktails.",
    rating: 7.3,
    origin: "Puerto Rico",
    alcoholContent: "37.5%"
  },
  {
    id: 40,
    name: "Chardonnay Reserve",
    type: "vin",
    description: "Kraftfull vit med ekfatslag och botrytis.",
    rating: 7.9,
    origin: "Australien",
    alcoholContent: "13.5%"
  },
  {
    id: 41,
    name: "Guinness Draught",
    type: "öl",
    description: "Ikonisk irländsk stout med krämig skum.",
    rating: 7.8,
    origin: "Irland",
    alcoholContent: "4.2%"
  },
  {
    id: 42,
    name: "Baileys Irish Cream",
    type: "sprit",
    description: "Krämig likör med whiskey och grädde.",
    rating: 7.4,
    origin: "Irland",
    alcoholContent: "17%"
  },
  {
    id: 43,
    name: "Pinot Noir Oregon",
    type: "vin",
    description: "Elegant röd med körsbärs- och jordtoner.",
    rating: 8.1,
    origin: "USA",
    alcoholContent: "13%"
  },
  {
    id: 44,
    name: "Heineken Lager",
    type: "öl",
    description: "Internationell lager med frisk smak.",
    rating: 7.0,
    origin: "Nederländerna",
    alcoholContent: "5%"
  },
  {
    id: 45,
    name: "Kahlúa Coffee Liqueur",
    type: "sprit",
    description: "Mexikansk kaffelikör med vaniljnoter.",
    rating: 7.5,
    origin: "Mexiko",
    alcoholContent: "20%"
  },
  {
    id: 46,
    name: "Prosecco DOCG",
    type: "vin",
    description: "Italiensk mousserande med päron- och äppeltoner.",
    rating: 7.6,
    origin: "Italien",
    alcoholContent: "11%"
  },
  {
    id: 47,
    name: "Corona Extra",
    type: "öl",
    description: "Mexikansk lager perfekt med lime.",
    rating: 6.8,
    origin: "Mexiko",
    alcoholContent: "4.6%"
  },
  {
    id: 48,
    name: "Cointreau Orange Liqueur",
    type: "sprit",
    description: "Premium apelsinlikör för cocktails.",
    rating: 7.8,
    origin: "Frankrike",
    alcoholContent: "40%"
  },
  {
    id: 49,
    name: "Malbec Mendoza",
    type: "vin",
    description: "Argentinsk röd med mörka bärs- och kryddtoner.",
    rating: 7.7,
    origin: "Argentina",
    alcoholContent: "14%"
  },
  {
    id: 50,
    name: "Budweiser",
    type: "öl",
    description: "Amerikansk lager med lätt och ren smak.",
    rating: 6.5,
    origin: "USA",
    alcoholContent: "5%"
  },

  // Fortsätt med fler produkter för att nå 100 totalt...
  {
    id: 51,
    name: "Smirnoff Vodka",
    type: "sprit",
    description: "Populär vodka med mjuk och ren karaktär.",
    rating: 7.1,
    origin: "Storbritannien",
    alcoholContent: "37.5%"
  },
  {
    id: 52,
    name: "Sauvignon Blanc Marlborough",
    type: "vin",
    description: "Nyzeeländsk vit med intensiva tropiska frukter.",
    rating: 7.8,
    origin: "Nya Zeeland",
    alcoholContent: "12.5%"
  },
  {
    id: 53,
    name: "Newcastle Brown Ale",
    type: "öl",
    description: "Engelsk brown ale med nötig karaktär.",
    rating: 7.3,
    origin: "England",
    alcoholContent: "4.7%"
  },
  {
    id: 54,
    name: "Grand Marnier",
    type: "sprit",
    description: "Fransk cognac-baserad apelsinlikör.",
    rating: 8.0,
    origin: "Frankrike",
    alcoholContent: "40%"
  },
  {
    id: 55,
    name: "Tempranillo Ribera del Duero",
    type: "vin",
    description: "Spansk röd med kraftfull struktur och mörka bär.",
    rating: 7.9,
    origin: "Spanien",
    alcoholContent: "14%"
  },
  {
    id: 56,
    name: "Pilsner Urquell",
    type: "öl",
    description: "Original tjeckisk pilsner med klassisk humlekaraktär.",
    rating: 7.6,
    origin: "Tjeckien",
    alcoholContent: "4.4%"
  },
  {
    id: 57,
    name: "Aperol",
    type: "sprit",
    description: "Italiensk bitter aperitif med apelsin och örter.",
    rating: 7.2,
    origin: "Italien",
    alcoholContent: "11%"
  },
  {
    id: 58,
    name: "Gewürztraminer Alsace",
    type: "vin",
    description: "Aromatisk vit med lychee och rosdoft.",
    rating: 7.5,
    origin: "Frankrike",
    alcoholContent: "13%"
  },
  {
    id: 59,
    name: "Leffe Blonde",
    type: "öl",
    description: "Belgisk abbey ale med fruktig och kryddig profil.",
    rating: 7.4,
    origin: "Belgien",
    alcoholContent: "6.6%"
  },
  {
    id: 60,
    name: "Frangelico Hazelnut Liqueur",
    type: "sprit",
    description: "Italiensk hasselnötslikör i munkflaska.",
    rating: 7.3,
    origin: "Italien",
    alcoholContent: "20%"
  },

  // Fortsätt för att nå 100 produkter...
  {
    id: 61,
    name: "Chianti Classico DOCG",
    type: "vin",
    description: "Toskan röd med körsbär och violer.",
    rating: 7.6,
    origin: "Italien",
    alcoholContent: "13.5%"
  },
  {
    id: 62,
    name: "Hoegaarden White Beer",
    type: "öl",
    description: "Belgisk witbier med koriander och apelsinskal.",
    rating: 7.1,
    origin: "Belgien",
    alcoholContent: "4.9%"
  },
  {
    id: 63,
    name: "Sambuca",
    type: "sprit",
    description: "Italiensk anislikör, ofta serverad med kaffebönor.",
    rating: 6.9,
    origin: "Italien",
    alcoholContent: "38%"
  },
  {
    id: 64,
    name: "Cabernet Sauvignon Napa",
    type: "vin",
    description: "Kalifornisk röd med kassisfrukter och vanilj.",
    rating: 8.2,
    origin: "USA",
    alcoholContent: "14.5%"
  },
  {
    id: 65,
    name: "Carlsberg Pilsner",
    type: "öl",
    description: "Dansk pilsner med balanserad humle.",
    rating: 6.9,
    origin: "Danmark",
    alcoholContent: "5%"
  },
  {
    id: 66,
    name: "Drambuie Scotch Liqueur",
    type: "sprit",
    description: "Skotsk whiskylikör med honung och örter.",
    rating: 7.5,
    origin: "Skottland",
    alcoholContent: "40%"
  },
  {
    id: 67,
    name: "Moscato d'Asti",
    type: "vin",
    description: "Söt italiensk mousserande med persika och honung.",
    rating: 7.2,
    origin: "Italien",
    alcoholContent: "5.5%"
  },
  {
    id: 68,
    name: "Löwenbräu Original",
    type: "öl",
    description: "Münchner lager med traditionell bayersk karaktär.",
    rating: 7.0,
    origin: "Tyskland",
    alcoholContent: "5.2%"
  },
  {
    id: 69,
    name: "Jägermeister",
    type: "sprit",
    description: "Tysk örtkryddlikör med 56 ingredienser.",
    rating: 7.0,
    origin: "Tyskland",
    alcoholContent: "35%"
  },
  {
    id: 70,
    name: "Riesling Mosel",
    type: "vin",
    description: "Tysk vit med mineralitet och päronfrukter.",
    rating: 7.8,
    origin: "Tyskland",
    alcoholContent: "11%"
  },

  // Lägger till fler produkter för att nå 100 totalt
  {
    id: 71,
    name: "Asahi Super Dry",
    type: "öl",
    description: "Japansk lager med torr och ren finish.",
    rating: 6.8,
    origin: "Japan",
    alcoholContent: "5%"
  },
  {
    id: 72,
    name: "Midori Melon Liqueur",
    type: "sprit",
    description: "Japansk melonlikör med ljusgrön färg.",
    rating: 6.7,
    origin: "Japan",
    alcoholContent: "20%"
  },
  {
    id: 73,
    name: "Sangiovese Tuscany",
    type: "vin",
    description: "Toskan röd med körsbär och örter.",
    rating: 7.4,
    origin: "Italien",
    alcoholContent: "13%"
  },
  {
    id: 74,
    name: "Erdinger Weissbier",
    type: "öl",
    description: "Bayersk veteöl med naturlig grumlighet.",
    rating: 7.2,
    origin: "Tyskland",
    alcoholContent: "5.3%"
  },
  {
    id: 75,
    name: "Chambord Raspberry Liqueur",
    type: "sprit",
    description: "Fransk hallon- och svartvinbärslikör.",
    rating: 7.3,
    origin: "Frankrike",
    alcoholContent: "16.5%"
  },
  {
    id: 76,
    name: "Viognier Languedoc",
    type: "vin",
    description: "Fransk vit med blommiga och stenfruktiga toner.",
    rating: 7.1,
    origin: "Frankrike",
    alcoholContent: "13.5%"
  },
  {
    id: 77,
    name: "Tiger Beer",
    type: "öl",
    description: "Singaporiansk lager med mild och ren smak.",
    rating: 6.6,
    origin: "Singapore",
    alcoholContent: "5%"
  },
  {
    id: 78,
    name: "Disaronno Amaretto",
    type: "sprit",
    description: "Italiensk mandellikör med söt och nötig smak.",
    rating: 7.4,
    origin: "Italien",
    alcoholContent: "28%"
  },
  {
    id: 79,
    name: "Gamay Beaujolais",
    type: "vin",
    description: "Lätt fransk röd med färska röda bär.",
    rating: 7.0,
    origin: "Frankrike",
    alcoholContent: "12.5%"
  },
  {
    id: 80,
    name: "Peroni Nastro Azzurro",
    type: "öl",
    description: "Italiensk premium lager med elegant smak.",
    rating: 7.1,
    origin: "Italien",
    alcoholContent: "5.1%"
  },
  {
    id: 81,
    name: "Southern Comfort",
    type: "sprit",
    description: "Amerikansk whiskey-baserad fruktlikör.",
    rating: 6.8,
    origin: "USA",
    alcoholContent: "35%"
  },
  {
    id: 82,
    name: "Grüner Veltliner Austria",
    type: "vin",
    description: "Österrikisk vit med peppar och citrus.",
    rating: 7.5,
    origin: "Österrike",
    alcoholContent: "12%"
  },
  {
    id: 83,
    name: "Sapporo Premium",
    type: "öl",
    description: "Japansk lager med ren och frisk smak.",
    rating: 6.9,
    origin: "Japan",
    alcoholContent: "4.9%"
  },
  {
    id: 84,
    name: "Limoncello",
    type: "sprit",
    description: "Italiensk citronlikör från Amalfikusten.",
    rating: 7.2,
    origin: "Italien",
    alcoholContent: "28%"
  },
  {
    id: 85,
    name: "Grenache Rhône",
    type: "vin",
    description: "Fransk röd med krydda och mörka frukter.",
    rating: 7.3,
    origin: "Frankrike",
    alcoholContent: "14%"
  },
  {
    id: 86,
    name: "Dos Equis Lager",
    type: "öl",
    description: "Mexikansk lager med mild och lätt karaktär.",
    rating: 6.5,
    origin: "Mexiko",
    alcoholContent: "4.2%"
  },
  {
    id: 87,
    name: "Pernod Pastis",
    type: "sprit",
    description: "Fransk anisdryck, traditionell aperitif.",
    rating: 6.9,
    origin: "Frankrike",
    alcoholContent: "40%"
  },
  {
    id: 88,
    name: "Albariño Rías Baixas",
    type: "vin",
    description: "Spansk vit med mineralitet och citrus.",
    rating: 7.6,
    origin: "Spanien",
    alcoholContent: "12.5%"
  },
  {
    id: 89,
    name: "Warsteiner Premium",
    type: "öl",
    description: "Tysk pilsner med klassisk tysk tradition.",
    rating: 6.8,
    origin: "Tyskland",
    alcoholContent: "4.8%"
  },
  {
    id: 90,
    name: "Galliano L'Autentico",
    type: "sprit",
    description: "Italiensk gul örtkryddlikör med vanilj.",
    rating: 6.6,
    origin: "Italien",
    alcoholContent: "42.3%"
  },
  {
    id: 91,
    name: "Syrah Shiraz Australia",
    type: "vin",
    description: "Australiensisk röd med pepper och mörka bär.",
    rating: 7.7,
    origin: "Australien",
    alcoholContent: "14.5%"
  },
  {
    id: 92,
    name: "Estrella Damm",
    type: "öl",
    description: "Spansk lager från Barcelona med mediterran känsla.",
    rating: 6.7,
    origin: "Spanien",
    alcoholContent: "5.4%"
  },
  {
    id: 93,
    name: "Chartreuse Green",
    type: "sprit",
    description: "Fransk klosterlikör med 130 örter och kryddor.",
    rating: 7.8,
    origin: "Frankrike",
    alcoholContent: "55%"
  },
  {
    id: 94,
    name: "Verdejo Rueda",
    type: "vin",
    description: "Spansk vit med tropiska frukter och fänkål.",
    rating: 7.2,
    origin: "Spanien",
    alcoholContent: "13%"
  },
  {
    id: 95,
    name: "Tsingtao Beer",
    type: "öl",
    description: "Kinesisk lager med lätt och ren profil.",
    rating: 6.4,
    origin: "Kina",
    alcoholContent: "4.7%"
  },
  {
    id: 96,
    name: "Ouzo",
    type: "sprit",
    description: "Grekisk anisdryck som blir mjölkvit med vatten.",
    rating: 6.8,
    origin: "Grekland",
    alcoholContent: "40%"
  },
  {
    id: 97,
    name: "Nebbiolo Piedmont",
    type: "vin",
    description: "Piemontesisk röd med tanniner och rosdoft.",
    rating: 8.0,
    origin: "Italien",
    alcoholContent: "14%"
  },
  {
    id: 98,
    name: "Kronenbourg 1664",
    type: "öl",
    description: "Fransk premium lager med blommig humle.",
    rating: 6.9,
    origin: "Frankrike",
    alcoholContent: "5%"
  },
  {
    id: 99,
    name: "Peach Schnapps",
    type: "sprit",
    description: "Persiklikör populär i cocktails.",
    rating: 6.5,
    origin: "Tyskland",
    alcoholContent: "20%"
  },
  {
    id: 100,
    name: "Zinfandel California",
    type: "vin",
    description: "Kalifornisk röd med jam och krydda.",
    rating: 7.4,
    origin: "USA",
    alcoholContent: "15%"
  }
];
