// babel.config.js
/**
 * Babel Configuration for Paranormal Encyclopedia
 * 
 * Configures Babel transpilation with:
 * - Expo preset for React Native/Expo compatibility
 * - Module path aliasing for cleaner imports
 * - Optional edit mode plugins for development
 * - Worklets plugin for animations (must be last)
 */

module.exports = function (api) {
  // Cache the returned config object based on the value of NODE_ENV
  // This prevents Babel from re-parsing the config on every file
  api.cache(true);

  // ──────────────────────────────────────────────────────────────
  // Conditional Edit Mode Plugins (Development Only)
  // ──────────────────────────────────────────────────────────────
  // Enable component editing in development when EXPO_PUBLIC_ENABLE_EDIT_MODE=TRUE
  // These plugins inject metadata for live component editing features
  const EDITABLE_COMPONENTS =
    process.env.EXPO_PUBLIC_ENABLE_EDIT_MODE === "TRUE" &&
    process.env.NODE_ENV === "development"
      ? [
          // Marks elements as editable in the UI
          ["./babel-plugins/editable-elements.js", {}],
          // Injects source file location for debugging
          ["./babel-plugins/inject-source-location.js", {}],
        ]
      : [];

  return {
    // ──────────────────────────────────────────────────────────────
    // Presets
    // ──────────────────────────────────────────────────────────────
    presets: [
      "babel-preset-expo", // Official Expo preset (includes React Native transforms)
    ],

    // ──────────────────────────────────────────────────────────────
    // Plugins
    // ──────────────────────────────────────────────────────────────
    plugins: [
      // Module Resolver: Enables path aliasing for cleaner imports
      // Example: import Component from '@components/Component'
      [
        "module-resolver",
        {
          root: ["./"],
          // File extensions to resolve (platform-specific files first)
          extensions: [
            ".ios.ts",     // iOS-specific TypeScript
            ".android.ts", // Android-specific TypeScript
            ".ts",         // TypeScript
            ".ios.tsx",    // iOS-specific TSX
            ".android.tsx",// Android-specific TSX
            ".tsx",        // TSX (React TypeScript)
            ".jsx",        // JSX (React JavaScript)
            ".js",         // JavaScript
            ".json",       // JSON
          ],
          // Path aliases (must match tsconfig.json paths)
          alias: {
            "@": "./",
            "@components": "./components",
            "@style": "./style",
            "@hooks": "./hooks",
            "@types": "./types",
            "@contexts": "./contexts",
          },
        },
      ],

      // Conditionally include edit mode plugins
      ...EDITABLE_COMPONENTS,

      // Export namespace support (e.g., export * as name from 'module')
      "@babel/plugin-proposal-export-namespace-from",

      // Worklets Plugin: Enables UI thread animations (Reanimated)
      // CRITICAL: Must be listed last in the plugins array!
      "react-native-worklets/plugin",
    ],
  };
};