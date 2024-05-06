// background/background.js

// Event listener for color picker value changes
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'colorPickerValueChanged') {
    const selectedColor = message.value;
    // Send message to content script to apply text color
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'applyTextColor', color: selectedColor });
      }
    });
  }
});

// Event listener for resetting text colors
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'resetToDefault') {
    // Send message to content script to reset text colors
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'resetToDefault' });
      }
    });
  }
});
