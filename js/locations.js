const locationData = {
  "belladonna-square": {
    title: "Belladonna Town Square",
    description: `
      <strong>Exterior Description:</strong><br>
      The heart of Belladonna is a lively stone-paved square surrounded by three-story buildings, whose architecture blends elven curve and human function. 
      Flower boxes overflow from upper windows, and colorful laundry strings between balconies like festival banners. 
      A central fountain carved from pale marble depicts the mythical Hart of Yew, a sacred stag said to guard lost travelers.<br><br>
      Around the square are cobbled alleys leading to various guildhouses, shops, and homes. 
      By morning, it bustles with market stalls; by night, it glows with lanterns strung across iron hooks and enchanted lights swaying on gusts of magic.<br><br>
      <em>Notable Buildings:</em> Mira’s Apothecary and Rangers’ Dormitories.
    `,
    interiors: [
      {
        name: "Mira’s Apothecary (Herbs & Whispers)",
        description: `
          <strong>Exterior:</strong> Narrow storefront with a hanging sign of a mortar and pestle surrounded by twining ivy. Smells of lavender, myrrh, and something faintly bitter.<br><br>
          <strong>Front Room:</strong> Shelves packed with dried herbs, potion vials, bundled roots, glowing spores, and small charms. A glass case displays special potions (labeled but locked).<br><br>
          <strong>Counter Area:</strong> Scales, ledgers, and an enchanted talking raven named Grackle who gossips freely unless told to hush.<br><br>
          <strong>Back Room:</strong> Workbench with alchemical tools, drying racks, and two sleeping cots — one for Mira and one for her cat, Vixie (who may or may not be a disguised familiar).<br><br>
          <strong>Basement:</strong> Accessible via ladder — stores older tomes and failed experiments. There’s a hidden niche behind a stone shelf.
        `
      },
      {
        name: "Rangers’ Dormitories",
        description: `
          <strong>Exterior:</strong> A three-story wooden and stone building with a green-tile roof and ivy creeping up its north side. Houses traveling rangers, scouts, and local wilderness guides.<br><br>
          <strong>First Floor:</strong> Common area with a fireplace, notice board, and modest mess hall. Trophy antlers and carved wooden map fragments hang on the walls.<br><br>
          <strong>Second Floor:</strong> Shared quarters. Bunks with footlockers. Kira’s is near the window — spare, orderly, and littered with bowstring scraps, trail maps, and pressed wildflowers. A cracked mirror is hung with a raven feather (a charm she took from her first hunt).<br><br>
          <strong>Third Floor:</strong> Ranger Captain’s quarters and a locked supply armory (DC 16 lock).<br><br>
          <strong>Roof Access:</strong> From a concealed hatch; perfect for stargazing or secret meetings.
        `
      }
    ],
    link: "loc-bel-townsquare.html"
    },

    "belladonna-blacksmith": {
        title: "Baider’s Forge",
        description: `
    <strong>Exterior Description:</strong><br>
    Baider’s forge is tucked near the southern edge of Belladonna, where the cobblestones give way to beaten dirt paths and the scent of soot clings to the wind. 
    The building is squat, square, and utterly practical — stone walls with dark timber beams, a thick chimney that belches smoke by dawn, and a wrought-iron anvil sign creaking above the door.<br><br>
    A few rusted swords and horseshoes hang on pegs outside. A wooden training dummy — half-burnt and slashed to ribbons — leans against the side wall. 
    Deep gouges scar the stone doorstep from years of hammering metal and slamming stubborn doors. Blackened scorch marks climb up the chimney’s flank like claw marks.
  `,
        interiors: [
            {
                name: "Main Forge Room",
                description: `
        <strong>Interior:</strong> The heart of the shop — roaring forge, anvils, barrels of scrap, and racks of unfinished weapons. 
        A dozen sets of tongs hang like fingers from a wall. The heat is intense. A small shrine to Moradin (the dwarven god of craft) sits behind a tool rack, half-forgotten.<br><br>
        A single window is permanently jammed shut, covered in soot.<br><br>
        An iron-banded chest contains special commissions (locked, DC 16 thieves’ tools).<br><br>
        Baider keeps a heavy two-handed hammer always within arm’s reach.
      `
            },
            {
                name: "Front Sales Area",
                description: `
        <strong>Interior:</strong> Dusty shelves of tools, nails, horseshoes, and basic weapons. 
        A low counter with a cracked ledger and a locked drawer containing coin pouches and receipts. 
        Customer requests (most denied) are pinned to the wall.<br><br>
        A small sign reads: “No sword will save a fool’s life twice.”<br><br>
        A dented shield once belonging to a fallen ranger leans in a corner — Kira’s old training shield.
      `
            },
            {
                name: "Storage Room / Living Quarters",
                description: `
        <strong>Interior:</strong> Simple cot, shelves of food, half-built gear, and several sealed crates marked with an old military insignia (Baider’s former mercenary unit). 
        A few dusty sketches of Kira as a child (poorly drawn) are tucked into the edge of the mirror.<br><br>
        The back wall has a locked trapdoor (details to be revealed in future content).<br><br>
        A note is pinned to the wall in Baider’s heavy hand: “She’s not coming back. Good.”
      `
            }
        ],
        link: "loc-bel-blacksmith.html"
    },

    "belladonna-well": {
        title: "The Town Well & Cistern Caverns",
        description: `
    <strong>Exterior Description:</strong><br>
    Nestled at the edge of Belladonna’s central square, the town well is a round stone structure with a crumbling lip and rusted pulley crank. 
    Weeds grow between the stones, and a faded wooden sign warns: “Drink not past the frost moon.”<br><br>
    Locals avoid it, claiming the water “tastes wrong” and sometimes “talks back.” 
    The bucket is missing, the rope snapped, and a cold wind sometimes rises from the shaft — even on windless days. 
    Crows perch on the rim and stare silently.<br><br>
    The shaft descends nearly 60 feet into darkness and opens into the long-forgotten cistern network far below.
  `,
        interiors: [
            {
                name: "Shaft Descent",
                description: `
        <strong>Interior:</strong> The upper shaft is lined with carved stone that transitions into rough, moss-covered masonry. 
        Around 30 feet down, walls begin to sweat with moisture and glowing green moss appears. 
        At 55 feet, the shaft opens into a crumbled chamber — an access hub with three tunnels branching out.<br><br>
        A subtle, rhythmic vibration pulses in the stone when touched.
      `
            },
            {
                name: "Forgotten Aqueduct",
                description: `
        <strong>Interior:</strong> This narrow tunnel is flooded thigh-deep with brackish water. 
        Cracked statues of ancient elven design line the walls — their faces eerily smooth with age.<br><br>
        Faint chanting echoes occasionally with no discernible source. Old sigils on the walls emit a faint glow, causing minor hallucinations.<br><br>
        `
            },
            {
                name: "Ancient Cistern Hall",
                description: `
        <strong>Interior:</strong> A vast vaulted chamber, once used to store water, now dry and echoing. 
        Stalactites cling to the ceiling, several containing embedded bones. 
        A broken pipe drips oily black ichor into a stagnant central pool.<br><br>
        <strong>Central Feature:</strong> A rune-ringed stone wellhead pulses with arcane energy, connecting to lower catacombs.<br><br>
      `
            },

        ],
        link: "loc-bel-whisperingWell.html"
    },

    "belladonna-tavern": {
        title: "The Wyrmblood Flask",
        description: `
    <strong>Exterior Description:</strong><br>
    Nestled between leaning timber buildings on the edge of Belladonna’s town square, the Wyrmblood Flask boasts a moss-covered roof that slouches into the cobbled street. 
    A weather-beaten sign creaks above the crooked door, depicting a dragon skull dripping red liquid into a goblet. 
    Lanterns of pale amber swing on rusted hooks, and the scent of roasted boar and pipe smoke wafts from the cracked shutters.<br><br>
    Locals whisper that the tavern was built atop the bones of a slain wyrmling — and its wine barrels were once baptized in its blood.
  `,
        interiors: [
            {
                name: "Main Taproom",
                description: `
        <strong>Interior:</strong> A chaotic, cozy space lit by a massive hearth beneath a mounted wyvern skull. 
        Tables are mismatched and the creaky floorboards groan under every footstep. 
        A three-eyed tabby cat named Mischief naps on the bar, widely regarded as a lucky omen.<br><br>
        A familiar sign reads: “No weapons drawn unless you're slicing roast. My rules.”<br><br>
        The barkeep, Trelga Fatsnout, watches everything from behind the bar with a smile and a hidden steel club.
      `
            },
            {
                name: "The Snare Stage",
                description: `
        <strong>Interior:</strong> A small raised platform where minstrels, gamblers, and even a wrestling kobold once performed. 
        The crowd is always lively, but a sign overhead warns: “No songs about owlbears mating.”<br><br>
        Patrons can challenge each other to games of chance or recite poetry for a round on the house (if they survive the heckling).
      `
            },
            {
                name: "Private Alcoves",
                description: `
        <strong>Interior:</strong> Deep, curtained booths with silencing runes etched into the wood for privacy. 
        Ideal for secretive meetings — or quiet confessions. Trelga charges extra for what she calls “discreet ears.”<br><br>
        Runes on the tabletops pulse faintly when lies are spoken.
      `
            },
            {
                name: "Cellar",
                description: `
        <strong>Interior:</strong> A cool, barrel-lined room used for ale, bribes, and the occasional corpse. 
        A reinforced trapdoor in the corner is “just for rats,” according to the staff — though it's sealed with three claw-marked runes.<br><br>
      `
            },
            {
                name: "Upstairs Rooms",
                description: `
        <strong>Interior:</strong> Three guest rooms:<br><br>
        — One is permanently booked by a mute elven traveler.<br>
        — One is believed haunted by the ghost of a jilted bard.<br>
        — One is full of glowing mushrooms, for reasons no one explains.<br><br>
        Mischief the cat avoids the hallway at night, which has made guests uneasy.
      `
            }
        ],
        link: "loc-bel-tavern.html"
    }



};


