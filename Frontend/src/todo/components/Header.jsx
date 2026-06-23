import React from 'react'

export default function Header({ dark, onToggleDark }) {
  const today = new Date()
  const formatted = today.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })

  return (
    <header className="todo-header">
      <div className="title">Todo</div>
      <div className="meta">
        <div className="date">{formatted}</div>
        <button className="dark-toggle" onClick={onToggleDark} aria-pressed={dark}>
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  )
}
