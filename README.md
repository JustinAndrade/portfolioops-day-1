# PortfolioOps

Day 1 starter — a single-screen trade blotter for investment operations.

Layout, styles, and mock trades are already in place. Complete the `TODO` items during class.

## Run

```bash
npm install
npm run dev
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Typecheck with TypeScript, then produce a production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest unit tests |

## What’s in the screen

- **PortfolioSummary** / **MetricCard** — summary metrics from the trades list
- **TradeFilter** — status filter controls
- **TradeTable** / **TradeRow** / **StatusBadge** — blotter table and row actions
- **NewTradeForm** — form for creating pending trades

Trade data starts from `src/data/mockTrades.ts`. Application state lives in `App`. Styling uses CSS Modules and tokens in `src/styles/tokens.css`.
