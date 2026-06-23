import React from 'react'

export default function BalanceCard({ balance }) {
  return (
    <div className="balance-card">
      <div className="label">Total Balance</div>
      <div className="amount">${balance.toFixed(2)}</div>
    </div>
  )
}
