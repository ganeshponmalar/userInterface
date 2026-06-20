import React from 'react'

export default function Header({ user = { name: 'Admin' } }) {
  return (
    <header className="app-header">
      <div className="header-left">
        <h3>Manufacturing Dashboard</h3>
      </div>
      <div className="header-right">
        <div className="notifications">🔔</div>
        <div className="profile">{user.name}</div>
      </div>
    </header>
  )
}
