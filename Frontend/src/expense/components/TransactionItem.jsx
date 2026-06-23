import React from 'react'

export default function TransactionItem({ tx, onDelete, onEdit }) {
  return (
    <div className={`tx-item ${tx.type === 'Income' ? 'income' : 'expense'}`}>
      <div className="tx-left">
        <div className="tx-name">{tx.name}</div>
        <div className="tx-meta">{tx.category} · {new Date(tx.date).toLocaleDateString()}</div>
      </div>
      <div className="tx-right">
        <div className="tx-amount">{tx.type === 'Income' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}</div>
        <div className="tx-actions">
          <button className="btn small" onClick={() => onEdit(tx.id)}>Edit</button>
          <button className="btn small danger" onClick={() => onDelete(tx.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
