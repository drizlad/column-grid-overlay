/**
 * Popup controller - Manages the popup UI and communication with content script
 */

class PopupController {
  constructor() {
    this.config = null;
    this.elements = {};
    this.currentTab = null;
    this.init();
  }

  async init() {
    try {
      this.cacheElements();
      await this.getCurrentTab();
      await this.loadCurrentConfig();
      this.populateUI();
      this.attachEventListeners();
    } catch (error) {
      console.error('Failed to initialize popup:', error);
      this.showError('Failed to initialize. Please refresh the page.');
    }
  }

  cacheElements() {
    this.elements = {
      toggleSwitch: document.getElementById('toggle-grid'),
      presetSelect: document.getElementById('preset-select'),
      columnInput: document.getElementById('column-count'),
      gutterInput: document.getElementById('gutter-width'),
      marginInput: document.getElementById('margin-width'),
      columnColorPicker: document.getElementById('column-color'),
      columnOpacity: document.getElementById('column-opacity'),
      columnOpacityValue: document.getElementById('column-opacity-value'),
      showGutters: document.getElementById('show-gutters'),
      gutterColorGroup: document.getElementById('gutter-color-group'),
      gutterColorPicker: document.getElementById('gutter-color'),
      gutterOpacity: document.getElementById('gutter-opacity'),
      gutterOpacityValue: document.getElementById('gutter-opacity-value'),
      savePresetBtn: document.getElementById('save-preset'),
      resetBtn: document.getElementById('reset-defaults'),
      incrementBtns: document.querySelectorAll('.btn-increment'),
      decrementBtns: document.querySelectorAll('.btn-decrement')
    };
  }

