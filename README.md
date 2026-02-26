# Serge Gabriel Collin — Official Website

Official portfolio website for **Serge Gabriel Collin**, Minister of Economy and Finance of the Republic of Haiti.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** Chakra UI v3, Framer Motion
- **i18n:** next-intl (French, English, Spanish)
- **Icons:** lucide-react
- **Linting:** Biome, Husky + lint-staged
- **Runtime:** Bun

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Production build
bun run build

# Start production server
bun run start
```

## Project Structure

```
app/
├── [locale]/           # Locale-based routing (fr/en/es)
│   ├── page.tsx        # Home
│   ├── biographie/     # Biography
│   ├── vision/         # Vision & Strategy
│   ├── actions/        # Actions & Achievements
│   ├── actualites/     # News
│   ├── medias/         # Media Gallery
│   └── contact/        # Contact
├── layout.tsx          # Root layout
└── fonts.ts            # Font configuration

components/
├── Navbar.tsx           # Responsive navigation + language switcher
├── Monogram.tsx         # Logo component (gold/white variants)
├── ScrollToTop.tsx      # Scroll-to-top button
├── SectionLabel.tsx     # Reusable section label
└── sections/            # Page section components

lib/
├── seo/metadata.ts      # SEO metadata generator
└── social.ts            # Social links configuration

messages/
├── fr.json              # French translations
├── en.json              # English translations
└── es.json              # Spanish translations

theme.ts                 # Design system tokens & configuration
```

## Design System

Centralized in `theme.ts` with tokens for:

- **Colors:** Brand palette (navy, gold, teal, steel)
- **Typography:** Custom font sizes, letter-spacings, line-heights
- **Motion:** Duration and easing tokens
- **Layout:** Container widths, z-index scale
- **Semantic tokens:** Context-aware color aliases
- **Text styles:** Composite typography presets

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start dev server |
| `bun run build` | Production build |
| `bun run start` | Start production server |
| `bun run lint` | Run Biome checks |
| `bun run lint:fix` | Auto-fix lint issues |
| `bun run format` | Format code |

## License

All rights reserved. See [LICENSE](./LICENSE) for details.
