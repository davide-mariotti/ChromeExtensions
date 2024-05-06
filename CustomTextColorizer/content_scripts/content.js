// content_scripts/content.js

// Define elements and tags to target
const elementsToTarget = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'li', 'button', 'a', 'div', 'span', 'label'];

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'applyTextColor') {
    const textColor = message.color;
    applyTextColor(textColor);
  } else if (message.type === 'resetToDefault') {
    resetTextColors();
  }
});

// Function to apply text color to specific elements with !important
function applyTextColor(color) {
  elementsToTarget.forEach(tag => {
    document.querySelectorAll(tag).forEach((element) => {
      element.style.setProperty('color', color, 'important');
    });
  });
}

// Function to reset text colors to default
function resetTextColors() {
  elementsToTarget.forEach(tag => {
    document.querySelectorAll(tag).forEach((element) => {
      element.style.color = '';
    });
  });
}
