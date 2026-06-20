import React from 'react'

export default function Sidebar({ onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">ManufactureX</div>
      <nav className="sidebar-nav">
        <button onClick={() => onNavigate && onNavigate('dashboard')}>Overview</button>
        <button onClick={() => onNavigate && onNavigate('manufacturing')}>Manufacturing</button>
        <button onClick={() => onNavigate && onNavigate('jobs')}>Jobs</button>
        <button onClick={() => onNavigate && onNavigate('employees')}>Employees</button>
        <button onClick={() => onNavigate && onNavigate('ecommerce')}>Ecommerce</button>
      </nav>
      <div className="sidebar-footer">© ManufactureX</div>
    </aside>
  )
}
