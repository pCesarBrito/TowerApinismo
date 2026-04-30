---
name: Industrial Altitude
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#574237'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#8b7265'
  outline-variant: '#dec0b2'
  surface-tint: '#9c4500'
  primary: '#984300'
  on-primary: '#ffffff'
  primary-container: '#bf5500'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb68e'
  secondary: '#5c5f62'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e4'
  on-secondary-container: '#606366'
  tertiary: '#5a5c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#737576'
  on-tertiary-container: '#fcfdfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb68e'
  on-primary-fixed: '#331200'
  on-primary-fixed-variant: '#773300'
  secondary-fixed: '#e1e2e6'
  secondary-fixed-dim: '#c5c6ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin: 32px
  stack-sm: 16px
  stack-md: 40px
  stack-lg: 80px
---

## Brand & Style

The brand personality is defined by safety, technical expertise, and vertical precision. The design system adopts a **Modern Industrial** aesthetic—balancing the raw, utilitarian nature of rope access with the polished professionalism of a high-tier engineering service.

The UI should evoke a sense of structural integrity and reliability. This is achieved through high-contrast layouts, heavy-weight typography that mimics architectural signage, and a strictly disciplined grid. The visual mood is "Rugged Elegance": it feels at home on a construction site but functions with the refinement of a modern tech platform.

## Colors

The palette is anchored by **Safety Orange (#DE6A18)**, used intentionally for primary actions and critical highlights, mimicking high-visibility industrial gear. **Charcoal (#1A1D20)** provides the structural weight, used for text, heavy UI elements, and deep backgrounds.

To maintain a "clean" look, the design system utilizes light-grey backgrounds (Tertiary) to differentiate sections without losing the airy feel of a modern professional site. This high-contrast pairing ensures accessibility and visual hierarchy, keeping the focus on the "Action" color.

## Typography

This design system uses **Work Sans** exclusively to maintain a cohesive, industrial-grotesk character. Headlines are set with extra-bold weights and tight tracking to mirror the heavy-duty branding of the logo.

Lower-level labels and technical specs should use uppercase styling with increased letter spacing to enhance readability and give a "machined" feel. Body text remains generous in line height to ensure clarity against the rugged aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to reflect structural planning. A 12-column system is used for desktops, with elements often spanning 4 or 6 columns to maintain a balanced, symmetrical appearance.

Spacing is based on an 8px modular scale. Generous "stack" spacing (80px+) is used between major sections to emphasize the "Altitude" and "Space" inherent in the brand's services. Verticality is further emphasized through the use of tall image containers and narrow text columns.

## Elevation & Depth

To maintain a rugged, physical feel, this design system avoids soft, "cloudy" shadows. Instead, it utilizes **Tonal Layering** and **Crisp Borders**.

Depth is conveyed through:
- **Structural Overlays:** Elements like navigation or cards use a subtle 1px border (#E2E8F0) to define their edges.
- **Hard Shadows:** When elevation is required (e.g., on hover), a crisp 4px offset shadow in the primary charcoal color is used, rather than a diffused blur.
- **Contrasting Surfaces:** Dark Charcoal containers sitting on Light Grey backgrounds create a clear "Foreground/Background" relationship without needing artificial lighting effects.

## Shapes

The shape language is **Soft (0.25rem)**. This slight radius suggests high-quality machining and precision-tooled equipment, avoiding the "friendliness" of pill shapes or the "dated" feel of perfectly sharp corners.

Buttons, input fields, and cards all share this 4px radius. Large image containers may occasionally use sharp (0px) corners on one side to align with the vertical "Tower" motif.

## Components

### Navigation
The navigation is a high-contrast utility bar. 
- **Sticky:** It remains fixed to the top, utilizing a white background with a thin charcoal bottom border.
- **Links:** Use `label-bold` typography. Active states are indicated by an orange bottom-bar (2px) rather than a color change.

### Cards with Hover Effects
Service and project cards are the core of the visual experience.
- **Default State:** A clean white container with a 1px border. 
- **Hover State:** The card should lift using a "hard shadow" (4px offset) and the border color should transition to Primary Orange. Images inside the card should subtly scale (1.05x) to create a sense of moving closer to the work.

### Buttons
- **Primary:** Solid Orange (#DE6A18) background with Charcoal (#1A1D20) text. Heavy weight.
- **Secondary:** Transparent background with a 2px Charcoal border. 
- **Interactive:** On hover, primary buttons shift to a slightly darker orange, while secondary buttons fill with Charcoal and flip text to white.

### Footer
The footer is the "Foundation" of the site.
- **Background:** Deep Charcoal (#1A1D20).
- **Typography:** All text in light grey or white. 
- **Structure:** 4-column layout including service lists, contact info, and certification badges. Use heavy orange icons for contact methods (phone, email).

### Technical Chips
Use for service tags (e.g., "NR-35", "Rope Access"). Small, rectangular boxes with a light grey fill and `label-bold` text.