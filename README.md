# 10/11/2024

## 1.1
- Added "Septimo" Pup Skin
  - Unlocked with 3000 Pets or more
- Added Screenshot Feature (press 0 on PC)
- Added Screenshot Button
- Added New Main Menu Pup Animation (1% chance)
- Added Audio Loading from the Github (It isn't in the "and wait" loading so it won't load 4 forever)
- Added Dog Walker Shop Item

- Changed design of the "Cap" Pup Skin Slightly
- Changed design of the "White" Pup Skin Slightly
- Changed Puppy Selector Icons Slightly
- Changed how skin jsons are loaded (all use one file now)
- Changed how Pets are displayed (Changed it to dollars now)
- Changed some Code stuff for consistent counters

- Fixed Bug where Pup Selector icons wouldn't do the Fake Lock
- Fixed "Spot" Puply Selector Icon

# 9/22/2024

## 1.0.2
- Added Random Chance (10%) for Main Menu pupet to change animation
- Added Unlocking Conditions for the other Pet skins
  - White skin Unlocked with 200 Pets or more
  - Spot skin Unlocked with 600 Pets or more
  - Bud skin Unlocked with 2000 Pets or more
- Added Costume to Gameplay Pup for when you unlock something
- Added Setting for toggling less important graphical assets
- Added Randomness to Splash

- Changed Default Settings for newcomers (only brown Pup skin is there)
- Changed Version format (Major.Minor.Path.Build)

- Fixed Bug where the unlocked Pup skin icons would be removed immediately on the leaving of the Puppy selector
- Fixed black Pup bug
- Fixed Bug where game Pup would stay on the Main menu
- Fixed JSON Save not being accurate to actual save

# 9/20/24

## 1.0.1
- Fixed Overlaping Music Tracks
- Fixed Shop Buttons not Abiding its click and level limitations
- Fixed Pup Selector not leaving if you didn't have certain conditions checked

- Changed Speed of Credits scroll (slightly)
- Changed Scroll amount for mobile control buttons

- Added Main Menu Pup (uses OPARS)

## 1.0
- Added 20 more random splash texts
- Added JSON Save File Length Check to make sure you can't just load a random JSO  and corrupt shit
- Added Pup skin Buffs and Debuffs (Affects any and all automatic counters)
- Added Final Translations
- ADDED RANK DISPLAY TO MAIN MENU (Username Set Menu)
- ADDED 7 NEW RANKS
  - Added Atrocious Rank
  - Added Awful Rank
  - Added Bad Rank
  - Added Good Rank
  - Added Excellent Rank
  - Added Perfect Rank
  - Added Complete Rank
- Added OFFICIAL PUPET ANIMATED RIG SYSTEM
  - Added Animation Rig for Rank intro (arrive on the Main Menu)
- Added Custom Terminal for the Game
- Added Debugger Console Extension (recommended by drago_cuven)
- Added New Background Track for when you have an Excellent Rank or higher (Song Swaps every Track Update : Settings Refresh, Song ends, etc)
- Added Music Sprite (guess what it is for)
- Added PUPPY SELECTOR
  - Added new Background Track for this Menu
- Added ScriptCall Broadcasts
- Added VERY MINIMAL "Shader" Support (effefts only certain things until a more optimized method of application is found)
- ADDED 2 NEW PUP SKINS
  - Added the "Bull" Pup Skin
    - Unlocked when you have 2,000 Pets or more
  - Added the "Cap" Pup Skin
    - Unlocked when you have 50,000 Pets or more
- Added "?" Buttons to MainMenu (outline for future buttons)
- Added little Container Sprite to MainMenu

- Fixed Bug where the Shop Button click amount didn't reset
- Fixed Treats Shop Item Costumes
- Fixed Button some Shop Button code whenever it is maxed out
- Fixed Username Wrapping in Spanish Translation
- Fixed Buttons being click able even when they are maxed out
- Fixed suble Shadow of splash text on Main Menu
- Fixed Missing Brightness Fade Application to Savedata Username Text
- Fixed Double Click button not working. FINALLY.
- Fixed Bug where autosave display wouldn't work properly
- Fixed Bug where Petters wouldn't load if you left and came back to gameplay

- Changed how Upgrading a Shop Item works
- Changed how the Pup loads Pup Skins
- Changed Positions of the MainMenu Button
- Changed Position of Volume Option in settings

- Removed Spanish Setting Replace
- Removed ability to exceed Treat Bonus Button Level Limit with the "lagman" username
- Removed JSON Autosaving (got annoying)
- Removed Fade from MainMenu to Gameplay
- Removed Loading Text from Public Display (aka visible only in dev mode)

# 9/11/2024

## pre-1.12
- Fixed Missing Credits for Dev Fork
- Fixed Lower-Row Buttons Moving up after clicking them in Username Set Menu
- Fixed Clone Issues caused by the Back Button
- Fixed how Loading Settings works

- Added new Pet skin: Spot
- Added new Pet skin: Bud
- Added Back button to Gameplay
- Added code to replace Saves with the spanish setting to english

- Changed Default Settings: Music enabled by default
- Changed Position of Status Text

- Removed Spanish Translation (temporary)
- Removed Username Status Text

