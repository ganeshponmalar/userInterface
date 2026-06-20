import React, { useState } from 'react'

export default function Sidebar({ onNavigate }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">FinBank</div>
        <button className="collapse-btn" onClick={() => setCollapsed(c => !c)}>{collapsed ? '▶' : '◀'}</button>
      </div>

      <nav className="sidebar-nav">
        <button onClick={() => onNavigate && onNavigate('dashboard')}>Dashboard</button>
        <button onClick={() => onNavigate && onNavigate('banking')}>Banking</button>
        <button onClick={() => onNavigate && onNavigate('accounts')}>Accounts</button>
        <button onClick={() => onNavigate && onNavigate('transactions')}>Transactions</button>
        <button onClick={() => onNavigate && onNavigate('cards')}>Cards</button>
        <button onClick={() => onNavigate && onNavigate('transfer')}>Transfer</button>
        <button onClick={() => onNavigate && onNavigate('loans')}>Loans</button>
        <button onClick={() => onNavigate && onNavigate('settings')}>Settings</button>
        <button onClick={() => onNavigate && onNavigate('logout')}>Logout</button>
      </nav>

      <div className="sidebar-footer">© FinBank</div>
    </aside>
  )
}
