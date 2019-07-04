// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

export const housesCharacters = {
  /**
   * Houses' Characters : 
   * 
   *  - Black Eagles
   *  - Blue Lions
   *  - Golde Deer
   */
  blackEagles: [
    { name: "Edelgard" },
    { name: "Hubert" },
    { name: "Bernadetta" },
    { name: "Linhardt" },
    { name: "Ferdinand" },
    { name: "Dorothea" },
    { name: "Caspar" },
    { name: "Petra" }
  ],
  blueLions: [
    { name: "Dimitri" },
    { name: "Dedue" },
    { name: "Annette" },
    { name: "Ashe" },
    { name: "Felix" },
    { name: "Mercedes" },
    { name: "Sylvain" },
    { name: "Ingrid" }
  ],
  goldenDeer: [
    { name: "Claude" },
    { name: "Lorenz" },
    { name: "Hilda" },
    { name: "Marianne" },
    { name: "Ignatz" },
    { name: "Lysithea" },
    { name: "Leonie" },
    { name: "Raphael" }
  ],
};

export const charactersDetails = {
  /**
   * Black Eagles Details :
   * 
   * - Edelgard
   * - Hubert
   * - Bernadetta
   * - Linhardt
   * - Ferdinand
   * - Dorothea
   * - Caspar
   * - Petra
   */
  Edelgard: {
    name: "Edelgard",
    fullName: "Edelgard von Hresvelg",
    house: "Black Eagles",
    crest: "Seiros"
  },
  Hubert: {
    name: "Hubert",
    fullName: "Hubert von Bestla",
    house: "Black Eagles",
    crest: ""
  },
  Bernadetta: {
    name: "Bernadetta",
    fullName: "Bernadetta von Varley",
    house: "Black Eagles",
    crest: "Indech"
  },
  Linhardt: {
    name: "Linhardt",
    fullName: "Linhardt von Hevring",
    house: "Black Eagles",
    crest: "Cethlenn"
  },
  Ferdinand: {
    name: "Ferdinand",
    fullName: "Ferdinand von Aegir",
    house: "Black Eagles",
    crest: "Cichol"
  },
  Dorothea: {
    name: "Dorothea",
    fullName: "Dorothea Arnold",
    house: "Black Eagles",
    crest: ""
  },
  Caspar: {
    name: "Caspar",
    fullName: "Caspar von Bergliez",
    house: "Black Eagles",
    crest: ""
  },
  Petra: {
    name: "Petra",
    fullName: "Petra McNairy",
    house: "Black Eagles",
    crest: ""
  },

  /**
   * Blue Lions Details :
   * 
   * - Dimitri
   * - Dedue
   * - Annette
   * - Ashe
   * - Felix
   * - Mercedes
   * - Sylvain
   * - Ingrid
   */
  Dimitri: {
    name: "Dimitri",
    fullName: "Dimitri Alexandre Blaiddyd",
    house: "Blue Lions",
    crest: "Blaiddyd"
  },
  Dedue: {
    name: "Dedue",
    fullName: "Dedue Molinaro",
    house: "Blue Lions",
    crest: ""
  },
  Annette: {
    name: "Annette",
    fullName: "Annette Fantine Dominique",
    house: "Blue Lions",
    crest: "Dominique"
  },
  Ashe: {
    name: "Ashe",
    fullName: "Ashe Duran",
    house: "Blue Lions",
    crest: ""
  },
  Felix: {
    name: "Felix",
    fullName: "Felix Hugo Fraldarius",
    house: "Blue Lions",
    crest: "Fraldarius"
  },
  Mercedes: {
    name: "Mercedes",
    fullName: "Mercedes von Marltritz",
    house: "Blue Lions",
    crest: "Lamine"
  },
  Sylvain: {
    name: "Sylvain",
    fullName: "Sylvain Jose Gautier",
    house: "Blue Lions",
    crest: "Gautier"
  },
  Ingrid: {
    name: "Ingrid",
    fullName: "Ingrid Brandol Galatea",
    house: "Blue Lions",
    crest: "Daphnel"
  },

  /**
   * Golden Deer Details :
   * 
   * - Claude
   * - Lorenz
   * - Hilda
   * - Marianne
   * - Ignatz
   * - Lysithea
   * - Leonie
   * - Raphael
   */
  Claude: {
    name: "Claude",
    fullName: "Claude von Riegan",
    house: "Golden Deer",
    crest: "Riegan"
  },
  Lorenz: {
    name: "Lorenz",
    fullName: "Lorenz Hermann Gloucester",
    house: "Golden Deer",
    crest: "Gloucester"
  },
  Hilda: {
    name: "Hilda",
    fullName: "Hilda Valentin Goneril",
    house: "Golden Deer",
    crest: "Goneril"
  },
  Marianne: {
    name: "Marianne",
    fullName: "Marianne von Edmund",
    house: "Golden Deer",
    crest: ""
  },
  Ignatz: {
    name: "Ignatz",
    fullName: "Ignatz Victor",
    house: "Golden Deer",
    crest: ""
  },
  Lysithea: {
    name: "Lysithea",
    fullName: "Lysithea von Cordelia",
    house: "Golden Deer",
    crest: "Charon"
  },
  Leonie: {
    name: "Leonie",
    fullName: "Leonie Pinelli",
    house: "Golden Deer",
    crest: ""
  },
  Raphael: {
    name: "Raphael",
    fullName: "Raphael Kirsten",
    house: "Golden Deer",
    crest: ""
  }
};

