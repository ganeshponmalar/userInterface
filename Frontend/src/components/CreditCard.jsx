import React from 'react'

export default function CreditCard({ card = {} }) {
  const num = card.number || '1234 5678 9012 3456'
  const masked = '•••• •••• •••• ' + num.slice(-4)
  return (
    <div className="credit-card">
      <div className="card-top">
        <div className="card-logo">VISA</div>
        <div className="card-chip">💳</div>
      </div>
      <div className="card-number">{masked}</div>
      <div className="card-bottom">
        <div className="card-holder">{card.holder || 'JOHN DOE'}</div>
        <div className="card-exp">{card.expiry || '12/28'}</div>
      </div>
    </div>
  )
}
