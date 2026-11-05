# KRATOS — Beyond The Timeline
### Elite Web3 Personal Digital Identity & Experience

A high-performance personal digital identity website for **KRATOS**, built from scratch at the intersection of **Cyberpunk Anime**, **Awwwards Experimental Layouts**, and **Dark Luxury Web3 Aesthetics**.

---

## 1. Project Specifications

| Attribute | Specification |
| :--- | :--- |
| **Brand Name** | **KRATOS** |
| **Tagline** | **BEYOND THE TIMELINE.** |
| **X (Twitter)** | [@KratosOnWeb3](https://x.com/KratosOnWeb3) |
| **Telegram** | [@KratosOnWeb3](https://t.me/KratosOnWeb3) |
| **Discord** | `@KratosOnWeb3` (Configurable via `NEXT_PUBLIC_DISCORD_URL`) |
| **Identity Pillars** | CT Guy &bull; Shitposter &bull; Campaign Hunter &bull; Web3 Contributor &bull; Early Project Explorer |
| **Core Color Philosophy** | **Obsidian Black** (`#080B12`), **Electric Blue** (`#1677FF`), **Acid Lime** (`#C6FF3D`) &bull; *Zero Purple* |

---

## 2. Technical Stack

- **Framework**: [Next.js](https://nextjs.org/) App Router (React 19, TypeScript strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 with custom design tokens
- **Typography**: Space Grotesk (Display), Inter (Body), JetBrains Mono (Technical HUD)
- **3D & WebGL**: [Three.js](https://threejs.org/) native canvas with dynamic import, interactive orbital energy rings, atmospheric particle cloud, and graceful fallback
- **Motion & Smooth Scroll**: [GSAP](https://greensock.com/gsap/) ScrollTrigger, [Framer Motion](https://www.framer.com/motion/), and [Lenis](https://github.com/darkroomengineering/lenis) smooth scrolling
- **Icons**: [Lucide React](https://lucide.dev/) + Official Platform SVGs
- **SEO & Metadata**: JSON-LD Person schema, Open Graph, Twitter Cards, robots.txt, sitemap.xml

---

## 3. Four Core Website Sections

1. **Section 01 — Cinematic Hero Experience (`#hero`)**:
   - Prominently showcases the **real profile picture** (`public/images/kratos-avatar.png`) inside a responsive 3D-tilting cyberpunk frame with rotating orbital rings and corner brackets.
   - Oversized editorial typography with subtle glitch effects.
   - Dual Call-to-Actions: `EXPLORE MY WORLD` and `CONNECT ON X`.
   - Subtle scroll indicator.
2. **Section 02 — About KRATOS (`#about`)**:
   - Editorial manifesto exploring KRATOS's personality, on-chain philosophy, and culture participation.
   - Interactive Identity Pillar selector with dynamic HUD readout.
   - Live canvas oscilloscope displaying real-time timeline waveforms in Electric Blue and Acid Lime.
   - Micro avatar integration with technical node status.
3. **Section 03 — Social Identity (`#social`)**:
   - High-voltage cards for **X / Twitter**, **Telegram**, and **Discord**.
   - Verified handle badges, official platform glyphs, and safe external links.
   - Discord card features an active 1-click clipboard copy utility when an invite URL is not configured, avoiding broken links.
4. **Section 04 — Connect / Footer (`#connect`)**:
   - Distinctive cinematic closing frame with the signature quote: *"The ecosystem never sleeps. Neither does curiosity."*
   - Interactive back-to-top button with smooth scroll choreography.
   - Live dynamic copyright year and encrypted broadcast tag.

---

## 4. Local Development

### Prerequisites
- Node.js (v18.17+ or v20+ / v22+)
- npm / pnpm / yarn

### Installation & Run
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build & Verification
```bash
# Run TypeScript validation
npx tsc --noEmit

# Run ESLint validation
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 5. Content Customization Guide

### A. Updating the Profile Picture
The official portrait is located at:
```
public/images/kratos-avatar.png
```
To update the avatar:
1. Replace `public/images/kratos-avatar.png` with your new image (recommended size: 800x800px square).
2. The Hero Section, About terminal, and SEO metadata will automatically update.

### B. Updating Social Links & Adding a Discord URL
All social parameters are centralized in `src/data/socialLinks.ts`:
- **Discord Invite URL**: By default, Discord shows the verified handle `@KratosOnWeb3` with an instant copy button. To make it open an active server or profile, either set `url` in `src/data/socialLinks.ts` or set the environment variable:
  ```env
  NEXT_PUBLIC_DISCORD_URL=https://discord.gg/your-invite-link
  ```
- **X / Twitter & Telegram**: Update URLs and descriptions directly in `src/data/socialLinks.ts`.

### C. Updating Profile Information & Copy
All personal copy, quotes, and metadata are maintained in `src/data/profile.ts`:
- `displayName`, `tagline`, `identityRoles`, `heroDescription`, `aboutStarter`, `aboutPhilosophy`.

---

## 6. Vercel Deployment Instructions

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Add New Project** and import the repository.
3. Framework Preset: **Next.js** (automatically detected).
4. (Optional) In **Environment Variables**, set:
   - `NEXT_PUBLIC_DISCORD_URL` if you wish to link a direct Discord invite.
5. Click **Deploy**. Vercel will build and publish the site with global edge delivery.

---

## 7. Strict Brand Color Tokens

```css
--bg-primary: #080B12;        /* Obsidian Black */
--bg-secondary: #0D111A;      /* Deep Midnight */
--surface: #151B26;           /* Cyber Surface */
--surface-hover: #1E2638;     /* Surface Hover */
--electric-blue: #1677FF;     /* Primary Accent & Visual Energy */
--acid-lime: #C6FF3D;         /* Selective Active Accents */
--text-primary: #F5F7FA;      /* Silver White */
--text-secondary: #A5ACB8;    /* Steel Gray */
--text-muted: #697386;        /* Muted Tech */
--border-color: #252D3A;      /* Dark Metal Grid */
```
*Purple is completely omitted from all code, styles, glows, gradients, and animations.*
