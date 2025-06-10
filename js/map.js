document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('locationModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const modalClose = document.getElementById('modal-close');

    // When a map marker is clicked
    document.querySelectorAll('.map-marker').forEach(marker => {
        marker.addEventListener('click', () => {
            const locationId = marker.dataset.id;
            const location = locationData[locationId]; // locationData is from locations.js

            if (location) {
                modalTitle.textContent = location.title;

                let fullDescription = location.description;

                // Append interiors if they exist
                if (location.interiors && Array.isArray(location.interiors)) {
                    fullDescription += `<br><hr><strong>Interior Rooms:</strong><br>`;
                    location.interiors.forEach(room => {
                        fullDescription += `<br><u>${room.name}</u><br>${room.description}`;
                    });
                }

                modalDescription.innerHTML = fullDescription;
                modalLink.href = location.link || "#";
                modalLink.style.display = location.link ? "inline-block" : "none";
            } else {
                modalTitle.textContent = "Unknown Location";
                modalDescription.innerHTML = "<p>No additional information available.</p>";
                modalLink.style.display = "none";
            }

            modal.style.display = "block";
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
