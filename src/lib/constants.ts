export const BRAND_COLORS = {
  bgPrimary: "#080B12",
  bgSecondary: "#0D111A",
  surface: "#151B26",
  surfaceHover: "#1D2535",
  electricBlue: "#1677FF",
  electricBlueGlow: "rgba(22, 119, 255, 0.35)",
  acidLime: "#C6FF3D",
  acidLimeGlow: "rgba(198, 255, 61, 0.35)",
  textPrimary: "#F5F7FA",
  textSecondary: "#A5ACB8",
  textMuted: "#697386",
  border: "#252D3A",
  borderActive: "#1677FF",
} as const;

export const NAV_LINKS = [
  { label: "01 // HERO", href: "#hero" },
  { label: "02 // IDENTITY", href: "#about" },
  { label: "03 // NETWORK", href: "#social" },
  { label: "04 // CONNECT", href: "#connect" },
] as const;

export const VIEWPORTS = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
} as const;

