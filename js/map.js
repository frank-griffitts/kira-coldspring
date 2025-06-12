  // Modal content by ID
const modalDescriptions = {
    "town-square": {
        title: "Town Square",
        text: "The Town Square is the bustling heart of Belladonna. Merchants gather, gossip flows, and all roads lead through this cobbled hub of activity.",
        link: "loc-bel-townsquare.html"
    },
    "ranger-guild": {
        title: "Ranger Guild",
        text: "This sturdy lodge houses the elite Rangers of Yew, known for their deadly aim and secret missions into the wilds.",
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
