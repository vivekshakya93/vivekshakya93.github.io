
const themeToggle = document.getElementById("themeToggle");
const searchInput = document.getElementById("searchInput");
const articleGrid = document.getElementById("articleGrid");

// Dark Mode
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

// Search articles
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();
    const cards = articleGrid.querySelectorAll(".card");

    cards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});

// Current year
const yearElement = document.querySelector("footer p");

if (yearElement) {
    yearElement.textContent =
        "© " + new Date().getFullYear() +
        " Vivek Tech Hub. All rights reserved.";
}

console.log("Vivek Tech Hub website loaded successfully!");
