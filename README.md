# Codex App Quick Reference

Single-page landscape cheat sheet built with Next.js App Router.

## Covered Sections

- Overview
- Features
- Settings
- Review
- Automations
- Worktrees
- Local Environments
- Commands
- Troubleshooting

## Run Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
pnpm lint
pnpm build
```

## Print Layout

The page is optimized for a one-page landscape print sheet:

- `@page { size: landscape; margin: 0.35in; }`
- Target content area: `10.3in x 7.8in`

## Deploy on Vercel

1. Push repository to GitHub/GitLab/Bitbucket.
2. Import project in Vercel.
3. Keep framework preset as Next.js.
4. Deploy.
