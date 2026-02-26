t Version**: 1.0.0  
**Last Updated**: January 28, 2026  
**Maintained By**: Development Team
Communication between extension components
- **BEM**: Block Element Modifier CSS naming convention
- **CSP**: Content Security Policy

## Appendix B: Resources

### Official Documentation
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome Storage API](https://developer.chrome.com/docs/extensions/reference/storage/)
- [Message Passing](https://developer.chrome.com/docs/extensions/mv3/messaging/)
- [Content Scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

### Project Documentation
- [TROUBLESHOOTING.md](../TROUBLESHOOTING.md) - Comprehensive troubleshooting guide
- [QUICK-FIX.md](../QUICK-FIX.md) - Quick solutions for common errors
- [CHANGELOG.md](../CHANGELOG.md) - Version history and changes
- [SETUP.md](../SETUP.md) - Setup and development guide
- [TESTING.md](../TESTING.md) - Testing guidelines

---

**Documenst, chore

### 15.3 Code Review Checklist

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation updated
- [ ] No console.log statements
- [ ] Performance impact assessed
- [ ] Security implications considered

---

## Appendix A: Glossary

- **Content Script**: JavaScript that runs in webpage context
- **Service Worker**: Background script for extension logic
- **Manifest V3**: Latest Chrome extension platform
- **chrome.storage.sync**: Cloud-synced storage API
- **Message Passing**: ases

### 14.2 Scalability

- Modular architecture allows easy feature additions
- Message passing protocol is extensible
- Storage schema supports versioning
- Component-based structure enables code reuse

---

## 15. Contributing Guidelines

### 15.1 Development Process

1. Fork repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request
5. Code review and merge

### 15.2 Commit Message Format

```
type(scope): subject

body

footer
```

Types: feat, fix, docs, style, refactor, tee`: For configuration persistence
- `activeTab`: For content script injection

### 13.3 Data Privacy

- No user data collected
- No analytics or tracking
- All data stored locally
- No network requests

---

## 14. Future Architecture Considerations

### 14.1 Potential Improvements

- **State Management**: Consider Redux/Zustand for complex state
- **Build Pipeline**: Add webpack/vite for optimization
- **TypeScript**: Add type safety
- **Testing**: Add Jest for unit tests
- **CI/CD**: Automate builds and rele debounce timing
- Verify no memory leaks in DevTools
- Profile with Chrome Performance tab

### 12.2 Debug Mode

Add debug logging:
```javascript
const DEBUG = true;

function log(...args) {
  if (DEBUG) {
    console.log('[Column Grid]', ...args);
  }
}
```

---

## 13. Security Considerations

### 13.1 Content Security Policy

- No inline scripts or styles
- No eval() or Function() constructors
- All resources loaded locally
- No external API calls

### 13.2 Permissions

Minimal permissions requested:
- `storagn

- One class per file
- Group related utilities together
- Keep files under 300 lines
- Use index.js for module exports

---

## 12. Troubleshooting

### 12.1 Common Issues

**Grid not appearing**:
- Check if content script is injected (DevTools → Sources)
- Verify z-index is high enough
- Check for CSP violations in console

**Configuration not persisting**:
- Verify chrome.storage.sync permissions
- Check storage quota (100KB limit)
- Look for storage errors in console

**Performance issues**:
- Check resizeentions

- Use ES6+ features (const/let, arrow functions, async/await)
- Use camelCase for variables and functions
- Use PascalCase for classes
- Use UPPER_SNAKE_CASE for constants
- Add JSDoc comments for public APIs
- Keep functions small and focused

### 11.2 CSS Conventions

- Use BEM naming convention for classes
- Prefix all classes with `column-grid-overlay`
- Use CSS custom properties for theming
- Avoid !important unless absolutely necessary
- Mobile-first responsive design

### 11.3 File OrganizatioPAs
- [ ] Works on pages with strict CSP
- [ ] Works on pages with high z-index elements

### 10.2 Browser Testing Matrix

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 88+     | ✓      |
| Edge    | 88+     | ✓      |
| Brave   | Latest  | ✓      |
| Opera   | Latest  | ✓      |

### 10.3 Performance Benchmarks

- Grid render time: < 100ms
- Memory footprint: < 5MB
- Resize debounce: 150ms
- No impact on page scroll FPS

---

## 11. Code Style Guidelines

### 11.1 JavaScript Convtly
- [ ] Custom presets can be saved
- [ ] Custom presets can be loaded
- [ ] Custom presets can be deleted

**Interaction**:
- [ ] Grid doesn't interfere with page clicks
- [ ] Grid doesn't interfere with page scrolling
- [ ] Keyboard shortcut toggles grid
- [ ] Toggle switch in popup works

**Responsive**:
- [ ] Grid updates on window resize
- [ ] Grid works on mobile viewport sizes
- [ ] Grid works on ultra-wide displays

**Compatibility**:
- [ ] Works on static HTML pages
- [ ] Works on React/Vue/Angular S

### 10.1 Manual Testing Checklist

**Grid Rendering**:
- [ ] Grid renders correctly on page load
- [ ] Grid spans full viewport height
- [ ] Columns are evenly distributed
- [ ] Gutters are correctly spaced
- [ ] Margins are applied correctly

**Configuration**:
- [ ] Column count changes update grid
- [ ] Gutter width changes update grid
- [ ] Margin width changes update grid
- [ ] Color changes apply immediately
- [ ] Configuration persists across sessions

**Presets**:
- [ ] Built-in presets apply correc
# 3. Click "Load unpacked"
# 4. Select project directory
```

### 9.2 Development Workflow

1. Make code changes
2. Reload extension in chrome://extensions/
3. Refresh webpage to test content script changes
4. Reopen popup to test popup changes

### 9.3 Build Script (Optional)

```json
{
  "scripts": {
    "dev": "echo 'Development mode - load unpacked in Chrome'",
    "build": "echo 'Production build'",
    "lint": "eslint src/",
    "format": "prettier --write src/"
  }
}
```

---

## 10. Testing Strategyt {
  flex: 1;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.number-input button {
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}
```

---

## 9. Build and Development

### 9.1 Development Setup

```bash
# Clone repository
git clone <repository-url>
cd column-grid-overlay

# Install dependencies (if using build tools)
npm install

# Load extension in Chrome
# 1. Open chrome://extensions/
# 2. Enable "Developer mode"or 0.2s ease;
}

.column-grid-overlay__gutter {
  flex-shrink: 0;
  height: 100%;
}
```

### 8.2 Popup Styles (`src/popup/popup.css`)

```css
body {
  width: 320px;
  margin: 0;
  padding: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
}

.control-group {
  margin-bottom: 16px;
}

.control-group label {
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
}

.number-input {
  display: flex;
  align-items: center;
  gap: 8px;
}

.number-input inpu/ Handle messages from content scripts
  return true;
});
```

---

## 8. Styling Architecture

### 8.1 Grid Container Styles (`src/styles/grid.css`)

```css
.column-grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999999;
  display: flex;
  justify-content: center;
}

.column-grid-overlay__inner {
  display: flex;
  width: 100%;
  height: 100%;
}

.column-grid-overlay__column {
  flex-shrink: 0;
  height: 100%;
  transition: background-coldMessage)
Background ←→ Content Script (chrome.tabs.sendMessage)
Content Script → Background (chrome.runtime.sendMessage)
```

### 7.2 Message Handlers

**Content Script Message Handler**:
```javascript
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle messages from popup and background
  // Always return true for async responses
  return true;
});
```

**Background Message Handler**:
```javascript
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  /gs (optional)
};
```

### 6.3 Preset Storage Format

```javascript
interface PresetStorage {
  [presetName: string]: GridConfig;
}

// Example
{
  "My Custom Grid": {
    columnCount: 16,
    gutterWidth: 24,
    marginWidth: 40,
    columnColor: "rgba(0, 255, 0, 0.15)",
    gutterColor: "rgba(0, 0, 255, 0.1)",
    showGutters: true,
    isVisible: false,
    maxWidth: 1440,
    centered: true
  }
}
```

---

## 7. Message Passing Protocol

### 7.1 Communication Channels

```
Popup ←→ Content Script (chrome.tabs.senult: false
  isVisible: boolean;         // default: false
  maxWidth: number | null;    // pixels or null for full width
  centered: boolean;          // default: false
}
```

### 6.2 Storage Keys

```javascript
// chrome.storage.sync keys
const STORAGE_KEYS = {
  CONFIG: 'gridConfig',              // Current configuration
  PRESETS: 'customPresets',          // User-defined presets
  LAST_PRESET: 'lastUsedPreset',     // Last selected preset name
  PER_DOMAIN: 'domainConfigs'        // Domain-specific confiT_CONFIG' }
  | { type: 'SHOW_GRID' }
  | { type: 'HIDE_GRID' }
```

---

## 6. Storage Schema

### 6.1 Configuration Object

```javascript
interface GridConfig {
  columnCount: number;        // 1-24, default: 12
  gutterWidth: number;        // pixels, default: 20
  marginWidth: number;        // pixels, default: 0
  columnColor: string;        // rgba string, default: 'rgba(255, 0, 0, 0.1)'
  gutterColor: string;        // rgba string, default: 'rgba(0, 0, 255, 0.1)'
  showGutters: boolean;       // defamise<void>

// Load preset
loadPreset(name: string): Promise<GridConfig | null>

// Save preset
savePreset(name: string, config: GridConfig): Promise<void>

// Delete preset
deletePreset(name: string): Promise<void>

// List all presets
listPresets(): Promise<string[]>

// Reset to defaults
resetToDefaults(): Promise<void>
```

### 5.3 Message Types

```javascript
// Message type definitions
type Message = 
  | { type: 'UPDATE_CONFIG', config: Partial<GridConfig> }
  | { type: 'TOGGLE_GRID' }
  | { type: 'GEerence

### 5.1 GridRenderer API

```javascript
// Constructor
new GridRenderer(config: GridConfig): GridRenderer

// Methods
render(): void
show(): void
hide(): void
toggle(): void
updateConfig(config: Partial<GridConfig>): void
calculateColumnWidth(): number
destroy(): void

// Properties
config: GridConfig
container: HTMLElement | null
isVisible: boolean
```

### 5.2 Storage API

```javascript
// Load configuration
loadConfig(): Promise<GridConfig>

// Save configuration
saveConfig(config: GridConfig): Protent.js receives message
                           │
                           ▼
                  GridRenderer.toggle() called
                           │
                           ▼
                  Grid shown or hidden
```

### 4.3 Initialization Flow

```
Page loads
    │
    ▼
Content script injected
    │
    ▼
Load config from storage
    │
    ▼
Initialize GridRenderer
    │
    ▼
Check if grid was visible
    │
    ├─── Yes ──► Show grid
    │
    └─── No ───► Keep hidden
```

---

## 5. API Ref    │
         ├─────────────────┬─────────────────┐
         ▼                 ▼                 ▼
    From Popup      From Keyboard      From Content
         │                 │                 │
         ▼                 ▼                 │
  Popup sends        Background sends        │
  TOGGLE_GRID        TOGGLE_GRID            │
         │                 │                 │
         └─────────────────┴─────────────────┘
                           │
                           ▼
                  Con
});
```

---

## 4. Data Flow

### 4.1 Configuration Update Flow

```
User changes setting in Popup
         │
         ▼
Popup.js gathers form values
         │
         ▼
Popup.js sends UPDATE_CONFIG message
         │
         ▼
Content.js receives message
         │
         ▼
GridRenderer.updateConfig() called
         │
         ▼
Grid re-rendered with new config
         │
         ▼
Config saved to chrome.storage.sync
```

### 4.2 Grid Toggle Flow

```
User clicks toggle OR presses Ctrl+Shift+G
     await chrome.tabs.sendMessage(tab.id, { type: 'TOGGLE_GRID' });
    } catch (error) {
      console.error('Failed to toggle grid:', error);
    }
  }
});

// Handle extension icon click (optional badge update)
chrome.action.onClicked.addListener(async (tab) => {
  // Could update badge or perform other actions
});

// Listen for tab updates to maintain state
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    // Could restore grid state for this tab
  }
    this.updateConfig();
  }
}

// Initialize popup
document.addEventListener('DOMContentLoaded', () => {
  new PopupController();
});
```

### 3.5 Background Service Worker (`src/background/background.js`)

**Purpose**: Handles keyboard shortcuts and global state management.

```javascript
// Handle keyboard command
chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'toggle-grid') {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    try {
       { type: 'TOGGLE_GRID' });
  }

  applyPreset(presetName) {
    const preset = PRESETS[presetName];
    if (preset) {
      this.config = { ...this.config, ...preset };
      this.populateUI();
      this.updateConfig();
    }
  }

  async saveCustomPreset() {
    const presetName = prompt('Enter preset name:');
    if (presetName) {
      await savePreset(presetName, this.config);
      // Refresh preset dropdown
    }
  }

  async resetToDefaults() {
    this.config = { ...DEFAULT_CONFIG };
    this.populateUI();Input.value),
      columnColor: this.elements.columnColorPicker.value,
      gutterColor: this.elements.gutterColorPicker.value
    };

    // Send to content script
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.tabs.sendMessage(tab.id, {
      type: 'UPDATE_CONFIG',
      config: newConfig
    });
  }

  async toggleGrid(isVisible) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.tabs.sendMessage(tab.id, });

    // Save preset button
    this.elements.savePresetBtn.addEventListener('click', () => {
      this.saveCustomPreset();
    });

    // Reset button
    this.elements.resetBtn.addEventListener('click', () => {
      this.resetToDefaults();
    });
  }

  async updateConfig() {
    // Gather values from UI
    const newConfig = {
      columnCount: parseInt(this.elements.columnInput.value),
      gutterWidth: parseInt(this.elements.gutterInput.value),
      marginWidth: parseInt(this.elements.marginnts.gutterInput.value = this.config.gutterWidth;
    // ... populate other fields
  }

  attachEventListeners() {
    // Toggle switch
    this.elements.toggleSwitch.addEventListener('change', (e) => {
      this.toggleGrid(e.target.checked);
    });

    // Configuration inputs
    this.elements.columnInput.addEventListener('input', () => {
      this.updateConfig();
    });

    // Preset selection
    this.elements.presetSelect.addEventListener('change', (e) => {
      this.applyPreset(e.target.value);
   save-preset'),
      resetBtn: document.getElementById('reset-defaults')
    };
  }

  async loadCurrentConfig() {
    try {
      const response = await chrome.tabs.sendMessage(this.currentTab.id, { 
        type: 'GET_CONFIG' 
      });
      
      if (response && response.success) {
        this.config = response.config;
      } else {
        console.error('Failed to get config from content script:', response?.error);
        // Fall back to loading from storage directly (v1.0.1 improvement)
        const result = await chrome.storage.sync.get(STORAGE_KEYS.CONFIG);
        this.config = result[STORAGE_KEYS.CONFIG] || { ...DEFAULT_CONFIG };
      }
    } catch (error) {
      console.error('Failed to load config:', error);
      // Fall back to loading from storage directly
      try {
        const result = await chrome.storage.sync.get(STORAGE_KEYS.CONFIG);
        this.config = result[STORAGE_KEYS.CONFIG] || { ...DEFAULT_CONFIG };
      } catch (storageError) {
        console.error('Failed to load from storage:', storageError);
        this.config = { ...DEFAULT_CONFIG };
      }
    }
  }

  populateUI() {
    // Populate form fields with current config values
    this.elements.columnInput.value = this.config.columnCount;
    this.elemements() {
    this.elements = {
      toggleSwitch: document.getElementById('toggle-grid'),
      presetSelect: document.getElementById('preset-select'),
      columnInput: document.getElementById('column-count'),
      gutterInput: document.getElementById('gutter-width'),
      marginInput: document.getElementById('margin-width'),
      columnColorPicker: document.getElementById('column-color'),
      gutterColorPicker: document.getElementById('gutter-color'),
      savePresetBtn: document.getElementById('r) {
      gridRenderer.render();
    }
  }, 150); // Debounce resize events
});

// Initialize on load
initialize();
```

### 3.4 Popup Interface (`src/popup/popup.js`)

**Purpose**: Manages user interface for configuration and control.

```javascript
class PopupController {
  constructor() {
    this.config = null;
    this.elements = {};
    this.init();
  }

  async init() {
    this.cacheElements();
    await this.loadCurrentConfig();
    this.populateUI();
    this.attachEventListeners();
  }

  cacheEle sendResponse({ success: true });
      break;
      
    case 'TOGGLE_GRID':
      gridRenderer.toggle();
      sendResponse({ isVisible: gridRenderer.isVisible });
      break;
      
    case 'GET_CONFIG':
      sendResponse({ config: gridRenderer.config });
      break;
  }
  return true; // Keep message channel open for async response
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (gridRendere and initialize
async function initialize() {
  const config = await loadConfig();
  gridRenderer = new GridRenderer(config);
  
  // Show grid if it was visible in previous session
  if (config.isVisible) {
    gridRenderer.show();
  }
}

// Message listener for popup and background communication
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case 'UPDATE_CONFIG':
      gridRenderer.updateConfig(message.config);
      saveConfig(message.config);
      visibility
   */
  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Cleans up and removes grid from DOM
   */
  destroy() {
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
  }
}
```

### 3.3 Content Script (`src/content/content.js`)

**Purpose**: Entry point for content script, initializes grid and handles messages.

```javascript
// Initialize grid renderer
let gridRenderer = null;

// Load configurationGrid();
    if (this.isVisible) {
      document.body.appendChild(this.container);
    }
  }

  /**
   * Shows the grid overlay
   */
  show() {
    this.isVisible = true;
    if (this.container && !document.body.contains(this.container)) {
      document.body.appendChild(this.container);
    }
  }

  /**
   * Hides the grid overlay
   */
  hide() {
    this.isVisible = false;
    if (this.container && document.body.contains(this.container)) {
      this.container.remove();
    }
  }

  /**
   * Toggles gridCount - 1);
    const availableWidth = viewportWidth - totalMargins - totalGutters;
    return availableWidth / this.config.columnCount;
  }

  /**
   * Updates grid with new configuration
   * @param {Object} newConfig - Updated configuration object
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.render();
  }

  /**
   * Renders or re-renders the grid
   */
  render() {
    if (this.container) {
      this.container.remove();
    }
    this.container = this.create {HTMLElement} The grid container element
   */
  createGrid() {
    // Creates fixed-position container
    // Generates column elements based on config
    // Applies styling and positioning
  }

  /**
   * Calculates column width based on viewport and configuration
   * @returns {number} Column width in pixels
   */
  calculateColumnWidth() {
    const viewportWidth = window.innerWidth;
    const totalMargins = this.config.marginWidth * 2;
    const totalGutters = this.config.gutterWidth * (this.config.column"Ctrl+Shift+G",
        "mac": "Command+Shift+G"
      },
      "description": "Toggle grid overlay"
    }
  }
}
```

### 3.2 Grid Renderer (`src/content/gridRenderer.js`)

**Purpose**: Core module responsible for creating and managing the grid overlay DOM structure.

**Key Functions**:

```javascript
class GridRenderer {
  constructor(config) {
    this.config = config;
    this.container = null;
    this.isVisible = false;
  }

  /**
   * Creates the grid overlay container and injects into DOM
   * @returns     "48": "icons/icon-48.png",
      "128": "icons/icon-128.png"
    }
  },
  
  "background": {
    "service_worker": "src/background/background.js"
  },
  
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": [
        "src/utils/config.js",
        "src/content/gridRenderer.js",
        "src/content/content.js"
      ],
      "css": ["src/styles/grid.css"],
      "run_at": "document_idle"
    }
  ],
  
  "commands": {
    "toggle-grid": {
      "suggested_key": {
        "default":           # Build output (if using bundler)
    └── ...
```

---

## 3. Core Components

### 3.1 Manifest Configuration (`manifest.json`)

```json
{
  "manifest_version": 3,
  "name": "Column Grid Overlay",
  "version": "1.0.0",
  "description": "Figma-style column grid overlay for layout inspection",
  
  "permissions": [
    "storage",
    "activeTab"
  ],
  
  "action": {
    "default_popup": "src/popup/popup.html",
    "default_icon": {
      "16": "icons/icon-16.png",
      "32": "icons/icon-32.png",
 │   │
│   ├── popup/
│   │   ├── popup.html            # Popup interface
│   │   ├── popup.js              # Popup logic
│   │   └── popup.css             # Popup styles
│   │
│   ├── styles/
│   │   └── grid.css              # Grid overlay styles
│   │
│   └── utils/
│       ├── config.js             # Default configuration
│       ├── presets.js            # Preset definitions
│       ├── storage.js            # Storage utilities
│       └── constants.js          # Shared constants
│
└── dist/               ncies
├── README.md                     # User-facing documentation
├── .gitignore                    # Git ignore rules
│
├── icons/                        # Extension icons
│   ├── icon-16.png
│   ├── icon-32.png
│   ├── icon-48.png
│   └── icon-128.png
│
├── src/                          # Source code
│   ├── background/
│   │   └── background.js         # Service worker
│   │
│   ├── content/
│   │   ├── content.js            # Content script entry point
│   │   └── gridRenderer.js       # Grid rendering logic
t** (`content.js`, `gridRenderer.js`)
- Injects grid overlay into webpage
- Renders and updates grid based on configuration
- Listens for configuration changes
- Handles viewport resize events

**Storage Layer** (`storage.js`)
- Abstracts chrome.storage.sync API
- Manages configuration persistence
- Handles preset storage

---

## 2. Project Structure

```
column-grid-overlay/
├── manifest.json                 # Extension manifest (Manifest V3)
├── package.json                  # Project metadata and depende          │
└─────────────────────────────────────────────────────────┘
```

### 1.2 Component Responsibilities

**Popup UI** (`popup.html`, `popup.js`, `popup.css`)
- User interface for configuration
- Sends configuration updates to content script
- Loads and displays current settings
- Manages preset selection

**Background Service Worker** (`background.js`)
- Handles keyboard shortcuts
- Manages global state
- Coordinates communication between popup and content scripts
- Persists extension state

**Content Scrip                ▼                                    │
│         ┌──────────────────────┐                       │
│         │   Content Script     │                       │
│         │  (Grid Renderer)     │                       │
│         └──────────────────────┘                       │
│                    │                                    │
│         ┌──────────▼──────────┐                        │
│         │    Webpage DOM      │                        │
│         └─────────────────────┘               │
│  └──────────────┘      └──────┬───────┘               │
│         │                      │                        │
│         │                      │                        │
│         └──────────┬───────────┘                        │
│                    │                                    │
│    ifest V3** architecture with three main components:

```
┌─────────────────────────────────────────────────────────┐
│                    Chrome Browser                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐      ┌──────────────┐               │
│  │   Popup UI   │◄────►│   Background │               │
│  │  (popup.js)  │      │Service Worker│              ](#core-components)
4. [Data Flow](#data-flow)
5. [API Reference](#api-reference)
6. [Storage Schema](#storage-schema)
7. [Message Passing Protocol](#message-passing-protocol)
8. [Styling Architecture](#styling-architecture)
9. [Build and Development](#build-and-development)
10. [Testing Strategy](#testing-strategy)

---

## 1. Architecture Overview

### 1.1 Extension Architecture Pattern
This Chrome extension follows the **Many Chrome Extension

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Project Structure](#project-structure)
3. [Core Components# Codebase Documentation: Column Grid Overla


---

## Version 1.0.1 Updates

### Changes Made

This section documents the changes made in v1.0.1 to fix critical bugs.

#### 1. Content Script Storage Functions (src/content/content.js)

**Problem**: Storage functions (`loadConfig`, `saveConfig`) were not available in content script context, causing "Failed to load config" errors.

**Solution**: Added storage functions directly inline in content.js:

```javascript
/**
 * Load configuration from storage
 * Inline to avoid external dependencies
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
 * Inline to avoid external dependencies
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
```

#### 2. Async Message Handler (src/content/content.js)

**Problem**: Message handler wasn't properly handling async operations, causing "Failed to toggle grid" errors.

**Solution**: Wrapped message handler in async IIFE:

```javascript
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Wrap in async IIFE for proper async/await support
  (async () => {
    try {
      switch (message.type) {
        case 'UPDATE_CONFIG':
          if (gridRenderer) {
            gridRenderer.updateConfig(message.config);
            await saveConfig({ ...gridRenderer.config, ...message.config });
            sendResponse({ success: true });
          } else {
            sendResponse({ success: false, error: 'Grid renderer not initialized' });
          }
          break;
        // ... other cases with proper error handling
      }
    } catch (error) {
      console.error('Error handling message:', error);
      sendResponse({ success: false, error: error.message });
    }
  })();
  
  return true; // Keep message channel open for async response
});
```

#### 3. Enhanced Popup Error Handling (src/popup/popup.js)

**Problem**: Popup didn't handle content script failures gracefully.

**Solution**: Added fallback to direct storage access:

```javascript
async function loadCurrentConfig() {
  try {
    const response = await chrome.tabs.sendMessage(this.currentTab.id, { 
      type: 'GET_CONFIG' 
    });
    
    if (response && response.success) {
      this.config = response.config;
    } else {
      console.error('Failed to get config from content script:', response?.error);
      // Fallback to direct storage access
      const result = await chrome.storage.sync.get(STORAGE_KEYS.CONFIG);
      this.config = result[STORAGE_KEYS.CONFIG] || { ...DEFAULT_CONFIG };
    }
  } catch (error) {
    console.error('Failed to load config:', error);
    // Fallback to direct storage access
    try {
      const result = await chrome.storage.sync.get(STORAGE_KEYS.CONFIG);
      this.config = result[STORAGE_KEYS.CONFIG] || { ...DEFAULT_CONFIG };
    } catch (storageError) {
      console.error('Failed to load from storage:', storageError);
      this.config = { ...DEFAULT_CONFIG };
    }
  }
}
```

### Key Lessons Learned

1. **Content Script Dependencies**: Keep content scripts self-contained. Inline critical functions to avoid loading issues.

2. **Async Message Handling**: Always wrap async operations in IIFE when using message listeners. Return true to keep the channel open.

3. **Error Handling**: Provide specific error messages and implement fallback mechanisms for critical operations.

4. **Initialization Checks**: Always verify components are initialized before use.

### Common Error Messages (v1.0.1)

| Error Message | Cause | Solution |
|--------------|-------|----------|
| "Failed to load config" | Content script not loaded | Refresh page after loading extension |
| "Failed to toggle grid" | Content script not initialized | Refresh page |
| "Grid renderer not initialized" | Content script error | Check console, refresh page |
| "Could not establish connection" | Content script not injected | Refresh page |

### Troubleshooting Quick Reference

**If you see "Failed to load config" or "Failed to toggle grid":**

1. Reload the extension in chrome://extensions/
2. Refresh the webpage (F5 or Ctrl+R)
3. Try the keyboard shortcut (Ctrl+Shift+G)
4. Check browser console for errors
5. Verify content script loaded: `typeof GridRenderer` should return "function"

**See Also:**
- [TROUBLESHOOTING.md](../TROUBLESHOOTING.md) - Full troubleshooting guide
- [QUICK-FIX.md](../QUICK-FIX.md) - Quick solutions
- [CHANGELOG.md](../CHANGELOG.md) - Complete version history

---

**Document Version**: 1.0.1  
**Last Updated**: January 28, 2026  
**Maintained By**: Development Team
