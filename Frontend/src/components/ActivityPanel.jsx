import React from 'react'

export default function ActivityPanel({ activities = [] }) {
  return (
    <aside className="activity-panel">
      <h4>Recent Activities</h4>
      <ul>
        {activities.map((a, i) => (
          <li key={i} className="activity-item">
            <div className="activity-title">{a.title}</div>
            <div className="activity-meta">{a.meta}</div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
