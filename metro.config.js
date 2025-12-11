// metro.config.js
/**
 * Metro Bundler Configuration for Paranormal Encyclopedia
 * 
 * Metro is the JavaScript bundler for React Native that:
 * - Transforms and bundles JavaScript/TypeScript code
 * - Handles module resolution and dependencies
 * - Provides fast refresh during development
 * 
 * This config enhances caching for faster rebuild times.
 */

const { getDefaultConfig } = require('expo/metro-config');
const { FileStore } = require('metro-cache');
const path = require('path');

// ──────────────────────────────────────────────────────────────
// Base Configuration
// ──────────────────────────────────────────────────────────────
// Get Expo's default Metro configuration with all recommended settings
const config = getDefaultConfig(__dirname);

// ──────────────────────────────────────────────────────────────
// Enhanced Caching Strategy
// ──────────────────────────────────────────────────────────────
// Use persistent file-based cache for faster rebuilds
// Cache is stored in node_modules/.cache/metro to:
// - Survive dependency installs (gitignored)
// - Work with monorepo tools like Turborepo
// - Speed up development by avoiding re-transforming unchanged files
config.cacheStores = [
  new FileStore({ 
    root: path.join(__dirname, 'node_modules', '.cache', 'metro') 
  }),
];

// ──────────────────────────────────────────────────────────────
// Export Configuration
// ──────────────────────────────────────────────────────────────
module.exports = config;