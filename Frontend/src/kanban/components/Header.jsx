import React from 'react'

export default function Header({ title = 'Kanban', count = 0, dark, onToggleDark, query, setQuery }) {
  return (
    <header className="kb-header">
      <div className="kb-left">
        <h1 className="kb-title">{title}</h1>
        <div className="kb-count">Total: <strong>{count}</strong></div>
      </div>

      <div className="kb-right">
        <input
          className="kb-search"
          placeholder="Search tasks..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="btn ghost" onClick={onToggleDark}>{dark ? 'Light' : 'Dark'}</button>
      </div>
    </header>
  )
}
