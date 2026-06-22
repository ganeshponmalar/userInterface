import React from 'react'

function Card({ title, value, delta }) {
  return (
    <div className="crm-card">
      <div className="crm-card-title">{title}</div>
      <div className="crm-card-value">{value}</div>
      {delta && <div className="crm-card-delta">{delta}</div>}
    </div>
  )
}

export default function CRMAnalyticsCards({ stats = [] }) {
  return (
    <div className="crm-analytics-grid">
      {stats.map(s => (
        <Card key={s.id} {...s} />
      ))}
    </div>
  )
}
