import type { Trade } from '../../types/trade'
import { TradeRow } from '../TradeRow'
import styles from './TradeTable.module.css'

type TradeTableProps = {
  trades: Trade[]
  onApprove: (tradeId: string) => void
  onCancel: (tradeId: string) => void
}

export function TradeTable({ trades, onApprove, onCancel }: TradeTableProps) {
  if (trades.length === 0) {
    return (
      <p className={styles.empty} role="status">
        No trades match the selected filter.
      </p>
    )
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Ticker</th>
            <th scope="col">Company</th>
            <th scope="col">Side</th>
            <th scope="col" className={styles.numeric}>
              Quantity
            </th>
            <th scope="col" className={styles.numeric}>
              Price
            </th>
            <th scope="col" className={styles.numeric}>
              Notional
            </th>
            <th scope="col">Status</th>
            <th scope="col">Submitted By</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            // TODO [PIN: keys]
            <TradeRow
              trade={trade}
              onApprove={onApprove}
              onCancel={onCancel}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
