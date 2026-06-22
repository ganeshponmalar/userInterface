import React from 'react'

export default function SchoolHeader({ school = { name: 'Greenfield High' } }) {
  return (
    <header className="school-header">
      <div className="school-left">
        <div className="school-logo">🏫</div>
        <h2>{school.name}</h2>
      </div>
      <div className="school-right">
        <div className="school-search"><input placeholder="Search students, classes..." /></div>
        <div className="school-notif">🔔</div>
        <div className="school-profile">Admin</div>
      </div>
    </header>
  )
}
