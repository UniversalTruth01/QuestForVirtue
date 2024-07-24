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
            { text: "Enter the Whispering Woods", nextScene: "whisperingWoods" },
            { text: "Ascend to the Mystic Mountain", nextScene: "mysticMountain" },
            { text: "Explore the Royal Castle", nextScene: "royalCastle" }
        ]
    },
    whisperingWoods: {
        text: "You enter the Whispering Woods. Ancient trees whisper secrets around you...",
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
        image: "lostFaerie.png",
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
        text: "As you walk deeper into the Enchanted Forest, the air around you hums with magic, and ancient trees whisper secrets of the realm. Ahead, the path splits, offering you several options:",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },
    LostFaerieClues: {
        text: "As you walk deeper into the Enchanted Forest, the air around you hums with magic, and ancient trees whisper secrets of the realm. Ahead, the path splits, offering you several options:",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },
    LostFaerieKnowledge: {
        text: "As you walk deeper into the Enchanted Forest, the air around you hums with magic, and ancient trees whisper secrets of the realm. Ahead, the path splits, offering you several options:",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },
    LostFaerieContinue: {
        text: "As you walk deeper into the Enchanted Forest, the air around you hums with magic, and ancient trees whisper secrets of the realm. Ahead, the path splits, offering you several options:",
        options: [
            { text: "Whispering Grove", nextScene: "WhisperingGrove" },
            { text: "Shadowy Glen", nextScene: "ShadowyGlen" },
        ]
    },
    WhisperingGrove: {
        text: "A path veers off to the right, leading to a tranquil grove where ethereal whispers beckon you closer.",
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
    text: "Curious about the whispers, you approach the grove cautiously. You discover a group of lost spirits, trapped between realms and seeking guidance.",
    options: [
        { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
        { text: "Crystal Falls", nextScene: "CrystalFalls" },
    ]
},
BypassTheGrove: {
    text: "Curious about the whispers, you approach the grove cautiously. You discover a group of lost spirits, trapped between realms and seeking guidance.",
    options: [
        { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
        { text: "Crystal Falls", nextScene: "CrystalFalls" },
    ]
},
ExploreTheRuins: {
    text: "Curious about the whispers, you approach the grove cautiously. You discover a group of lost spirits, trapped between realms and seeking guidance.",
    options: [
        { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
        { text: "Crystal Falls", nextScene: "CrystalFalls" },
    ]
},
AvoidTheGlen: {
    text: "Curious about the whispers, you approach the grove cautiously. You discover a group of lost spirits, trapped between realms and seeking guidance.",
    options: [
        { text: "Moonlit Clearing", nextScene: "MoonlitClearing" },
        { text: "Crystal Falls", nextScene: "CrystalFalls" },
    ]
},
MoonlitClearing: {
    text: "A faint glow catches your eye to the right, leading to a serene moonlit clearing where fireflies dance in harmony.",
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
    options: [
        { text: "Starlit Grove", nextScene: "StarlitGrove" },
        { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
    ]
},
ContinueWithoutDistraction: {
    text: "Opting to press onward without pausing in the moonlit clearing, you maintain focus on your quest. While you avoid potential distractions, you miss the opportunity to experience Harmony with the natural world and encounter a magical barrier guarded by spirits that would have guided you through a perilous swamp.",
    options: [
        { text: "Starlit Grove", nextScene: "StarlitGrove" },
        { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
    ]
},
ExploreCrystalFalls: {
    text: "Drawn by the allure of Crystal Falls, you discover a hidden grotto behind the cascading waters. Within, you find ancient runes etched into the walls. By deciphering the runes with patience and determination, you unlock a shimmering gem of Perseverance left by an ancient sage. Your journey continues with newfound perseverance, avoiding a labyrinth of illusions that would have otherwise led you astray.",
    options: [
        { text: "Starlit Grove", nextScene: "StarlitGrove" },
        { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
    ]
},
StayOnCourse: {
    text: "Opting to stay focused on your current path and avoid potential detours at Crystal Falls, you proceed with caution. While you maintain your course, you miss the opportunity to uncover ancient wisdom and must navigate through a dense thicket, encountering fierce creatures along the way.",
    options: [
        { text: "Starlit Grove", nextScene: "StarlitGrove" },
        { text: "Twilight Marsh", nextScene: "TwilightMarsh" },
    ]
},
StarlitGrove: {
    text: "To the right, a path winds towards a tranquil grove bathed in the soft glow of starlight, where mystical creatures gather under the celestial canopy.",
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
    text: "To the right, a path winds towards a tranquil grove bathed in the soft glow of starlight, where mystical creatures gather under the celestial canopy.",
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
    options: [
        { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
        { text: "Go to home page", nextScene: "start" }
    ]
},
AvoidInteraction: {
    text: "Deciding to maintain focus on your quest, you bypass the starlit grove without engaging with the creatures. While you avoid potential distractions, you miss the opportunity to gain Understanding from the mystical creatures' teachings, encountering a dense thicket of thorns that slows your journey.",
    options: [
        { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
        { text: "Go to home page", nextScene: "start" }
    ]
},
NavigateTheMarsh: {
    text: "Braving the eerie twilight marsh, you navigate through its murky waters, using your keen senses to avoid hidden perils. By demonstrating courage and perseverance, you discover a hidden passage guarded by ancient spirits, who reward you with a gleaming gem of Courage. Your journey continues with newfound bravery, bypassing a labyrinth of illusions that would have otherwise led you astray.",
    options: [
        { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
        { text: "Go to home page", nextScene: "start" }
    ]
},
FindADetour: {
    text: "Opting to find a detour around the twilight marsh, you carefully navigate through dense underbrush and avoid the potential dangers lurking within. While you avoid immediate risks, you miss the opportunity to demonstrate Resilience in the face of challenges, encountering a series of puzzling illusions that test your resolve.",
    options: [
        { text: "Go to the Mystic Mountains!", nextScene: "mysticMountain" },
        { text: "Go to home page", nextScene: "start" }
    ]
},













    mysticMountain: {
        text: "You ascend towards the Mystic Mountain. Crystalline streams flow amidst towering peaks...",
        options: [
            { text: "Ascend to the Celestial Summit", action: function() {
                gameState.gems.spirituality = true;
                gameState.currentScene = "celestialSummit";
                updateGame();
            }},
            { text: "Explore the Crystal Caverns", action: function() {
                gameState.currentScene = "crystalCaverns";
                updateGame();
            }}
        ]
    },
    royalCastle: {
        text: "You arrive at the majestic Royal Castle. Turrets rise towards the sky and banners flutter in the breeze...",
        options: [
            { text: "Visit the Royal Library", nextScene: "royalLibrary" },
            { text: "Attend the Royal Court", nextScene: "royalCourt" }
        ]
    },
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
    celestialSummit: {
        text: "You reach the Celestial Summit, where celestial beings share profound insights...",
        options: [
            { text: "Embrace the Wisdom", nextScene: "mysticMountain" }
        ]
    },
    crystalCaverns: {
        text: "You explore the Crystal Caverns, uncovering rare crystals and their mystical energies...",
        options: [
            { text: "Gather Luminous Crystals", nextScene: "mysticMountain" }
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