import type { Trade } from '../../types/trade'
import { formatCurrency } from '../../utils/formatCurrency'
import { MetricCard } from '../MetricCard'
import styles from './PortfolioSummary.module.css'

type PortfolioSummaryProps = {
  trades: Trade[]
}

export function PortfolioSummary({ trades }: PortfolioSummaryProps) {
  // TODO [PIN: derived-state]
  void trades
  const totalTrades = 0
  const pendingTrades: Trade[] = []
  const pendingBuyExposure = 0
  const pendingSellExposure = 0

  return (
    <section className={styles.section} aria-labelledby="portfolio-summary-heading">
      <h2 id="portfolio-summary-heading" className={styles.heading}>
        Portfolio Summary
      </h2>
      <div className={styles.grid}>
        <MetricCard label="Total Trades" value={String(totalTrades)} />
        <MetricCard label="Pending Trades" value={String(pendingTrades.length)} />
        <MetricCard
          label="Pending Buy Exposure"
          value={formatCurrency(pendingBuyExposure)}
        />
        <MetricCard
          label="Pending Sell Exposure"
          value={formatCurrency(pendingSellExposure)}
        />
      </div>
    </section>
  )
}
