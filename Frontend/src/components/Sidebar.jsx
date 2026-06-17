import React from 'react'

export default function Sidebar({ onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">MyAdmin</div>
      <nav className="nav">
        <button className="nav-item" onClick={() => onNavigate && onNavigate('dashboard')}>Overview</button>
        <button className="nav-item" onClick={() => alert('Navigate: Users (demo)')}>Users</button>
        <button className="nav-item" onClick={() => alert('Navigate: Reports (demo)')}>Reports</button>
        <button className="nav-item" onClick={() => alert('Navigate: Settings (demo)')}>Settings</button>
      </nav>
      <div className="sidebar-footer">v1.0</div>
    </aside>
  )
}
