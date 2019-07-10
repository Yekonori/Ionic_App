// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

/****************************************************************************************/
/************************************** CHARACTERS **************************************/
/****************************************************************************************/

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

export const commonCharacters = [
  { name: "Byleth" }
];

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
    crest: "Seiros",
    personalAbility: "Imperial Bloodline"
  },
  Hubert: {
    name: "Hubert",
    fullName: "Hubert von Bestla",
    house: "Black Eagles",
    crest: "",
    personalAbility: "Strategist"
  },
  Bernadetta: {
    name: "Bernadetta",
    fullName: "Bernadetta von Varley",
    house: "Black Eagles",
    crest: "Indech",
    personalAbility: "Paranoia"
  },
  Linhardt: {
    name: "Linhardt",
    fullName: "Linhardt von Hevring",
    house: "Black Eagles",
    crest: "Cethlenn",
    personalAbility: "Doze Off"
  },
  Ferdinand: {
    name: "Ferdinand",
    fullName: "Ferdinand von Aegir",
    house: "Black Eagles",
    crest: "Cichol",
    personalAbility: "Confidence"
  },
  Dorothea: {
    name: "Dorothea",
    fullName: "Dorothea Arnold",
    house: "Black Eagles",
    crest: "",
    personalAbility: "Songstress"
  },
  Caspar: {
    name: "Caspar",
    fullName: "Caspar von Bergliez",
    house: "Black Eagles",
    crest: "",
    personalAbility: "Quarreler"
  },
  Petra: {
    name: "Petra",
    fullName: "Petra McNairy",
    house: "Black Eagles",
    crest: "",
    personalAbility: "Hunter's Law"
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
    crest: "Blaiddyd",
    personalAbility: "Royal Bloodline"
  },
  Dedue: {
    name: "Dedue",
    fullName: "Dedue Molinaro",
    house: "Blue Lions",
    crest: "",
    personalAbility: "Liege's Shield"
  },
  Annette: {
    name: "Annette",
    fullName: "Annette Fantine Dominique",
    house: "Blue Lions",
    crest: "Dominique",
    personalAbility: "Hard Worker"
  },
  Ashe: {
    name: "Ashe",
    fullName: "Ashe Duran",
    house: "Blue Lions",
    crest: "",
    personalAbility: "Wisdom to Live"
  },
  Felix: {
    name: "Felix",
    fullName: "Felix Hugo Fraldarius",
    house: "Blue Lions",
    crest: "Fraldarius",
    personalAbility: "Solitary Wolf"
  },
  Mercedes: {
    name: "Mercedes",
    fullName: "Mercedes von Marltritz",
    house: "Blue Lions",
    crest: "Lamine",
    personalAbility: "Live to Serve"
  },
  Sylvain: {
    name: "Sylvain",
    fullName: "Sylvain Jose Gautier",
    house: "Blue Lions",
    crest: "Gautier",
    personalAbility: "Ladies' Man"
  },
  Ingrid: {
    name: "Ingrid",
    fullName: "Ingrid Brandol Galatea",
    house: "Blue Lions",
    crest: "Daphnel",
    personalAbility: "Lady Knight"
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
    crest: "Riegan",
    personalAbility: "Alliance Bloodline"
  },
  Lorenz: {
    name: "Lorenz",
    fullName: "Lorenz Hermann Gloucester",
    house: "Golden Deer",
    crest: "Gloucester",
    personalAbility: "Prestigious Noble"
  },
  Hilda: {
    name: "Hilda",
    fullName: "Hilda Valentin Goneril",
    house: "Golden Deer",
    crest: "Goneril",
    personalAbility: "Plead"
  },
  Marianne: {
    name: "Marianne",
    fullName: "Marianne von Edmund",
    house: "Golden Deer",
    crest: "",
    personalAbility: "Animal Lover"
  },
  Ignatz: {
    name: "Ignatz",
    fullName: "Ignatz Victor",
    house: "Golden Deer",
    crest: "",
    personalAbility: "Keen Observation"
  },
  Lysithea: {
    name: "Lysithea",
    fullName: "Lysithea von Cordelia",
    house: "Golden Deer",
    crest: "Charon",
    personalAbility: "Prodigy"
  },
  Leonie: {
    name: "Leonie",
    fullName: "Leonie Pinelli",
    house: "Golden Deer",
    crest: "",
    personalAbility: "Hates to Lose"
  },
  Raphael: {
    name: "Raphael",
    fullName: "Raphael Kirsten",
    house: "Golden Deer",
    crest: "",
    personalAbility: "Scavenge"
  }
};

