// Function to remove Reddit results from search outputs
function removeRedditResults() {
  // Select the search results container
  const searchResultsContainer = document.getElementById('rso');
  if (!searchResultsContainer) return;

  // Select all search result links within the container
  const searchResultLinks = searchResultsContainer.querySelectorAll('a');

  // Loop through the search result links
  searchResultLinks.forEach((link) => {
    const url = link.href;

    // Check if the URL contains "reddit.com"
    if (url.includes('reddit.com')) {
      // Find the parent element of the search result item and remove it
      const resultItem = link.closest('.g');
      if (resultItem) {
        resultItem.remove();
      }
    }
  });
}

// Call the function to remove Reddit results immediately
removeRedditResults();

// Observe the search results container for any changes (infinite scrolling, etc.)
const observer = new MutationObserver(() => {
  removeRedditResults();
});

// Select the search results container element
const searchResultsContainer = document.getElementById('rso');

// Start observing the search results container
if (searchResultsContainer) {
  observer.observe(searchResultsContainer, { childList: true, subtree: true });
}
