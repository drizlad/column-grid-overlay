# Task List: Column Grid Overlay Chrome Extension

## Phase 1: Project Setup and Foundation

### 1.1 Project Structure Setup
- [ ] Create project root directory structure
- [ ] Initialize package.json with project metadata
- [ ] Create manifest.json (Manifest V3) with required permissions
- [ ] Set up basic folder structure:
  - `/src` - Source files
  - `/src/content` - Content scripts
  - `/src/popup` - Popup UI files
  - `/src/background` - Service worker
  - `/src/styles` - CSS files
  - `/src/utils` - Shared utilities
  - `/icons` - Extension icons
  - `/dist` - Build output (if using build tools)

### 1.2 Development Environment
- [ ] Set up Git repository and .gitignore
- [ ] Create README.md with setup instructions
- [ ] Configure ESLint/Prettier for code quality (optional)
- [ ] Set up build script (if using bundler like webpack/vite)

### 1.3 Extension Icons
- [ ] Create extension icons (16x16, 32x32, 48x48, 128x128)
- [ ] Add icons to manifest.json
- [ ] Create toolbar icon for browser action

## Phase 2: Core Grid Overlay System

### 2.1 Grid Renderer Module
- [ ] Create `gridRenderer.js` in `/src/content`
- [ ] Implement function to calculate column widths based on viewport
- [ ] Implement function to calculate gutter spacing
- [ ] Implement function to calculate margin spacing
- [ ] Create DOM structure for grid overlay container
- [ ] Generate column elements dynamically based on configuration

### 2.2 Grid Styling
- [ ] Create `grid.css` for grid overlay styles
- [ ] Style grid container (full viewport height, fixed position)
- [ ] Style individual columns (semi-transparent background)
- [ ] Style gutters (spacing between columns)
- [ ] Ensure pointer-events: none for non-interference
- [ ] Set appropriate z-index for visibility
- [ ] Add smooth transitions for resize events

### 2.3 Grid Injection
- [ ] Create content script entry point (`content.js`)
- [ ] Implement grid injection on page load
- [ ] Ensure grid doesn't interfere with page functionality
- [ ] Handle dynamic content and SPA navigation
- [ ] Add error handling for injection failures

### 2.4 Responsive Behavior
- [ ] Add window resize event listener
- [ ] Implement debounced resize handler
- [ ] Recalculate and update grid on viewport changes
- [ ] Maintain grid visibility state during resize
- [ ] Test on various viewport sizes

## Phase 3: Configuration System

### 3.1 Default Configuration
- [ ] Create `config.js` with default settings object:
  - Default column count (12)
  - Default gutter width (20px)
  - Default margin width (0px)
  - Default column color (rgba(255, 0, 0, 0.1))
  - Default gutter color (rgba(0, 0, 255, 0.1))
  - Default visibility state (false)

### 3.2 Storage Management
- [ ] Create `storage.js` utility module
- [ ] Implement function to save configuration to chrome.storage.sync
- [ ] Implement function to load configuration from storage
- [ ] Implement function to reset to defaults
- [ ] Add error handling for storage operations
- [ ] Test storage persistence across sessions

### 3.3 Configuration Application
- [ ] Create function to apply configuration to grid
- [ ] Update column count dynamically
- [ ] Update gutter width dynamically
- [ ] Update margin width dynamically
- [ ] Update column color dynamically
- [ ] Update gutter color dynamically
- [ ] Trigger grid re-render on configuration change

## Phase 4: Preset System

### 4.1 Built-in Presets
- [ ] Create `presets.js` with preset definitions
- [ ] Define Bootstrap preset (12 columns, 30px gutters)
- [ ] Define Tailwind preset (12 columns, 16px gutters)
- [ ] Define Material Design preset (12 columns, 16px gutters)
- [ ] Add "Custom" preset option

### 4.2 Custom Preset Management
- [ ] Implement function to save custom preset
- [ ] Implement function to load custom preset
- [ ] Implement function to delete custom preset
- [ ] Store custom presets in chrome.storage.sync
- [ ] Add preset naming functionality
- [ ] Validate preset data before saving

### 4.3 Preset Switching
- [ ] Implement function to switch between presets
- [ ] Update grid immediately when preset changes
- [ ] Update popup UI to reflect active preset
- [ ] Save last used preset to storage

