  // Modal content by ID
const modalDescriptions = {
    "town-square": {
        title: "Town Square",
        text: "<p>The heart of Belladonna is a lively stone-paved square surrounded by three-story buildings, whose architecture blends elven curve and human function. Flower boxes overflow from upper windows, and colorful laundry strings between balconies like festival banners. A central fountain carved from pale marble depicts the mythical Hart of Yew, a sacred stag said to guard lost travelers.</p><p>Around the square are cobbled alleys leading to various guildhouses, shops, and homes. By morning, it bustles with market stalls; by night, it glows with lanterns strung across iron hooks and enchanted lights swaying on gusts of magic.</p><p>Two notable buildings face each other across the square: </p><ul><li>Mira’s Apothecary</li><li>Rangers’ Dormitories</li></ul></p>",
        link: "loc-bel-townsquare.html"
    },
    "ranger-guild": {
        title: "Ranger Guild",
        text: "<p>The Rangers Guild House stands half-hidden beneath the tall pines on the north edge of Belladonna. Crafted from mossy greenstone and dark weathered timber, it blends into the forest like a predator in ambush. A slanted slate roof is overgrown with ivy and hanging moss. A large hawk-carved crest over the main archway marks the entrance — the symbol of the Rangers Guild.</p><p>Thick vines wrap around the building’s outer beams, and small blue foxgloves grow wild in the overgrown garden beds. Nearby, a training field with archery targets and wooden dummies is patrolled by young initiates.</p><p>Two notable buildings face each other across the square: </p>",
        link: "loc-bel-rangersGuild.html"
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