/****************************************************************************************/
/**************************************** CRESTS ****************************************/
/****************************************************************************************/
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

/****************************************************************************************/
/********************************** PERSONAL ABILITIES **********************************/
/****************************************************************************************/
export const personalAbilities = {

  /**
   * Personal Abilities
   */
  TeachersGuidance: {
    name: "Teacher's Guidance",
    effect: "Boosts user and adjacent ally's experience gain by 1.2"
  },

  ImperialBloodline: {
    name: "Imperial Bloodline",
    effect: "Boosts user's experience gain by 1.2"
  },
  RoyalBloodline: {
    name: "Royal Bloodline",
    effect: "Boosts user's experience gain by 1.2"
  },
  AllianceBloodline: {
    name: "Alliance Bloodline",
    effect: "Boosts user's experience gain by 1.2"
  },

  Strategist: {
    name: "Strategist",
    effect: "Boosts Gambit Might by 5"
  },
  Songstress: {
    name: "Songstress",
    effect: "At the start of each turn, restores adjacent allies' HP by 10%"
  },
  LiegesShield: {
    name: "	Liege's Shield",
    effect: "If user waits without acting, Defence +4 for one turn"
  },
  SolitaryWolf	: {
    name: "Solitary Wolf	",
    effect: "When a battalion is not deployed or when battalion health is zero, damage dealt +5"
  },
  PrestigiousNoble: {
    name: "Prestigious Noble",
    effect: "When a battalion is deployed, damage dealt +2"
  },
  Plead: {
    name: "Plead",
    effect: "When an adjacent male ally enters battle, ally's damage dealt +3"
  },
  Confidence: {
    name: "Confidence",
    effect: "Hit rate and Avoid +15 when user's HP is full"
  },
  LivetoServe: {
    name: "Live to Serve",
    effect: ""
  },
  Scavenge: {
    name: "Scavenge",
    effect: "User has a Luck% chance to restore 10% HP at the start of each turn"
  },
  Paranoia: {
    name: "Paranoia",
    effect: "If user's HP isn't full, Attack +5"
  },
  WisdomtoLive: {
    name: "Wisdom to Live",
    effect: "User can open doors and chests without keys"
  },
  Prodigy: {
    name: "Prodigy",
    effect: "Experience points towards skill levels earned during battles is doubled"
  },
  Quarreler: {
    name: "Quarreler",
    effect: "Adjacent foes receive Avoid -10 during combat"
  },
  HardWorker: {
    name: "Hard Worker",
    effect: "When Rally command is used on ally, grants Strength +4 to target"
  },
  KeenObservation: {
    name: "Keen Observation",
    effect: "Hit rate +20"
  },
  HuntersLaw: {
    name: "Hunter's Law",
    effect: "When foe has less than 50% HP, Critical rate +20"
  },
  LadiesMan: {
    name: "Ladies' Man",
    effect: "When adjacent to a female ally, damage dealt to foe +2, damage received from foe -2"
  },
  AnimalLover: {
    name: "Animal Lover",
    effect: "When adjacent to a horseback or flying ally, restores 20% HP at the start of the turn"
  },
  DozeOff: {
    name: "Doze Off",
    effect: "If unit waits without acting, restores 10% HP"
  },
  LadyKnight: {
    name: "Lady Knight",
    effect: "When using a Gambit, Might +3 and Hit Rate +5"
  },
  HatestoLose: {
    name: "Hates to Lose",
    effect: "When adjacent to a male ally, damage dealt to foe +2, damage received from foe -2"
  }
}

/****************************************************************************************/
/*************************************** CLASSES ****************************************/
/****************************************************************************************/

