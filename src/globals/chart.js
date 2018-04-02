// Arrays are 1-indexed for easy level parameterization
var chart = {
    levels: {
        xpRequired: [
            undefined,
            0,      // 1
            300,    // 2
            900,    // 3
            2700,   // 4
            6500,   // 5
            14000,  // 6
            23000,  // 7
            34000,  // 8
            48000,  // 9
            64000,  // 10
            85000,  // 11
            100000, // 12
            120000, // 13
            140000, // 14
            165000, // 15
            195000, // 16
            225000, // 17
            265000, // 18
            305000, // 19
            355000, // 20
        ],
        proficiency: [
            undefined,
            2, // 1
            2, // 2
            2, // 3
            2, // 4
            3, // 5
            3, // 6
            3, // 7
            3, // 8
            4, // 9
            4, // 10
            4, // 11
            4, // 12
            5, // 13
            5, // 14
            5, // 15
            5, // 16
            6, // 17
            6, // 18
            6, // 19
            6, // 20
        ],
        warlock: {
            cantripsKnown: [
                undefined,
                2, // 1
                2, // 2
                2, // 3
                3, // 4
                3, // 5
                3, // 6
                3, // 7
                3, // 8
                3, // 9
                4, // 10
                4, // 11
                4, // 12
                4, // 13
                4, // 14
                4, // 15
                4, // 16
                4, // 17
                4, // 18
                4, // 19
                4, // 20
            ],
            invocationsKnown: [
                undefined,
                0, // 1
                2, // 2
                2, // 3
                2, // 4
                3, // 5
                3, // 6
                4, // 7
                4, // 8
                5, // 9
                5, // 10
                5, // 11
                6, // 12
                6, // 13
                6, // 14
                7, // 15
                7, // 16
                7, // 17
                8, // 18
                8, // 19
                8, // 20
            ],
            spellsKnown: [
                undefined,
                2,  // 1
                3,  // 2
                4,  // 3
                5,  // 4
                6,  // 5
                7,  // 6
                8,  // 7
                9,  // 8
                10, // 9
                10, // 10
                11, // 11
                11, // 12
                12, // 13
                12, // 14
                13, // 15
                13, // 16
                14, // 17
                14, // 18
                15, // 19
                15, // 20
            ],
            spellSlots: [
                undefined,
                1, // 1
                2, // 2
                2, // 3
                2, // 4
                2, // 5
                2, // 6
                2, // 7
                2, // 8
                2, // 9
                2, // 10
                3, // 11
                3, // 12
                3, // 13
                3, // 14
                3, // 15
                3, // 16
                4, // 17
                4, // 18
                4, // 19
                4, // 20
            ],
            slotLevel: [
                undefined,
                1, // 1
                1, // 2
                2, // 3
                2, // 4
                3, // 5
                3, // 6
                4, // 7
                4, // 8
                5, // 9
                5, // 10
                5, // 11
                5, // 12
                5, // 13
                5, // 14
                5, // 15
                5, // 16
                5, // 17
                5, // 18
                5, // 19
                5, // 20
            ],
            features: [
                undefined,
                'Otherworldly Patron, Pact Magic', // 1
                'Eldritch Invocations',            // 2
                'Pact Boon',                       // 3
                'Ability Score Improvement',       // 4
                '',                                // 5
                'Otherworldly Patron feature',     // 6
                '',                                // 7
                'Ability Score Improvement',       // 8
                '',                                // 9
                'Otherworldly Patron feature',     // 10
                'Mystic Arcanum (6th level)',      // 11
                'Ability Score Improvement',       // 12
                'Mystic Arcanum (7th level)',      // 13
                'Otherworldly Patron feature',     // 14
                'Mystic Arcanum (8th level)',      // 15
                'Ability Score Improvement',       // 16
                'Mystic Arcanum (9th level)',      // 17
                '',                                // 18
                'Ability Score Improvement',       // 19
                'Eldritch Master',                 // 20
            ],
        },
    },
    races: (() => {
        const Size = Object.freeze({
            SMALL: 'Small',
            MEDIUM: 'Medium',
        });

        const races = {
            dwarf: {
                size: Size.MEDIUM,
                speed: 25,
            },
            elf: {
                size: Size.MEDIUM,
                speed: 30,
            },
            halfling: {
                size: Size.SMALL,
                speed: 25,
            },
            human: {
                size: Size.MEDIUM,
                speed: 30,
            },
            dragonborn: {
                size: Size.MEDIUM,
                speed: 30,
            },
            gnome: {
                size: Size.SMALL,
                speed: 25,
            },
            halfElf: {
                size: Size.MEDIUM,
                speed: 30,
            },
            halfOrc: {
                size: Size.MEDIUM,
                speed: 30,
            },
            tiefling: {
                size: Size.MEDIUM,
                speed: 30,
            },
        };

        return races;
    })(),
    classes: {
        barbarian: {
            name: 'Barbarian',
            description: '',
        },
        bard: {
            name: 'Bard',
            description: '',
        },
        cleric: {
            name: 'Cleric',
            description: '',
        },
        druid: {
            name: 'Druid',
            description: '',
        },
        fighter: {
            name: 'Fighter',
            description: '',
        },
        monk: {
            name: 'Monk',
            description: '',
        },
        paladin: {
            name: 'Paladin',
            description: '',
        },
        ranger: {
            name: 'Ranger',
            description: '',
        },
        rogue: {
            name: 'Rogue',
            description: '',
        },
        sorcerer: {
            name: 'Sorcerer',
            description: '',
        },
        warlock: {
            name: 'Warlock',
            description: '',
        },
        wizard: {
            name: 'Warlock',
            description: '',
        },
    },
    alignments: [
        'Lawful Good',
        'Neutral Good',
        'Chaotic Good',
        'Lawful Neutral',
        'True Neutral',
        'Chaotic Neutral',
        'Lawful Evil',
        'Neutral Evil',
        'Chaotic Evil',
    ],
    backgrounds: {
        acolyte: {
            name: 'Acolyte',
            description: '',
        },
        charlatan: {
            name: 'Charlatan',
            description: '',
        },
        criminal: {
            name: 'Criminal',
            description: '',
        },
        entertainer: {
            name: 'Entertainer',
            description: '',
        },
        folkHero: {
            name: 'Folk Hero',
            description: '',
        },
        guildArtisan: {
            name: 'Guild Artisan',
            description: '',
        },
        hermit: {
            name: 'Hermit',
            description: '',
        },
        noble: {
            name: 'Noble',
            description: '',
        },
        outlander: {
            name: 'Outlander',
            description: '',
        },
        sage: {
            name: 'Sage',
            description: '',
        },
        sailor: {
            name: 'Sailor',
            description: '',
        },
        soldier: {
            name: 'Soldier',
            description: '',
        },
        urchin: {
            name: 'Urchin',
            description: '',
        },
    },
};