export type TradeSide = 'BUY' | 'SELL'

export type TradeStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'EXECUTED'
  | 'CANCELLED'

export type Trade = {
  id: string
  ticker: string
  companyName: string
  side: TradeSide
  quantity: number
  price: number
  status: TradeStatus
  submittedBy: string
  submittedAt: string
}

export type StatusFilter = 'ALL' | TradeStatus

export type NewTradeInput = {
  ticker: string
  companyName: string
  side: TradeSide
  quantity: number
  price: number
}
