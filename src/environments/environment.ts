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
  ]
};

export const commonCharacters = [
  { name: "Byleth" }
];

export const charactersDetails = {

  Byleth: {
    name: "Byleth",
    fullName: "Byleth",
    house: "Black Eagles",
    crest: [
      0, 1
    ],
    personalAbility: 0,
    masteryLearning: {
      strong: [
        "Sword", "Lance", "Bow", "Brawling", "Authority"
      ],
      weak: [],
      budding: [
        "Faith"
      ]
    },
    baseInformations: {
      baseClasse: "Commoner",
      baseMastery: {
        sword: "D+",
        lance: "E",
        axe: "E",
        bow: "E",
        brawling: "E+",
        reason: "E",
        faith: "E",
        authority: "D",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "",
      dislikes: ""
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: false
    }
  },

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
    crest: [
      2
    ],
    personalAbility: 1,
    masteryLearning: {
      strong: [
        "Sword", "Axe", "Authority", "Heavy Armor"
      ],
      weak: [
        "Bow", "Faith"
      ],
      budding: [
        "Reason"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E+",
        lance: "E",
        axe: "D",
        bow: "E",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "D",
        heavyArmor: "D",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Reading, solitary exploration, talented individuals, debating historical viewpoints and strategies, nature, beautiful scenery",
      dislikes: "Outdated values, crests, rats, chains, swimming, losing control"
    },
    restrictions: {
      isLord: true,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: false
    }
  },
  Hubert: {
    name: "Hubert",
    fullName: "Hubert von Bestla",
    house: "Black Eagles",
    crest: [],
    personalAbility: 4,
    masteryLearning: {
      strong: [
        "Bow", "Reason", "Authority"
      ],
      weak: [
        "Axe", "Faith", "Flying"
      ],
      budding: [
        "Lance"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E",
        lance: "E",
        axe: "E",
        bow: "E+",
        brawling: "E",
        reason: "D",
        faith: "E",
        authority: "E+",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Strategy and tactics research, protecting Edelgard, irony, coffee, intelligence, useful people",
      dislikes: "The Church of Seiros, those who bother Edelgard, gambling, heights, nostalgia, laziness"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: false
    }
  },
  Bernadetta: {
    name: "Bernadetta",
    fullName: "Bernadetta von Varley",
    house: "Black Eagles",
    crest: [
      21
    ],
    personalAbility: 13,
    masteryLearning: {
      strong: [
        "Lance", "Bow", "Heavy Armor"
      ],
      weak: [
        "Sword", "Axe", "Brawling"
      ],
      budding: [
        "Riding"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E",
        lance: "E+",
        axe: "E",
        bow: "D",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Knitting and embroidery, writing and illustrating novels, reading, drawing, music, unusual creatures, stuffed animals, solitude",
      dislikes: "Speaking to people, imposing figures, overbearing fathers"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Linhardt: {
    name: "Linhardt",
    fullName: "Linhardt von Hevring",
    house: "Black Eagles",
    crest: [
      22
    ],
    personalAbility: 22,
    masteryLearning: {
      strong: [
        "Reason", "Faith"
      ],
      weak: [
        "Axe", "Brawling"
      ],
      budding: []
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E",
        lance: "E",
        axe: "E",
        bow: "E",
        brawling: "E",
        reason: "E+",
        faith: "D+",
        authority: "E",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Sleeping, crest research, middnay naps, reading, fishing, sweets, freedomic, unusual creatures, stuffed animals, solitude",
      dislikes: "Fighting, blood, weapons, duty, self-restraint, politics, ghosts"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Ferdinand: {
    name: "Ferdinand",
    fullName: "Ferdinand von Aegir",
    house: "Black Eagles",
    crest: [
      3
    ],
    personalAbility: 10,
    masteryLearning: {
      strong: [
        "Sword", "Lance", "Axe", "Riding"
      ],
      weak: [],
      budding: [
        "Heavy Armor"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E+",
        lance: "D",
        axe: "E+",
        bow: "E",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "D",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Being noble, collecting armor, horseback riding, tea, justice, heights",
      dislikes: "Slothfulness, nobles who are not noble"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Dorothea: {
    name: "Dorothea",
    fullName: "Dorothea Arnold",
    house: "Black Eagles",
    crest: [],
    personalAbility: 5,
    masteryLearning: {
      strong: [
        "Sword", "Reason"
      ],
      weak: [
        "Faith", "Riding", "Flying"
      ],
      budding: [
        "Faith"
      ]
    },
    baseInformations: {
      baseClasse: "Commoner",
      baseMastery: {
        sword: "E+",
        lance: "E",
        axe: "E",
        bow: "E",
        brawling: "E",
        reason: "D",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Singing, a bit of everything, acting, music, decorative ornaments and accessories, small animals",
      dislikes: "Arrogant nobles, herself"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Caspar: {
    name: "Caspar",
    fullName: "Caspar von Bergliez",
    house: "Black Eagles",
    crest: [],
    personalAbility: 16,
    masteryLearning: {
      strong: [
        "Axe", "Brawling"
      ],
      weak: [
        "Bow", "Reason", "Authority"
      ],
      budding: []
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E",
        lance: "E",
        axe: "D",
        bow: "E",
        brawling: "E+",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Training, early mornings and quick breakfasts, fighting, vanquishing evil",
      dislikes: "Liars, injustice, wasting time, the rain"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Petra: {
    name: "Petra",
    fullName: "Petra McNairy",
    house: "Black Eagles",
    crest: [],
    personalAbility: 19,
    masteryLearning: {
      strong: [
        "Sword", "Axe", "Bow", "Flying"
      ],
      weak: [
        "Reason", "Faith"
      ],
      budding: []
    },
    baseInformations: {
      baseClasse: "Commoner",
      baseMastery: {
        sword: "D+",
        lance: "E",
        axe: "E+",
        bow: "E+",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "E",
        flying: "D"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Hunting and hide tanning, studying, swimming in the ocean, sunshine, climbing trees, family, her homeland",
      dislikes: "Mathematics, idleness, discrimination"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
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
    crest: [
      10
    ],
    personalAbility: 2,
    masteryLearning: {
      strong: [
        "Sword", "Lance", "Authority"
      ],
      weak: [
        "Axe", "Reason"
      ],
      budding: [
        "Riding"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E+",
        lance: "D",
        axe: "E",
        bow: "E",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "D",
        heavyArmor: "E",
        riding: "D",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Battle training, weapon maitenance, combat, high-quality weapons, strength training, going for long rides, physically laborious work",
      dislikes: "Delicate work, fragile objects, scorching heat, selfish people"
    },
    restrictions: {
      isLord: true,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: false
    }
  },
  Dedue: {
    name: "Dedue",
    fullName: "Dedue Molinaro",
    house: "Blue Lions",
    crest: [],
    personalAbility: 6,
    masteryLearning: {
      strong: [
        "Lance", "Axe", "Brawling", "Heavy Armor"
      ],
      weak: [
        "Riding", "Flying"
      ],
      budding: []
    },
    baseInformations: {
      baseClasse: "Commoner",
      baseMastery: {
        sword: "E",
        lance: "E+",
        axe: "D+",
        bow: "E",
        brawling: "E+",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "D",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Housekeeping, cooking, flowers, gardening, needlework, arts and crafts",
      dislikes: "Anyone who attempts to harm Dimitri"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: false
    }
  },
  Annette: {
    name: "Annette",
    fullName: "Annette Fantine Dominique",
    house: "Blue Lions",
    crest: [
      6
    ],
    personalAbility: 17,
    masteryLearning: {
      strong: [
        "Axe", "Reason", "Authority"
      ],
      weak: [
        "Bow", "Heavy Armor"
      ],
      budding: []
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E",
        lance: "E",
        axe: "E+",
        bow: "E",
        brawling: "E",
        reason: "D+",
        faith: "E",
        authority: "E+",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Studying, singing, dancing, cleaning, doing laundry, morning walks, getting dressed up",
      dislikes: "Indolence, dark places, hard-to-reach places that need a good dusting, coffee"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Ashe: {
    name: "Ashe",
    fullName: "Ashe Duran",
    house: "Blue Lions",
    crest: [],
    personalAbility: 14,
    masteryLearning: {
      strong: [
        "Axe", "Bow"
      ],
      weak: [
        "Reason"
      ],
      budding: [
        "Lance"
      ]
    },
    baseInformations: {
      baseClasse: "Commoner",
      baseMastery: {
        sword: "E",
        lance: "E",
        axe: "E+",
        bow: "D",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Reading, cooking, sweets, tales of chivalry, travel journals, looking after children, violets",
      dislikes: "Ghosts, enclosed spaces, violence, deception"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Felix: {
    name: "Felix",
    fullName: "Felix Hugo Fraldarius",
    house: "Blue Lions",
    crest: [
      7
    ],
    personalAbility: 7,
    masteryLearning: {
      strong: [
        "Sword", "Bow", "Brawling"
      ],
      weak: [
        "Reason", "Authority"
      ],
      budding: [
        "Reason"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "D",
        lance: "E",
        axe: "E",
        bow: "E+",
        brawling: "E+",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Sword practice, weapon maitenance, fighting, high-quality weapons, spicy foods, hunting, meat",
      dislikes: "Levity, sweets, chivalry, his father"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Mercedes: {
    name: "Mercedes",
    fullName: "Mercedes von Marltritz",
    house: "Blue Lions",
    crest: [
      20
    ],
    personalAbility: 11,
    masteryLearning: {
      strong: [
        "Reason", "Faith"
      ],
      weak: [
        "Sword", "Lance", "Axe", "Heavy Armor"
      ],
      budding: [
        "Bow"
      ]
    },
    baseInformations: {
      baseClasse: "Commoner",
      baseMastery: {
        sword: "E",
        lance: "E",
        axe: "E",
        bow: "E",
        brawling: "E",
        reason: "E+",
        faith: "D",
        authority: "E",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Praying, baking, sweets, needlework, ghost stories, adorable things, painting, reading, fragrant flowers",
      dislikes: "Spicy foods, exercise"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Sylvain: {
    name: "Sylvain",
    fullName: "Sylvain Jose Gautier",
    house: "Blue Lions",
    crest: [
      14
    ],
    personalAbility: 20,
    masteryLearning: {
      strong: [
        "Lance", "Axe", "Riding"
      ],
      weak: [
        "Bow"
      ],
      budding: [
        "Reason"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E",
        lance: "D",
        axe: "D",
        bow: "E",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "D",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Fine art, theater, women, lively places, board games",
      dislikes: "Unclean spaces, jealousy, hot days"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Ingrid: {
    name: "Ingrid",
    fullName: "Ingrid Brandol Galatea",
    house: "Blue Lions",
    crest: [
      9
    ],
    personalAbility: 23,
    masteryLearning: {
      strong: [
        "Sword", "Lance", "Riding", "Flying"
      ],
      weak: [],
      budding: []
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E+",
        lance: "D",
        axe: "E",
        bow: "E",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "D",
        flying: "D"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Reading, eating, food samples, meaty meals, looking after horses, tales of chivalry, virtuous knights",
      dislikes: "Extravagance, hunger, the people of Duscur"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
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
    crest: [
      18
    ],
    personalAbility: 3,
    masteryLearning: {
      strong: [
        "Sword", "Bow", "Authority", "Flying"
      ],
      weak: [
        "Lance", "Faith"
      ],
      budding: [
        "Axe"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E+",
        lance: "E",
        axe: "E",
        bow: "D",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "D",
        heavyArmor: "E",
        riding: "E",
        flying: "D"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Tactical scheming, planning feasts, long rides, archery, poetry, topics of curiosity",
      dislikes: "Blind reliance on gods, leaving things to chance, being bound by common sense"
    },
    restrictions: {
      isLord: true,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: false
    }
  },
  Lorenz: {
    name: "Lorenz",
    fullName: "Lorenz Hermann Gloucester",
    house: "Golden Deer",
    crest: [
      10
    ],
    personalAbility: 8,
    masteryLearning: {
      strong: [
        "Lance", "Reason", "Riding"
      ],
      weak: [
        "Brawling"
      ],
      budding: []
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E",
        lance: "D",
        axe: "E",
        bow: "E",
        brawling: "E",
        reason: "E+",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "D",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Monitoring Claude, Writing poetry, tea, red roses, art, worthy women, anything that befits the nobility",
      dislikes: "Coffee, injustice, filth, foul odors, vulgarity"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Hilda: {
    name: "Hilda",
    fullName: "Hilda Valentin Goneril",
    house: "Golden Deer",
    crest: [
      11
    ],
    personalAbility: 9,
    masteryLearning: {
      strong: [
        "Lance", "Axe"
      ],
      weak: [
        "Reason", "Faith"
      ],
      budding: [
        "Heavy Armor"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E",
        lance: "E+",
        axe: "D",
        bow: "E",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Chatting, making accesories, fashion, persuasion, singing, dancing, colorful flowers",
      dislikes: "Effort, exhaustion, responsibility, extreme heat or cold"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: false
    }
  },
  Marianne: {
    name: "Marianne",
    fullName: "Marianne von Edmund",
    house: "Golden Deer",
    crest: [
      15
    ],
    personalAbility: 21,
    masteryLearning: {
      strong: [
        "Sword", "Faith", "Riding", "Flying"
      ],
      weak: [
        "Brawling", "Heavy Armor"
      ],
      budding: [
        "Lance"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E+",
        lance: "E",
        axe: "E",
        bow: "E",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "D+",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Praying, talking to animals, the goddess, birds, reading, delicate flowers",
      dislikes: "Herself, Crests, tidying up"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Ignatz: {
    name: "Ignatz",
    fullName: "Ignatz Victor",
    house: "Golden Deer",
    crest: [],
    personalAbility: 18,
    masteryLearning: {
      strong: [
        "Sword", "Bow", "Authority"
      ],
      weak: [
        "Flying"
      ],
      budding: [
        "Reason"
      ]
    },
    baseInformations: {
      baseClasse: "Commoner",
      baseMastery: {
        sword: "E+",
        lance: "E",
        axe: "E",
        bow: "D",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "E+",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Painting, collecting art supplies, arts, the goddess, the four saints, striking landscapes, faraway lands, peace and quiet, beautiful flowers",
      dislikes: "People who don't appreciate art, stressful situations, lightning"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Lysithea: {
    name: "Lysithea",
    fullName: "Lysithea von Cordelia",
    house: "Golden Deer",
    crest: [
      11, 16
    ],
    personalAbility: 15,
    masteryLearning: {
      strong: [
        "Reason", "Faith", "Authority"
      ],
      weak: [
        "Sword", "Lance", "Axe", "Heavy Armor"
      ],
      budding: [
        "Sword"
      ]
    },
    baseInformations: {
      baseClasse: "Noble",
      baseMastery: {
        sword: "E",
        lance: "E",
        axe: "E",
        bow: "E",
        brawling: "E",
        reason: "D",
        faith: "E+",
        authority: "E+",
        heavyArmor: "E",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Magic and tactics research, eating sweets, cute things, lilies",
      dislikes: "Being treated like a child, anything physically laborious, ghosts, bitter foods"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Leonie: {
    name: "Leonie",
    fullName: "Leonie Pinelli",
    house: "Golden Deer",
    crest: [],
    personalAbility: 24,
    masteryLearning: {
      strong: [
        "Lance", "Bow", "Riding"
      ],
      weak: [],
      budding: []
    },
    baseInformations: {
      baseClasse: "Commoner",
      baseMastery: {
        sword: "E",
        lance: "D+",
        axe: "E",
        bow: "E+",
        brawling: "E",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "E",
        riding: "E+",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Saving money, bow maintenance, Captain Jeralt, military arts, competition, hunting, fishing, gardening, collecting and reusing discarded objects",
      dislikes: "Defeat, decadence, debt, poisonous creatures"
    },
    restrictions: {
      isLord: false,
      isMan: false,
      isWoman: true,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  },
  Raphael: {
    name: "Raphael",
    fullName: "Raphael Kirsten",
    house: "Golden Deer",
    crest: [],
    personalAbility: 12,
    masteryLearning: {
      strong: [
        "Axe", "Brawling", "Heavy Armor"
      ],
      weak: [
        "Bow", "Reason", "Riding"
      ],
      budding: []
    },
    baseInformations: {
      baseClasse: "Commoner",
      baseMastery: {
        sword: "E",
        lance: "E",
        axe: "E+",
        bow: "E",
        brawling: "D",
        reason: "E",
        faith: "E",
        authority: "E",
        heavyArmor: "D",
        riding: "E",
        flying: "E"
      },
      growthRates: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      },
      statsModifier: {
        HP: 0,
        STR: 0,
        DEF: 0,
        DEX: 0,
        SPD: 0,
        MAG: 0,
        RES: 0,
      }
    },
    personality: {
      likes: "Bodybuilding, eating, pure protein, muscles, training, his baby sister",
      dislikes: "Book learning, unfinished meals"
    },
    restrictions: {
      isLord: false,
      isMan: true,
      isWoman: false,
      isStudent: true
    },
    recruitment: {
      isRectrutalbe: true
    }
  }
};

/****************************************************************************************/
/**************************************** CRESTS ****************************************/
/****************************************************************************************/
export const crests = [

  {
    id: 0,
    name: "",
    effect: ""
  },
  {
    id: 1,
    name: "Nemesis",
    effect: "Occasionally restores HP equal to 30% of damage dealt. Rarely raises Mt and stops counter attacks"
  },
  {
    id: 2,
    name: "Seiros",
    effect: "Sometimes raises Might when using Combat Arts"
  },
  {
    id: 3,
    name: "Cichol",
    effect: "Allows combat arts to sometimes prevent enemy counterattacks"
  },
  {
    id: 4,
    name: "",
    effect: ""
  },
  {
    id: 5,
    name: "",
    effect: ""
  },
  {
    id: 6,
    name: "Dominique",
    effect: "Occasionally conserves use of attack magic"
  },
  {
    id: 7,
    name: "Fraldarius",
    effect: "Sometimes raises Mt when using a weapon"
  },
  {
    id: 8,
    name: "",
    effect: ""
  },
  {
    id: 9,
    name: "Daphnel",
    effect: "Sometimes raises Mt when using Combat Arts"
  },
  {
    id: 10,
    name: "Blaiddyd",
    effect: "Occasionally doubles Attack and weapon uses for Combat Arts"
  },
  {
    id: 11,
    name: "Gloucester",
    effect: "Occasionally raises Mt during magic attacks"
  },
  {
    id: 12,
    name: "Goneril",
    effect: "Allows Combat Arts to sometimes prevent enemy counterattacks"
  },
  {
    id: 13,
    name: "",
    effect: ""
  },
  {
    id: 14,
    name: "Gautier",
    effect: "Occasionally allows weapon attacks to strike twice"
  },
  {
    id: 15,
    name: "",
    effect: ""
  },
  {
    id: 16,
    name: "Charon",
    effect: "Sometimes raises Mt when using Combat Arts"
  },
  {
    id: 17,
    name: "",
    effect: ""
  },
  {
    id: 18,
    name: "Riegan",
    effect: "Sometimes restores HP equal to 30% of damage dealt when using Combat Arts"
  },
  {
    id: 19,
    name: "",
    effect: ""
  },
  {
    id: 20,
    name: "Lamine",
    effect: "Occasionally conserves uses of recovery magic"
  },
  {
    id: 21,
    name: "Indech",
    effect: "Occasionally allows weapon attacks to strike twice"
  },
  {
    id: 22,
    name: "Cethlenn",
    effect: "Sometimes raises Mt when using recovery magic"
  }
];

/****************************************************************************************/
/********************************** PERSONAL ABILITIES **********************************/
/****************************************************************************************/
export const personalAbilities = [

  {
    id: 0,
    linkID: 0,
    name: "Teacher's Guidance",
    effect: "Boosts user and adjacent ally's experience gain by 1.2"
  },
  {
    id: 1,
    linkID: 1,
    name: "Imperial Bloodline",
    effect: "Boosts user's experience gain by 1.2"
  },
  {
    id: 2,
    linkID: 2,
    name: "Royal Bloodline",
    effect: "Boosts user's experience gain by 1.2"
  },
  {
    id: 3,
    linkID: 3,
    name: "Alliance Bloodline",
    effect: "Boosts user's experience gain by 1.2"
  },
  {
    id: 4,
    linkID: 4,
    name: "Strategist",
    effect: "Boosts Gambit Might by 5"
  },
  {
    id: 5,
    linkID: 5,
    name: "Songstress",
    effect: "At the start of each turn, restores adjacent allies' HP by 10%"
  },
  {
    id: 6,
    linkID: 6,
    name: "Liege's Shield",
    effect: "If user waits without acting, Defence +4 for one turn"
  },
  {
    id: 7,
    linkID: 6,
    name: "Solitary Wolf",
    effect: "When a battalion is not deployed or when battalion health is zero, damage dealt +5"
  },
  {
    id: 8,
    linkID: 7,
    name: "Prestigious Noble",
    effect: "When a battalion is deployed, damage dealt +2"
  },
  {
    id: 9,
    linkID: 8,
    name: "Plead",
    effect: "When an adjacent male ally enters battle, ally's damage dealt +3"
  },
  {
    id: 10,
    linkID: 6,
    name: "Confidence",
    effect: "Hit rate and Avoid +15 when user's HP is full"
  },
  {
    id: 11,
    linkID: 9,
    name: "Live to Serve",
    effect: ""
  },
  {
    id: 12,
    linkID: 10,
    name: "Scavenge",
    effect: "User has a Luck% chance to restore 10% HP at the start of each turn"
  },
  {
    id: 13,
    linkID: 6,
    name: "Paranoia",
    effect: "If user's HP isn't full, Attack +5"
  },
  {
    id: 14,
    linkID: 11,
    name: "Wisdom to Live",
    effect: "User can open doors and chests without keys"
  },
  {
    id: 15,
    linkID: 12,
    name: "Prodigy",
    effect: "Experience points towards skill levels earned during battles is doubled"
  },
  {
    id: 16,
    linkID: 13,
    name: "Quarreler",
    effect: "Adjacent foes receive Avoid -10 during combat"
  },
  {
    id: 17,
    linkID: 14,
    name: "Hard Worker",
    effect: "When Rally command is used on ally, grants Strength +4 to target"
  },
  {
    id: 18,
    linkID: 15,
    name: "Keen Observation",
    effect: "Hit rate +20"
  },
  {
    id: 19,
    linkID: 6,
    name: "Hunter's Law",
    effect: "When foe has less than 50% HP, Critical rate +20"
  },
  {
    id: 20,
    linkID: 16,
    name: "Ladies' Man",
    effect: "When adjacent to a female ally, damage dealt to foe +2, damage received from foe -2"
  },
  {
    id: 21,
    linkID: 10,
    name: "Animal Lover",
    effect: "When adjacent to a horseback or flying ally, restores 20% HP at the start of the turn"
  },
  {
    id: 22,
    linkID: 10,
    name: "Doze Off",
    effect: "If unit waits without acting, restores 10% HP"
  },
  {
    id: 23,
    linkID: 4,
    name: "Lady Knight",
    effect: "When using a Gambit, Might +3 and Hit Rate +5"
  },
  {
    id: 24,
    linkID: 16,
    name: "Hates to Lose",
    effect: "When adjacent to a male ally, damage dealt to foe +2, damage received from foe -2"
  }
]

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
  ],

  /**
   * Tier 4 - Master Classes : 
   * - Falcon Knight
   * - Wyvern Lord
   * - Mortal Savant
   * - Great Knight
   * - Bow Knight
   * - Dark Knight
   * - Holy Knight
   * - War Master
   * - Gremory
   */
  masterClasses: [
    { name: "Falcon Knight" },
    { name: "Wyvern Lord" },
    { name: "Mortal Savant" },
    { name: "Great Knight" },
    { name: "Bow Knight" },
    { name: "Dark Knight" },
    { name: "Holy Knight" },
    { name: "War Master" },
    { name: "Gremory" },
  ],

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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {},
    abilities: [],
    proficiencies: [],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {},
    abilities: [],
    proficiencies: [],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Sword level at D or higher"],
    },
    abilities: [],
    proficiencies: ["Sword"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Lance level at D or higher"],
    },
    abilities: [],
    proficiencies: ["Lance"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Axe, Bow or Brawl level at D or higher"],
    },
    abilities: [],
    proficiencies: ["Axe", "Bow", "Brawling"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Reason or Faith level at D or higher"],
    },
    abilities: [],
    proficiencies: ["Reason", "Faith"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Sword level at D or higher", "Authority level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Sword", "Lance", "Authority"],
    restrictions: {
      isLordOnly: true,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: false
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Sword level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Sword", "Axe"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Sword level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Sword", "Bow"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Axe level at C or higher", "Heavy Armor level at D or higher"],
    },
    abilities: [],
    proficiencies: ["Lance", "Axe", "Heavy Armor"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Lance level at C or higher", "Riding level at D or higher"],
    },
    abilities: [],
    proficiencies: ["Sword", "Lance", "Riding"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Axe level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Axe", "Brawling"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Bow level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Sword", "Bow"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Brawl level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Axe", "Brawling"],
    restrictions: {
      isLordOnly: false,
      isManOnly: true,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: false
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Reason level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Reason", "Faith"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Reason level at C or higher", "Dark Seal"],
    },
    abilities: [],
    proficiencies: ["Reason", "Faith"],
    restrictions: {
      isLordOnly: false,
      isManOnly: true,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: false
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Faith level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Reason", "Faith"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Lance level at C or highe", "Flying level at D or higher"],
    },
    abilities: [],
    proficiencies: ["Sword", "Lance", "Flying"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: true,
      isStudentOnly: false,
      noRestricted: false
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Sword level at B or higher", "Axe level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Sword", "Axe"],
    restrictions: {
      isLordOnly: false,
      isManOnly: true,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: false
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Sword level at A or higher"],
    },
    abilities: [],
    proficiencies: ["Sword"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Sword level at B or higher", "Bow level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Sword", "Bow"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Axe level at A or higher", "Heavy Armor level at B or higher"],
    },
    abilities: [],
    proficiencies: ["Lance", "Axe", "Heavy Armor"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Lance level at B or higher", "Riding level at B or higher"],
    },
    abilities: [],
    proficiencies: ["Sword", "Lance", "Riding"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Axe level at B or higher", "Flying level at C or higher"],
    },
    abilities: [],
    proficiencies: ["Axe", "Flying"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Axe level at A or higher"],
    },
    abilities: [],
    proficiencies: ["Axe"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Bow level at A or higher"],
    },
    abilities: [],
    proficiencies: ["Bow"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Brawl level at A or higher"],
    },
    abilities: [],
    proficiencies: ["Brawling"],
    restrictions: {
      isLordOnly: false,
      isManOnly: true,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: false
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Reason level at A or higher"],
    },
    abilities: [],
    proficiencies: ["Reason", "Faith"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Reason level at A or higher"],
    },
    abilities: [],
    proficiencies: ["Reason", "Faith"],
    restrictions: {
      isLordOnly: false,
      isManOnly: true,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: false
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
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Faith level at A or higher"],
    },
    abilities: [],
    proficiencies: ["Reason", "Faith"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
    }
  },

  /**
   * Tier 4 - Master Classes
   */
  FalconKnight: {
    name: "Falcon Knight",
    tier: "Master",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {},
    abilities: [],
    proficiencies: ["Sword", "Lance", "Flying"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: true,
      isStudentOnly: false,
      noRestricted: true
    }
  },
  WyvernLord: {
    name: "Wyvern Lord",
    tier: "Master",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Axe Level at A or higher", "Flying level at A or higher", "Lance level at C or higher"]
    },
    abilities: [],
    proficiencies: ["Lance", "Axe", "Flying"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
    }
  },
  MortalSavant: {
    name: "Mortal Savant",
    tier: "Master",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {},
    abilities: [],
    proficiencies: ["Sword", "Reason"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
    }
  },
  GreatKnight: {
    name: "Great Knight",
    tier: "Master",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Heavy Armour at A or higher", "Axe level at B+ or higher", "Riding level at B+ or higher"]
    },
    abilities: [],
    proficiencies: ["Lance", "Axe", "Heavy Armor"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
    }
  },
  BowKnight: {
    name: "Bow Knight",
    tier: "Master",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Bow level at A or higher", "Riding level at A or higher", "Lance level at C or higher"]
    },
    abilities: [],
    proficiencies: ["Lance", "Bow", "Riding"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
    }
  },
  DarkKnight: {
    name: "DarkKnight",
    tier: "Master",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Riding level at A or higher", "Reason level B+ or higher", "Lance level at C or higher"]
    },
    abilities: [],
    proficiencies: ["Lance", "Reason", "Riding"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
    }
  },
  HolyKnight: {
    name: "Holy Knight",
    tier: "Master",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {
      description: ["Riding level at A or higher", "Faith level B+ or higher", "Lance level at C or higher"]
    },
    abilities: [],
    proficiencies: ["Lance", "Faith", "Riding"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
    }
  },
  WarMaster: {
    name: "War Master",
    tier: "Master",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {},
    abilities: [],
    proficiencies: ["Axe", "Brawling"],
    restrictions: {
      isLordOnly: false,
      isManOnly: true,
      isWomanOnly: false,
      isStudentOnly: false,
      noRestricted: true
    }
  },
  Gremory: {
    name: "Gremory",
    tier: "Master",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    },
    growthRates: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
    },
    growthRatesArray: ["0", "0", "0", "0", "0", "0", "0"],
    maxStats: {
      HP: 0,
      STR: 0,
      DEF: 0,
      DEX: 0,
      SPD: 0,
      MAG: 0,
      RES: 0,
      MOV: 0
    },
    maxStatsArray: ["0", "0", "0", "0", "0", "0", "0", "0"],
    requirements: {},
    abilities: [],
    proficiencies: ["Reason", "Faith"],
    restrictions: {
      isLordOnly: false,
      isManOnly: false,
      isWomanOnly: true,
      isStudentOnly: false,
      noRestricted: true
    }
  },
}

export const classesAbilities = [];

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
