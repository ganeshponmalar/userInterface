import React from 'react'
import TransactionItem from './TransactionItem'

export default function TransactionList({ transactions, onDelete, onEdit, search }) {
  const q = (search || '').trim().toLowerCase()
  const filtered = transactions.filter(t => !q || (t.name + ' ' + t.category).toLowerCase().includes(q))

  if (!filtered.length) return <div className="tx-empty">No transactions</div>

  return (
    <div className="tx-list">
      {filtered.map(tx => (
        <TransactionItem key={tx.id} tx={tx} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  )
}
