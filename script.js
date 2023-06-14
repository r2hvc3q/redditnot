// script.js

// Function to remove Reddit results from search outputs
function removeRedditResults() {
  // Select all search result links
  const searchResultLinks = document.querySelectorAll('a');

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

// Wait for the page to finish loading
window.addEventListener('load', () => {
  // Call the function to remove Reddit results
  removeRedditResults();

  // Observe the search results for any changes (infinite scrolling, etc.)
  const observer = new MutationObserver(() => {
    removeRedditResults();
  });

  // Start observing the search results
  observer.observe(document.body, { childList: true, subtree: true });
});