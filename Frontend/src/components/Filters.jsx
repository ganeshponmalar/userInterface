import React from 'react'

export default function Filters({ categories = [], value, onChange }) {
  return (
    <div className="filters">
      <h4>Categories</h4>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  )
}
