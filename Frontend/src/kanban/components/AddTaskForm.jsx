import React, { useState } from 'react'

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [priority, setPriority] = useState('Low')

  function submit(e) {
    e.preventDefault()
    const t = title.trim()
    if (!t) return
    if (typeof onAdd !== 'function') {
      console.warn('AddTaskForm: onAdd is not a function', { title: t, desc: desc.trim(), priority })
      return
    }
    console.debug('AddTaskForm submit', { title: t, desc: desc.trim(), priority })
    onAdd({ title: t, desc: desc.trim(), priority })
    setTitle('')
    setDesc('')
    setPriority('Low')
  }

  return (
    <form className="kb-add" onSubmit={submit}>
      <input placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Short description" value={desc} onChange={e => setDesc(e.target.value)} />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button className="btn" type="submit">Add Task</button>
    </form>
  )
}
