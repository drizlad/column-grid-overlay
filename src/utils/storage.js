// Storage utility functions for chrome.storage.sync

/**
 * Load configuration from storage
 * @returns {Promise<Object>} Grid configuration
 */
async function loadConfig() {
  try {
    const result = await chrome.storage.sync.get(STORAGE_KEYS.CONFIG);
    return result[STORAGE_KEYS.CONFIG] || { ...DEFAULT_CONFIG };
  } catch (error) {
    console.error('Failed to load config:', error);
    return { ...DEFAULT_CONFIG };
  }
}

/**
 * Save configuration to storage
 * @param {Object} config - Grid configuration
 * @returns {Promise<void>}
 */
async function saveConfig(config) {
  try {
    await chrome.storage.sync.set({
      [STORAGE_KEYS.CONFIG]: config
    });
  } catch (error) {
    console.error('Failed to save config:', error);
  }
}

/**
 * Load a preset by name
 * @param {string} name - Preset name
 * @returns {Promise<Object|null>} Preset configuration or null
 */
async function loadPreset(name) {
  try {
    const result = await chrome.storage.sync.get(STORAGE_KEYS.PRESETS);
    const presets = result[STORAGE_KEYS.PRESETS] || {};
    return presets[name] || null;
  } catch (error) {
    console.error('Failed to load preset:', error);
    return null;
  }
}

/**
 * Save a custom preset
 * @param {string} name - Preset name
 * @param {Object} config - Grid configuration
 * @returns {Promise<void>}
 */
async function savePreset(name, config) {
  try {
    const result = await chrome.storage.sync.get(STORAGE_KEYS.PRESETS);
    const presets = result[STORAGE_KEYS.PRESETS] || {};
    presets[name] = config;
    await chrome.storage.sync.set({
      [STORAGE_KEYS.PRESETS]: presets
    });
  } catch (error) {
    console.error('Failed to save preset:', error);
  }
}

/**
 * Delete a custom preset
 * @param {string} name - Preset name
 * @returns {Promise<void>}
 */
async function deletePreset(name) {
  try {
    const result = await chrome.storage.sync.get(STORAGE_KEYS.PRESETS);
    const presets = result[STORAGE_KEYS.PRESETS] || {};
    delete presets[name];
    await chrome.storage.sync.set({
      [STORAGE_KEYS.PRESETS]: presets
    });
  } catch (error) {
    console.error('Failed to delete preset:', error);
  }
}

/**
 * List all custom presets
 * @returns {Promise<string[]>} Array of preset names
 */
async function listPresets() {
  try {
    const result = await chrome.storage.sync.get(STORAGE_KEYS.PRESETS);
    const presets = result[STORAGE_KEYS.PRESETS] || {};
    return Object.keys(presets);
  } catch (error) {
    console.error('Failed to list presets:', error);
    return [];
  }
}

/**
 * Reset configuration to defaults
 * @returns {Promise<void>}
 */
async function resetToDefaults() {
  try {
    await chrome.storage.sync.set({
      [STORAGE_KEYS.CONFIG]: { ...DEFAULT_CONFIG }
    });
  } catch (error) {
    console.error('Failed to reset to defaults:', error);
  }
}
