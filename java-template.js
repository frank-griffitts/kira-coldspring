function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("open");
}

// Example modal content (normally you'd fetch from JSON or server)
const locationInfo = {
  "Castle Blackstone": {
    title: "Castle Blackstone",
    description: "An ancient fortress overlooking the eastern hills. Whispers of undead haunt its crumbling halls.",
    gmLink: "gm/castle-blackstone.html"
  },
  "Windmere Village": {
    title: "Windmere Village",
    description: "A peaceful farming hamlet with secrets buried beneath the soil.",
    gmLink: "gm/windmere-village.html"
  }
};

// Modal Logic
document.querySelectorAll('.location').forEach(loc => {
  loc.addEventListener('click', () => {
    const name = loc.querySelector('.tooltip').textContent;
    const data = locationInfo[name];

    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-description").innerText = data.description;
    document.getElementById("gm-link").onclick = () => {
      window.location.href = data.gmLink;
    };

    document.getElementById("locationModal").style.display = "block";
  });
});

document.querySelector('.close').onclick = function () {
  document.getElementById("locationModal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("locationModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
