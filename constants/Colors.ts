// constants/Colors.ts
// Central, typed, and beautifully organized color system for Paranormal Encyclopedia

// ──────────────────────────────────────────────────────────────
// 1. Legacy / Expo Navigation Colors (kept for compatibility)
// ──────────────────────────────────────────────────────────────
const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
} as const;

// ──────────────────────────────────────────────────────────────
// 2. Zinc / Neutral Scale
// ──────────────────────────────────────────────────────────────
export const zincColors = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b",
  950: "#09090b",
} as const;

// ──────────────────────────────────────────────────────────────
// 3. Apple System Colors
// ──────────────────────────────────────────────────────────────
export const appleBlue = "#007AFF";
export const appleRed = "#FF3B30";
export const appleGreen = "#34C759";
export const borderColor = "#A1A1AA80";

// ──────────────────────────────────────────────────────────────
// 4. Paranormal Category Colors (used on cards, icons, etc.)
// ──────────────────────────────────────────────────────────────
export const categoryColors = {
  creatures: "#16a34a",     // Deep forest green
  ufos: "#06b6d4",          // Electric cyan
  ghosts: "#d1d5db",        // Ethereal pale gray
  occult: "#7c3aed",        // Royal violet
  psychic: "#ec4899",       // Hot magenta
  ancients: "#d4af37",      // Ancient gold
  folklore: "#10b981",      // Emerald
  phenomena: "#f59e0b",     // Amber glow
  people: "#ef4444",        // Crimson
  trulyStrange: "#14b8a6",  // Mysterious teal
} as const;

// ──────────────────────────────────────────────────────────────
// 5. Core Cosmic / Mystic Theme Palette (your app's soul)
// ──────────────────────────────────────────────────────────────
export const cosmicColors = {
  purpleBlack: "#0a0118",
  darkPurple: "#1a0b2e",
  deepViolet: "#2d1b4e",
  cosmicPurple: "#4a1d7e",
  nebulaPink: "#8b3a9c",
  starGold: "#d4af37",
  moonSilver: "#c0c0c0",
  glowBlue: "#4d7cff",
} as const;

// ──────────────────────────────────────────────────────────────
// 6. Rainbow Gradient Palette (for backgrounds, particles, etc.)
// ──────────────────────────────────────────────────────────────
export const backgroundColors = [
  "#fef2f2","#fee2e2","#fecaca","#fca5a5","#f87171","#ef4444","#dc2626","#b91c1c","#991b1b","#7f1d1d",
  "#fff7ed","#ffedd5","#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#c2410c","#9a3412","#7c2d12",
  "#fffbeb","#fef3c7","#fde68a","#fcd34d","#fbbf24","#f59e0b","#d97706","#b45309","#92400e","#78350f",
  "#fefce8","#fef9c3","#fef08a","#fde047","#facc15","#eab308","#ca8a04","#a16207","#854d0e","#713f12",
  "#f7fee7","#ecfccb","#d9f99d","#bef264","#a3e635","#84cc16","#65a30d","#4d7c0f","#3f6212","#365314",
  "#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d","#166534","#14532d",
  "#ecfdf5","#d1fae5","#a7f3d0","#6ee7b7","#34d399","#10b981","#059669","#047857","#065f46","#064e3b",
  "#f0fdfa","#ccfbf1","#99f6e4","#5eead4","#2dd4bf","#14b8a6","#0d9488","#0f766e","#115e59","#134e4a",
  "#f0f9ff","#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0ea5e9","#0284c7","#0369a1","#075985","#0c4a6e",
  "#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#1e3a8a",
  "#eef2ff","#e0e7ff","#c7d2fe","#a5b4fc","#818cf8","#6366f1","#4f46e5","#4338ca","#3730a3","#312e81",
  "#f5f3ff","#ede9fe","#ddd6fe","#c4b5fd","#a78bfa","#8b5cf6","#7c3aed","#6d28d9","#5b21b6","#4c1d95",
  "#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#a855f7","#9333ea","#7e22ce","#6b21a8","#581c87",
  "#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf","#86198f","#701a75",
  "#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#ec4899","#db2777","#be185d","#9d174d","#831843",
  "#fff1f2","#ffe4e6","#fecdd3","#fda4af","#fb7185","#f43f5e","#e11d48","#be123c","#9f1239","#881337",
] as const;

