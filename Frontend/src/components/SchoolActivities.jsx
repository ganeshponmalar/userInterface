import React from 'react'

export default function SchoolActivities({ activities = [] }) {
  return (
    <div className="school-activities card">
      <h4>Recent Activities</h4>
      <ul>
        {activities.map((a,i) => (
          <li key={i} className="activity-item">
            <div className="activity-time">{a.time}</div>
            <div className="activity-text">{a.text}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
