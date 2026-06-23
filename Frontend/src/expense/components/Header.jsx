import React from 'react'

export default function Header({ onToggleDark, dark }) {
  const today = new Date()
  const formatted = today.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <header className="exp-header">
      <div className="exp-left">
        <h2 className="exp-title">Expense Tracker</h2>
        <div className="exp-date">{formatted}</div>
      </div>
      <div className="exp-right">
        <div className="avatar">U</div>
        <button className="btn ghost" onClick={onToggleDark}>{dark ? 'Light' : 'Dark'}</button>
      </div>
    </header>
  )
}