## Phase 5: Popup Interface

### 5.1 Popup HTML Structure
- [ ] Create `popup.html` with semantic structure
- [ ] Add header with extension title
- [ ] Add toggle switch for grid visibility
- [ ] Add preset selector dropdown
- [ ] Add numeric inputs for columns, gutters, margins
- [ ] Add increment/decrement buttons for inputs
- [ ] Add color pickers for column and gutter colors
- [ ] Add "Save as Preset" button
- [ ] Add "Reset to Defaults" button

### 5.2 Popup Styling
- [ ] Create `popup.css` for popup interface
- [ ] Style popup container (fixed width ~300px)
- [ ] Style form controls (inputs, buttons, dropdowns)
- [ ] Style color pickers
- [ ] Add hover and focus states
- [ ] Ensure responsive layout within popup
- [ ] Match Chrome extension design patterns

### 5.3 Popup Functionality
- [ ] Create `popup.js` for popup logic
- [ ] Load current configuration on popup open
- [ ] Populate form fields with current values
- [ ] Add event listeners for all controls
- [ ] Implement real-time configuration updates
- [ ] Send messages to content script on changes
- [ ] Handle preset selection changes
- [ ] Implement save custom preset functionality
- [ ] Implement reset to defaults functionality

### 5.4 Popup-Content Communication
- [ ] Set up message passing from popup to content script
- [ ] Handle "updateConfig" messages in content script
- [ ] Handle "toggleGrid" messages in content script
- [ ] Handle "getConfig" messages for popup initialization
- [ ] Add error handling for failed message passing

## Phase 6: Background Service Worker

### 6.1 Service Worker Setup
- [ ] Create `background.js` service worker
- [ ] Register service worker in manifest.json
- [ ] Set up message listeners for cross-component communication

### 6.2 State Management
- [ ] Implement global state management for grid visibility
- [ ] Track active tabs with grid enabled
- [ ] Handle tab updates and removals
- [ ] Sync state across popup and content scripts

### 6.3 Keyboard Shortcuts
- [ ] Register keyboard shortcut in manifest.json (Ctrl+Shift+G)
- [ ] Add command listener in background script
- [ ] Toggle grid visibility on shortcut trigger
- [ ] Send toggle message to active tab
- [ ] Update icon badge to reflect state (optional)

## Phase 7: Advanced Features

### 7.1 Per-Domain Settings (Optional)
- [ ] Implement domain detection in content script
- [ ] Store configuration per domain
- [ ] Load domain-specific config on page load
- [ ] Add UI toggle for "Remember for this site"

### 7.2 Gutter Visualization Toggle
- [ ] Add checkbox in popup to show/hide gutters
- [ ] Implement gutter background color rendering
- [ ] Toggle gutter visibility without affecting spacing

### 7.3 Grid Alignment Options
- [ ] Add option for centered vs full-width grid
- [ ] Implement max-width constraint option
- [ ] Add alignment controls to popup UI

## Phase 8: Testing and Quality Assurance

### 8.1 Functional Testing
- [ ] Test grid rendering on various websites
- [ ] Test all configuration options
- [ ] Test preset switching
- [ ] Test custom preset save/load/delete
- [ ] Test keyboard shortcuts
- [ ] Test storage persistence
- [ ] Test across different viewport sizes

### 8.2 Compatibility Testing
- [ ] Test on Chrome (latest version)
- [ ] Test on Edge (Chromium)
- [ ] Test on Brave
- [ ] Test on Opera
- [ ] Test on websites with strict CSP
- [ ] Test on single-page applications (React, Vue, Angular)

### 8.3 Performance Testing
- [ ] Measure grid rendering time
- [ ] Check memory footprint
- [ ] Test scroll performance with grid enabled
- [ ] Profile resize event handling
- [ ] Optimize any performance bottlenecks

### 8.4 Edge Cases
- [ ] Test on pages with existing overlays
- [ ] Test on pages with high z-index elements
- [ ] Test on pages with fixed/sticky positioning
- [ ] Test on pages with transforms
- [ ] Test rapid configuration changes
- [ ] Test with extreme values (1 column, 100 columns)

