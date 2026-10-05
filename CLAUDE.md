# Aurora-108 Design & Engineering Constitution

Aurora-108 is a mobile-first showcase of 108 browser and full-stack JavaScript projects. Batch work must preserve a coherent product identity while keeping each project meaningfully distinct.

## Product principles

- Build real, polished, working experiences. Never ship TODOs, dead code, fake functionality, or placeholder interactions.
- Keep architecture simple and local to the feature. Reuse shared primitives before creating new ones.
- One project, one clear primary action. Prefer progressive disclosure over option overload.
- Every interactive surface supports loading, empty, error, success, keyboard, and reduced-motion states where applicable.
- Touch targets are at least 44px. Keep important actions in comfortable thumb zones on phones.
- Maintain visible focus states, semantic labels, and text contrast of at least 4.5:1.

## Shared visual language

- Base system: iOS-inspired Glassmorphism + Liquid Morphism, used as a system rather than a decorative layer.
- Font stack: -apple-system, "SF Pro Display", Inter, system-ui, sans-serif.
- Glass surfaces use translucent fills, backdrop blur with graceful fallbacks, inner borders, specular highlights, and layered shadows.
- Backgrounds use slow mesh/ambient depth. Category accents provide differentiation without turning every page into generic purple AI art.
- Liquid motion uses SVG turbulence/displacement and restrained blob/ripple motion. Motion must respect prefers-reduced-motion.
- Light and dark themes are token-driven and follow prefers-color-scheme.
- On small screens, reduce blur layers and shadow complexity to protect frame rate.
- Avoid external runtime dependencies for browser-only projects unless the project specification explicitly calls for one.

## Architecture

- shared/ owns tokens, glass primitives, liquid primitives, common UI behavior, filter definitions, and demo-mode persistence helpers.
- Browser projects 01-90 use plain ES6+ HTML/CSS/JS with no build step.
- Full-stack projects 91-108 use Node + Express and SQLite/JSON persistence, JWT authentication, and WebSocket only where real-time behavior benefits from it.
- Full-stack projects also expose a demo mode backed by shared mock utilities so the static gallery remains useful on GitHub Pages.
- Do not copy shared CSS into project folders. Import the shared design system instead.
- Keep project READMEs focused on purpose, controls, architecture, and test notes.

## Delivery

- Work in the batch order defined in README.md.
- Each batch is one conventional commit with the prefix feat(batch-N):.
- After implementation, perform a designer pass: identify the ten highest-impact UX/design problems, fix them, and review again.
- Provide a concise manual test checklist after each batch and stop until the next batch is explicitly requested.
