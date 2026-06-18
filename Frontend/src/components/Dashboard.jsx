import React from 'react'
import Sidebar from './Sidebar'
import StatsCard from './StatsCard'
import Charts from './Charts'
import UsersTable from './UsersTable'
import '../styles/dashboard.css'

export default function Dashboard({ onNavigate }) {
  const stats = [
    { id: 1, title: 'Users', value: '3,482', delta: '+4.2%' },
    { id: 2, title: 'Revenue', value: '$24.6k', delta: '+2.1%' },
    { id: 3, title: 'Orders', value: '1,128', delta: '-0.4%' },
    { id: 4, title: 'Conversion', value: '3.8%', delta: '+0.6%' },
  ]

  return (
    <div className="dashboard-root">
      <Sidebar onNavigate={onNavigate} />
      <main className="dashboard-main">
        <header className="dash-header">
          <h1>Admin Dashboard</h1>
          <div className="header-actions">
            <button className="btn-secondary" onClick={() => onNavigate && onNavigate('login')}>Sign out</button>
            <button className="btn-primary" onClick={() => onNavigate('ecommerce')}>Ecommerce</button>
            <button className="btn-primary" onClick={() => onNavigate('employees')}>Employees</button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map(s => (
            <StatsCard key={s.id} title={s.title} value={s.value} delta={s.delta} />
          ))}
        </section>

        <section className="charts-row">
          <div className="chart-card">
            <h3>Sales (last 30 days)</h3>
            <Charts type="line" />
          </div>
          <div className="chart-card">
            <h3>Signups</h3>
            <Charts type="bar" />
          </div>
        </section>

        <section className="users-section">
          <h3>Users</h3>
          <UsersTable />
        </section>
      </main>
    </div>
  )
}