## Phase 9: Polish and Optimization

### 9.1 Code Optimization
- [ ] Refactor duplicate code
- [ ] Optimize DOM manipulation
- [ ] Minimize reflows and repaints
- [ ] Add code comments and documentation
- [ ] Remove console.logs and debug code

### 9.2 UI/UX Improvements
- [ ] Add loading states where appropriate
- [ ] Add success/error feedback messages
- [ ] Improve color picker UX
- [ ] Add tooltips for controls (optional)
- [ ] Ensure keyboard navigation works
- [ ] Test accessibility (ARIA labels, focus management)

### 9.3 Error Handling
- [ ] Add try-catch blocks for critical operations
- [ ] Handle storage quota exceeded errors
- [ ] Handle message passing failures gracefully
- [ ] Add user-friendly error messages
- [ ] Log errors for debugging (development mode)

## Phase 10: Documentation

### 10.1 User Documentation
- [ ] Write comprehensive README.md
- [ ] Add installation instructions
- [ ] Add usage guide with screenshots
- [ ] Document keyboard shortcuts
- [ ] Add FAQ section
- [ ] Create troubleshooting guide

### 10.2 Developer Documentation
- [ ] Document code architecture
- [ ] Add inline code comments
- [ ] Document message passing protocol
- [ ] Document storage schema
- [ ] Add contributing guidelines (if open source)

### 10.3 Visual Assets
- [ ] Create screenshots for documentation
- [ ] Create demo GIF/video
- [ ] Create promotional images for Chrome Web Store

## Phase 11: Packaging and Distribution

### 11.1 Build Preparation
- [ ] Create production build script
- [ ] Minify JavaScript files (if applicable)
- [ ] Minify CSS files (if applicable)
- [ ] Remove development dependencies
- [ ] Test production build locally

### 11.2 Chrome Web Store Submission
- [ ] Create Chrome Web Store developer account
- [ ] Prepare store listing description
- [ ] Upload promotional images (1280x800, 640x400)
- [ ] Upload extension screenshots
- [ ] Set privacy policy (if collecting data)
- [ ] Choose appropriate category
- [ ] Set pricing (free)
- [ ] Submit for review

### 11.3 Post-Launch
- [ ] Monitor Chrome Web Store reviews
- [ ] Set up issue tracking (GitHub Issues)
- [ ] Plan for future updates
- [ ] Gather user feedback
- [ ] Monitor error reports

## Phase 12: Future Enhancements (V2)

### 12.1 Advanced Grid Features
- [ ] Baseline grid overlay option
- [ ] Multiple grid layers
- [ ] Grid export as CSS/SCSS
- [ ] Breakpoint-specific configurations

### 12.2 Additional Tools
- [ ] Ruler overlay
- [ ] Measurement tools
- [ ] Screenshot with grid overlay
- [ ] Grid comparison mode

### 12.3 Cross-Browser Support
- [ ] Port to Firefox (WebExtensions)
- [ ] Port to Safari
- [ ] Maintain feature parity across browsers

---

## Task Priorities

### Critical (Must Have for V1)
- Phase 1: Project Setup
- Phase 2: Core Grid Overlay
- Phase 3: Configuration System
- Phase 4: Preset System (built-in only)
- Phase 5: Popup Interface
- Phase 6: Background Service Worker (keyboard shortcuts)
- Phase 8: Testing
- Phase 10: Documentation
- Phase 11: Packaging

### Important (Should Have for V1)
- Phase 4.2: Custom Preset Management
- Phase 6.2: State Management
- Phase 9: Polish and Optimization

### Nice to Have (Could Have for V1)
- Phase 7.1: Per-Domain Settings
- Phase 7.2: Gutter Visualization Toggle
- Phase 7.3: Grid Alignment Options

### Future (Won't Have in V1)
- Phase 12: All future enhancements

---

## Estimated Timeline

- **Week 1**: Phases 1-3 (Setup, Core Grid, Configuration)
- **Week 2**: Phases 4-6 (Presets, Popup, Background)
- **Week 3**: Phases 7-9 (Advanced Features, Testing, Polish)
- **Week 4**: Phases 10-11 (Documentation, Distribution)

**Total Estimated Time**: 4 weeks for V1 release
