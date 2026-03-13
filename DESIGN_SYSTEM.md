# DESIGN_SYSTEM.md — Ryan Realty
**Read this file before writing any UI code.**

## FONTS
- Display/Headlines: Cormorant Garamond (weight 300/500 only)
- Body/UI: Jost (weight 300-600)
- NEVER font-weight 700+ on Cormorant Garamond

## COLORS
- Primary: var(--navy-800) [#1B2A4A]
- Canvas: var(--cream-500) [#F5F0E8]
- Accent: var(--gold-500) [#A67C2A]
- Text: var(--charcoal) [#2C2C2C]
- NEVER hardcode hex values in components

## SPACING (8pt grid)
- Minimum section: var(--section-md) = 96px
- NEVER below var(--space-12) = 48px

## MOTION
- All animations require prefers-reduced-motion block
- Hover: translateY(-4px) + shadow-xl, 250ms ease-out

## NEVER DO
X Hardcode hex colors
X Hardcode pixel spacing
X Load other fonts
X font-weight: 700 on Cormorant Garamond
X Animate without prefers-reduced-motion
X More than one primary CTA per section
X Hyphens or colons in copy
X Banned words: stunning, nestled, boasts, pristine, dream home, breathtaking
X Stock photography