function saveRareSongCount() {
    // Save the rare song count for the current user
    localStorage.setItem(`${userId}_rareSongCount`, rareSongCount);
}

function loadRareSongCount() {
    // Retrieve the rare song count for the current user
    const savedRareSongCount = localStorage.getItem(`${userId}_rareSongCount`);
    if (savedRareSongCount) {
        rareSongCount = parseInt(savedRareSongCount, 10);
        rareSongCounterElement.textContent = `Rare Song Count: ${rareSongCount}`;
    }
}

// Call this function to load the rare song count when the page loads
loadRareSongCount();
