// Define game states and initial setup
let gameState = {
    currentScene: 'start',
    gems: {
        courage: false,
        wisdom: false,
        knowledge: false,
        harmony: false,
        leadership: false,
        spirituality: false
        // Add more gem types as needed
    }
};

// Player inventory and stats
let playerState = {
    inventory: [],
    stats: {
        strength: 10,
        magic: 5,
        diplomacy: 8
    }
};

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
        { text: "Go to home page", nextScene: "start" }
    ]
},

    // The Mystic Mountains start here



    // The Royal Castle starts here

    royalCastle: {
        text: "You arrive at the majestic Royal Castle. Turrets rise towards the sky and banners flutter in the breeze...",
        image: "./img/royalcastle.png",
        options: [
            { text: "Grand Courtyard", nextScene: "GrandCourtyard" },
            { text: "Enchanted Gardens", nextScene: "EnchantedGardens" }
        ]
    },
    GrandCourtyard: {
        text: "To the right, a path leads into the Grand Courtyard, where noble knights practice their skills, merchants sell exotic goods, and musicians entertain guests with lively tunes.",
        image: "./img/grandcourtyard.png",
        options: [
            { text: "Challenge a Knight", action: function() {
                gameState.gems.courage = true;
                gameState.currentScene = "ChallengeAKnight";
               updateGame();
            }},
            { text: "Visit the Merchants", nextScene: "VisitTheMerchants" },
        ]
    },
    EnchantedGardens: {
        text: "To the left, a path winds through the Enchanted Gardens, where exotic flowers bloom in vibrant colors and magical creatures play among the foliage.",
        image: "./img/enchantedgardens.png",
        options: [
            { text: "Explore the Gardens", action: function() {
                gameState.gems.harmony = true;
                gameState.currentScene = "ExploreTheGardens";
               updateGame();
            }},
            { text: "Seek Wisdom from a Sage", nextScene: "SeekWisdomFromASage" },
        ]
    },
    ChallengeAKnight: {
        text: "Approaching a noble knight, you engage in a friendly duel, testing your skills and demonstrating courage in the face of a worthy opponent. By showcasing your bravery and determination, you earn a shining gem of Courage, symbolizing your ability to face challenges head-on. Your journey continues with enhanced courage, navigating through a diplomatic challenge that requires tact and grace.",
        image: "./img/grandcourtyard.png",
        options: [
            { text: "Royal Library", nextScene: "RoyalLibrary" },
            { text: "Throne Room", nextScene: "ThroneRoom" }
        ]
    },
    VisitTheMerchants: {
        text: "Browsing the merchants' stalls, you engage in conversations and learn about their unique goods and trades, gaining insights into the castle's economy and culture. By showing interest and respect, you receive a sparkling gem of Curiosity, symbolizing your thirst for knowledge and exploration. Your journey continues with newfound curiosity, avoiding a misunderstanding with a visiting diplomat that could have strained relations.",
        image: "./img/grandcourtyard.png",
        options: [
            { text: "Royal Library", nextScene: "RoyalLibrary" },
            { text: "Throne Room", nextScene: "ThroneRoom" }
        ]
    },
    ExploreTheGardens: {
        text: "Wandering through the Enchanted Gardens, you marvel at the exotic flowers and playful magical creatures, immersing yourself in the beauty and tranquility. By appreciating the natural world and its wonders, you earn a radiant gem of Harmony, symbolizing your ability to find peace and balance in nature. Your journey continues with enhanced harmony, navigating through a social gathering with grace and diplomacy.",
        image: "./img/enchantedgardens.png",
        options: [
            { text: "Royal Library", nextScene: "RoyalLibrary" },
            { text: "Throne Room", nextScene: "ThroneRoom" }
        ]
    },
    SeekWisdomFromASage: {
        text: "Finding the wise sage in a secluded area of the Enchanted Gardens, you seek their counsel and learn about the castle's history, traditions, and hidden secrets. By showing respect and humility, you receive a glowing gem of Wisdom, symbolizing your deepened understanding and insight into the kingdom's lore. Your journey continues with newfound wisdom, navigating through a complex political intrigue that tests your diplomatic skills.",
        image: "./img/enchantedgardens.png",
        options: [
            { text: "Royal Library", nextScene: "RoyalLibrary" },
            { text: "Throne Room", nextScene: "ThroneRoom" }
        ]
    }, // NEXT PART HERE
    /*
    royalLibrary: {
        text: "You enter the Royal Library, filled with ancient tomes and scrolls...",
        options: [
            { text: "Research Ancient Lore", action: function() {
                gameState.gems.knowledge = true;
                gameState.currentScene = "ancientLore";
                addToInventory("Ancient Tome");
                updateGame();
            }},
            { text: "Seek Guidance from the Librarian", action: function() {
                gameState.currentScene = "librarianGuidance";
                updateGame();
            }}
        ]
    },
    royalCourt: {
        text: "You attend the Royal Court, where decisions shaping the kingdom's fate are made...",
        options: [
            { text: "Present Your Ideas to the Monarch", action: function() {
                gameState.gems.leadership = true;
                gameState.currentScene = "presentIdeas";
                updateStats('diplomaticChoice');
                updateGame();
            }},
            { text: "Observe Court Proceedings", action: function() {
                gameState.currentScene = "observeProceedings";
                updateGame();
            }}
        ]
    },

    







    shiftingPaths: {
        text: "You navigate the shifting paths with caution, avoiding traps and finding hidden treasures...",
        options: [
            { text: "Proceed Deeper into the Woods", nextScene: "whisperingWoods" },
            { text: "Return to the Crossroads", nextScene: "start" }
        ]
    },
    ancientLore: {
        text: "You delve into ancient lore, discovering lost knowledge and forgotten legends...",
        options: [
            { text: "Continue Your Research", nextScene: "royalLibrary" }
        ]
    },
    librarianGuidance: {
        text: "The librarian imparts their wisdom, shedding light on the castle's history and mysteries...",
        options: [
            { text: "Thank the Librarian", nextScene: "royalLibrary" }
        ]
    },
    presentIdeas: {
        text: "You present your ideas to the monarch, influencing decisions that shape the kingdom's future...",
        options: [
            { text: "Attend to Kingdom Matters", nextScene: "royalCourt" }
        ]
    },
    observeProceedings: {
        text: "You observe court proceedings, gaining insights into the kingdom's governance and challenges...",
        options: [
            { text: "Reflect on What You've Learned", nextScene: "royalCourt" }
        ]
    },
    // Additional scenes and choices
    secretGrove: {
        text: "You discover a hidden grove filled with mystical creatures and glowing flowers...",
        options: [
            { text: "Befriend the Creatures", action: function() {
                gameState.gems.harmony = true;
                gameState.currentScene = "befriendCreatures";
                updateGame();
            }},
            { text: "Explore Further", action: function() {
                gameState.currentScene = "exploreFurtherGrove";
                updateGame();
            }}
        ]
    },
    befriendedCreatures: {
        text: "You establish a bond with the mystical creatures, gaining their trust and learning their secrets...",
        options: [
            { text: "Continue Exploring the Grove", nextScene: "secretGrove" },
            { text: "Return to the Path", nextScene: "start" }
        ]
    },
    exploreFurtherGrove: {
        text: "You uncover a hidden spring with healing waters and a forgotten relic...",
        options: [
            { text: "Take the Relic", action: function() {
                addToInventory("Forgotten Relic");
                gameState.currentScene = "takeRelic";
                updateGame();
            }},
            { text: "Study the Healing Waters", action: function() {
                gameState.currentScene = "studyWaters";
                updateGame();
            }}
        ]
    },
    takeRelic: {
        text: "You take the Forgotten Relic, feeling its power resonating within you...",
        options: [
            { text: "Return to the Path", nextScene: "start" }
        ]
    },
    studyWaters: {
        text: "You study the healing properties of the spring, enhancing your magic abilities...",
        options: [
            { text: "Continue Exploring", nextScene: "exploreFurtherGrove" },
            { text: "Return to the Path", nextScene: "start" }
        ]
    }
    */
};

// Function to update the game interface with current scene and options
function updateGame() {
    const currentScene = scenes[gameState.currentScene];
    const gameTextElement = document.getElementById('game-text');
    const optionsContainer = document.getElementById('options-container');
    const inventoryList = document.getElementById('inventory-list');
    const strengthStat = document.getElementById('strength-stat');
    const magicStat = document.getElementById('magic-stat');
    const diplomacyStat = document.getElementById('diplomacy-stat');
    const sceneImageElement = document.getElementById('scene-image');


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