# REGASH - Filmmaker Portfolio Website

A dark & cinematic portfolio website for Alaa Aliabdallah (Regash), a Palestinian filmmaker specializing in documentary and narrative storytelling.

## Features

- **Dark Cinematic Design**: Film noir aesthetic with grain texture and elegant typography
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Portfolio Showcase**: Filterable project grid by category and location
- **Booking System**: Contact form for session bookings
- **Fast Performance**: Built with Vite for lightning-fast loading

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Build Tool**: Vite 7
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
regash-filmmaker/
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── FeaturedWork.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Booking.tsx
│   │   ├── lib/            # Utilities and data
│   │   │   ├── types.ts
│   │   │   └── projects.ts
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   └── index.html
├── public/                 # Static assets
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Pages

1. **Home** - Hero section, featured work, about preview, CTA
2. **Portfolio** - Filterable grid of all projects
3. **About** - Biography, experience timeline, skills
4. **Services** - Available video production services
5. **Booking** - Contact form for session bookings

## Customization

### Adding Projects

Edit `client/src/lib/projects.ts` to add new projects:

```typescript
{
  id: '13',
  title: 'New Project',
  year: 2025,
  client: 'Client Name',
  role: ['Director', 'Cinematographer'],
  category: 'documentary',
  location: ['Palestine'],
  description: 'Short description',
  fullDescription: 'Full description',
  videoUrl: 'https://youtube.com/embed/...',
  thumbnail: 'https://example.com/image.jpg',
  tags: ['Tag1', 'Tag2'],
  featured: true
}
```

### Adding Video Embeds

To add YouTube/Vimeo videos to projects:

1. Get the embed URL (not the regular URL)
2. Add to `videoUrl` field in project data
3. The video will appear when project cards are clicked

### Styling

The design uses custom colors defined in `tailwind.config.js`:

- `film-dark`: #0a0a0a (primary background)
- `film-darker`: #050505 (darker background)
- `film-accent`: #ff6b35 (orange accent)
- `film-gold`: #ffd700 (gold highlight)

Modify these in `tailwind.config.js` to change the color scheme.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Connect repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Deployment

```bash
npm run build
# Upload the `dist` folder to your hosting provider
```

## Contact

- **Email**: Hello@regash.com
- **Location**: Palestine / International

## License

© 2025 Regash (Alaa Aliabdallah). All rights reserved.