export const classes = {
  /**
   * Tier 0 - Initial Classes : 
   * - Commoner
   * - Noble
   */
  initialClasses: [
    { name: "Commoner" },
    { name: "Noble" }
  ],

  /**
   * Tier 1 - Beginer Classes : 
   * - Myrmidon
   * - Soldier
   * - Fighter
   * - Monk
   */
  beginnerClasses: [
    { name: "Myrmidon" },
    { name: "Soldier" },
    { name: "Fighter" },
    { name: "Monk" }
  ],

  /**
   * Tier 2 - Intermediate Classes : 
   * - Lord
   * - Mercenary
   * - Thief
   * - Armored Knight
   * - Cavalier
   * - Brigand
   * - Archer
   * - Mage
   * - Dark Mage
   * - Priest
   * - Pegasus Knight
   */
  intermediateClasses: [
    { name: "Lord" },
    { name: "Mercenary" },
    { name: "Thief" },
    { name: "Armored Knight" },
    { name: "Cavalier" },
    { name: "Brigand" },
    { name: "Archer" },
    { name: "Brawler" },
    { name: "Mage" },
    { name: "Dark Mage" },
    { name: "Priest" },
    { name: "Pegasus Knight" }
  ],

  /**
   * Tier 3 - Advanced  Classes : 
   * - Hero
   * - Swordmaster
   * - Assassin
   * - Fortress
   * - Paladin
   * - Wyvern Rider
   * - Warrior
   * - Sniper
   * - Grappler
   * - Warlock
   * - Dark Bishop
   * - Bishop
   */
  advancedClasses: [
    { name: "Hero" },
    { name: "Swordmaster" },
    { name: "Assassin" },
    { name: "Fortress" },
    { name: "Paladin" },
    { name: "Wyvern Rider" },
    { name: "Warrior" },
    { name: "Brawler" },
    { name: "Sniper" },
    { name: "Grappler" },
    { name: "Warlock" },
    { name: "Dark Bishop" },
    { name: "Bishop" },
  ]

}

