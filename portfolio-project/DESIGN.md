# Portfolio Design System: The Curated Canvas

## Overview & Creative North Star
The Creative North Star for this design system is **"The Curated Canvas."**

As a developer, your work is often complex and invisible; your portfolio must be the inverse—transparent, structured, and profoundly intentional. This system treats code samples and project case studies like artifacts in a contemporary art gallery.

By leveraging intentional asymmetry, generous whitespace, and a monochromatic-leaning palette, the layout creates a sense of "quiet authority." The experience is designed to feel **High-End Editorial**, where elements guide the eye through shifting tonal planes rather than rigid grids.

---

## 1. Tonal Architecture (Colors)
Color is used to define architecture rather than for decoration. The palette is rooted in soft grays and deep slate tones.

### Core Palette
| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Background** | `#F9F9F9` | The base canvas for the entire application. |
| **Primary** | `#575E70` | Used for key architectural elements and CTAs. |
| **Primary Container** | `#DCE2F7` | Soft background for primary-related blocks. |
| **Secondary** | `#585F6D` | Supporting UI elements. |
| **Surface** | `#F9F9F9` | The main content surface. |
| **Surface Container Low** | `#F2F4F4` | Used for large structural blocks (footer, technical skills). |
| **Surface Container Lowest**| `#FFFFFF` | Used for cards and code snippets to "pop" forward. |
| **On Surface** | `#2D3435` | The primary text color (Never use pure black #000000). |
| **Outline Variant** | `#ACB3B4` | Used for "Ghost Borders" at 15% opacity. |

### Visual Principles
- **The "No-Line" Rule:** 1px solid borders are prohibited for sectioning. Boundaries are defined solely through background color shifts or negative space.
- **Glassmorphism:** Used for floating navigation bars (70% opacity with 24px backdrop-blur).
- **Gradients:** Main CTAs utilize a linear gradient from `primary` (#575E70) to `primary-dim` (#4B5264) at a 135-degree angle.

---

## 2. The Editorial Voice (Typography)
The system utilizes **Inter** to bridge the gap between technical precision and modern Swiss styling.

| Level | Size | Token | Usage |
| :--- | :--- | :--- | :--- |
| **Display** | 3.5rem | `display-lg` | Name or core value proposition (-0.02em letter-spacing). |
| **Title** | 1.375rem | `title-lg` | Project names and visual anchors. |
| **Body** | 1.0rem | `body-lg` | Main content (1.6 line-height for readability). |
| **Labels** | 0.75rem | `label-md` | Metadata/Categories (All-caps, 0.1em letter-spacing). |

---

## 3. Spacing & Layout Structure
- **Spacing Scale:** 3 (Base unit likely 4px or 8px depending on implementation).
- **Margins:** Minimum of `80px` to `120px` between major sections to let the design breathe.
- **Asymmetry:** Headlines are often placed off-center, balanced by whitespace or images on the opposite side.
- **Layering:** Depth is achieved by stacking tones (e.g., a `#FFFFFF` card on a `#F2F4F4` background) rather than heavy shadows.

---

## 4. Components & Sections

### Navigation Bar
- **Style:** Floating, Semi-transparent background (70%) with 24px blur.
- **Effect:** Creates a layer of "glass" over the scrolling content.

### Project Cards
- **Background:** `surface-container-lowest` (#FFFFFF).
- **Shape:** `xl` (0.75rem) rounding.
- **Spacing:** Minimum `2rem` padding.
- **Interactivity:** Ambient Shadow applied only on hover.

### Chips (Tech Tags)
- **Background:** `surface-variant` (#DDE4E5).
- **Text:** `on-surface-variant` (#596061).
- **Shape:** Full pill-shape (9999px) to contrast with grid corners.

### Input Fields
- **Background:** `surface-container-low` (#F2F4F4).
- **Focus State:** Transitions to `#FFFFFF` with a 2px "Ghost Border" (Primary color at 30% opacity).

### Major Page Sections
1. **Hero / Value Proposition:** Large display typography with signature texture CTAs.
2. **Project Case Studies:** Gallery-style grid using the editorial layering principle.
3. **Technical Skills:** Large structural blocks using `surface-container-low` shifts.
4. **Contact / Form:** Minimalist inputs following the "Quiet" design rule.
5. **Footer:** Deep tonal shift to define the end of the "Canvas."

---

## 5. Elevation & Depth
- **Ambient Shadows:** When floating effects are required, use `on-surface` (#2D3435) at 4-6% opacity with 32-48px blur.
- **Ghost Borders:** For essential containers, use `outline-variant` (#ACB3B4) at 15% opacity.

---

## 6. Do's & Don'ts

### Do
- [x] Use Asymmetry to create visual interest.
- [x] Embrace Large Margins (80px+).
- [x] Tint shadows with the `on-surface` color.
- [x] Use tonal shifts instead of dividers.

### Don't
- [ ] Never use Pure Black (#000000).
- [ ] Avoid standard 1px solid dividers or rules.
- [ ] Don't over-round containers (Stick to 0.375rem or 0.5rem).
- [ ] Don't crowd the content; let the whitespace work.

---
*Generated based on Stitch Project: projects/14992905239104484320*
