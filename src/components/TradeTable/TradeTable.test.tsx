import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { Trade } from '../../types/trade'
import { TradeTable } from './TradeTable'

const pendingAapl: Trade = {
  id: 'trd-1001',
  ticker: 'AAPL',
  companyName: 'Apple Inc.',
  side: 'BUY',
  quantity: 1500,
  price: 187.45,
  status: 'PENDING',
  submittedBy: 'j.chen',
  submittedAt: '2026-08-18T14:22:00.000Z',
}

describe('TradeTable', () => {
  it('renders trade tickers from the provided list', () => {
    render(
      <TradeTable
        trades={[pendingAapl]}
        onApprove={() => undefined}
        onCancel={() => undefined}
      />,
    )

    expect(screen.getByText('AAPL')).toBeInTheDocument()
  })

  it('calls onCancel with the pending trade id when Cancel is clicked', async () => {
    const user = userEvent.setup()
    const onCancel = vi.fn()

    render(
      <TradeTable
        trades={[pendingAapl]}
        onApprove={() => undefined}
        onCancel={onCancel}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onCancel).toHaveBeenCalledWith(pendingAapl.id)
  })
})