// ──────────────────────────────────────────────────────────────
// 7. Emoji Library (gamification, achievements, fun)
// FIXED: Proper emoji encoding for React Native compatibility
// ──────────────────────────────────────────────────────────────
export const emojies = [
  "🍎","🍏","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍈","🍒","🍑","🥭","🍍","🥥","🥝",
  "🍅","🍆","🥑","🥦","🥬","🥒","🌶️","🫑","🌽","🥕","🥔","🧄","🧅","🍄",
  "🍞","🥖","🥨","🥐","🥯","🧀","🥚","🍳","🥞","🧇","🥓","🍖","🍗","🦴",
  "🌭","🍔","🍟","🍕","🥪","🌮","🌯","🫔","🥙","🧆",
  "🍝","🍜","🍱","🍤","🍙","🍚","🍛","🍲","🥘","🥗",
  "🍿","🧈","🥫","🍱","🥮","🍠","🍢","🍡","🥠","🥡",
  "🍦","🍧","🍨","🍩","🍪","🧁","🥧","🎂","🍮","🍭","🍬","🍫","🍯",
  "🥜","🌰","🥛","🍼","🧉","🧋","🍶","🍺","🍻","🍷","🍹","🥃","🍾","☕","🫖",
  "🥄","🍴","🍽️","🥢","🧂",
  "🛒","🛍️","🧺","💳","💸","💵","💰","💴","🧾","🔖","🏬","🏢","🏦","🏧","📦","📮","🏷️",
  "✅","📋","📜","✏️","📝","🔍","📅","⏰","📱","💻","🌎","🔗","🔒","🔑","🗃️","📁","🔁","💡","⭐","📌","📍","📈","💯","🎉","🎊","🎁","🏆","⚖️","🏠",
  "🚗","🏃‍♂️","🏃‍♀️","🚶‍♂️","🚶‍♀️",
  "👕","👖","👗","👘","🩳","👠","👟","🧥","🧤","🧣","🧦","🎒","👜","👝","👓","🕶️","🎩",
  "🪣","🪑","🛋️","🚪","🪟","🏺","🖼️","📺","📻","🔌","🧴","🪥","🧹","🧽","🗑️","🪒","💊","💉","🩹","❤️","💔","💘","💙","💚","💛","💜",
] as const;

// ──────────────────────────────────────────────────────────────
// 8. Icon Emojis (app-specific icons used throughout UI)
// FIXED: Proper encoding for React Native
// ──────────────────────────────────────────────────────────────
export const iconEmojis = {
  // Navigation
  home: "🏠",
  explore: "👁️",
  arcana: "🔮",
  favorite: "⭐",
  search: "🔍",
  settings: "⚙️",
  
  // Categories
  creatures: "🦎",
  ufos: "🛸",
  ghosts: "👻",
  occult: "🔮",
  psychic: "🧠",
  ancients: "🏛️",
  folklore: "🦊",
  phenomena: "⚡",
  people: "💀",
  trulyStrange: "❓",
  
  // Actions
  back: "←",
  forward: "→",
  add: "➕",
  remove: "➖",
  edit: "✏️",
  delete: "🗑️",
  share: "📤",
  copy: "📋",
  link: "🔗",
  
  // Status
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
  lock: "🔒",
  unlock: "🔓",
  
  // Content
  book: "📖",
  document: "📄",
  image: "🖼️",
  video: "🎬",
  audio: "🎵",
  location: "📍",
  calendar: "📅",
  time: "⏰",
  
  // Gamification
  trophy: "🏆",
  medal: "🏅",
  star: "⭐",
  fire: "🔥",
  lightning: "⚡",
  crystal: "💎",
  crown: "👑",
  
  // Misc
  moon: "🌙",
  sun: "☀️",
  sparkle: "✨",
  magic: "🪄",
  eye: "👁️",
  heart: "❤️",
  broken_heart: "💔",
  
  // Special
  enlightened: "✨",
  mystery: "❓",
  portal: "🌀",
  cosmic: "🌌",
} as const;

