import React from 'react'

export default function CRMNotifications({ notes = [] }) {
  return (
    <div className="crm-notifications card">
      <h4>Notifications</h4>
      <ul>
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  )
}
