import React from 'react'

function Card({ title, value, delta }) {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      {delta && <div className="stat-delta">{delta}</div>}
    </div>
  )
}

export default function StatisticsCards({ stats = [] }) {
  return (
    <div className="stats-grid">
      {stats.map(s => (
        <Card key={s.id} title={s.title} value={s.value} delta={s.delta} />
      ))}
    </div>
  )
}
