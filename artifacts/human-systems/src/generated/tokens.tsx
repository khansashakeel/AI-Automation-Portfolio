/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#f6f0e7",
      "foreground": "#213229",
      "border": "#d8cbbb",
      "card": "#fffdf8",
      "cardForeground": "#213229",
      "popover": "#fffdf8",
      "popoverForeground": "#213229",
      "primary": "#285443",
      "primaryForeground": "#fffdf8",
      "secondary": "#e8ded1",
      "secondaryForeground": "#285443",
      "muted": "#eee6da",
      "mutedForeground": "#6d756d",
      "accent": "#d96d4f",
      "accentForeground": "#fffdf8",
      "destructive": "#b84d45",
      "destructiveForeground": "#fffdf8",
      "input": "#cbbca9",
      "ring": "#d96d4f",
      "chart1": "#285443",
      "chart2": "#d96d4f",
      "chart3": "#c49b5f",
      "chart4": "#657b89",
      "chart5": "#9d6470",
      "sidebar": "#eee6da",
      "sidebarForeground": "#3d5147",
      "sidebarBorder": "#d8cbbb",
      "sidebarPrimary": "#285443",
      "sidebarPrimaryForeground": "#fffdf8",
      "sidebarAccent": "#e4d7c7",
      "sidebarAccentForeground": "#285443",
      "sidebarRing": "#d96d4f"
    },
    "dark": {
      "background": "#18241f",
      "foreground": "#f6f0e7",
      "border": "#3a5045",
      "card": "#22352c",
      "cardForeground": "#f6f0e7",
      "popover": "#22352c",
      "popoverForeground": "#f6f0e7",
      "primary": "#e8c37b",
      "primaryForeground": "#213229",
      "secondary": "#30483c",
      "secondaryForeground": "#f6f0e7",
      "muted": "#2a4035",
      "mutedForeground": "#b9c0b4",
      "accent": "#ec8061",
      "accentForeground": "#213229",
      "destructive": "#df766d",
      "destructiveForeground": "#213229",
      "input": "#466052",
      "ring": "#ec8061",
      "chart1": "#e8c37b",
      "chart2": "#ec8061",
      "chart3": "#9cc5b0",
      "chart4": "#9ab6c5",
      "chart5": "#d99aa4",
      "sidebar": "#213229",
      "sidebarForeground": "#eee6da",
      "sidebarBorder": "#3a5045",
      "sidebarPrimary": "#e8c37b",
      "sidebarPrimaryForeground": "#213229",
      "sidebarAccent": "#30483c",
      "sidebarAccentForeground": "#f6f0e7",
      "sidebarRing": "#ec8061"
    }
  },
  "fontFamily": {
    "sans": [
      "DM Sans",
      "sans-serif"
    ],
    "serif": [
      "Lora",
      "serif"
    ],
    "mono": [
      "JetBrains Mono",
      "monospace"
    ]
  },
  "radius": "0.35rem",
  "spacing": "0.3rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
