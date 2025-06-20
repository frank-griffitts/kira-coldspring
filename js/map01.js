  // Modal content by ID
const modalDescriptions = {
    "town-square": {
        title: "Town Square",
        text: "<p>The heart of Belladonna is a lively stone-paved square surrounded by three-story buildings, whose architecture blends elven curve and human function. Flower boxes overflow from upper windows, and colorful laundry strings between balconies like festival banners. A central fountain carved from pale marble depicts the mythical Hart of Yew, a sacred stag said to guard lost travelers.</p><p>Around the square are cobbled alleys leading to various guildhouses, shops, and homes. By morning, it bustles with market stalls; by night, it glows with lanterns strung across iron hooks and enchanted lights swaying on gusts of magic.</p><p>Two notable buildings face each other across the square: </p><ul><li>Mira’s Apothecary</li><li>The Whispering Well</li></ul></p>",
        link: "loc-bel-townsquare.html"
    },

    "ranger-guild": {
        title: "Ranger Guild",
        text: "<p>The Rangers Guild House stands half-hidden beneath the tall pines on the north edge of Belladonna. Crafted from mossy greenstone and dark weathered timber, it blends into the forest like a predator in ambush. A slanted slate roof is overgrown with ivy and hanging moss. A large hawk-carved crest over the main archway marks the entrance — the symbol of the Rangers Guild.</p><p>Thick vines wrap around the building’s outer beams, and small blue foxgloves grow wild in the overgrown garden beds. Nearby, a training field with archery targets and wooden dummies is patrolled by young initiates.</p><p>Two notable buildings face each other across the square: </p>",
        link: "loc-bel-rangersGuild.html"
    },

    "baiders-smithy": {
        title: "Baider’s Forge",
        text: "<p>Baider’s forge is tucked near the north-eastern edge of Belladonna, where the cobblestones give way to beaten dirt paths and the scent of soot clings to the wind. The building is squat, square, and utterly practical — stone walls with dark timber beams, a thick chimney that belches smoke by dawn, and a wrought-iron anvil sign creaking above the door.<p></p>A few rusted swords and horseshoes hang on pegs outside. A wooden training dummy — half-burnt and slashed to ribbons — leans against the side wall. Deep gouges scar the stone doorstep from years of hammering metal and slamming stubborn doors. Blackened scorch marks climb up the chimney’s flank like claw marks.</p>",
        link: "loc-bel-blacksmith.html"
    },

    "wyrmblood-flask": {
        title: "The Wyrmblood Flask",
        text: "<p>Nestled between leaning timber buildings on the edge of Belladonna’s town square, the Wyrmblood Flask boasts a moss-covered roof that slouches into the cobbled street. A weather- beaten sign creaks above the crooked door, depicting a dragon skull dripping red liquid into a goblet.</p><p>Lanterns of pale amber swing on rusted hooks, and the scent of roasted boar and pipe smoke wafts from the cracked shutters. Locals whisper that the tavern was built atop the bones of a slain wyrmling — and its wine barrels were once baptized in its blood.</p>",
        link: "loc-bel-tavern.html"
    },

    "onyx-cottage": {
        title: "Onyx's Cottage",
        text: "<p>On the mossy northern edge of Belladonna, nestled against the treeline of Whispering Pines, lies Onyx’s cottage.At first glance, it appears to be a humble dwarven stone home built into the hillside — a moss - cloaked roof, rune - carved chimney puffing smoke, and ivy creeping up the iron - latched shutters.A solitary birch tree glows faintly in the moonlight, leafless and watchful. Protective runes encircle the grounds, creating a subtle barrier.</p > ",
        link: "loc-bel-onyxCottage.html"
    },

    "magistrate": {
        title: "Belladonna Magistrate",
        text: "<p>The Magistrate Hall looms in the heart of Belladonna’s central square — a somber, ivy-choked stone building with arched gothic windows, an iron clock tower, and a pair of tarnished bronze gryphon statues guarding its stairs. A pair of banners hang from the second-floor balcony: the green-and-gold sigil of Belladonna and the darker royal sigil of the Hawthorn family.</p>Vines creep up the north side, as if trying to reclaim the structure. The stones are chipped, stained from weather and time. Black wrought-iron lanterns glow with soft witchlight in the evenings. Crows frequently roost on the clock tower, adding to its eerie reputation.</p> ",
        link: "loc-bel-magistrate.html"
    },

    "apartments": {
        title: "Quiver Row",
            text: "<p>Nestled along the northwest edge of Belladonna’s central ward, the Ranger Apartment District is a narrow, sloping cobbled lane known colloquially as “Quiver Row.” The street is lined with narrow, stacked stone-and-timber cottages, each no wider than a single wagon but rising up two or three stories like vertical quivers. Shuttered windows, wooden balconies, and laundry lines stretch from roof to roof. Most doors are reinforced with dark oak and bear small carvings of hawks, arrows, or crescent moons—symbols of the Rangers Guild..</p><p>A communal message board stands crooked at the end of the lane, filled with local notices, bounty flyers, and scratched-in jokes. Oil lanterns hang from iron arms along the walls, enchanted to flicker gently at night with a blue-tinted flame. The scent of pine tar and roasted game is ever-present.</p><p>Children of rangers play with wooden swords in the alley, and neighbors tend rooftop gardens. Despite its charm, there’s a hush about the place after sundown—like the street itself listens for returning boots… or ones that never come back.</p>",
        link: "loc-bel-apartments.html"
    },

    "blackpines": {
        title: "Blackpines Outpost",
        text: "<p>Deep in the twisted woodland southwest of Belladonna, shrouded in near-perpetual mist and dead silence. The Blackpines Thicket is a cursed wood, avoided even by wildlife..</p><p>Once a proud forward operating post for the Rangers of Yew, this hidden outpost was the site of a covert massacre fifteen years ago—one that set in motion the cover-up that still haunts the kingdom.</p>",
        link: "loc-bel-blackpines.html"
    },

    "hemlock": {
        title: "The Road to Hemlock Falls",
        text: "<p>A day's journey north of Belladonna, the narrow road ends at the Ruins of Sumacwick, one of the first elvish settlements abadoned for unkown reasons over two-hundred years ago.</p><p>The waterfalls are fed year round by the snowmelt from the glaciers in the mountaintops surrounding the high plateau.</p>",
        link: "map02.html"
    },

    "moonspire": {
        title: "Moonspire Temple",
        text: "<p>Eight hours east of Belladonna, the narrow road ends at the at a crumbling Orcish Shrine, the Hidden Temple of Astaroth. The Orcs of yore paid tribute to their patron Archon here before the border wars.</p><p>Rumors now play throughout the village of Belladonna that the old songs can be heard from forgotten chambers under the ancient temple ruins.</p>",
        link: "loc-bel-moonspire.html"
    }
            






    // Add more entries as needed
};


function openModal(id) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");

    const data = modalDescriptions[id];

    if (data) {
        modalText.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.text}</p>
      <a href="${data.link}" class="modal-button" target="_blank">SPOILER ALERT: Dungeon Masters Only</a>
    `;
    } else {
        modalText.innerHTML = "<p>Description not available.</p>";
    }

    modal.style.display = "block";
}


    function closeModal() {
        document.getElementById("modal").style.display = "none";
  }

    // Utility: Convert kebab-case to Title Case
    function toTitleCase(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
  }

    // Optional: Close modal on outside click
    window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
  };
