# Troubleshooting

## Common Issues

### Grid not appearing when toggled on

**Solution:** Refresh the webpage, then try toggling again.

The content script needs to be injected into the page. If the page was open before installing/reloading the extension, refresh it first.

### "Could not establish connection" error

**Solution:** This is normal on restricted pages (chrome://, chrome-extension://, etc.). The grid cannot be displayed on these pages.

### Settings not saving

**Solution:** 
1. Go to `chrome://extensions/`
2. Click the reload icon on the extension
3. Refresh the webpage

### Keyboard shortcut not working

**Solution:**
1. Go to `chrome://extensions/shortcuts`
2. Find "Column Grid Overlay"
3. Check if the shortcut is assigned (default: Ctrl+Shift+G)
4. Reassign if there's a conflict

### Grid appears on wrong pages

**Solution:** Each tab has independent grid state. Toggle off on pages where you don't want it.

## Quick Fixes

1. **Refresh the page** - Most issues are solved by refreshing
2. **Reload the extension** - Go to chrome://extensions/ and click reload
3. **Restart Chrome** - If all else fails

## Debug Mode

Open browser DevTools (F12) and check the Console tab for error messages. Look for `[Column Grid]` prefixed messages.

## Supported Pages

The extension works on most websites but NOT on:
- `chrome://` pages
- `chrome-extension://` pages  
- Chrome Web Store
- Some pages with strict Content Security Policies
