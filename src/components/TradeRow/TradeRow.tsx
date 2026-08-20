import type { Trade } from '../../types/trade'
import { formatCurrency } from '../../utils/formatCurrency'
import styles from './TradeRow.module.css'

// TODO [PIN: typed-props]
export function TradeRow({
  trade,
  onApprove,
  onCancel,
}: {
  trade: Trade
  onApprove: (tradeId: string) => void
  onCancel: (tradeId: string) => void
}) {
  // TODO [PIN: props-vs-state]
  const notional = 0

  return (
    <tr className={styles.row}>
      <td className={styles.ticker}>{trade.ticker}</td>
      <td>{trade.companyName}</td>
      <td>
        <span
          className={
            trade.side === 'BUY' ? styles.sideBuy : styles.sideSell
          }
        >
          {trade.side}
        </span>
      </td>
      <td className={styles.numeric}>
        {trade.quantity.toLocaleString('en-US')}
      </td>
      <td className={styles.numeric}>{formatCurrency(trade.price)}</td>
      <td className={styles.numeric}>{formatCurrency(notional)}</td>
      <td>
        {/* TODO [PIN: composition] */}
        {trade.status}
      </td>
      <td>{trade.submittedBy}</td>
      <td>
        {/* TODO [PIN: conditional-rendering] */}
        <div className={styles.actions}>
          {/* TODO [PIN: accessibility] */}
          <div
            className={styles.approve}
            onClick={() => {
              onApprove(trade.id)
            }}
          >
            Approve
          </div>
          <div
            className={styles.cancel}
            onClick={() => {
              onCancel(trade.id)
            }}
          >
            Cancel
          </div>
        </div>
      </td>
    </tr>
  )
}