export const classesDetails = {

  /**
   * Tier 0 - Initial Classes
   */
  Commoner: {
    name: "Commoner",
    tier: "Initial",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    }
  },
  Noble: {
    name: "Noble",
    tier: "Initial",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    }
  },


  /**
   * Tier 1 - Beginner Classes
   */
  Myrmidon: {
    name: "Myrmidon",
    tier: "Beginner",
    stats: {
      HP: 1,
      STR: 2,
      DEF: 2,
      DEX: 1,
      SPD: 3,
      MAG: 1,
      RES: 2,
      MOV: 1
    }
  },
  Soldier: {
    name: "Soldier",
    tier: "Beginner",
    stats: {
      HP: 1,
      STR: 2,
      DEF: 2,
      DEX: 2,
      SPD: 2,
      MAG: 1,
      RES: 2,
      MOV: 1
    }
  },
  Fighter: {
    name: "Fighter",
    tier: "Beginner",
    stats: {
      HP: 1,
      STR: 3,
      DEF: 2,
      DEX: 1,
      SPD: 2,
      MAG: 1,
      RES: 2,
      MOV: 1
    }
  },
  Monk: {
    name: "Monk",
    tier: "Beginner",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 2,
      DEX: 1,
      SPD: 2,
      MAG: 2,
      RES: 3,
      MOV: 1
    }
  },

  /**
   * Tier 2 - Intermediate Classes
   */
  Lord: {
    name: "Lord",
    tier: "Intermediate",
    stats: {
      HP: 3,
      STR: 2,
      DEF: 2,
      DEX: 3,
      SPD: 3,
      MAG: 2,
      RES: 2,
      MOV: 2
    }
  },
  Mercenary: {
    name: "Mercenary",
    tier: "Intermediate",
    stats: {
      HP: 3,
      STR: 3,
      DEF: 2,
      DEX: 2,
      SPD: 3,
      MAG: 2,
      RES: 2,
      MOV: 2
    }
  },
  Thief: {
    name: "Thief",
    tier: "Intermediate",
    stats: {
      HP: 2,
      STR: 2,
      DEF: 2,
      DEX: 3,
      SPD: 4,
      MAG: 2,
      RES: 2,
      MOV: 2
    }
  },
  ArmoredKnight: {
    name: "Armored Knight",
    tier: "Intermediate",
    stats: {
      HP: 4,
      STR: 2,
      DEF: 4,
      DEX: 2,
      SPD: 1,
      MAG: 2,
      RES: 1,
      MOV: 1
    }
  },
  Cavalier: {
    name: "Cavalier",
    tier: "Intermediate",
    stats: {
      HP: 3,
      STR: 3,
      DEF: 3,
      DEX: 3,
      SPD: 1,
      MAG: 2,
      RES: 3,
      MOV: 4
    }
  },
  Brigand: {
    name: "Brigand",
    tier: "Intermediate",
    stats: {
      HP: 4,
      STR: 4,
      DEF: 2,
      DEX: 2,
      SPD: 2,
      MAG: 2,
      RES: 2,
      MOV: 2
    }
  },
  Archer: {
    name: "Archer",
    tier: "Intermediate",
    stats: {
      HP: 2,
      STR: 2,
      DEF: 2,
      DEX: 3,
      SPD: 2,
      MAG: 2,
      RES: 2,
      MOV: 2
    }
  },
  Brawler: {
    name: "Brawler",
    tier: "Intermediate",
    stats: {
      HP: 3,
      STR: 2,
      DEF: 2,
      DEX: 3,
      SPD: 4,
      MAG: 2,
      RES: 1,
      MOV: 2
    }
  },
  Mage: {
    name: "Mage",
    tier: "Intermediate",
    stats: {
      HP: 2,
      STR: 1,
      DEF: 2,
      DEX: 2,
      SPD: 2,
      MAG: 3,
      RES: 4,
      MOV: 1
    }
  },
  DarkMage: {
    name: "Dark Mage",
    tier: "Intermediate",
    stats: {
      HP: 2,
      STR: 1,
      DEF: 2,
      DEX: 2,
      SPD: 2,
      MAG: 4,
      RES: 4,
      MOV: 1
    }
  },
  Priest: {
    name: "Priest",
    tier: "Intermediate",
    stats: {
      HP: 2,
      STR: 1,
      DEF: 2,
      DEX: 2,
      SPD: 2,
      MAG: 2,
      RES: 4,
      MOV: 1
    }
  },
  PegasusKnight: {
    name: "Pegasus Knight",
    tier: "Intermediate",
    stats: {
      HP: 2,
      STR: 2,
      DEF: 2,
      DEX: 3,
      SPD: 4,
      MAG: 2,
      RES: 4,
      MOV: 3
    }
  },

  /**
   * Tier 3 - Advanced Classes
   */
  Hero: {
    name: "Hero",
    tier: "Advanced",
    stats: {
      HP: 4,
      STR: 4,
      DEF: 3,
      DEX: 3,
      SPD: 4,
      MAG: 2,
      RES: 3,
      MOV: 2
    }
  },
  Swordmaster: {
    name: "Swordmaster",
    tier: "Advanced",
    stats: {
      HP: 3,
      STR: 4,
      DEF: 3,
      DEX: 3,
      SPD: 5,
      MAG: 2,
      RES: 3,
      MOV: 2
    }
  },
  Assassin: {
    name: "Assassin",
    tier: "Advanced",
    stats: {
      HP: 2,
      STR: 3,
      DEF: 2,
      DEX: 4,
      SPD: 5,
      MAG: 2,
      RES: 3,
      MOV: 3
    }
  },
  Fortress: {
    name: "Fortress",
    tier: "Advanced",
    stats: {
      HP: 5,
      STR: 3,
      DEF: 5,
      DEX: 3,
      SPD: 1,
      MAG: 2,
      RES: 3,
      MOV: 1
    }
  },
  Paladin: {
    name: "Paladin",
    tier: "Advanced",
    stats: {
      HP: 4,
      STR: 4,
      DEF: 4,
      DEX: 4,
      SPD: 1,
      MAG: 2,
      RES: 4,
      MOV: 5
    }
  },
  WyvernRider: {
    name: "Wyvern Rider",
    tier: "Advanced",
    stats: {
      HP: 3,
      STR: 5,
      DEF: 4,
      DEX: 3,
      SPD: 4,
      MAG: 2,
      RES: 3,
      MOV: 4
    }
  },
  Warrior: {
    name: "Warrior",
    tier: "Advanced",
    stats: {
      HP: 4,
      STR: 5,
      DEF: 3,
      DEX: 3,
      SPD: 4,
      MAG: 2,
      RES: 3,
      MOV: 2
    }
  },
  Sniper: {
    name: "Sniper",
    tier: "Advanced",
    stats: {
      HP: 2,
      STR: 3,
      DEF: 2,
      DEX: 5,
      SPD: 3,
      MAG: 2,
      RES: 3,
      MOV: 1
    }
  },
  Grappler: {
    name: "Grappler",
    tier: "Advanced",
    stats: {
      HP: 4,
      STR: 3,
      DEF: 3,
      DEX: 4,
      SPD: 4,
      MAG: 2,
      RES: 2,
      MOV: 3
    }
  },
  Warlock: {
    name: "Warlock",
    tier: "Advanced",
    stats: {
      HP: 2,
      STR: 2,
      DEF: 2,
      DEX: 3,
      SPD: 4,
      MAG: 5,
      RES: 4,
      MOV: 1
    }
  },
  DarkBishop: {
    name: "Dark Bishop",
    tier: "Advanced",
    stats: {
      HP: 2,
      STR: 2,
      DEF: 2,
      DEX: 4,
      SPD: 3,
      MAG: 5,
      RES: 4,
      MOV: 1
    }
  },
  Bishop: {
    name: "Bishop",
    tier: "Advanced",
    stats: {
      HP: 3,
      STR: 2,
      DEF: 2,
      DEX: 3,
      SPD: 3,
      MAG: 4,
      RES: 5,
      MOV: 1
    }
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
