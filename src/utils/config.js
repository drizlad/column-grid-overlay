// Default configuration for the grid overlay
const DEFAULT_CONFIG = {
  columnCount: 12,
  gutterWidth: 20,
  marginWidth: 0,
  columnColor: 'rgba(255, 0, 0, 0.1)',
  gutterColor: 'rgba(0, 0, 255, 0.1)',
  showGutters: false,
  isVisible: false,  // Default to hidden - will be per-tab
  maxWidth: null,
  centered: false
};

// Storage keys
const STORAGE_KEYS = {
  CONFIG: 'gridConfig',
  PRESETS: 'customPresets',
  LAST_PRESET: 'lastUsedPreset',
  PER_DOMAIN: 'domainConfigs',
  TAB_STATES: 'tabStates'  // Store per-tab visibility
};

// Make available globally for content scripts
if (typeof window !== 'undefined') {
  window.DEFAULT_CONFIG = DEFAULT_CONFIG;
  window.STORAGE_KEYS = STORAGE_KEYS;
}
