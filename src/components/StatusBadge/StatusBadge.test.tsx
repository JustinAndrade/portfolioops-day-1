import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { StatusBadge } from './StatusBadge'

describe('StatusBadge', () => {
  it('renders the expected status text', () => {
    // TODO [PIN: vitest]
    render(<StatusBadge status="PENDING" />)
    expect(screen.getByText('TODO')).toBeInTheDocument()
  })
})
