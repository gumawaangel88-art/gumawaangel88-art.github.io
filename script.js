// ==============================
// MY PORTFOLIO DATA
// ==============================

const portfolioItems = [

    {
        name: "Basic Python Programs",
        category: "Python",
        description: "Simple Python programming activities and exercises."
    },

    {
        name: "Basic HTML Coding Activities",
        category: "HTML",
        description: "HTML activities for practicing webpage structure."
    },

    {
        name: "Java Programming Exercises",
        category: "Java",
        description: "Java exercises for practicing programming concepts."
    },

    {
        name: "Portfolio Website",
        category: "Web Development",
        description: "A personal portfolio created using HTML, CSS, and JavaScript."
    },

    {
        name: "Responsive Website Design",
        category: "CSS",
        description: "Practicing website layouts that work on different screen sizes."
    }
];


// ==============================
// FUNCTION 1
// ==============================
// This function receives a value
// and RETURNS a new list.
//
// It does NOT change the webpage.

function searchPortfolio(searchWord) {

    const word = searchWord.trim().toLowerCase();

    // Guard against empty input.
    if (word === "") {
        return [];
    }

    const results = portfolioItems.filter(function(item) {

        return (
            item.name.toLowerCase().includes(word) ||
            item.category.toLowerCase().includes(word) ||
            item.description.toLowerCase().includes(word)
        );

    });

    return results;
}


// ==============================
// FUNCTION 2
// ==============================
// This function takes the list
// and displays it inside the
// empty HTML container.

function displayPortfolio(items) {

    const container =
        document.getElementById("portfolio-list");

    // Clear previous results.
    container.innerHTML = "";


    // Guard against an empty list.
    if (!Array.isArray(items) || items.length === 0) {

        container.innerHTML = `
            <p class="search-message">
                No results found. Please try
                Python, HTML, Java, CSS, or Web.
            </p>
        `;

        return;
    }


    // Loop through the list.
    items.forEach(function(item) {

        // Guard against missing information.
        if (
            !item ||
            !item.name ||
            !item.category ||
            !item.description
        ) {
            return;
        }


        // Create a new card.
        const card = document.createElement("div");

        card.className = "portfolio-card";


        // Put the project information inside the card.
        card.innerHTML = `
            <h3>${item.name}</h3>

            <p>
                <strong>Category:</strong>
                ${item.category}
            </p>

            <p>
                ${item.description}
            </p>
        `;


        // Add the card to the empty container.
        container.appendChild(card);

    });
}


// ==============================
// GET HTML CONTROLS
// ==============================

const searchInput =
    document.getElementById("portfolio-search");

const searchButton =
    document.getElementById("search-button");


// ==============================
// SEARCH BUTTON
// ==============================

searchButton.addEventListener("click", function() {

    const searchWord = searchInput.value;


    // Guard against empty input.
    if (searchWord.trim() === "") {

        displayPortfolio([]);

        return;
    }


    // Get a new filtered list.
    const results = searchPortfolio(searchWord);


    // Display the new list.
    displayPortfolio(results);

});


// ==============================
// ENTER KEY
// ==============================

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchButton.click();

    }

});

