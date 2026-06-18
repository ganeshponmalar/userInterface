import React from 'react'

export default function ProductCard({ product, onAdd }) {
  const { title, price, category } = product
  return (
    <div className="product-card" data-testid={`product-${product.id}`}>
      <div className="product-thumb">📦</div>
      <div className="product-info">
        <div className="product-title">{title}</div>
        <div className="product-category">{category}</div>
        <div className="product-bottom">
          <div className="product-price">${price.toFixed(2)}</div>
          <button className="btn-add" onClick={onAdd}>Add</button>
        </div>
      </div>
    </div>
  )
}
