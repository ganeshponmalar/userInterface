import React, { useState } from 'react'

export default function CRMCustomerList({ customers = [] }) {
  const [query, setQuery] = useState('')

  const filtered = customers.filter(c => {
    const q = query.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.phone.includes(q)
    )
  })

  return (
    <div className="crm-customer-list card">
      <div className="card-header">
        <h4>Customers</h4>
        <input placeholder="Search customer" value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <div className="customer-table">
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id}>
                <td><div className="avatar">{c.name.charAt(0)}</div></td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.company}</td>
                <td><span className={`status ${c.status.toLowerCase()}`}>{c.status}</span></td>
                <td>
                  <button className="btn-sm">View</button>
                  <button className="btn-sm">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