export const crests = [
  {
    name: "",
    status: "Major",
    owner: "Byleth",
    effect: ""
  },
  {
    name: "Flames",
    status: "Major",
    owner: "Byleth",
    effect: ""
  },
  {
    name: "Seiros",
    status: "Minor",
    owner: "Edelgard",
    effect: ""
  },
  {
    name: "Cichol",
    status: "Minor",
    owner: "Ferdinand",
    effect: ""
  },
  {
    name: "",
    status: "",
    owner: "",
    effect: ""
  },
  {
    name: "",
    status: "",
    owner: "",
    effect: ""
  },
  {
    name: "Dominique",
    status: "Minor",
    owner: "Annette",
    effect: ""
  },
  {
    name: "Fraldarius",
    status: "Major",
    owner: "Felix",
    effect: ""
  },
  {
    name: "",
    status: "",
    owner: "",
    effect: ""
  },
  {
    name: "Daphnel",
    status: "Minor",
    owner: "Ingrid",
    effect: ""
  },
  {
    name: "Blaiddyd",
    status: "Minor",
    owner: "Dimitri",
    effect: ""
  },
  {
    name: "Gloucester",
    status: "Minor",
    owner: "Lorenz",
    effect: ""
  },
  {
    name: "Goneril",
    status: "Minor",
    owner: "Hilda",
    effect: ""
  },
  {
    name: "",
    status: "",
    owner: "",
    effect: ""
  },
  {
    name: "Gautier",
    status: "Minor",
    owner: "Sylvain",
    effect: ""
  },
  {
    name: "",
    status: "Minor",
    owner: "Marianne",
    effect: ""
  },
  {
    name: "Charon",
    status: "Minor",
    owner: "Lysithea",
    effect: ""
  },
  {
    name: "",
    status: "",
    owner: "",
    effect: ""
  },
  {
    name: "Riegan",
    status: "Minor",
    owner: "Claude",
    effect: ""
  },
  {
    name: "",
    status: "",
    owner: "",
    effect: ""
  },
  {
    name: "Lamine",
    status: "Minor",
    owner: "Mercedes",
    effect: ""
  },
  {
    name: "Indech",
    status: "Minor",
    owner: "Bernadetta",
    effect: ""
  },
  {
    name: "Cethlenn",
    status: "Minor",
    owner: "Linhardt",
    effect: ""
  }
];

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
