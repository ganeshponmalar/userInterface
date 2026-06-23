import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ items, onToggle, onDelete, onEdit }) {
  if (!items.length) return <div className="empty">No tasks yet — add your first task.</div>

  return (
    <ul className="todo-list">
      {items.map(i => (
        <TodoItem key={i.id} item={i} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  )
}
