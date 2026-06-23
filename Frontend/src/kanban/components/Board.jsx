import React from 'react'
import Column from './Column'

export default function Board({ columns, onDropTask, onDelete, onEdit }) {
  return (
    <div className="kb-board">
      <Column title="Todo" tasks={columns.Todo} onDropTask={onDropTask} onDelete={onDelete} onEdit={onEdit} />
      <Column title="In Progress" tasks={columns['In Progress']} onDropTask={onDropTask} onDelete={onDelete} onEdit={onEdit} />
      <Column title="Done" tasks={columns.Done} onDropTask={onDropTask} onDelete={onDelete} onEdit={onEdit} />
    </div>
  )
}
