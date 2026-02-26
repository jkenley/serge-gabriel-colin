import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/* ─────────────────────────────────────────────────────────────
   Raw color constants — for non-Chakra contexts (Lucide icon
   color props, CSS custom properties, inline styles, etc.)
   ───────────────────────────────────────────────────────────── */
export const rawColors = {
  primary: "hsl(211, 54%, 11%)",
  secondary: "hsl(211, 55%, 23%)",
  gold: "hsl(39, 55%, 51%)",
  teal: "hsl(173, 68%, 32%)",
  warmWhite: "hsl(36, 20%, 98.5%)",
} as const;

/* ─────────────────────────────────────────────────────────────
   Design System Configuration
   ───────────────────────────────────────────────────────────── */
const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: "bg.page",
      color: "fg.default",
      fontFamily: "body",
      scrollBehavior: "smooth",
    },
    "::selection": {
      bg: "brand.gold/20",
      color: "brand.primary",
    },
  },

  theme: {
    /* ═══════════════════════════════════════════════════════════
       PRIMITIVE TOKENS — raw design values
       ═══════════════════════════════════════════════════════════ */
    tokens: {
      /* ── Colors ── */
      colors: {
        brand: {
          primary: { value: rawColors.primary },
          secondary: { value: rawColors.secondary },
          foreground: { value: "hsl(210, 29%, 24%)" },
          gold: { value: rawColors.gold },
          "gold.light": { value: "hsl(39, 58%, 60%)" },
          teal: { value: rawColors.teal },
          "teal.light": { value: "hsl(173, 62%, 44%)" },
          steel: { value: "hsl(209, 50%, 36%)" },
          silver: { value: "hsl(212, 12%, 72%)" },
          muted: { value: "hsl(211, 15%, 43%)" },
        },
        warm: {
          white: { value: rawColors.warmWhite },
        },
        cool: {
          white: { value: "hsl(210, 15%, 97.5%)" },
        },
      },

      /* ── Typography ── */
      fonts: {
        heading: {
          value: "var(--font-heading), 'Cormorant Garamond', Georgia, serif",
        },
        body: {
          value: "var(--font-body), 'Plus Jakarta Sans', system-ui, sans-serif",
        },
      },
      fontSizes: {
        label: { value: "11px" },
        caption: { value: "12px" },
        cta: { value: "13px" },
      },
      letterSpacings: {
        label: { value: "0.15em" },
        labelSm: { value: "0.1em" },
        cta: { value: "0.08em" },
        ctaSm: { value: "0.06em" },
        heading: { value: "0.02em" },
        headingTight: { value: "-0.01em" },
      },
      lineHeights: {
        display: { value: "1" },
        heading: { value: "1.1" },
        subheading: { value: "1.3" },
        body: { value: "1.6" },
        relaxed: { value: "1.7" },
        loose: { value: "1.8" },
      },

      /* ── Motion ── */
      durations: {
        fast: { value: "150ms" },
        normal: { value: "300ms" },
        slow: { value: "500ms" },
        slower: { value: "600ms" },
      },
      easings: {
        default: { value: "ease" },
        smooth: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
      },

      /* ── Layout ── */
      sizes: {
        container: { value: "1200px" },
        "container.wide": { value: "1400px" },
      },

      /* ── Layering ── */
      zIndex: {
        header: { value: 50 },
        overlay: { value: 40 },
      },

      /* ── Opacity ── */
      opacity: {
        pattern: { value: 0.5 },
        noise: { value: 0.03 },
        subtle: { value: 0.05 },
      },
    },

    /* ═══════════════════════════════════════════════════════════
       SEMANTIC TOKENS — contextual aliases
       ═══════════════════════════════════════════════════════════ */
    semanticTokens: {
      colors: {
        bg: {
          page: { value: "{colors.warm.white}" },
          section: { value: "{colors.warm.white}" },
          sectionAlt: { value: "{colors.cool.white}" },
          dark: { value: "{colors.brand.primary}" },
        },
        fg: {
          default: { value: "{colors.brand.foreground}" },
          muted: { value: "{colors.brand.muted}" },
          onDark: { value: "white" },
          accent: { value: "{colors.brand.gold}" },
          accentHover: { value: "{colors.brand.gold.light}" },
          teal: { value: "{colors.brand.teal}" },
          tealHover: { value: "{colors.brand.teal.light}" },
        },
      },
    },

    /* ═══════════════════════════════════════════════════════════
       TEXT STYLES — composite typography presets
       ═══════════════════════════════════════════════════════════ */
    textStyles: {
      sectionLabel: {
        fontSize: "label",
        fontFamily: "body",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "label",
        color: "brand.gold",
      },
      sectionHeading: {
        fontFamily: "heading",
        fontSize: { base: "3xl", lg: "5xl" },
        fontWeight: "bold",
        letterSpacing: "headingTight",
        lineHeight: "heading",
      },
      displayHeading: {
        fontFamily: "heading",
        fontSize: { base: "4xl", md: "5xl", lg: "6xl" },
        fontWeight: "bold",
        lineHeight: "display",
      },
      bodyText: {
        fontFamily: "body",
        fontSize: { base: "sm", lg: "md" },
        lineHeight: "body",
      },
      ctaLink: {
        fontFamily: "body",
        fontSize: "cta",
        fontWeight: "500",
        letterSpacing: "ctaSm",
        textTransform: "uppercase",
      },
      metaCaption: {
        fontFamily: "body",
        fontSize: "caption",
        fontWeight: "500",
        textTransform: "uppercase",
        letterSpacing: "cta",
      },
    },

    /* ═══════════════════════════════════════════════════════════
       LAYER STYLES — composite visual presets
       ═══════════════════════════════════════════════════════════ */
    layerStyles: {
      container: {
        maxW: "1200px",
        mx: "auto",
        px: { base: "6", md: "8" },
      },
      containerWide: {
        maxW: "1400px",
        mx: "auto",
        px: { base: "6", md: "8" },
      },
      patternOverlay: {
        position: "absolute",
        inset: "0",
        opacity: "pattern",
        backgroundImage:
          "repeating-radial-gradient(circle at 0 0, transparent 0, hsl(211, 54%, 11%) 6px), repeating-linear-gradient(hsla(211, 55%, 18%, 0.4), hsla(211, 55%, 14%, 0.15))",
        pointerEvents: "none",
        zIndex: "0",
      },
      noiseOverlay: {
        position: "absolute",
        inset: "0",
        opacity: "noise",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        pointerEvents: "none",
        zIndex: "0",
      },
      goldDivider: {
        w: "full",
        h: "1px",
        bgGradient: "to-r",
        gradientFrom: "transparent",
        gradientVia: "brand.gold",
        gradientTo: "transparent",
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

/* ─────────────────────────────────────────────────────────────
   STYLE PRESETS — spreadable style objects for components
   (for patterns that benefit from explicit spreading in JSX)
   ───────────────────────────────────────────────────────────── */
export const buttonStyles = {
  gold: {
    bg: "brand.gold",
    color: "white",
    fontFamily: "body",
    fontWeight: "500",
    letterSpacing: "cta",
    cursor: "pointer",
    rounded: "full",
    transition: "all 300ms",
    _hover: { bg: "brand.gold.light" },
  },
  goldOutline: {
    border: "1px solid",
    borderColor: "brand.gold",
    color: "brand.gold",
    fontFamily: "body",
    fontWeight: "500",
    letterSpacing: "cta",
    cursor: "pointer",
    rounded: "full",
    transition: "all 300ms",
    _hover: { bg: "brand.gold", color: "white" },
  },
  teal: {
    bg: "brand.teal",
    color: "white",
    fontFamily: "body",
    fontWeight: "500",
    cursor: "pointer",
    rounded: "lg",
    transition: "all 300ms",
    _hover: { bg: "brand.teal.light" },
  },
} as const;