  async getCurrentTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    this.currentTab = tab;
  }

  async loadCurrentConfig() {
    try {
      // First, load from storage (always available)
      const result = await chrome.storage.sync.get(STORAGE_KEYS.CONFIG);
      this.config = result[STORAGE_KEYS.CONFIG] || { ...DEFAULT_CONFIG };
      
      // Try to ensure content script is loaded and get current state
      try {
        await this.ensureContentScriptLoaded();
        const response = await chrome.tabs.sendMessage(this.currentTab.id, { 
          type: 'GET_CONFIG' 
        });
        
        if (response && response.success) {
          this.config = response.config;
          this.config.isVisible = response.isVisible;
        }
      } catch (contentScriptError) {
        // Content script not available on this page (restricted)
        console.log('Content script not available on this page');
      }
    } catch (error) {
      console.error('Failed to load config:', error);
      this.config = { ...DEFAULT_CONFIG };
    }
  }

  populateUI() {
    // Toggle switch
    this.elements.toggleSwitch.checked = this.config.isVisible || false;

    // Numeric inputs
    this.elements.columnInput.value = this.config.columnCount;
    this.elements.gutterInput.value = this.config.gutterWidth;
    this.elements.marginInput.value = this.config.marginWidth;

    // Color and opacity
    const columnColor = this.parseRgbaColor(this.config.columnColor);
    this.elements.columnColorPicker.value = columnColor.hex;
    this.elements.columnOpacity.value = columnColor.opacity;
    this.elements.columnOpacityValue.textContent = `${columnColor.opacity}%`;

    const gutterColor = this.parseRgbaColor(this.config.gutterColor);
    this.elements.gutterColorPicker.value = gutterColor.hex;
    this.elements.gutterOpacity.value = gutterColor.opacity;
    this.elements.gutterOpacityValue.textContent = `${gutterColor.opacity}%`;

    // Show gutters checkbox
    this.elements.showGutters.checked = this.config.showGutters || false;
    this.toggleGutterColorVisibility();

    // Check if current config matches a preset
    this.updatePresetSelection();
  }

  attachEventListeners() {
    // Toggle switch
    this.elements.toggleSwitch.addEventListener('change', (e) => {
      this.toggleGrid(e.target.checked);
    });

    // Preset selection
    this.elements.presetSelect.addEventListener('change', (e) => {
      this.applyPreset(e.target.value);
    });

    // Numeric inputs
    this.elements.columnInput.addEventListener('input', () => this.updateConfig());
    this.elements.gutterInput.addEventListener('input', () => this.updateConfig());
    this.elements.marginInput.addEventListener('input', () => this.updateConfig());

    // Increment/Decrement buttons
    this.elements.incrementBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);
        input.value = parseInt(input.value) + 1;
        this.updateConfig();
      });
    });

    this.elements.decrementBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);
        const newValue = parseInt(input.value) - 1;
        if (newValue >= parseInt(input.min)) {
          input.value = newValue;
          this.updateConfig();
        }
      });
    });

    // Color pickers
    this.elements.columnColorPicker.addEventListener('input', () => this.updateConfig());
    this.elements.columnOpacity.addEventListener('input', (e) => {
      this.elements.columnOpacityValue.textContent = `${e.target.value}%`;
      this.updateConfig();
    });

    this.elements.gutterColorPicker.addEventListener('input', () => this.updateConfig());
    this.elements.gutterOpacity.addEventListener('input', (e) => {
      this.elements.gutterOpacityValue.textContent = `${e.target.value}%`;
      this.updateConfig();
    });

    // Show gutters checkbox
    this.elements.showGutters.addEventListener('change', () => {
      this.toggleGutterColorVisibility();
      this.updateConfig();
    });

    // Action buttons
    this.elements.savePresetBtn.addEventListener('click', () => this.saveCustomPreset());
    this.elements.resetBtn.addEventListener('click', () => this.resetToDefaults());
  }

  async toggleGrid(isVisible) {
    try {
      // First, try to inject content script if not already present
      await this.ensureContentScriptLoaded();
      
      const response = await chrome.tabs.sendMessage(this.currentTab.id, { 
        type: 'TOGGLE_GRID' 
      });
      
      if (response && response.success) {
        this.elements.toggleSwitch.checked = response.isVisible;
      } else {
        console.error('Toggle failed:', response?.error);
        this.elements.toggleSwitch.checked = isVisible;
      }
    } catch (error) {
      // Content script not available (restricted page like chrome://)
      console.log('Cannot inject on this page:', error.message);
      this.elements.toggleSwitch.checked = false;
      this.showRestrictedPageMessage();
    }
  }

  async ensureContentScriptLoaded() {
    try {
      // Try to ping the content script
      await chrome.tabs.sendMessage(this.currentTab.id, { type: 'GET_CONFIG' });
    } catch (error) {
      // Content script not loaded, try to inject it
      console.log('Injecting content script...');
      await chrome.scripting.executeScript({
        target: { tabId: this.currentTab.id },
        files: ['src/utils/config.js', 'src/content/gridRenderer.js', 'src/content/content.js']
      });
      await chrome.scripting.insertCSS({
        target: { tabId: this.currentTab.id },
        files: ['src/styles/grid.css']
      });
      // Wait a moment for scripts to initialize
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  showRestrictedPageMessage() {
    // Show a brief message that this page doesn't support the grid
    const status = document.createElement('div');
    status.className = 'status-message';
    status.textContent = 'Grid not available on this page';
    status.style.cssText = 'color: #888; font-size: 11px; text-align: center; padding: 8px; background: #f5f5f5; margin-top: 10px; border-radius: 4px;';
    
    // Remove any existing status message
    const existing = document.querySelector('.status-message');
    if (existing) existing.remove();
    
    document.body.appendChild(status);
  }

  async updateConfig() {
    // Gather values from UI
    const newConfig = {
      columnCount: parseInt(this.elements.columnInput.value),
      gutterWidth: parseInt(this.elements.gutterInput.value),
      marginWidth: parseInt(this.elements.marginInput.value),
      columnColor: this.buildRgbaColor(
        this.elements.columnColorPicker.value,
        this.elements.columnOpacity.value
      ),
      gutterColor: this.buildRgbaColor(
        this.elements.gutterColorPicker.value,
        this.elements.gutterOpacity.value
      ),
      showGutters: this.elements.showGutters.checked
    };

    // Update local config
    this.config = { ...this.config, ...newConfig };

    // Save to storage (always works)
    try {
      await chrome.storage.sync.set({ [STORAGE_KEYS.CONFIG]: this.config });
    } catch (error) {
      console.error('Failed to save to storage:', error);
    }

    // Send to content script (may fail on restricted pages)
    try {
      await chrome.tabs.sendMessage(this.currentTab.id, {
        type: 'UPDATE_CONFIG',
        config: newConfig
      });
    } catch (error) {
      // Content script not available - config saved to storage, will apply on next page load
      console.log('Config saved to storage, will apply on page refresh');
    }

    // Update preset selection
    this.updatePresetSelection();
  }

  applyPreset(presetName) {
    if (presetName === 'custom') {
      return;
    }

    const preset = PRESETS[presetName];
    if (preset) {
      this.config = { ...this.config, ...preset };
      this.populateUI();
      this.updateConfig();
    }
  }

  updatePresetSelection() {
    // Check if current config matches any preset
    let matchedPreset = 'custom';

    for (const [key, preset] of Object.entries(PRESETS)) {
      if (this.configMatchesPreset(this.config, preset)) {
        matchedPreset = key;
        break;
      }
    }

    this.elements.presetSelect.value = matchedPreset;
  }

  configMatchesPreset(config, preset) {
    return (
      config.columnCount === preset.columnCount &&
      config.gutterWidth === preset.gutterWidth &&
      config.marginWidth === preset.marginWidth
    );
  }

  async saveCustomPreset() {
    const presetName = prompt('Enter a name for this preset:');
    
    if (!presetName || presetName.trim() === '') {
      return;
    }

    try {
      await savePreset(presetName, this.config);
      alert(`Preset "${presetName}" saved successfully!`);
    } catch (error) {
      console.error('Failed to save preset:', error);
      alert('Failed to save preset. Please try again.');
    }
  }

  async resetToDefaults() {
    if (confirm('Reset all settings to defaults?')) {
      this.config = { ...DEFAULT_CONFIG };
      this.populateUI();
      await this.updateConfig();
    }
  }

  toggleGutterColorVisibility() {
    if (this.elements.showGutters.checked) {
      this.elements.gutterColorGroup.style.display = 'block';
    } else {
      this.elements.gutterColorGroup.style.display = 'none';
    }
  }

  parseRgbaColor(rgbaString) {
    // Parse rgba(r, g, b, a) to hex and opacity percentage
    const match = rgbaString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]+)?\)/);
    
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      const a = match[4] ? parseFloat(match[4]) : 1;

      const hex = '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('');

      const opacity = Math.round(a * 100);

      return { hex, opacity };
    }

    return { hex: '#ff0000', opacity: 10 };
  }

  buildRgbaColor(hex, opacity) {
    // Convert hex and opacity to rgba string
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const a = (parseInt(opacity) / 100).toFixed(2);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  showError(message) {
    // Simple error display (could be enhanced with better UI)
    alert(message);
  }
}

// Initialize popup when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PopupController();
});
