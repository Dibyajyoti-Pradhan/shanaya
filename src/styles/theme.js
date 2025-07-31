// src/styles/theme.js

const shared = {
  fonts: {
    main: `'Cormorant Garamond', 'Garamond', 'Times New Roman', serif`,
    mono: `'Cormorant', 'Garamond', 'Times New Roman', serif`,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "24px",
    xxl: "32px",
  },
  transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
  borderRadius: "4px",
};

export const darkTheme = {
  ...shared,
  colors: {
    background: "#0f1419",
    text: "#e8f4f8",
    primary: "#ff8c42",
    secondary: "#1a2332",
    accent: "#2d3a4a",
    white: "#f0f8ff",
    greenTint: "rgba(255, 140, 66, 0.1)",
    darkNavy: "#0a0f14",
    navy: "#0f1419",
    lightNavy: "#1a2332",
    headerBackground: "#0a0f14",
    linkHover: "#ffa366",
    cardGlow: "rgba(255, 140, 66, 0.2)",
    cardGlowGradient: "rgba(255, 140, 66, 0.15)",
    profileGlow: "rgba(255, 140, 66, 0.7)",
    cardHoverBackground: "rgba(26, 35, 50, 0.8)",
    cardBackground: "rgba(26, 35, 50, 0.6)",
    slate: "#a8c4d4",
    lightSlate: "#ff8c42",
    lightestSlate: "#ffa366",
    green: "#ff8c42",
  },
};

export const lightTheme = {
  ...shared,
  colors: {
    background: "#8ba8c0",
    text: "#1a2332",
    primary: "#ff6b35",
    secondary: "#7ab0c8",
    accent: "#5a9eb8",
    white: "#ffffff",
    greenTint: "rgba(255, 107, 53, 0.1)",
    darkNavy: "#5a9eb8",
    navy: "#7ab0c8",
    lightNavy: "#8ba8c0",
    headerBackground: "#ffffff",
    linkHover: "#e55a2b",
    cardGlow: "rgba(255, 107, 53, 0.2)",
    cardGlowGradient: "rgba(255, 107, 53, 0.15)",
    profileGlow: "rgba(255, 107, 53, 0.7)",
    cardHoverBackground: "#5a9eb8",
    cardBackground: "#7ab0c8",
    slate: "#4a6b8f",
    lightSlate: "#6b8faf",
    lightestSlate: "#8b6b8f",
    green: "#ff6b35",
  },
};
