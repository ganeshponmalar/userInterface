import React from 'react'

export default function TaskCard({ task, onDelete, onEdit }) {
  function handleDragStart(e) {
    e.dataTransfer.setData('application/json', JSON.stringify({ id: task.id }))
  }

  return (
    <div className={`task-card priority-${task.priority.toLowerCase()}`} draggable onDragStart={handleDragStart}>
      <div className="task-top">
        <div className="task-title">{task.title}</div>
        <div className="task-actions">
          <button className="btn small" onClick={() => onEdit(task.id)}>Edit</button>
          <button className="btn small danger" onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      </div>
      {task.desc && <div className="task-desc">{task.desc}</div>}
      <div className="task-meta">{new Date(task.createdAt).toLocaleString()} · <span className="prio">{task.priority}</span></div>
    </div>
  )
}
