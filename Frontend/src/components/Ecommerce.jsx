import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Filters from './Filters'
import ProductGrid from './ProductGrid'
import Cart from './Cart'
import '../styles/ecommerce.css'

// Simple mock fetch to simulate API integration
async function fetchProducts() {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        { id: 'p1', title: 'Blue Sneakers', price: 79.99, category: 'Footwear' },
        { id: 'p2', title: 'Red T-Shirt', price: 19.99, category: 'Clothing' },
        { id: 'p3', title: 'Coffee Mug', price: 9.5, category: 'Home' },
        { id: 'p4', title: 'Running Shorts', price: 29.0, category: 'Clothing' },
      ])
    }, 250)
  })
}

export default function Ecommerce({ onNavigate }) {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState([])

  useEffect(() => {
    let mounted = true
    fetchProducts().then((p) => { if (mounted) setProducts(p) })
    return () => { mounted = false }
  }, [])

  function addToCart(product) {
    setCart((c) => {
      const found = c.find(i => i.id === product.id)
      if (found) return c.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...c, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart((c) => c.filter(i => i.id !== id))
  }

  const filtered = products.filter(p => {
    if (category !== 'All' && p.category !== category) return false
    if (query && !p.title.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

  return (
    <div className="ecom-root">
      <aside className="ecom-left">
        <SearchBar query={query} onChange={setQuery} />
        <Filters categories={categories} value={category} onChange={setCategory} />
      </aside>

      <main className="ecom-main">
        <header className="ecom-header">
          <h2>Store</h2>
          <div>
            <button className="btn-secondary" onClick={() => onNavigate && onNavigate('dashboard')}>Back</button>
          </div>
        </header>

        <ProductGrid products={filtered} onAdd={addToCart} />
      </main>

      <aside className="ecom-cart">
        <Cart items={cart} onRemove={removeFromCart} />
      </aside>
    </div>
  )
}
