/**
 * Background service worker
 * Handles keyboard shortcuts and global state management
 */

// Handle keyboard command
chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'toggle-grid') {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (tab && tab.id) {
        await chrome.tabs.sendMessage(tab.id, { type: 'TOGGLE_GRID' });
      }
    } catch (error) {
      console.error('Failed to toggle grid:', error);
    }
  }
});

// Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Column Grid Overlay installed');
  } else if (details.reason === 'update') {
    console.log('Column Grid Overlay updated');
  }
});
