# Aurora-108

A mobile-first monorepo containing 108 fully working JavaScript projects, unified by one visual system: **iOS Glassmorphism + Liquid Morphism**.

## Batch 0

Batch 0 establishes the reusable product foundation:

- Shared design tokens and responsive glass primitives
- Liquid morphing and ripple utilities with reduced-motion support
- Searchable, filterable 108-project gallery
- PWA manifest + lightweight offline shell
- Shared demo-mode storage and BroadcastChannel event bus
- GitHub Pages deployment workflow
- Project and UX constitution in `CLAUDE.md`

No project page is advertised as live until its real implementation lands. Humanity may be impatient, but broken links are still worse.

## Structure

```text
Aurora-108/
├── CLAUDE.md
├── README.md
├── index.html
├── manifest.webmanifest
├── sw.js
├── shared/
│   ├── glass.css
│   ├── liquid.css
│   ├── tokens.css
│   ├── ui.js
│   ├── liquid-filters.svg
│   └── mock-backend.js
├── projects/
│   └── NN-slug/
│       ├── index.html
│       ├── style.css
│       ├── script.js
│       └── README.md
└── .github/
    └── workflows/
        └── pages.yml
```

## Delivery sequence

| Batch | Scope |
|---|---|
| 0 | Shared foundation, gallery, docs, Pages workflow |
| 1 | 12 showcase projects |
| 2 | Projects 01–18 · Beginner |
| 3 | Projects 19–36 · Games |
| 4 | Projects 37–54 · API & Data |
| 5 | Projects 55–72 · Productivity & Utility |
| 6 | Projects 73–90 · Creative & Advanced |
| 7 | Projects 91–108 · Full-stack |

Each batch is delivered as one conventional commit using `feat(batch-N): ...`, followed by a designer pass and a manual test checklist.

## Project catalog

