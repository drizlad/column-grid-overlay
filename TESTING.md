# Testing Guide - Column Grid Overlay

## Pre-Testing Setup

1. Generate icons using `create-icons.html`
2. Load the extension in Chrome (`chrome://extensions/`)
3. Ensure Developer mode is enabled

## Manual Testing Checklist

### 1. Installation & Loading

- [ ] Extension loads without errors in `chrome://extensions/`
- [ ] Extension icon appears in browser toolbar
- [ ] No console errors in background service worker
- [ ] Manifest version shows as 3

### 2. Basic Grid Functionality

#### Grid Rendering
- [ ] Navigate to any website (e.g., https://example.com)
- [ ] Click extension icon to open popup
- [ ] Toggle grid ON - grid should appear
- [ ] Grid spans full viewport height
- [ ] Grid has 12 columns by default
- [ ] Columns are semi-transparent red (default color)
- [ ] Grid doesn't block page interactions (can still click links)

#### Grid Toggle
- [ ] Toggle grid OFF - grid disappears
- [ ] Toggle grid ON again - grid reappears
- [ ] Close popup and reopen - toggle state persists
- [ ] Refresh page - grid state persists

### 3. Keyboard Shortcut

- [ ] Press `Ctrl+Shift+G` (Windows/Linux) or `Cmd+Shift+G` (Mac)
- [ ] Grid toggles on/off
- [ ] Works from any webpage
- [ ] Works when popup is closed
- [ ] Works when popup is open

### 4. Configuration Controls

#### Column Count
- [ ] Change column count to 6 - grid updates immediately
- [ ] Change column count to 24 - grid updates immediately
- [ ] Use increment (+) button - increases by 1
- [ ] Use decrement (−) button - decreases by 1
- [ ] Type value directly - grid updates on input
- [ ] Minimum value is 1
- [ ] Maximum value is 24

#### Gutter Width
- [ ] Change gutter width to 0px - columns touch each other
- [ ] Change gutter width to 40px - wider spacing
- [ ] Use increment/decrement buttons
- [ ] Type value directly
- [ ] Minimum value is 0

#### Margin Width
- [ ] Change margin width to 20px - outer spacing appears
- [ ] Change margin width to 100px - larger outer spacing
- [ ] Use increment/decrement buttons
- [ ] Type value directly
- [ ] Minimum value is 0

#### Column Color
- [ ] Click color picker - color selector opens
- [ ] Select blue color - columns turn blue
- [ ] Select green color - columns turn green
- [ ] Adjust opacity slider to 50% - columns more visible
- [ ] Adjust opacity slider to 5% - columns more transparent
- [ ] Opacity percentage displays correctly

#### Gutter Color
- [ ] Check "Show Gutter Colors" checkbox
- [ ] Gutter color controls appear
- [ ] Select gutter color - gutters show color
- [ ] Adjust gutter opacity
- [ ] Uncheck "Show Gutter Colors" - gutters become transparent

### 5. Presets

#### Bootstrap Preset
- [ ] Select "Bootstrap" from preset dropdown
- [ ] Columns change to 12
- [ ] Gutters change to 30px
- [ ] Margins change to 0px
- [ ] Grid updates immediately

#### Tailwind Preset
- [ ] Select "Tailwind" from preset dropdown
- [ ] Columns change to 12
- [ ] Gutters change to 16px
- [ ] Grid updates immediately

#### Material Design Preset
- [ ] Select "Material Design" from preset dropdown
- [ ] Columns change to 12
- [ ] Gutters change to 16px
- [ ] Grid updates immediately

#### Custom Preset
- [ ] Manually adjust settings (e.g., 8 columns, 25px gutters)
- [ ] Preset dropdown shows "Custom"
- [ ] Click "Save Preset" button
- [ ] Enter preset name (e.g., "My Grid")
- [ ] Preset saves successfully (alert confirms)

### 6. Persistence

#### Session Persistence
- [ ] Configure grid with custom settings
- [ ] Close popup
- [ ] Reopen popup - settings are preserved
- [ ] Navigate to different page - settings persist
- [ ] Close and reopen browser - settings persist

#### Per-Tab State
- [ ] Enable grid on Tab 1
- [ ] Open new Tab 2 - grid is off by default
- [ ] Switch back to Tab 1 - grid is still on
- [ ] Toggle grid on Tab 2
- [ ] Both tabs maintain independent grid states

### 7. Responsive Behavior

#### Window Resize
- [ ] Enable grid
- [ ] Resize browser window wider - grid recalculates
- [ ] Resize browser window narrower - grid recalculates
- [ ] Columns remain evenly distributed
- [ ] No visual glitches during resize
- [ ] Resize is smooth (debounced)

#### Viewport Sizes
- [ ] Test at 1920px width (desktop)
- [ ] Test at 1366px width (laptop)
- [ ] Test at 768px width (tablet)
- [ ] Test at 375px width (mobile)
- [ ] Grid works at all sizes

### 8. Cross-Site Compatibility

Test on various types of websites:

#### Static Sites
- [ ] https://example.com
- [ ] https://wikipedia.org
- [ ] Grid renders correctly
- [ ] No console errors

#### Single Page Applications
- [ ] React app (e.g., https://react.dev)
- [ ] Vue app
- [ ] Angular app
- [ ] Grid persists during client-side navigation
- [ ] Grid updates on route changes

#### Complex Layouts
- [ ] Sites with fixed headers (e.g., https://github.com)
- [ ] Sites with sticky sidebars
- [ ] Sites with modals/overlays
- [ ] Grid appears above or below content appropriately
- [ ] Grid doesn't interfere with site functionality

#### High Z-Index Elements
- [ ] Sites with dropdown menus
- [ ] Sites with tooltips
- [ ] Sites with notifications
- [ ] Adjust grid z-index if needed

### 9. Performance

#### Rendering Performance
- [ ] Grid appears within 100ms of toggle
- [ ] No visible lag when toggling
- [ ] No visible lag when changing settings
- [ ] Smooth resize behavior

#### Page Performance
- [ ] Page scrolling is smooth with grid enabled
- [ ] No frame drops during scroll
- [ ] Page interactions remain responsive
- [ ] No memory leaks (check DevTools Memory tab)

#### Resource Usage
- [ ] Check memory usage in Chrome Task Manager
- [ ] Memory footprint < 5MB
- [ ] CPU usage minimal when idle
- [ ] No excessive DOM nodes

### 10. Edge Cases

#### Extreme Values
- [ ] Set columns to 1 - single column appears
- [ ] Set columns to 24 - many thin columns
- [ ] Set gutters to 0 - columns touch
- [ ] Set gutters to 200px - very wide spacing
- [ ] Set margins to 200px - large outer spacing

#### Rapid Changes
- [ ] Rapidly toggle grid on/off - no errors
- [ ] Rapidly change column count - no errors
- [ ] Rapidly switch presets - no errors
- [ ] Spam increment/decrement buttons - no errors

#### Page Conditions
- [ ] Test on page with no body element (rare)
- [ ] Test on page with CSP restrictions
- [ ] Test on page with existing overlays
- [ ] Test on page with CSS transforms
- [ ] Test on page with iframe elements

### 11. Error Handling

#### Storage Errors
- [ ] Fill chrome.storage quota (unlikely in normal use)
- [ ] Extension handles gracefully
- [ ] User sees error message if applicable

#### Message Passing Errors
- [ ] Refresh page while popup is open
- [ ] Extension handles gracefully
- [ ] No uncaught exceptions

#### Invalid Input
- [ ] Enter negative numbers - prevented or handled
- [ ] Enter non-numeric values - prevented or handled
- [ ] Enter extremely large numbers - capped appropriately

### 12. UI/UX

#### Popup Interface
- [ ] Popup opens quickly (< 100ms)
- [ ] All controls are visible without scrolling
- [ ] Labels are clear and descriptive
- [ ] Buttons have hover states
- [ ] Inputs have focus states
- [ ] Color pickers work correctly
- [ ] Sliders are smooth

#### Visual Design
- [ ] Popup design is clean and modern
- [ ] Colors are consistent
- [ ] Spacing is appropriate
- [ ] Typography is readable
- [ ] Icons are clear (if any)

#### Accessibility
- [ ] Can navigate popup with keyboard (Tab key)
- [ ] Can activate controls with Enter/Space
- [ ] Focus indicators are visible
- [ ] Color contrast is sufficient
- [ ] Screen reader compatible (basic test)

### 13. Reset Functionality

- [ ] Configure custom settings
- [ ] Click "Reset" button
- [ ] Confirm reset dialog appears
- [ ] Click "OK" - settings reset to defaults
- [ ] Grid updates with default settings
- [ ] Click "Reset" and "Cancel" - settings unchanged

## Automated Testing (Future)

Consider adding:
- Unit tests for utility functions
- Integration tests for message passing
- E2E tests with Puppeteer
- Visual regression tests

## Bug Reporting Template

When you find a bug, document:

```
**Bug Description:**
[Clear description of the issue]

**Steps to Reproduce:**
1. [First step]
2. [Second step]
3. [etc.]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Environment:**
- Chrome Version: [e.g., 120.0.6099.109]
- OS: [e.g., macOS 14.0, Windows 11]
- Website: [URL where bug occurred]

**Console Errors:**
[Any errors from browser console]

**Screenshots:**
[If applicable]
```

## Performance Benchmarks

Target metrics:
- Grid render time: < 100ms
- Memory footprint: < 5MB
- Resize debounce: 150ms
- No impact on page scroll FPS (60fps maintained)

## Test Results Log

Create a test log for each testing session:

```
Date: [YYYY-MM-DD]
Tester: [Name]
Chrome Version: [Version]
Extension Version: [Version]

Test Results:
- Basic Functionality: ✅ Pass
- Configuration: ✅ Pass
- Presets: ✅ Pass
- Persistence: ✅ Pass
- Responsive: ✅ Pass
- Cross-Site: ⚠️ Issue on [site]
- Performance: ✅ Pass
- Edge Cases: ✅ Pass

Issues Found: [Number]
Critical: [Number]
Major: [Number]
Minor: [Number]

Notes:
[Additional observations]
```

## Continuous Testing

During development:
1. Test after every significant change
2. Test on multiple websites regularly
3. Test on different screen sizes
4. Test with different Chrome versions
5. Keep a testing log

## Pre-Release Checklist

Before publishing to Chrome Web Store:
- [ ] All critical tests pass
- [ ] No console errors
- [ ] Performance benchmarks met
- [ ] Tested on 10+ different websites
- [ ] Tested on 3+ different screen sizes
- [ ] Tested on Windows, Mac, and Linux (if possible)
- [ ] Documentation is complete
- [ ] Icons are professional quality
- [ ] Privacy policy created (if needed)
- [ ] Screenshots prepared for store listing
