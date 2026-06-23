import React from 'react'

export default function Filters({ categories, onFilter, filters }) {
  return (
    <div className="exp-filters">
      <select value={filters.category} onChange={e => onFilter({ ...filters, category: e.target.value })}>
        <option value="All">All Categories</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select value={filters.type} onChange={e => onFilter({ ...filters, type: e.target.value })}>
        <option value="All">All Types</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <input type="date" value={filters.date} onChange={e => onFilter({ ...filters, date: e.target.value })} />
    </div>
  )
}
