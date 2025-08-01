// script.js

// Accordion functionality
const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
    const panel = accordion.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

// Modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementsByClassName("close")[0];
const galleryImages = document.querySelectorAll(".grid img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Updated search functionality with "No results" message
const searchBar = document.getElementById("searchBar");


// Add the message just below the grid (if not already added)
const grid = document.querySelector(".grid");
let noResults = document.getElementById("no-results");

if (!noResults) {
  noResults = document.createElement("p");
  noResults.id = "no-results";
  noResults.textContent = "No games found.";
  noResults.style.display = "none";
  noResults.style.color = "#ccc";
  noResults.style.marginTop = "1rem";
  noResults.style.textAlign = "center";
  grid?.parentNode.insertBefore(noResults, grid.nextSibling);
}

searchBar?.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  let matchCount = 0;

  galleryImages.forEach((img) => {
    const altText = img.alt.toLowerCase();
    if (altText.includes(query)) {
      img.style.display = "block";
      matchCount++;
    } else {
      img.style.display = "none";
    }
  });

  // Toggle the no-results message
  noResults.style.display = matchCount === 0 ? "block" : "none";
});

// Form submission handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gameRequestForm");

  form?.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const genre = document.getElementById("genre").value;
    const suggestion = document.getElementById("suggestion").value;

    // Display confirmation (you can customize this or send to backend)
    alert(`Thanks, ${name}! Your suggestion for a "${genre}" game has been received.`);

    // Optional: Clear the form
    form.reset();
  });
});