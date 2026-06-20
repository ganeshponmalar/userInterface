import React, { useState } from 'react'

export default function TransactionTable({ data = [] }) {
  const [query, setQuery] = useState('')

  const filtered = data.filter(t => {
    const q = query.toLowerCase()
    if (!q) return true
    return (
      t.id.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.date.toLowerCase().includes(q) ||
      String(t.amount).toLowerCase().includes(q)
    )
  })

  return (
    <div className="transaction-table">
      <div className="table-controls">
        <input placeholder="Search transactions..." value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(t => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.date}</td>
                <td>{t.description}</td>
                <td className={`amount ${t.type === 'debit' ? 'debit' : 'credit'}`}>{t.amount}</td>
                <td>{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
