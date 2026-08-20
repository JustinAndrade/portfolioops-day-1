import type { StatusFilter } from '../../types/trade'
import styles from './TradeFilter.module.css'

type TradeFilterProps = {
  value: StatusFilter
  onChange: (next: StatusFilter) => void
}

const FILTERS: StatusFilter[] = [
  'ALL',
  'PENDING',
  'APPROVED',
  'EXECUTED',
  'CANCELLED',
]

export function TradeFilter({ value, onChange }: TradeFilterProps) {
  return (
    <div className={styles.filters} role="group" aria-label="Filter trades by status">
      {FILTERS.map((filter) => {
        const isActive = value === filter
        return (
          <button
            key={filter}
            type="button"
            className={isActive ? `${styles.button} ${styles.active}` : styles.button}
            aria-pressed={isActive}
            onClick={() => {
              onChange(filter)
            }}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}
