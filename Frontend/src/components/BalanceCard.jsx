import React from 'react'

export default function BalanceCard({ data = {} }) {
  return (
    <div className="balance-card card">
      <div className="balance-top">
        <h3>Total Balance</h3>
        <div className="balance-amount">{data.total || '$12,450.00'}</div>
      </div>

      <div className="balance-details">
        <div>
          <div className="label">Savings</div>
          <div className="value">{data.savings || '$8,000.00'}</div>
        </div>
        <div>
          <div className="label">Current</div>
          <div className="value">{data.current || '$4,450.00'}</div>
        </div>
        <div>
          <div className="label">Monthly Income</div>
          <div className="value">{data.income || '$6,200.00'}</div>
        </div>
        <div>
          <div className="label">Monthly Expenses</div>
          <div className="value">{data.expenses || '$3,400.00'}</div>
        </div>
      </div>

      <div className="balance-actions">
        <button className="btn-primary">Send</button>
        <button>Request</button>
        <button>Top-up</button>
      </div>
    </div>
  )
}
