# Column Grid Overlay

A Chrome extension that overlays a Figma-style column grid on any webpage to help designers and developers visually inspect layout structure.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)
![License MIT](https://img.shields.io/badge/License-MIT-yellow)

<!-- Add a screenshot here: ![Screenshot](screenshot.png) -->

## Features

- 🎯 Customizable column grid overlay (1-24 columns)
- 📐 Adjustable gutters and margins
- 🎨 Color picker with opacity control
- 📦 Built-in presets (Bootstrap, Tailwind, Material Design)
- 💾 Save custom presets
- ⌨️ Keyboard shortcut (Ctrl+Shift+G / Cmd+Shift+G)
- 🔄 Per-tab grid state
- ⚡ Zero impact on page performance

## Installation

### From Chrome Web Store
*Coming soon*

### Install from GitHub

**Option 1: Download ZIP**
1. Click the green **Code** button above
2. Select **Download ZIP**
3. Extract the ZIP file to a folder on your computer
4. Open Chrome and go to `chrome://extensions/`
5. Enable **Developer mode** (toggle in top right corner)
6. Click **Load unpacked**
7. Select the extracted folder
8. The extension icon will appear in your toolbar

**Option 2: Clone with Git**
```bash
git clone https://github.com/YOUR_USERNAME/column-grid-overlay.git
```
Then follow steps 4-8 above.

> **Note:** After installation, refresh any open tabs for the extension to work on them.

## Usage

1. Click the extension icon in your toolbar
2. Toggle the grid overlay on/off
3. Adjust settings:
   - **Columns**: 1-24 columns
   - **Gutters**: Space between columns (px)
   - **Margins**: Left/right page margins (px)
   - **Colors**: Column and gutter colors with opacity
4. Use keyboard shortcut `Ctrl+Shift+G` (or `Cmd+Shift+G` on Mac) to quickly toggle

## Presets

| Preset | Columns | Gutters |
|--------|---------|---------|
| Bootstrap | 12 | 30px |
| Tailwind | 12 | 16px |
| Material Design | 12 | 16px |

## Project Structure

```
├── manifest.json          # Extension manifest (V3)
├── src/
│   ├── background/        # Service worker
│   ├── content/           # Grid renderer & content script
│   ├── popup/             # Extension popup UI
│   ├── styles/            # CSS styles
│   └── utils/             # Config, presets, storage
└── icons/                 # Extension icons
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details
