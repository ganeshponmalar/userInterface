import React from 'react'

export default function SummaryCards({ income, expense, balance }) {
  return (
    <div className="summary-cards">
      <div className="card summary">
        <div className="label">Balance</div>
        <div className="value">${balance.toFixed(2)}</div>
      </div>
      <div className="card income">
        <div className="label">Income</div>
        <div className="value">${income.toFixed(2)}</div>
      </div>
      <div className="card expense">
        <div className="label">Expense</div>
        <div className="value">${expense.toFixed(2)}</div>
      </div>
    </div>
  )
}
