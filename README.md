# Ibisigo Website

React + Vite + Tailwind CSS site for Ibisigo, a platform connecting Rwandan poets with the audiences and opportunities their work deserves.

Ibisigo received a 500,000 RWF AYRL Creative Catalyst Grant from [Iteka Youth Organisation](https://itekarwanda.org/). The homepage features the award and credits the funding partner.

## Run in VS Code

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose Add New, then Project, and import the repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Click Deploy. `vercel.json` already handles page refreshes on /poets, /book and /report.

## Where to edit content

- `src/data/site.js`: name, LinkedIn link, grant amount, team photo
- `src/data/poets.js`: your poet partner's name, role and bio
- `src/data/report.js`: the grant progress report (empty sections show "Update coming soon")
- `public/images/team.jpg`: the team photo
- `public/images/poet-live-performance.png` and `public/images/poet-cultural-performance.png`: featured poet performances
- `public/images/iteka-grant.png`: the Iteka Creative Catalyst Grant award photo
