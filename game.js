// Define game states and initial setup
let gameState = {
    currentScene: 'start',
    gems: {
        courage: false,
        wisdom: false,
        knowledge: false,
        harmony: false,
        leadership: false,
        spirituality: false,
        kindness: false,
        resourcefulness: false,
        creativity: false,
        compassion: false,
        unity: false
    }
};

function countTrueGems() {
    let trueGemsCount = 0; 
    for (let gem in gameState.gems)
   { 
    if (gameState.gems[gem] === true)
   { trueGemsCount++; } 
   }
    return trueGemsCount;
   }

// Scenes and choices
const scenes = {
    start: {
        text: "Welcome to the Quest for Virtue, where you embark on an adventure to discover and embody core        values that make you a hero!",
        image: "home-image.png",
        options: [
            { text: "Enter the Enchanted Forest", nextScene: "whisperingWoods" },
            { text: "Ascend to the Mystic Mountain", nextScene: "mysticMountain" },
            { text: "Explore the Royal Castle", nextScene: "royalCastle" }
        ]
    },
    // The Whispering Woods start here
    whisperingWoods: {
        text: "You enter the Enchanted Forest. Ancient trees whisper secrets around you...",
        image: "./img/whisperingwoods.png",
        options: [
            { text: "The Lost Faerie", action: function() {
                gameState.gems.wisdom = true;
                gameState.currentScene = "LostFaerieChoices";
                updateGame();
            }}
            
        ]
    },
LostFaerieChoices: {
        text: "You hear a soft sobbing sound ahead. Through a break in the foliage, you spot a tiny faerie with shimmering wings sitting on a rock, looking lost and forlorn.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Approach with Kindness", action: function() {
                gameState.gems.kindness = true;
                gameState.currentScene = "LostFaerieKindness";
                updateGame();
            }},
            { text: "Search for Clues", action: function() {
                gameState.gems.resourcefulness = true;
                gameState.currentScene = "LostFaerieClues";
                updateGame();
            }},
            { text: "Use Magic Knowledge", action: function() {
                gameState.gems.creativity = true;
                gameState.currentScene = "LostFaerieKnowledge";
                updateGame();
            }},
            { text: "Ignore and Continue", nextScene: "LostFaerieContinue" },
        ]
    },
    LostFaerieKindness: {
        text: "You approach the faerie with kindness, calming her fears and offering assistance. She explains that she got separated from her family during a storm and doesn't know how to get back. By showing kindness, you gain the faerie's trust, and she gives you a small glowing gem of Kindness as a token of gratitude. Your journey continues with the faerie happily guiding you through a shortcut, avoiding a potential trap set by mischievous sprites.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },
    LostFaerieClues: {
        text: "You carefully examine the surroundings, noticing a faint trail of sparkling dust leading towards a distant grove of luminous flowers. Following the trail, you discover the faerie's family gathered anxiously. They thank you for your resourcefulness and give you a shimmering gem of Resourcefulness. Your journey continues with the faerie's family guiding you through a hidden path, which leads to a tranquil meadow where you find a treasure chest with helpful supplies.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },
    LostFaerieKnowledge: {
        text: "Drawing upon your magical expertise, you conjure a gentle glow that illuminates the path for the faerie to follow. Impressed by your skill, the faerie rewards you with a sparkling gem of Creativity, acknowledging your inventive approach. Your journey continues smoothly as the faerie accompanies you, sharing tales of magical creatures and offering guidance through a labyrinthine section of the forest.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },
    LostFaerieContinue: {
        text: "Ignoring the faerie's plight, you decide to press on with your quest without intervening. As you continue, you encounter a series of confusing paths and encounter mischievous sprites who lead you astray. Eventually, you find your way out of the forest but realize you missed an opportunity to demonstrate Compassion and receive valuable guidance.",
        image: "./img/lostFaerie.png",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },
    WhisperingGrove: {
        text: "A path veers off to the right, leading to a tranquil grove where ethereal whispers beckon you closer.",
        image: "./img/whisperinggrove.png",

        options: [
            { text: "Investigate the Whispers", action: function() {
             gameState.gems.compassion = true;
             gameState.currentScene = "InvestigateTheWhispers";
            updateGame();
         }},
        { text: "Bypass the Grove", nextScene: "BypassTheGrove" },
    ]
},
ShadowyGlen: {
    text: "To the left, a darker path winds through a shadowy glen, where eerie shadows flicker amidst ancient stone ruins.",
    image: "./img/shadowyglen.png",
    options: [
        { text: "Explore the Ruins", action: function() {
            gameState.gems.wisdom = true;
            gameState.currentScene = "ExploreTheRuins";
           updateGame();
        }},
       { text: "Avoid the Glen", nextScene: "AvoidTheGlen" },
    ]
},
InvestigateTheWhispers: {
    text: "Curious about the whispers, you approach the grove cautiously. You discover a group of lost spirits, trapped between realms and seeking guidance. Through compassionate conversations and thoughtful advice, you help the spirits find peace. In gratitude, they gift you a glowing gem of Compassion. Your journey continues with newfound wisdom and the spirits' guidance, avoiding a perilous swamp that would have slowed your progress",
    image: "./img/whisperinggrove.png",
    options: [
        { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
        { text: "Crystal Falls", nextScene: "CrystalFalls" },
    ]
},
BypassTheGrove: {
    text: "Deciding to stay focused on your quest, you bypass the grove without investigating the whispers. Your path remains straightforward but you miss the opportunity to demonstrate Empathy and receive the spirits' guidance, making your journey more challenging as you encounter tricky puzzles along the main route.",
    image: "./img/whisperinggrove.png",
    options: [
        { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
        { text: "Crystal Falls", nextScene: "CrystalFalls" },
    ]
},
ExploreTheRuins: {
    text: "Intrigued by the ancient ruins, you venture into the shadowy glen. Within the ruins, you encounter a series of puzzles that test your intellect and patience. By solving the puzzles with determination and creativity, you unearth a hidden gem of Wisdom left behind by an ancient sage. Your journey continues with enhanced knowledge and insight, navigating through a maze of illusions that would have otherwise led you astray.",
    image: "./img/shadowyglen.png",
    options: [
        { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
        { text: "Crystal Falls", nextScene: "CrystalFalls" },
    ]
},
AvoidTheGlen: {
    text: "Feeling uneasy about the shadows and ruins, you choose to avoid the glen and stick to the main path. While you avoid potential dangers lurking in the shadows, you miss the opportunity to gain Knowledge and must find an alternative route through a dense thicket, encountering fierce creatures along the way.",
    image: "./img/shadowyglen.png",
    options: [
        { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
        { text: "Crystal Falls", nextScene: "CrystalFalls" },
    ]
},
MoonlitClearing: {
    text: "A faint glow catches your eye to the right, leading to a serene moonlit clearing where fireflies dance in harmony.",
    image: "./img/moonlitclearing.png",
    options: [
        { text: "Join the Firefly Dance", action: function() {
            gameState.gems.unity = true;
            gameState.currentScene = "JoinTheFireflyDance";
           updateGame();
        }},
        { text: "Continue without Distraction", nextScene: "ContinueWithoutDistraction" },
    ]
},
CrystalFalls: {
    text: "To the left, a soft murmur of cascading water beckons from a hidden waterfall known as Crystal Falls.",
    image: "./img/crystalfalls.png",
    options: [
        { text: "Explore Crystal Falls", action: function() {
            gameState.gems.unity = true;
            gameState.currentScene = "ExploreCrystalFalls";
           updateGame();
        }},
        { text: "Stay on Course", nextScene: "StayOnCourse" },
    ]
},
JoinTheFireflyDance: {
    text: "Mesmerized by the fireflies' graceful movements, you join their dance under the moonlit sky. Your heart fills with a sense of peace and harmony. Inspired by the unity of the fireflies, you receive a glowing gem of Unity, symbolizing strength through togetherness. Your journey continues with a renewed sense of purpose and unity, navigating through a maze of enchanted vines that would have otherwise ensnared you.",
    image: "./img/moonlitclearing.png",
    options: [
        { text: "Starlit Grove", nextScene: "StarlitGrove" },
        { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
    ]
},
ContinueWithoutDistraction: {
    text: "Opting to press onward without pausing in the moonlit clearing, you maintain focus on your quest. While you avoid potential distractions, you miss the opportunity to experience Harmony with the natural world and encounter a magical barrier guarded by spirits that would have guided you through a perilous swamp.",
    image: "./img/moonlitclearing.png",
    options: [
        { text: "Starlit Grove", nextScene: "StarlitGrove" },
        { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
    ]
},
ExploreCrystalFalls: {
    text: "Drawn by the allure of Crystal Falls, you discover a hidden grotto behind the cascading waters. Within, you find ancient runes etched into the walls. By deciphering the runes with patience and determination, you unlock a shimmering gem of Perseverance left by an ancient sage. Your journey continues with newfound perseverance, avoiding a labyrinth of illusions that would have otherwise led you astray.",
    image: "./img/crystalfalls.png",
    options: [
        { text: "Starlit Grove", nextScene: "StarlitGrove" },
        { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
    ]
},
StayOnCourse: {
    text: "Opting to stay focused on your current path and avoid potential detours at Crystal Falls, you proceed with caution. While you maintain your course, you miss the opportunity to uncover ancient wisdom and must navigate through a dense thicket, encountering fierce creatures along the way.",
    image: "./img/crystalfalls.png",
    options: [
        { text: "Starlit Grove", nextScene: "StarlitGrove" },
        { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
    ]
},
StarlitGrove: {
    text: "To the right, a path winds towards a tranquil grove bathed in the soft glow of starlight, where mystical creatures gather under the celestial canopy.",
    image: "./img/starlitgrove.png",
    options: [
        { text: "Interact with Creatures", action: function() {
            gameState.gems.wisdom = true;
            gameState.currentScene = "InteractWithCreatures";
           updateGame();
        }},
        { text: "Avoid Interaction", nextScene: "AvoidInteraction" },
    ]
},
TwilightMarsh: {
    text: "To the left, a misty path leads into a twilight marsh, where the air is thick with the calls of unseen creatures and the glow of distant swamp lights.",
    image: "./img/twilightmarsh.png",
    options: [
        { text: "Navigate the Marsh", action: function() {
            gameState.gems.courage = true;
            gameState.currentScene = "NavigateTheMarsh";
           updateGame();
        }},
        { text: "Find a Detour", nextScene: "FindADetour" },
    ]
},
InteractWithCreatures: {
    text: "Intrigued by the mystical creatures' presence, you approach the starlit grove with curiosity. They welcome you warmly, sharing their ancient songs and tales of the forest. Inspired by their wisdom and harmony, you receive a radiant gem of Wisdom, symbolizing insight gained from shared knowledge. Your journey continues with a deeper understanding of the forest's mysteries, bypassing a treacherous bog that would have otherwise hindered your progress.",
    image: "./img/starlitgrove.png",
    options: [
        { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
        { text: "Go to home page", nextScene: "start" }
    ]
},
AvoidInteraction: {
    text: "Deciding to maintain focus on your quest, you bypass the starlit grove without engaging with the creatures. While you avoid potential distractions, you miss the opportunity to gain Understanding from the mystical creatures' teachings, encountering a dense thicket of thorns that slows your journey.",
    image: "./img/starlitgrove.png",
    options: [
        { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
        { text: "Go to home page", nextScene: "start" }
    ]
},
NavigateTheMarsh: {
    text: "Braving the eerie twilight marsh, you navigate through its murky waters, using your keen senses to avoid hidden perils. By demonstrating courage and perseverance, you discover a hidden passage guarded by ancient spirits, who reward you with a gleaming gem of Courage. Your journey continues with newfound bravery, bypassing a labyrinth of illusions that would have otherwise led you astray.",
    image: "./img/twilightmarsh.png",
    options: [
        { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
        { text: "Go to home page", nextScene: "start" }
    ]
},
FindADetour: {
    text: "Opting to find a detour around the twilight marsh, you carefully navigate through dense underbrush and avoid the potential dangers lurking within. While you avoid immediate risks, you miss the opportunity to demonstrate Resilience in the face of challenges, encountering a series of puzzling illusions that test your resolve.",
    image: "./img/twilightmarsh.png",
    options: [
        { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
        { text: "Return home", nextScene: "start" }
    ]
},

    // The Mystic Mountains start here
    mysticMountain: {
        text: "You ascend towards the Mystic Mountain. Crystalline streams flow amidst towering peaks...",
        image: "./img/mysticmountain.png",
        options: [
            {text: "Ascend to the Celestial Summit", action: function() {
                gameState.gems.spirituality = true;
                gameState.currentScene = "celestialSummit";
                updateGame();
            }},
            {text: "Explore the Crystal Caverns", action: function() {
                gameState.currentScene = "crystalCaverns";
                updateGame();
            }}
        ]
    },

    //Celestial Summit Option
    celestialSummit: {
        text: "A path veers off to the right, a narrow trail winds upward towards the Celestial Summit, rumored to be a place where the stars themselves come down to touch the earth. The trail is steep and challenging, but promises breathtaking views and encounters with celestial beings.",
        image: "./img/celestialsummit.png",
        options: [
            {text: "Ascend to the Celestial Summit", action: function() {
                gameState.gems.spirituality = true;
                gameState.currentScene = "AscendToTheCelestialSummit";
                updateGame();
            }},
            {text: "Take a Different Path", nextScene: "takeADifferentPath"},
        ]
    },

    AscendToTheCelestialSummit: {
        text: "Embracing the challenge, you ascend the steep trail towards the Celestial Summit. Along the way, you encounter tests of endurance and moments where courage is required to overcome obstacles. Upon reaching the summit, you are greeted by celestial beings who impart wisdom and grant you a radiant gem of Spirituality, symbolizing your connection with the higher realms. Your journey continues with renewed insight and a clearer path forward, bypassing a treacherous avalanche that would have otherwise blocked your way.",
        image: "./img/celestialsummit.png",
        options: [
            {text: "Wisdom's Path", nextScene: "wisdomsPath"},
            {text: "Stormy Pass", nextScene: "stormyPass"}
        ]
    },
    
    takeADifferentPath: {
        text: "Opting for a safer route, you choose to explore a longer path that avoids the challenges of the Celestial Summit. While you navigate safely, you miss the opportunity to gain Enlightenment from the celestial beings and encounter a series of intricate puzzles that test your intellect along the way.",
        image: "./img/celestialsummit.png",
        options: [
            {text: "Wisdom's Path", nextScene: "wisdomsPath"},
            {text: "Stormy Pass", nextScene: "stormyPass"}
        ]
    },

    //Crystal Caverns Option
    crystalCaverns: {
        text: "To the left, a path leads into the heart of the mountains, where Crystal Caverns glitter with gemstones of every hue. The caverns are known for their beauty and mysterious powers.",
        image: "./img/crystalcaverns.png",
        options: [
            {text: "Explore the Crystal Caverns", action: function() {
                gameState.gems.harmony = true;
                gameState.currentScene = "ExploreTheCrystalCaverns";
                updateGame();
            }},
            {text: "Bypass the Caverns", nextScene: "BypassTheCaverns"},
        ]
    },

    ExploreTheCrystalCaverns: {
        text: "Intrigued by the beauty and mystique of the Crystal Caverns, you venture into their depths. Inside, you encounter shimmering gemstones that seem to pulse with energy and ancient runes carved into the walls. By deciphering the runes and respecting the caverns' natural balance, you earn a sparkling gem of Harmony, reflecting your ability to find balance and peace in chaotic surroundings. Your journey continues with enhanced harmony, navigating through a labyrinth of crystalline formations that would have otherwise disoriented you.",
        image: "./img/crystalcaverns.png",
        options: [
            {text: "Wisdom's Path", nextScene: "wisdomsPath"},
            {text: "Stormy Pass", nextScene: "stormyPass"}
        ]
    },

    BypassTheCaverns: {
        text: "Opting to bypass the Crystal Caverns, you skirt around their entrances, avoiding potential dangers or distractions within. While you proceed without incident, you miss the opportunity to uncover Inner Strength from the caverns' challenges and encounter a steep, rocky path that requires careful navigation.",
        image: "./img/crystalcaverns.png",
        options: [
            {text: "Wisdom's Path", nextScene: "wisdomsPath"},
            {text: "Stormy Pass", nextScene: "stormyPass"}
        ]
    },

    //Wisdom's Path Option
    wisdomsPath: {
        text: "To the right, a path veers towards a serene plateau known as Wisdom's Path, where ancient sages once meditated and communed with nature.",
        image: "./img/wisdomsPath.png",
        options: [
            { text: "Meditate at Wisdom's Path", action: function() {
                gameState.gems.wisdom = true;
                gameState.currentScene = "meditateAtWisdomsPath";
                updateGame();
            }},
            {text: "Continue Exploring", nextScene: "continueExploring"},
        ]
    },

    meditateAtWisdomsPath: {
        text: "Choosing to meditate at Wisdom's Path, you find a sense of peace and clarity as you connect with the ancient wisdom of the sages. Inspired by your introspection, you receive a radiant gem of Wisdom, symbolizing your deepened understanding and insight. Your journey continues with renewed purpose and foresight, avoiding a treacherous cliffside that would have otherwise posed a danger.",
        image: "./img/wisdomsPath.png",
        options: [
            {text: "Whispering Forest", nextScene: "whisperingForest"},
            {text: "Luminous Peak", nextScene: "luminousPeak"}
        ]
    },

    continueExploring: {
        text: "TEXTOpting to bypass Wisdom's Path and continue exploring the mountain, you remain focused on uncovering more of its secrets. While you proceed with determination, you miss the opportunity to gain Reflection from the serene environment and encounter a steep, rocky descent that tests your agility.",
        image: "./img/wisdomsPath.png",
        options: [
            {text: "Whispering Forest", nextScene: "whisperingForest"},
            {text: "Luminous Peak", nextScene: "luminousPeak"}
        ]
    },

    //Stormy Pass Option
    stormyPass: {
        text: "To the left, a rugged trail leads into Stormy Pass, where dark clouds gather ominously and lightning crackles in the distance.",
        image: "./img/stormyPass.png",
        options: [
            {text: "Brave the Storm", action: function() {
                gameState.gems.resilience = true;
                gameState.currentScene = "braveTheStorm";
                updateGame();
            }},
            {text: "Seek Shelter", nextScene: "seekShelter"},
        ]
    },

    braveTheStorm: {
        text: "Embracing the challenge, you venture into Stormy Pass, where dark clouds swirl and lightning flashes overhead. Through resilience and determination, you navigate through the tumultuous weather and reach the other side unscathed. Impressed by your bravery, the mountain spirits reward you with a shimmering gem of Resilience, symbolizing your ability to endure and overcome adversity. Your journey continues with enhanced resilience, bypassing a maze of sharp rocks that would have otherwise slowed your progress.",
        image: "./img/stormyPass.png",
        options: [
            {text: "Whispering Wood", nextScene: "whisperingForest"},
            {text: "Luminous Peak", nextScene: "lumionsPeak"}
        ]
    },

    seekShelter: {
        text: "Opting to seek shelter or find an alternative route around Stormy Pass, you wait out the storm or navigate a safer path. While you avoid immediate dangers, you miss the opportunity to demonstrate Courage in the face of elemental challenges and encounter a winding path that leads to a daunting cliff.",
        image: "./img/stormyPass.png",
        options: [
            {text: "Whispering Forest", nextScene: "whisperingForest"},
            {text: "Luminous Peak", nextScene: "lumionsPeak"}
        ]
    },

    //Whispering Forest Option
    whisperingForest: {
        text: "To the right, a winding path leads into the Whispering Forest, where ancient trees whisper secrets of the past and pathways shift with each passing breeze.",
        image: "./img/whisperingForest.png",
        options: [
            {text: "Listen to the Trees", action: function() {
                gameState.gems.patience = true;
                gameState.currentScene = "listenToTheTrees";
                updateGame();
            }},
            {text: "Navigate the Shifting Paths", action: function() {
                gameState.gems.adaptability = true;
                gameState.currentScene = "navigateTheShiftingPaths";
                updateGame();
            }},
        ]
    },

    listenToTheTrees: {
        text: "Approaching the ancient trees, you quiet your mind and listen attentively to their whispers. They share tales of ancient heroes and offer cryptic advice for your journey. By showing respect and patience, you earn a shimmering gem of Patience, symbolizing your ability to listen and learn from the wisdom of others. Your journey continues with enhanced patience, navigating through a maze of illusions that would have otherwise misled you.",
        image: "./img/whisperingForest.png",
        options: [
            {text: "Go to the Royal Castle", nextScene: "royalCastle"},
            {text: "Return Home", nextScene: "start"}
        ]
    },

    navigateTheShiftingPaths: {
        text: "Choosing to navigate the shifting paths of the Whispering Woods, you rely on intuition and adaptability to find your way through the labyrinthine forest. Through perseverance and keen observation, you discover a hidden path guarded by ancient spirits, who reward you with a radiant gem of Adaptability. Your journey continues with newfound adaptability, bypassing a treacherous swamp that would have otherwise hinder your progress.",
        image: "./img/whisperingForest.png",
        options: [
            {text: "Go to the Royal Castle", nextScene: "royalCastle"},
            {text: "Return Home", nextScene: "start"}
        ]
    },

    //Luminous Peak Option
    luminousPeak: {
        text: "To the left, a trail ascends towards the Luminous Peaks, where rare crystals grow amidst glowing flora, bathing the area in a surreal radiance.",
        image: "./img/luminousPeak.png",
        options: [
            {text: "Collect Luminous Crystals", action: function() {
                gameState.gems.harmony = true;
                gameState.currentScene = "collectLuminousCrystals";
                updateGame();
            }},
            {text: "Appreciate the Beauty", nextScene: "appreciateTheBeauty"},
        ]
    },

    collectLuminousCrystals: {
        text: "Intrigued by the rare crystals of the Luminous Peaks, you gather them carefully, feeling their mystical energy resonate within you. By respecting the delicate balance of nature, you receive a gleaming gem of Harmony, symbolizing your ability to find balance amidst beauty and power. Your journey continues with enhanced harmony, avoiding a perilous rockslide that would have otherwise blocked your path.",
        image: "./img/luminousPeak.png",
        options: [
            {text: "Go to the Royal Castle", nextScene: "royalCastle"},
            {text: "Return Home", nextScene: "start"}
        ]
    },

    appreciateTheBeauty: {
        text: "Taking a moment to admire the ethereal beauty of the Luminous Peaks, you pause to reflect on the wonder and majesty of the natural world. While you appreciate the beauty, you miss the opportunity to gain Insight from the crystals' energies and encounter a steep, rocky ascent that tests your endurance.",
        image: "./img/luminousPeak.png",
        options: [
            {text: "Go to the Royal Castle", nextScene: "royalCastle"},
            {text: "Return Home", nextScene: "start"}
        ]
    },

//--------------------------------------------------\\

    //Start of the Royal Castle
    royalCastle: {
        text: "Your arrive at the majestic Royal Castle. Turrets rise towards teh sky and banners slutter in the breeze...",
        image: "./img/royalcastle.png",
        options: [
            {text: "Go to the Royal Library", nextScene: "royalLibrary"},
            {text: "Go to the Throne Room", nextScene: "throneRoom"},
            {text: "Go to the Grand Courtyard", nextScene: "grandCourtyard"},
            {text: "Go to the Enchanted Gardens", nextScene: "enchantedGarden"}
        ]
    },

    //Royal Library Option
    royalLibrary: {
        text: "Passing through the breath-taking front gate of the castle, you find yourself being drawn to a spiriling tower reaching for the sky. Pushing the massive wooden door to the side reveals a sprawling library packed with books and scholars.",
        image: "./img/royalLibrary.png",
        options: [
            {text: "Research Ancient Lore", action: function() {
                gameState.gems.knowledge = true;
                gameState.currentScene = "researchAncientLore";
                updateGame();
            }},
            {text: "Seek Guidance from the Librarian", action: function() {
                gameState.gems.wisdom = true;
                gameState.currentScene = "seekGuidanceFromTheLibrarian";
                updateGame();
            }},
        ]
    },

    researchAncientLore: {
        text: "You become deeply facinated with the history of the kingdom you've ventured through. You find a radiant gem of Knowledge. With it you become a great scholar of the Royal Library.",
        image: "./img/royalLibrary.png",
        options: [
            {text: "Return Home", nextScene: "start"}
        ]
    },

    seekGuidanceFromTheLibrarian: {
        text: "You seek the guidance of the Great Librarian at the top of the spiriling tower. Looking out over the vast kingdom you come to a realization that your wisdom can be used to help, so you set off as a philosopher to teach the world.",
        image: "./img/royalLibrary.png",
        options: [
            {text: "Return Home", nextScene: "start"}
        ]
    },

    //Throne Room Option
    throneRoom: {
        text: "Passing through the gates there is grand path leading up towards the main centeral castle. The path is flanked by rows upon rows of gaurds all watching as you climb the steps to the main hall.",
        image: "./img/throneRoom.png",
        options: [
            {text: "Request Audience with the King and Queen", action: function() {
                gameState.gems.leadership = true;
                gameState.currentScene = "requestAudienceWithTheKingAndQueen";
                updateGame();
            }},
            {text: "Observe a Court Proceeding", action: function() {
                gameState.gems.justice = true;
                gameState.currentScene = "observeACourtProceeding";
                updateGame();
            }},
        ]
    },

    requestAudienceWithTheKingAndQueen: {
        text: "Having your request accpeted, you enter the throne room and see two massive gold and silver thrones with the King and Queen sitting upon them. You kneel with your head bent, here you see a glowing stone at your feet. You pick it up and gain a gem of Leadership. You ask with a new found voice to join the kingdoms army and the King accepts. You climb your way through the ranks becoming a royal general of the army.",
        image: "./img/throneRoom.png",
        options: [
            {text: "Return Home", nextScene: "start"}
        ]
    },

    observeACourtProceeding: {
        text: "Wondering through the hall you sumble into a roayl court hearing. You decide to sit and watch justice being carried out. You're inspired as the judge carries out swift and accurate justice upon proven criminals. This inspiration manifests into a glowing gem of Justice. You further your knowledge and become a highly respected justice on the Royal Court.",
        image: "./img/throneRoom.png",
        options: [
            {text: "Return Home", nextScene: "start"}
        ]
    },

    //Grand Courtyard Option
    grandCourtyard: {
        text: "Passing through the gates you make your way around the main castle to the back where a massive courtyard strechs out before you.",
        image: "./img/grandcourtyard.png",
        options: [
            {text: "Challenge a Knight", action: function() {
                gameState.gems.courage = true;
                gameState.currentScene = "challengeAKnight";
                updateGame();
            }},
            {text: "Visit the Merchants", action: function() {
                gameState.gems.curiosity = true;
                gameState.currentScene = "visitTheMerchants";
                updateGame();
            }},
        ]
    },

    challengeAKnight: {
        text: "As you pick up your weapon, you notice a glowing stone embedded in the hilt. You gain a gem of courage. Your heartbeat slows as a coolness passes over you filling you with passion and bravery. You overcome impossible odds by defeating every knight in the army catching the eye of the King who knights you so you can join the armies ranks.",
        image: "./img/grandcourtyard.png",
        options: [
            {text: "Return Home", nextScene: "start"}
        ]
    },

    visitTheMerchants: {
        text: "You approach a merchant and ask if you could ask him a few questions. The merchant agrees so you sit down and start firing off question after question the merchant is happy to answer all of them. A glistering gem forms in your hand and you gain a gem of curiosity. With this new found wonder you set off and become a extermely wealthy merchant.",
        image: "./img/grandcourtyard.png",
        options: [
            {text: "Return Home", nextScene: "start"}
        ]
    },

    //Enchanted Gardens Option
    enchantedGarden: {
        text: "Passing through the gates you follow a less traveled path that leads you to a magnificent garden teeming with life.",
        image: "./img/enchantedgardens.png",
        options: [
            {text: "Explore the Garden", action: function() {
                gameState.gems.harmony = true;
                gameState.currentScene = "exploreTheGarden";
                updateGame();
            }},
            {text: "Seek Wisdom from Nature", action: function() {
                gameState.gems.wisdom = true;
                gameState.currentScene = "seekWisdomFromNature";
                updateGame();
            }},
        ]
    },

    exploreTheGarden: {
        text: "Venturing into the garden, you see beautiful flowers sprouting from bushes and animals running free through the trees. You come to a circle of rose pushes with a simple flat rock in the middle. Upon sitting on the rock you feel a warmth run up your spine and a small rock appears in your palm. You receive a gem of Harmony. With this new found understanding of the world and peace you become a royal diplomat searching to resolve conflicts peacefully.",
        image: "./img/enchantedgardens.png",
        options: [
            {text: "Return Home", nextScene: "start"}
        ]
    },

    seekWisdomFromNature: {
        text: "As you watch the animals play and plants grow, you sit and meditate searching for answers. Plants grow around you and animals come with food and water. After a while you open your eyes to see a small stone was placed in your hand. Your gain a gem of Wisdom. With this wisdom from nature you become a sage who's purpose is to save nature from destruction.",
        image: "./img/enchantedgardens.png",
        options: [
            {text: "Return Home", nextScene: "start"}
        ]
    },
};

// Function to update the game interface with current scene and options
function updateGame() {
    const currentScene = scenes[gameState.currentScene];
    const gameTextElement = document.getElementById('game-text');
    const optionsContainer = document.getElementById('options-container');
    const sceneImageElement = document.getElementById('scene-image');
    const gemCounterElement = document.getElementById('gem-counter'); // New element for displaying gem count
    const gemsList = document.getElementById('gems-list'); // Add this line

    // Update scene image
    if (currentScene.image) {
        sceneImageElement.src = currentScene.image;
        sceneImageElement.style.display = 'block';
    } else {
        sceneImageElement.style.display = 'none';
    }


    // Update game text
    gameTextElement.innerHTML = `<p>${currentScene.text}</p>`;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Display new options
    currentScene.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('option-button');
        button.addEventListener('click', function() {
            if (option.action) option.action();
            else gameState.currentScene = option.nextScene;
            updateGame();
        });
        optionsContainer.appendChild(button);
    });

    gemCounterElement.textContent = `Gems: ${countTrueGems()}`;
    gemCounterElement.textContent = `Gems: ${countTrueGems()}`;


      // Update gems display
      gemsList.innerHTML = '';
      for (const gem in gameState.gems) {
          if (gameState.gems.hasOwnProperty(gem) && gameState.gems[gem]) {
              const gemItem = document.createElement('div');
              gemItem.classList.add('gem');
              gemItem.textContent = gem.charAt(0).toUpperCase() + gem.slice(1);
              gemsList.appendChild(gemItem);
          }
      }


    // Update inventory display
    inventoryList.innerHTML = '';
    playerState.inventory.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('item');
        listItem.textContent = item;
        inventoryList.appendChild(listItem);
    });

    // Update character stats display
    strengthStat.textContent = playerState.stats.strength;
    magicStat.textContent = playerState.stats.magic;
    diplomacyStat.textContent = playerState.stats.diplomacy;
}

// Example: Implementing a function to add items to inventory
function addToInventory(item) {
    playerState.inventory.push(item);
    console.log(`Added ${item} to inventory:`, playerState.inventory);
}

// Example: Implementing a function to update player stats based on choices
function updateStats(choice) {
    switch (choice) {
        case 'diplomaticChoice':
            playerState.stats.diplomacy += 2;
            break;
        // Add more cases as per your game's choices and outcomes
        default:
            break;
    }
}
   
// Initialize game
updateGame();

// Example: Background music control
const backgroundMusic = document.getElementById('background-music');
// Uncomment and replace 'background_music.mp3' with your actual music file path
backgroundMusic.src = 'background_music.mp3';
backgroundMusic.play();