import React from 'react'

export default function SearchBar({ query, onChange }) {
  return (
    <div className="search-bar">
      <input placeholder="Search products..." value={query} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}
