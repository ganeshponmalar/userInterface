import React, { useState } from 'react'

const mock = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Carol Lee', email: 'carol@example.com', role: 'Moderator' },
  { id: 4, name: 'David Kim', email: 'david@example.com', role: 'User' },
]

export default function UsersTable() {
  const [rows] = useState(mock)

  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.role}</td>
              <td><button className="btn-sm" onClick={() => alert('View '+r.name)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
