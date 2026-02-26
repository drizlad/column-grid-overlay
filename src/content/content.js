/**
 * Content script - Entry point for grid overlay
 * Simplified version - grid state is per-page-load, not persisted
 */

let gridRenderer = null;

/**
 * Load configuration from storage
 */
async function loadConfig() {
  try {
    const result = await chrome.storage.sync.get('gridConfig');
    return result.gridConfig || {
      columnCount: 12,
      gutterWidth: 20,
      marginWidth: 0,
      columnColor: 'rgba(255, 0, 0, 0.1)',
      gutterColor: 'rgba(0, 0, 255, 0.1)',
      showGutters: false,
      maxWidth: null,
      centered: false
    };
  } catch (error) {
    console.error('Failed to load config:', error);
    return {
      columnCount: 12,
      gutterWidth: 20,
      marginWidth: 0,
      columnColor: 'rgba(255, 0, 0, 0.1)',
      gutterColor: 'rgba(0, 0, 255, 0.1)',
      showGutters: false,
      maxWidth: null,
      centered: false
    };
  }
}

/**
 * Save configuration to storage
 */
async function saveConfig(config) {
  try {
    await chrome.storage.sync.set({ gridConfig: config });
  } catch (error) {
    console.error('Failed to save config:', error);
  }
}

/**
 * Initialize the grid renderer
 */
async function initialize() {
  try {
    const config = await loadConfig();
    gridRenderer = new GridRenderer(config);
    console.log('[Column Grid] Initialized');
  } catch (error) {
    console.error('Failed to initialize grid:', error);
  }
}

/**
 * Handle messages from popup and background
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('[Column Grid] Received message:', message.type);
  
  // Handle synchronously first, then do async work
  if (message.type === 'GET_CONFIG') {
    if (gridRenderer) {
      sendResponse({ 
        success: true, 
        config: gridRenderer.config,
        isVisible: gridRenderer.isVisible
      });
    } else {
      sendResponse({ success: false, error: 'Grid not initialized' });
    }
    return false;
  }
  
  if (message.type === 'TOGGLE_GRID') {
    if (gridRenderer) {
      gridRenderer.toggle();
      console.log('[Column Grid] Toggled, now visible:', gridRenderer.isVisible);
      sendResponse({ success: true, isVisible: gridRenderer.isVisible });
    } else {
      sendResponse({ success: false, error: 'Grid not initialized' });
    }
    return false;
  }
  
  if (message.type === 'UPDATE_CONFIG') {
    if (gridRenderer) {
      gridRenderer.updateConfig(message.config);
      saveConfig(gridRenderer.config);
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false, error: 'Grid not initialized' });
    }
    return false;
  }
  
  if (message.type === 'SHOW_GRID') {
    if (gridRenderer) {
      gridRenderer.show();
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false, error: 'Grid not initialized' });
    }
    return false;
  }
  
  if (message.type === 'HIDE_GRID') {
    if (gridRenderer) {
      gridRenderer.hide();
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false, error: 'Grid not initialized' });
    }
    return false;
  }
  
  sendResponse({ success: false, error: 'Unknown message type' });
  return false;
});

/**
 * Handle window resize with debouncing
 */
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (gridRenderer && gridRenderer.isVisible) {
      gridRenderer.render();
    }
  }, 150);
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
