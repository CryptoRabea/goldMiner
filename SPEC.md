# Gold Miner Game - Specification Document

## 1. Project Overview

**Project Name:** Gold Rush Frenzy - A Cartoon Gold Miner Game

**Core Functionality:** A casual, cartoon-style arcade game featuring a swinging claw mechanism where players time their releases to grab treasure items of varying weights and values. The game combines strategic risk/reward gameplay with progression systems, story mode, and multiplayer modes.

**Target Users:** Casual gamers of all ages who enjoy timing-based arcade games and treasure hunting mechanics.

---

## 2. Visual & Rendering Specification

### Art Style
- **Theme:** Warm, nostalgic cartoon mining aesthetic with a whimsical underground world
- **Style:** Hand-drawn cartoon style with bold outlines, exaggerated proportions, and playful animations
- **Color Palette:**
  - Primary: Warm earth tones (#8B4513 brown, #D2691E chocolate, #F4A460 sandy brown)
  - Accent: Gold/amber (#FFD700, #FFA500), gem colors (emerald green, ruby red, sapphire blue)
  - UI: Cream/parchment (#FFF8DC), rustic wood textures
  - Underground: Gradient from surface brown to deep purple/blue for depth

### Scene Setup

**Main Game Screen:**
- Split view: Top 15% for UI (score, timer, gold counter), Bottom 85% for mining area
- Mining area: Underground cross-section showing layered dirt with embedded treasures
- Claw apparatus: Mechanical winch mounted on wooden platform at top center
- Swinging rope/claw: Physics-based pendulum motion

**Environment Layers:**
1. Surface (grass/dirt texture, wooden mine entrance)
2. Shallow earth (lighter brown, common items)
3. Medium depth (mixed earth tones, moderate treasures)
4. Deep layer (darker purple/brown, rare/high-value items)
5. Bedrock (impassable bottom boundary)

### Visual Effects

**Particle Systems:**
- Dirt particles when claw digs through earth
- Sparkle effects on gold/gems
- Dust clouds on item collection
- Explosion particles for bombs
- Victory confetti in story mode

**Animations:**
- Claw swing: Smooth pendulum with elastic rope physics
- Item grab: Bouncy spring animation when claw catches item
- Item pull: Items stretch slightly based on weight
- Character reactions: Miner character with expressive animations
- Shop transitions: Slide-in panels with bounce easing

### UI Design

**In-Game HUD:**
- Gold counter (top-left): Animated coin icon + current gold amount
- Timer (top-center): Circular countdown with color changes
- Level target (top-right): Goal amount displayed
- Bombs counter: Bomb icon with remaining count
- Luck indicator: Clover icon with luck percentage

**Menu Screens:**
- Main Menu: Wooden signpost aesthetic with rope borders
- Shop: General store interface with wooden shelves
- Story: Comic book style cutscenes
- Settings: Parchment scroll design

---

## 3. Game Mechanics Specification

### Core Gameplay - Swinging Claw

**Claw Physics:**
- Base swing period: 2.5 seconds (full pendulum cycle)
- Swing angle range: -60° to +60° from vertical
- Rope length: Variable based on upgrades (300px base, +50px per level)
- Angular velocity: Smooth sinusoidal motion with damping

**Grab Mechanics:**
- Click/Space to release claw
- Claw extends downward along current angle
- Claw speed affected by winch upgrade level
- Collision detection with item bounding boxes
- Grab radius: 30px around claw tips

**Item Physics:**
- Pull speed inversely proportional to item weight
- Heavy items cause rope to stretch (visual effect)
- Very heavy items may cause claw to break (lose item)
- Weight categories: Light (<50), Medium (50-150), Heavy (150-300), Very Heavy (>300)

### Item System

**Item Categories & Values:**

| Item Type | Weight | Value (Gold) | Rarity | Depth Range |
|-----------|--------|--------------|--------|-------------|
| Small Gold Nugget | 20 | 50 | Common | Any |
| Gold Bar | 80 | 200 | Common | 0-400px |
| Large Gold Lump | 150 | 500 | Uncommon | 200-600px |
| Diamond | 10 | 1000 | Rare | 300-700px |
| Emerald | 15 | 750 | Rare | 250-650px |
| Ruby | 12 | 600 | Rare | 200-600px |
| Ancient Coin | 25 | 300 | Uncommon | Any |
| Treasure Chest | 200 | 800 | Rare | 400-700px |
| Dinosaur Fossil | 300 | 1500 | Very Rare | 500-800px |
| Gem Cluster | 100 | 1200 | Rare | 350-750px |
| Mystery Bag | 40 | ??? | Rare | Any |

**Bomb Mechanics:**
- Instant detonation on contact
- Destroys nearby items (2-3 items)
- Provides second chance to grab (claw returns)
- Can destroy diamonds/gems (risk factor)
- 3 bombs per level (upgradeable)

**Trap Items:**
- Bags of sand: Appear as treasure, low value (10 gold), heavy (100)
- Fake gems: Worth nothing, break claw
- Moles: Grabbed, but escape after 2 seconds (time waste)

### Scoring System

**Base Scoring:**
- Item value = Gold earned
- Time bonus: Remaining seconds × 10 gold
- Perfect grab bonus: +100 gold (grabbing high-value item without hesitation)

**Combo System:**
- Consecutive grabs within 3 seconds build combo
- Combo multiplier: 1.5x, 2x, 3x, 5x (max)
- Breaking combo resets multiplier

**Risk Multiplier:**
- Deeper items = higher risk = bonus multiplier
- Depth multiplier: 1x (surface) to 3x (max depth)
- Weight penalty: Heavy items reduce speed bonus

### Level Design

**Level Structure:**
- Each level has a gold target to reach within time limit
- Time limit: 60 seconds base (+5 seconds per level)
- Items randomly distributed with weighted probabilities per depth
- Minimum 3 valuable items guaranteed per level

**Progression Curve:**
- Level 1-5: Tutorial, easy targets, many small gold
- Level 6-10: Introduce gems, moderate targets
- Level 11-15: Introduce heavy items, time pressure
- Level 16-20: Boss levels mixed with regular levels
- Endless mode: After completing story, endless random levels

---

## 4. Story Mode Specification

### Narrative Structure

**Setting:** The year is 1849 during the California Gold Rush. You play as "Lucky Pete," a prospector seeking fortune and adventure.

**Act Structure:**

**Act 1: Humble Beginnings (Levels 1-5)**
- Intro: Lucky Pete arrives in town with empty pockets
- Goal: Earn enough to buy basic mining equipment
- Mini-boss: None
- End: Pete discovers an old map leading deeper

**Act 2: The Rich Vein (Levels 6-10)**
- Intro: Pete hears rumors of a rich gold vein
- Goal: Prove himself to the town mayor
- Mini-boss: Level 8 - "Greedy Gary" (competing prospector)
- End: Pete finds the entrance to an ancient mine

**Act 3: Ancient Depths (Levels 11-15)**
- Intro: The ancient mine holds forgotten treasures
- Goal: Recover legendary artifacts
- Mini-boss: Level 12 - Giant Mole (environmental hazard)
- End: Discovery of the legendary Golden Crown

**Act 4: The Final Push (Levels 16-20)**
- Intro: Pete's rival, Black Bart, seeks the Golden Crown
- Goal: Race to secure the crown and prove worth
- Mini-boss: Level 18 - Black Bart himself
- Final Boss: Level 20 - "The Mine Monster"

### Boss Battles

**Boss 1: Greedy Gary (Level 8)**
- Two-player simultaneous mining
- First to 2000 gold wins
- Gary has slight speed advantage (story mechanic)
- Player must be 15% faster to win

**Boss 2: Giant Mole (Level 12)**
- Mole periodically grabs items from play area
- Must grab items before mole reaches them
- Mole blocks certain areas temporarily
- Defeat when 3 treasure chests collected

**Boss 3: Black Bart (Level 18)**
- Tug-of-war style: each grab pulls gold to your side
- Bart occasionally throws bombs at player
- Special "Lucky Strike" mechanic (random bonus)
- Win by building 3000 gold lead

**Final Boss: The Mine Monster (Level 20)**
- Multi-phase battle
- Phase 1: Grab glowing orbs to damage monster
- Phase 2: Monster tries to steal collected gold
- Phase 3: Final sprint - grab the Golden Crown
- Victory triggers ending sequence

### Cutscenes

**Style:** Comic book panels with speech bubbles
**Transitions:** Page-flip animation between scenes
**Voice:** Text-only with expressive typography
**Length:** 3-5 panels per scene, 10-15 seconds read time

---

## 5. Shop System Specification

### Shop Interface

**Layout:** General store aesthetic
- Left panel: Current gold balance with animated coin
- Center: Upgrade item grid (3×2 layout)
- Right panel: Player stats summary
- Bottom: "Continue" button to next level

### Upgrade Categories

**1. Winch Speed**
| Level | Name | Cost | Effect |
|-------|------|------|--------|
| 0 | Rusty Winch | Free | Base speed (1x) |
| 1 | Oiled Winch | 200 | 1.2x extension speed |
| 2 | Bronze Winch | 500 | 1.5x extension speed |
| 3 | Silver Winch | 1000 | 1.8x extension speed |
| 4 | Gold Winch | 2000 | 2.2x extension speed |
| 5 | Diamond Winch | 5000 | 2.5x extension speed |

**2. Rope Length**
| Level | Name | Cost | Effect |
|-------|------|------|--------|
| 0 | Short Rope | Free | 300px reach |
| 1 | Extended Rope | 300 | 350px reach |
| 2 | Long Rope | 700 | 400px reach |
| 3 | Very Long Rope | 1500 | 450px reach |
| 4 | Master Rope | 3000 | 500px reach |

**3. Lucky Clover (Luck Boost)**
| Level | Name | Cost | Effect |
|-------|------|------|--------|
| 0 | No Luck | Free | 5% chance bonus item |
| 1 | Single Clover | 400 | 10% chance |
| 2 | Double Clover | 800 | 18% chance |
| 3 | Triple Clover | 1500 | 28% chance |
| 4 | Four-Leaf Clover | 3000 | 40% chance |

**4. Bomb Capacity**
| Level | Name | Cost | Effect |
|-------|------|------|--------|
| 0 | No Bombs | Free | 0 bombs |
| 1 | Single Bomb | 250 | 1 bomb |
| 2 | Bomb Pack | 600 | 2 bombs |
| 3 | Bomb Crate | 1200 | 3 bombs |
| 4 | Bomb Vault | 2500 | 5 bombs |

**5. Time Extension**
| Level | Name | Cost | Effect |
|-------|------|------|--------|
| 0 | No Extension | Free | Base 60s |
| 1 | Quick Watch | 350 | +5 seconds |
| 2 | Hourglass | 800 | +10 seconds |
| 3 | Grandfather Clock | 1600 | +15 seconds |
| 4 | Time Crystal | 3000 | +20 seconds |

**6. Diamond Detector**
| Level | Name | Cost | Effect |
|-------|------|------|--------|
| 0 | None | Free | No detection |
| 1 | Glimmer Sense | 600 | Slight sparkle on gems |
| 2 | Gem Radar | 1500 | Gems glow faintly |
| 3 | Crystal Eye | 3000 | Gems clearly highlighted |

### Shop Mechanics

**Persistent Upgrades:** All purchases persist across play sessions (localStorage)
**Upgrade Display:** Shows current level, next upgrade name and cost
**Cannot Downgrade:** Once purchased, cannot refund
**Insufficient Funds:** Grayed out with "Need X more gold" tooltip

---

## 6. Multiplayer Mode Specification

### Mode 1: Local Co-op

**Setup:**
- Two players share keyboard OR two gamepads
- Player 1: Arrow Left/Right for swing, Space to grab
- Player 2: A/D for swing, Enter to grab

**Shared Gameplay:**
- Work together to reach combined gold target
- Targets are 1.5× single-player values
- Shared timer and resources
- Collaborative bonuses for synchronized grabs

**Co-op Bonuses:**
- When both claws grab same item: 1.5× value
- When both claws grab different items within 1s: 2× combo bonus
- Rescue mechanic: Partner can grab your stuck claw

### Mode 2: Versus Mode

**Race Format:**
- Both players have independent claws
- Simultaneous play on mirrored play fields
- First to reach target gold wins
- Items are NOT shared (each player has own field)

**Item Distribution:**
- Versus field has 70% of normal items (more strategic)
- Special "Steal" items appear (grab opponent's gold)
- Random "Swap" items (switch play field positions)

**Round Structure:**
- Best of 3 rounds
- 2 minute time limit per round
- Winner is first to target OR most gold at time-up

**Tiebreaker:**
- If tied at time-up, sudden death round
- One random valuable item appears
- First to grab wins

---

## 7. Audio Specification

### Sound Design

**Music:**
- Main Menu: Upbeat mining tune (120 BPM, accordion + guitar)
- Gameplay: Relaxing underground ambience with subtle melody
- Boss Music: Intensity increase, drum beats
- Victory: Celebratory fanfare with brass instruments
- Defeat: Sad trombone / accordion fall

**Sound Effects:**
- Claw swing: Whoosh sound
- Claw grab: Clank + impact
- Item collect: Value-dependent sound (coin jingle, gem sparkle)
- Bomb explosion: Satisfying boom + debris
- Button clicks: Wooden click
- Menu transitions: Page flip / slide

**Dynamic Audio:**
- Background music adjusts to gameplay state
- Tension builds as timer decreases (pitch/tempo increase)
- Celebration sounds on achievements
- Near-win encouragement (subtle encouragement sounds)

### Audio Implementation
- Web Audio API for sound generation
- Pre-generated audio sprites for performance
- Volume controls for Music, SFX independently
- Mute toggle in settings

---

## 8. Animation Specification

### Character Animations

**Lucky Pete (Idle):**
- Breathing animation (subtle chest movement)
- Occasional blink
- Idle sway left-right

**Lucky Pete (Excited):**
- Jump animation on big grabs
- Fist pump on valuable items
- Face changes (smile, gasp, determined)

**Lucky Pete (Disappointed):**
- Slump on missed grab
- Sweat drop on bomb
- Recover animation

### UI Animations

**Score Counter:**
- Number roll animation on value change
- Coin particles flying to counter
- Glow effect on milestone

**Timer:**
- Pulse animation under 10 seconds
- Color shift: White → Yellow → Orange → Red
- Shake animation under 5 seconds

**Item Reveal:**
- Items fade in with bounce
- Rarity indicated by sparkle intensity
- Depth indicated by subtle parallax

### Transition Animations

**Level Complete:**
- Gold shower particle effect
- Score tallies with typewriter effect
- Shop slide-in from right (300ms, ease-out-back)

**Game Over:**
- Screen shake on failure
- Crack effect overlay
- Dramatic fade to retry screen

---

## 9. Technical Specification

### Technology Stack
- **Rendering:** HTML5 Canvas 2D
- **Audio:** Web Audio API
- **Storage:** localStorage for save data
- **Input:** Keyboard, Mouse, Gamepad API
- **Framework:** Vanilla JavaScript (no dependencies)

### Performance Targets
- 60 FPS on modern browsers
- < 3 second initial load
- Responsive controls (< 16ms input lag)

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Save Data Structure
```javascript
{
  currentLevel: number,
  totalGold: number,
  upgrades: {
    winchSpeed: 0-5,
    ropeLength: 0-4,
    luckyClover: 0-4,
    bombs: 0-4,
    timeExtension: 0-4,
    diamondDetector: 0-3
  },
  settings: {
    musicVolume: 0-1,
    sfxVolume: 0-1,
    fullscreen: boolean
  },
  stats: {
    totalGoldEarned: number,
    highestCombo: number,
    bossesDefeated: number,
    levelsCompleted: number
  }
}
```

---

## 10. Level Generation Algorithm

### Item Placement

```
for each level:
  targetGold = baseTarget + (level × 50)
  depthLayers = 5

  for each depthLayer:
    itemCount = baseCount + (level / 5)
    for each item:
      x = random(minX, maxX) within depth bounds
      y = random(minY, maxY) within depth bounds
      itemType = weightedRandom(rarityTable[depthLayer])
      add item to level
```

### Difficulty Scaling

- Item density: +10% per level
- Target gold: +50 per level
- Time limit: +5s every 2 levels (caps at 90s)
- Rare item probability: +2% per level (caps at 2× base)

---

## 11. Acceptance Criteria

### Core Gameplay
- [ ] Claw swings smoothly with realistic pendulum physics
- [ ] Click/Space releases claw that extends along swing angle
- [ ] Claw collides with and grabs items on contact
- [ ] Heavy items pull slower; very heavy items risk breaking
- [ ] Timer counts down with visual/audio feedback
- [ ] Gold score updates immediately on item collection

### Shop System
- [ ] Shop accessible between levels
- [ ] All 6 upgrade categories functional
- [ ] Upgrades persist across sessions
- [ ] Visual feedback on purchase
- [ ] Insufficient funds clearly indicated

### Story Mode
- [ ] Cutscenes display between acts
- [ ] 20 levels with increasing difficulty
- [ ] 4 boss battles functional
- [ ] Victory/defeat conditions work correctly
- [ ] Game completion state triggers ending

### Multiplayer
- [ ] Co-op mode: two players on shared objective
- [ ] Versus mode: race to target gold
- [ ] Controls responsive for both players
- [ ] Winner determination accurate

### Audio
- [ ] Background music plays (with mute option)
- [ ] Sound effects for all major actions
- [ ] Volume controls functional
- [ ] No audio glitches or loops

### Polish
- [ ] 60 FPS performance maintained
- [ ] Animations smooth and responsive
- [ ] UI readable and intuitive
- [ ] Game saves progress automatically
