import { useState } from 'react'
import type { FormEvent } from 'react'
import type { NewTradeInput, TradeSide } from '../../types/trade'
import styles from './NewTradeForm.module.css'

type NewTradeFormProps = {
  onSubmit: (input: NewTradeInput) => void
  onCancel: () => void
}

export function NewTradeForm({ onSubmit, onCancel }: NewTradeFormProps) {
  const [ticker, setTicker] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [side, setSide] = useState<TradeSide>('BUY')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(_event: FormEvent<HTMLFormElement>) {
    // TODO [PIN: form-submit]
    const parsedQuantity = Number(quantity)
    const parsedPrice = Number(price)

    if (
      ticker.trim() === '' ||
      companyName.trim() === '' ||
      !Number.isFinite(parsedQuantity) ||
      parsedQuantity <= 0 ||
      !Number.isFinite(parsedPrice) ||
      parsedPrice <= 0
    ) {
      setError('Enter ticker, company, and positive quantity and price values.')
      return
    }

    setError(null)
    onSubmit({
      ticker: ticker.trim().toUpperCase(),
      companyName: companyName.trim(),
      side,
      quantity: parsedQuantity,
      price: parsedPrice,
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h3 className={styles.heading}>New Trade</h3>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="ticker">Ticker</label>
          {/* TODO [PIN: controlled-input] */}
          <input
            id="ticker"
            name="ticker"
            onChange={(event) => {
              setTicker(event.target.value)
            }}
            autoComplete="off"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={(event) => {
              setCompanyName(event.target.value)
            }}
            autoComplete="off"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="side">Side</label>
          <select
            id="side"
            name="side"
            value={side}
            onChange={(event) => {
              setSide(event.target.value as TradeSide)
            }}
          >
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            step="1"
            value={quantity}
            onChange={(event) => {
              setQuantity(event.target.value)
            }}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value)
            }}
            required
          />
        </div>
      </div>

      {error !== null && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          Submit Trade
        </button>
        <button type="button" className={styles.cancel} onClick={onCancel}>
          Close
        </button>
      </div>
    </form>
  )
}
