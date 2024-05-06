// popup/popup.js

document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const applyColorBtn = document.getElementById('applyColorBtn');
    const resetBtn = document.getElementById('resetBtn');
  
    // Event listener for applying selected color
    applyColorBtn.addEventListener('click', () => {
      const selectedColor = colorPicker.value;
      if (isValidColor(selectedColor)) {
        chrome.runtime.sendMessage({ type: 'colorPickerValueChanged', value: selectedColor });
      } else {
        alert('Invalid color value. Please select a valid color.');
      }
    });
  
    // Event listener for resetting text colors
    resetBtn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ type: 'resetToDefault' });
    });
  
    // Function to check if color value is valid
function isValidColor(color) {
  const span = document.createElement('span');
  span.style.color = color;
  return span.style.color !== '';
}

  });
  