# 9/8/2024

## pre-1.11
- Fixed [Status Text Merging when the alignment is down](https://github.com/DragginGroup/Pupet/issues/7)
- Fixed Usernames with the length of 7 being cut off
- Fixed Autosave causing the game to ask for you to load your save
- Fixed [Petters not being loaded from your save](https://github.com/DragginGroup/Pupet/issues/6)
- Fixed [Incorrect Changelog](https://github.com/DragginGroup/Pupet/issues/5)
- Fixed [Missing Credits](https://github.com/DragginGroup/Pupet/issues/4)

- Removed Latest Commit Github Info
# 9/2/2024

## pre-1.10
- Changed how the game decides to register the development stuff in the changelog menu
- Changed when Pet skins are loaded
- Changed when the loading begins

- Added Search Parameter workings
  - Added Search Parameter to skip Splash screen
- Added comas for number Values in the thousands using the money value Custom reporter
- Added trillions short number letter to numbers using the money value Custom reporter
- Added money value Custom reporter to the status Tab numbers
- Added Settings Menu
  - Added Music Setting
  - Added Volume Setting
  - Added Language Setting
- Added UPPERCASE letters to Text Engine
- Added Credits Menu (uses the github)
- Added JSON Save loading and saving
- Added Spanish translation

- Fixed Usernames with the length of 5 overlapping the non-pet zone
- Fixed Usernames with UPPERCASE characters not showing
- Fixed Treats Shop Item Never Upgrading
- Fixed Treats every 2 second text in username setting menu
- Fixed Loading speeds of data grabbed from the github (changelog, Credits JSON, and anything else)
- Fixed Changelog Text being darker if you enter the changelog menu early
- Fixed Text Engine Word Wrapping
- Fixed Loading Speeds?

# 9/1/2024

## pre-1.05
- Added "[username] is loading" message to loading screen
- Added Custom tail for the "white" skin of the pup
- Added Username Setting Menu at the start of gameplay (doubles as debug menu)
- Added New Special Username: savedata (only used in username setting menu)
- Added Changelog Menu
- Added Split Letter to TextEngine Custom Block
- Added Upgrade Tab Shop
- Added Pet Click Amount
- Added Pet Click Amount Save Value
- Added x2 Upgrade
- Added Short Number to Pets amount
- Added Background Music Track
- Added quick little splash screen
- Added Developer Variable to control development only features
- Added "Treat" Shop Item
- Added Treats every 2 seconds script
- Added Treat Shop Item Save Value
- Changed Pup tail length
- Changed Pup size for start of project
- Changed how reseting your save works: doesn't reset username
- Fixed 0 being the value of the Button cooldowns
- Fixed Bug where you could have a blank username

# 8/31/2024

## pre-1.041
- Fixed Bug where having your name as lagman would disable Shop item(s)
- Fixed how Usernames are trimmed when they overlap the non-pet zone
- Fixed? blank username

## pre-1.04
- Fixed Bug where the “Petter” Shop Item would register clicks when they shouldn’t
- Fixed Shop automatically being open
- Fixed Old Saves not able to be reloaded after a Save Reset
- Changed how Shop Items work.
- Changed how Shop Items are optimized
- Added Pet counter outside of the status Tab
- Added [Username]’s pet Text in the “Pet zone” along with a username length check
- Added Petter Objects
- Added Petter Save Value
- Added Petter Object Loading
- Added Arrow to Alignment Buttons
- Added 2 new Levels to Petter Shop Item
- Added Petter Shop Item Level Save Value
- Added Infinite Clones Back
- Added Petter Shop Item Limit of 60 clicks
  - Limit is removed if your username is lagman
- Removed early button pen rendered text (it was hidden)

# 8/30/2024

## pre-1.03
- Changed Screen Width to 640
- Changed Positions of UI Elements
- Changed Pup Position
- Changed Functionality of how Version is set
- Changed Status Tab text to "Status"
- Added Proper Backdrop
- Added TextEngine Alignment "tag" for following the set alignment
- Added Random Coloring to Backdrop
- Added "white" skin for Pup
- Added Loading Screen for Initalization
- Added Loading Screen Text
- Added Shop Tab
- Added Petter Shop Item
- Added TextEngine Block for returning Large money Values
- Added Petter Shop Item
- Fixed Bug where Auto-Save "Saved!" Clones could run code they shouldn't run and caused major lag
- Fixed how Saving works
- Removed Infinate Clones

# 8/29/2024

## pre-1.02
- Added cool Autosaved Animation
- Added Alignment to Buttons, TextEngine, and Pup (default: up)
- Added Button to change Alignment
- Added Text Engine
- Added Pets per Second Display
- Added Smooth Button Alignment Transition (cannot add to text engine sadly)
- Added randomness to Pup's inital movement variable
- Added Status Tab
- Changed Pet Display to use TextEngine
- Changed Version Display to use TextEngine
- Changed Total Pets Display to use TextEngine

## pre-1.01
- Added Save Reset Button
- Added Save Button
- Added Autosave Display
- Added Autosaving (every minute)
- Added Pets per Second functionality
- Removed automatic save reset
- Removed not "touching mouse pointer" block from Pup spr

## pre-1
- Base Project