// ──────────────────────────────────────────────────────────────
// 9. Gradient Presets (ready-to-use gradient combinations)
// ──────────────────────────────────────────────────────────────
export const gradientPresets = {
  cosmic: [cosmicColors.purpleBlack, cosmicColors.darkPurple, cosmicColors.deepViolet],
  mystic: [cosmicColors.darkPurple, cosmicColors.cosmicPurple, cosmicColors.nebulaPink],
  ethereal: ["#1a0b2e", "#2d1b4e", "#4a1d7e"],
  sunset: ["#7c3aed", "#ec4899", "#f59e0b"],
  ocean: ["#0ea5e9", "#06b6d4", "#14b8a6"],
  forest: ["#16a34a", "#10b981", "#14b8a6"],
  fire: ["#ef4444", "#f59e0b", "#facc15"],
  twilight: ["#312e81", "#4c1d95", "#581c87"],
  aurora: ["#6366f1", "#8b5cf6", "#a855f7"],
  nebula: ["#4c1d95", "#701a75", "#831843"],
} as const;

// ──────────────────────────────────────────────────────────────
// 10. Opacity Helpers (for consistent transparency)
// ──────────────────────────────────────────────────────────────
export const opacities = {
  transparent: "00",
  subtle: "0D",      // 5%
  faint: "1A",       // 10%
  light: "33",       // 20%
  medium: "4D",      // 30%
  visible: "66",     // 40%
  strong: "80",      // 50%
  prominent: "99",   // 60%
  bold: "B3",        // 70%
  intense: "CC",     // 80%
  opaque: "E6",      // 90%
  solid: "FF",       // 100%
} as const;

/**
 * Adds opacity to a hex color
 * @param color - Hex color (with or without #)
 * @param opacity - Opacity key from opacities object
 * @returns Color with opacity
 * 
 * @example
 * withOpacity('#8B5CF6', 'medium') // '#8B5CF64D'
 */
export const withOpacity = (
  color: string, 
  opacity: keyof typeof opacities
): string => {
  const cleanColor = color.replace('#', '');
  return `#${cleanColor}${opacities[opacity]}`;
};

/**
 * Adds custom opacity percentage to a hex color
 * @param color - Hex color (with or without #)
 * @param percentage - Opacity percentage (0-100)
 * @returns Color with opacity
 * 
 * @example
 * withOpacityPercent('#8B5CF6', 50) // '#8B5CF680'
 */
export const withOpacityPercent = (
  color: string, 
  percentage: number
): string => {
  const cleanColor = color.replace('#', '');
  const clampedPercent = Math.max(0, Math.min(100, percentage));
  const hex = Math.round((clampedPercent / 100) * 255).toString(16).padStart(2, '0');
  return `#${cleanColor}${hex}`;
};

// ──────────────────────────────────────────────────────────────
// 11. Color Utilities
// ──────────────────────────────────────────────────────────────

/**
 * Validates if a string is a valid hex color
 * @param color - Color string to validate
 * @returns True if valid hex color
 */
export const isValidHexColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(color);
};

/**
 * Gets a random color from backgroundColors array
 * @returns Random background color
 */
export const getRandomBackgroundColor = (): string => {
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  return backgroundColors[randomIndex];
};

/**
 * Gets a random emoji from emojies array
 * @returns Random emoji
 */
export const getRandomEmoji = (): string => {
  const randomIndex = Math.floor(Math.random() * emojies.length);
  return emojies[randomIndex];
};

// ──────────────────────────────────────────────────────────────
// TypeScript Types for perfect autocomplete & safety
// ──────────────────────────────────────────────────────────────
export type CategoryColorKey = keyof typeof categoryColors;
export type CosmicColorKey = keyof typeof cosmicColors;
export type ZincShade = keyof typeof zincColors;
export type BackgroundColor = typeof backgroundColors[number];
export type Emoji = typeof emojies[number];
export type IconEmojiKey = keyof typeof iconEmojis;
export type GradientPresetKey = keyof typeof gradientPresets;
export type OpacityKey = keyof typeof opacities;

// ──────────────────────────────────────────────────────────────
// Export Everything
// ──────────────────────────────────────────────────────────────
export default {
  Colors,
  zincColors,
  appleBlue,
  appleRed,
  appleGreen,
  borderColor,
  categoryColors,
  cosmicColors,
  backgroundColors,
  emojies,
  iconEmojis,
  gradientPresets,
  opacities,
  withOpacity,
  withOpacityPercent,
  isValidHexColor,
  getRandomBackgroundColor,
  getRandomEmoji,
} as const;