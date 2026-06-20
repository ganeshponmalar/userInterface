import React from 'react'

export default function Statistics({ stats = [] }) {
  return (
    <div className="stats-cards">
      {stats.map(s => (
        <div className="stat-mini" key={s.id}>
          <div className="stat-mini-title">{s.title}</div>
          <div className="stat-mini-value">{s.value}</div>
        </div>
      ))}
    </div>
  )
}
