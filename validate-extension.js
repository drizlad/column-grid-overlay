#!/usr/bin/env node

/**
 * Validation script for Chrome extension
 * Checks that all required files exist and manifest is valid
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FILES = [
  'manifest.json',
  'src/background/background.js',
  'src/content/content.js',
  'src/content/gridRenderer.js',
  'src/popup/popup.html',
  'src/popup/popup.js',
  'src/popup/popup.css',
  'src/styles/grid.css',
  'src/utils/config.js',
  'src/utils/presets.js',
  'src/utils/storage.js'
];

const REQUIRED_ICONS = [
  'icons/icon-16.png',
  'icons/icon-32.png',
  'icons/icon-48.png',
  'icons/icon-128.png'
];

console.log('🔍 Validating Chrome Extension...\n');

let hasErrors = false;

// Check required files
console.log('📁 Checking required files...');
REQUIRED_FILES.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MISSING`);
    hasErrors = true;
  }
});

// Check icons
console.log('\n🎨 Checking icon files...');
REQUIRED_ICONS.forEach(icon => {
  if (fs.existsSync(icon)) {
    console.log(`  ✅ ${icon}`);
  } else {
    console.log(`  ⚠️  ${icon} - MISSING (generate using create-icons.html)`);
  }
});

// Validate manifest.json
console.log('\n📋 Validating manifest.json...');
try {
  const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
  
  if (manifest.manifest_version === 3) {
    console.log('  ✅ Manifest version 3');
  } else {
    console.log('  ❌ Invalid manifest version');
    hasErrors = true;
  }
  
  if (manifest.name) {
    console.log(`  ✅ Name: ${manifest.name}`);
  }
  
  if (manifest.version) {
    console.log(`  ✅ Version: ${manifest.version}`);
  }
  
  if (manifest.permissions && manifest.permissions.includes('storage')) {
    console.log('  ✅ Storage permission');
  }
  
  if (manifest.content_scripts && manifest.content_scripts.length > 0) {
    console.log('  ✅ Content scripts configured');
  }
  
  if (manifest.background && manifest.background.service_worker) {
    console.log('  ✅ Background service worker configured');
  }
  
  if (manifest.action && manifest.action.default_popup) {
    console.log('  ✅ Popup configured');
  }
  
} catch (error) {
  console.log(`  ❌ Error parsing manifest.json: ${error.message}`);
  hasErrors = true;
}

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.log('❌ Validation failed! Please fix the errors above.');
  process.exit(1);
} else {
  console.log('✅ Validation passed! Extension is ready to load.');
  console.log('\n📝 Next steps:');
  console.log('   1. Generate icons using create-icons.html');
  console.log('   2. Open chrome://extensions/');
  console.log('   3. Enable Developer mode');
  console.log('   4. Click "Load unpacked"');
  console.log('   5. Select this directory');
  process.exit(0);
}