| No. | Name | Category | Live link | Tech |
|---:|---|---|---|---|
| 01 | Counter App | Beginner | Not published yet | Vanilla JS |
| 02 | Digital Clock | Beginner | Not published yet | Vanilla JS |
| 03 | Color Flipper | Beginner | Not published yet | Vanilla JS |
| 04 | Tip Calculator | Beginner | Not published yet | Vanilla JS |
| 05 | Character Counter | Beginner | Not published yet | Vanilla JS |
| 06 | Password Generator | Beginner | Not published yet | Vanilla JS |
| 07 | To-Do List | Beginner | Not published yet | Vanilla JS |
| 08 | Form Validator | Beginner | Not published yet | Vanilla JS |
| 09 | Notes App | Beginner | Not published yet | Vanilla JS |
| 10 | Modal Popup | Beginner | Not published yet | Vanilla JS |
| 11 | FAQ Accordion | Beginner | Not published yet | Vanilla JS |
| 12 | Image Slider | Beginner | Not published yet | Vanilla JS |
| 13 | Quiz App | Beginner | Not published yet | Vanilla JS |
| 14 | Rock Paper Scissors | Beginner | Not published yet | Vanilla JS |
| 15 | Number Guessing Game | Beginner | Not published yet | Vanilla JS |
| 16 | Memory Card Game | Beginner | Not published yet | Vanilla JS |
| 17 | Stopwatch | Beginner | Not published yet | Vanilla JS |
| 18 | Expense Tracker | Beginner | Not published yet | Vanilla JS |
| 19 | Tic-Tac-Toe | Games | Not published yet | Vanilla JS |
| 20 | Snake | Games | Not published yet | Vanilla JS |
| 21 | Pong | Games | Not published yet | Vanilla JS |
| 22 | Whack-a-Mole | Games | Not published yet | Vanilla JS |
| 23 | Simon Says | Games | Not published yet | Vanilla JS |
| 24 | Dice Roller | Games | Not published yet | Vanilla JS |
| 25 | Hangman | Games | Not published yet | Vanilla JS |
| 26 | Typing Speed Test | Games | Not published yet | Vanilla JS |
| 27 | Reaction Time Game | Games | Not published yet | Vanilla JS |
| 28 | Word Scramble | Games | Not published yet | Vanilla JS |
| 29 | 2048 | Games | Not published yet | Vanilla JS |
| 30 | Breakout | Games | Not published yet | Vanilla JS |
| 31 | Flappy Bird Clone | Games | Not published yet | Vanilla JS |
| 32 | Chess Clock | Games | Not published yet | Vanilla JS |
| 33 | Maze Generator | Games | Not published yet | Vanilla JS |
| 34 | Drag-and-Drop Puzzle | Games | Not published yet | Vanilla JS |
| 35 | Canvas Drawing App | Games | Not published yet | Vanilla JS |
| 36 | Virtual Music Keyboard | Games | Not published yet | Vanilla JS |
| 37 | Weather App | API & Data | Not published yet | Vanilla JS |
| 38 | Movie Search | API & Data | Not published yet | Vanilla JS |
| 39 | Recipe Finder | API & Data | Not published yet | Vanilla JS |
| 40 | Currency Converter | API & Data | Not published yet | Vanilla JS |
| 41 | Developer Profile Finder | API & Data | Not published yet | Vanilla JS |
| 42 | Country Explorer | API & Data | Not published yet | Vanilla JS |
| 43 | News Reader | API & Data | Not published yet | Vanilla JS |
| 44 | Crypto Price Tracker | API & Data | Not published yet | Vanilla JS |
| 45 | Stock Price Viewer | API & Data | Not published yet | Vanilla JS |
| 46 | Dictionary App | API & Data | Not published yet | Vanilla JS |
| 47 | Book Search | API & Data | Not published yet | Vanilla JS |
| 48 | Public Holiday Finder | API & Data | Not published yet | Vanilla JS |
| 49 | IP Address Finder | API & Data | Not published yet | Vanilla JS |
| 50 | Random User Explorer | API & Data | Not published yet | Vanilla JS |
| 51 | Image Search | API & Data | Not published yet | Vanilla JS |
| 52 | Meal Planner | API & Data | Not published yet | Vanilla JS |
| 53 | Air Quality Tracker | API & Data | Not published yet | Vanilla JS |
| 54 | REST API Explorer | API & Data | Not published yet | Vanilla JS |
| 55 | Notes App | Productivity & Utility | Not published yet | Vanilla JS |
| 56 | Pomodoro Timer | Productivity & Utility | Not published yet | Vanilla JS |
| 57 | Habit Tracker | Productivity & Utility | Not published yet | Vanilla JS |
| 58 | Expense Tracker | Productivity & Utility | Not published yet | Vanilla JS |
| 59 | Password Generator | Productivity & Utility | Not published yet | Vanilla JS |
| 60 | Clipboard Manager | Productivity & Utility | Not published yet | Vanilla JS |
| 61 | Markdown Previewer | Productivity & Utility | Not published yet | Vanilla JS |
| 62 | Character Counter | Productivity & Utility | Not published yet | Vanilla JS |
| 63 | Word Counter | Productivity & Utility | Not published yet | Vanilla JS |
| 64 | Text Formatter | Productivity & Utility | Not published yet | Vanilla JS |
| 65 | File Size Converter | Productivity & Utility | Not published yet | Vanilla JS |
| 66 | Unit Converter | Productivity & Utility | Not published yet | Vanilla JS |
| 67 | BMI Calculator | Productivity & Utility | Not published yet | Vanilla JS |
| 68 | Age Calculator | Productivity & Utility | Not published yet | Vanilla JS |
| 69 | Loan Calculator | Productivity & Utility | Not published yet | Vanilla JS |
| 70 | Invoice Generator | Productivity & Utility | Not published yet | Vanilla JS |
| 71 | Resume Builder | Productivity & Utility | Not published yet | Vanilla JS |
| 72 | Form Validator | Productivity & Utility | Not published yet | Vanilla JS |
| 73 | Drawing App | Creative & Advanced | Not published yet | Vanilla JS |
| 74 | Pixel Art Maker | Creative & Advanced | Not published yet | Vanilla JS |
| 75 | Meme Generator | Creative & Advanced | Not published yet | Vanilla JS |
| 76 | Image Editor | Creative & Advanced | Not published yet | Vanilla JS |
| 77 | Typing Speed Test | Creative & Advanced | Not published yet | Vanilla JS |
| 78 | Speech-to-Text | Creative & Advanced | Not published yet | Vanilla JS |
| 79 | Text-to-Speech | Creative & Advanced | Not published yet | Vanilla JS |
| 80 | Music Visualizer | Creative & Advanced | Not published yet | Vanilla JS |
| 81 | Custom Audio Player | Creative & Advanced | Not published yet | Vanilla JS |
| 82 | Custom Video Player | Creative & Advanced | Not published yet | Vanilla JS |
| 83 | Drag-and-Drop Builder | Creative & Advanced | Not published yet | Vanilla JS |
| 84 | Kanban Board | Creative & Advanced | Not published yet | Vanilla JS |
| 85 | Infinite Scroll Gallery | Creative & Advanced | Not published yet | Vanilla JS |
| 86 | Virtual Keyboard | Creative & Advanced | Not published yet | Vanilla JS |
| 87 | Live Code Playground | Creative & Advanced | Not published yet | Vanilla JS |
| 88 | Collaborative Whiteboard | Creative & Advanced | Not published yet | Vanilla JS |
| 89 | Data Visualization Tool | Creative & Advanced | Not published yet | Vanilla JS |
| 90 | Browser Extension | Creative & Advanced | Not published yet | Vanilla JS |
| 91 | Authentication System | Full-stack | Not published yet | Node · Express · DB · Auth |
| 92 | Real-Time Chat | Full-stack | Not published yet | Node · Express · DB · Auth |
| 93 | E-Commerce Store | Full-stack | Not published yet | Node · Express · DB · Auth |
| 94 | Job Board | Full-stack | Not published yet | Node · Express · DB · Auth |
| 95 | Social Media App | Full-stack | Not published yet | Node · Express · DB · Auth |
| 96 | Blogging Platform | Full-stack | Not published yet | Node · Express · DB · Auth |
| 97 | Learning Management System | Full-stack | Not published yet | Node · Express · DB · Auth |
| 98 | Project Management App | Full-stack | Not published yet | Node · Express · DB · Auth |
| 99 | Event Booking | Full-stack | Not published yet | Node · Express · DB · Auth |
| 100 | Food Delivery App | Full-stack | Not published yet | Node · Express · DB · Auth |
| 101 | Video Streaming Platform | Full-stack | Not published yet | Node · Express · DB · Auth |
| 102 | Online Code Editor | Full-stack | Not published yet | Node · Express · DB · Auth |
| 103 | Customer Support Portal | Full-stack | Not published yet | Node · Express · DB · Auth |
| 104 | SaaS Subscription App | Full-stack | Not published yet | Node · Express · DB · Auth |
| 105 | Multi-Vendor Marketplace | Full-stack | Not published yet | Node · Express · DB · Auth |
| 106 | Collaborative Document Editor | Full-stack | Not published yet | Node · Express · DB · Auth |
| 107 | Real-Time Analytics Platform | Full-stack | Not published yet | Node · Express · DB · Auth |
| 108 | Full-Stack Portfolio CMS | Full-stack | Not published yet | Node · Express · DB · Auth |

## Design system

The gallery and all future projects import the same token, glass, and liquid layers. Category accents differentiate domains without abandoning the system.

Core accessibility expectations:

- 44px minimum touch targets
- Semantic labels and keyboard operation
- Visible focus ring
- Reduced-motion support
- Contrast-aware text treatment on glass
- Loading, empty, error, and success states for applicable interactions

## Local usage

No build step is required for Batch 0. Serve the repository with any static server so module loading, service-worker scope, and browser APIs behave consistently.

## Deployment

GitHub Pages is deployed by `.github/workflows/pages.yml`. The root gallery is the Pages entrypoint.
