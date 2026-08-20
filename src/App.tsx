import { useState } from 'react'
// TODO [PIN: type-imports]
import { mockTrades } from './data/mockTrades'
import { PortfolioSummary } from './components/PortfolioSummary'
import { TradeFilter } from './components/TradeFilter'
import { TradeTable } from './components/TradeTable'
import { NewTradeForm } from './components/NewTradeForm'
import styles from './App.module.css'

export function App() {
  // TODO [PIN: local-state]
  const [trades, setTrades] = useState(mockTrades)

  // TODO [PIN: lifting-state]
  const [isFormOpen, setIsFormOpen] = useState(false)

  function handleApprove(_tradeId: string) {
    // TODO [PIN: immutability]
    setTrades((currentTrades) => currentTrades)
  }

  function handleCancel(_tradeId: string) {
    // TODO [PIN: immutability] — same pattern as approve, status: 'CANCELLED'
    setTrades((currentTrades) => currentTrades)
  }

  function handleCreateTrade(_input: {
    ticker: string
    companyName: string
    side: 'BUY' | 'SELL'
    quantity: number
    price: number
  }) {
    // TODO [PIN: form-submit]
    setTrades((currentTrades) => currentTrades)
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.branding}>
          <div className={styles.titleRow}>
            {/* TODO [PIN: jsx] */}
            <h1 className={styles.title}></h1>
            <span className={styles.pill}>Demo Portfolio</span>
          </div>
          <p className={styles.subtitle}>Portfolio &amp; Trade Operations</p>
        </div>

        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => {
              setIsFormOpen((open) => !open)
            }}
          >
            {isFormOpen ? 'Hide New Trade' : 'New Trade'}
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <PortfolioSummary trades={trades} />

        {/* TODO [PIN: strict-types] */}

        {isFormOpen && (
          <NewTradeForm
            onSubmit={handleCreateTrade}
            onCancel={() => {
              setIsFormOpen(false)
            }}
          />
        )}

        <section
          className={styles.blotter}
          aria-labelledby="trade-blotter-heading"
        >
          <div className={styles.blotterHeader}>
            <h2 id="trade-blotter-heading" className={styles.sectionHeading}>
              Trade Blotter
            </h2>
            {/* TODO [PIN: lifting-state] — wire TradeFilter */}
            <TradeFilter value="ALL" onChange={() => undefined} />
          </div>

          {/* TODO [PIN: data-flow] */}
          <TradeTable
            trades={trades}
            onApprove={handleApprove}
            onCancel={handleCancel}
          />
        </section>
      </main>
    </div>
  )
}
