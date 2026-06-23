import React from 'react'
import TaskCard from './TaskCard'

export default function Column({ title, tasks, onDropTask, onDelete, onEdit, allowed }) {
  function handleDragOver(e) { e.preventDefault() }

  function handleDrop(e) {
    e.preventDefault()
    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'))
      if (data && data.id) onDropTask(data.id, title)
    } catch (err) {}
  }

  return (
    <section className="kb-column" onDragOver={handleDragOver} onDrop={handleDrop}>
      <h3 className="col-title">{title} <span className="col-count">({tasks.length})</span></h3>
      <div className="col-list">
        {tasks.map(t => (
          <TaskCard key={t.id} task={t} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </section>
  )
}
