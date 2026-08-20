import type { TradeStatus } from '../../types/trade'
import styles from './StatusBadge.module.css'

type StatusBadgeProps = {
  status: TradeStatus
}

function statusClassName(status: TradeStatus): string {
  switch (status) {
    case 'PENDING':
      return styles.pending ?? ''
    case 'APPROVED':
      return styles.approved ?? ''
    case 'EXECUTED':
      return styles.executed ?? ''
    case 'CANCELLED':
      return styles.cancelled ?? ''
  }
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`${styles.badge ?? ''} ${statusClassName(status)}`}>
      {status}
    </span>
  )
}
