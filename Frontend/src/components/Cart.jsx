import React from 'react'

export default function Cart({ items = [], onRemove }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)
  return (
    <div className="cart">
      <h3>Cart</h3>
      {!items.length && <div className="empty">Cart is empty</div>}
      <ul>
        {items.map(it => (
          <li key={it.id} className="cart-item">
            <div>
              <div className="cart-name">{it.title}</div>
              <div className="cart-qty">Qty: {it.qty}</div>
            </div>
            <div className="cart-actions">
              <div className="cart-price">${(it.price * it.qty).toFixed(2)}</div>
              <button className="btn-sm" onClick={() => onRemove && onRemove(it.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">Total: ${total.toFixed(2)}</div>
    </div>
  )
}
