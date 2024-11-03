// Get the search input field
const searchInput = document.querySelector('.input.is-link');

// Get all the panel blocks
const panelBlocks = document.querySelectorAll('.panel-block');

// Add an event listener to the search input field
searchInput.addEventListener('input', () => {
    // Get the user's input
    const userInput = searchInput.value.toLowerCase();

    // Loop through all the panel blocks
    panelBlocks.forEach(panelBlock => {
        // Get the text content of the panel block
        const panelBlockText = panelBlock.textContent.toLowerCase();

        // Check if the panel block text contains the user's input
        if (panelBlockText.includes(userInput)) {
            // If it does, show the panel block
            panelBlock.style.display = 'flex';
        } else {
            // If it doesn't, hide the panel block
            panelBlock.style.display = 'none';
        }
    });
});
