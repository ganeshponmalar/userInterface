import React from 'react'

export default function CRMHeader({ user = { name: 'Manager' } }) {
  return (
    <header className="crm-header">
      <div className="crm-left">
        <h2>CRM Dashboard</h2>
      </div>
      <div className="crm-right">
        <div className="crm-search">
          <input placeholder="Search..." />
        </div>
        <div className="crm-notif">🔔</div>
        <div className="crm-profile">{user.name}</div>
      </div>
    </header>
  )
}
