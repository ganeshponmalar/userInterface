import React from 'react'

export default function SchoolNotifications({ notes = [] }) {
  return (
    <div className="school-notifications card">
      <h4>Notifications</h4>
      <ul>
        {notes.map((n,i) => <li key={i}>{n}</li>)}
      </ul>
    </div>
  )
}
