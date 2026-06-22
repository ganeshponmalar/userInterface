import React from 'react'

function Stat({ title, value, delta }) {
  return (
    <div className="school-stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      {delta && <div className="stat-delta">{delta}</div>}
    </div>
  )
}

export default function SchoolStatsCards({ stats = [] }) {
  return (
    <div className="school-stats-grid">
      {stats.map(s => <Stat key={s.id} {...s} />)}
    </div>
  )
}
