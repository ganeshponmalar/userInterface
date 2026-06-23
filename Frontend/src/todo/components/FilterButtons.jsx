import React from 'react'

export default function FilterButtons({ filter, onChange }) {
  return (
    <div className="filters">
      <button className={filter === 'all' ? 'active' : ''} onClick={() => onChange('all')}>All</button>
      <button className={filter === 'active' ? 'active' : ''} onClick={() => onChange('active')}>Active</button>
      <button className={filter === 'completed' ? 'active' : ''} onClick={() => onChange('completed')}>Completed</button>
    </div>
  )
}
