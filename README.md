# My Blog

A minimalist blog built with Astro, Tailwind CSS, and hosted on Cloudflare Pages.

## Project Structure

```
.
├── content/          # Markdown blog posts
├── src/
│   ├── layouts/      # Astro layouts
│   ├── pages/        # Astro pages (routes)
│   └── styles/       # CSS styles
├── astro.config.ts   # Astro configuration
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json     # TypeScript configuration
└── package.json
```

## Getting Started

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Features

- ✅ Markdown support with syntax highlighting
- ✅ Tailwind CSS for styling
- ✅ Cloudflare Pages deployment
- ✅ Sitemap generation
- ✅ SEO optimization
- ✅ Dark mode support
- ✅ Responsive design

## Deployment

This project is configured for deployment on Cloudflare Pages:

1. Push your code to a GitHub repository
2. Connect your repository to Cloudflare Pages
3. Set build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add environment variables if needed
5. Deploy!

## Customization

- Add new blog posts to `content/` directory as `.md` files
- Modify pages in `src/pages/`
- Update styles in `src/styles/tailwind.css`
- Configure Tailwind in `tailwind.config.js`

## License

MIT