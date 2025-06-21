  // Modal content by ID
const modalDescriptions = {
    "mercenary-camp": {
        title: "Sumacwick Mercenary Camp",
        text: "<p>Nestled in the shadow of ancient, crumbling ziggurats, the camp is surrounded by skeletal trees and low-lying fog. Broken columns jut from the earth like jagged teeth, remnants of a civilization long devoured by time. Ramshackle tents and iron-banded wagons form a loose horseshoe shape around a roaring fire pit where a spit roasts some unfortunate forest beast. Banners with false heraldry flap in the wind—ostensibly a freelance company called the Iron Vultures—but subtle sigils of the Ministry are worked into the stitching (DC 15 Investigation to detect). Lanterns glow with green flame, powered by alchemical oil imported from Belladonna.</p>",
        link: "loc-yew-sumacwickCamp.html"
    },

    "catacomb-echoes": {
        title: "Catecomb of Echoes",
        text: "<p>Directly beneath the Forgotten Reliquary, the Catacombs of Echoes are reached via a spiraling descent through the Ember Crucible. The air grows fetid and warm, thick with mildew and rot. Sound behaves strangely—whispers echo too long, and footsteps rebound with ghostly persistence.</p >",
        link: "loc-yew-catacombOfEchoes.html"
    },

    "hemlock-falls": {
        title: "Hemlock Falls",
        text: "<p>The Hemlock Falls cascade from a cliff of blackstone, crashing down into a mist-veiled basin surrounded by jagged rocks and twisted hemlock trees. The water is unnaturally clear—almost silver in moonlight—but bitterly cold to the touch. During full moons, ghostly figures can be seen reflected in the water that are not present in the material world. The sound of the falls mutes all conversation within 15 feet, granting a sense of both awe and dread. Birds avoid the basin. Animals refuse to drink from it.</p>",
        link: "loc-yew-hemlockFalls.html"
    },

    "lost-reliquary": {
        title: "The Lost Reliquary",
        text: "<p>Beneath Hemlock Falls, accessed by clearing a collapsed stair tunnel, lies the Forgotten Reliquary — a long-sealed sanctum meant to contain ancient divine relics and the dark powers they once held at bay. The entrance arch bears inscriptions in both Ancient Elvish and Abyssal: “The flame of faith binds the gate. Speak with light, or be cast into shadow.”</p>",
        link: "loc-yew-lostReliquary.html"
    },

    "chamber-portals": {
        title: "Chamber of Portals",
        text: "<p>Deep beneath the Catacombs of Echoes lies a scorched staircase of obsidian and bone, revealed only when the Echo Prism meets radiant light. The descent flickers with eldritch whispers, each step naming forgotten souls. Divine lights falter. Torches fail. At its end stands an immense door, pulsing red beneath six radiant glyphs. One glyph has already gone dark.</p > ",
        link: "loc-yew-chamberOfPortals.html"
    },

    "queens-retreat": {
        title: "Hawthorns Retreat",
        text: "<p>Hidden an hour’s hike west of Hemlock Falls through thistle-thick trails and moss-choked woods, Hawthorn’s Retreat appears at first like a ruin swallowed by the forest. A wooden gate set into a hill, veiled by tangled ivy and druidic illusions, conceals a fortified hollow of timber lodges and watch platforms camouflaged among tall pines. Above the entrance is a sigil carved into petrified bark—a stag entwined with thorns, the personal seal of House Hawthorn in exile</p> ",
        link: "loc-yew-queensRetreat.html"
    },

    "incubatorium": {
        title: "Draconis Incubatorium",
        text: "<p>Deep beneath the Catacombs of Echoes, a scorched spiral stairwell descends into a vaulted basalt chamber. At its base stands a massive obsidian gate adorned with petrified dragon claws. Glyphs pulse with sickly green energy, guarding the sanctum.<br><em>Inscription above the gate (in Draconic and Infernal):</em><br>“Their wings shall rise in silence. Speak the name of the First Flame, or feed the nest in pieces.”</p>",
        link: "loc-yew-draconisIncubatorium.html"
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
