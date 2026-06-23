import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Board from './components/Board'
import AddTaskForm from './components/AddTaskForm'

const STORAGE = 'kanban:columns'

function initialColumns() {
  return { Todo: [], 'In Progress': [], Done: [] }
}

export default function App() {
  const [columns, setColumns] = useState(initialColumns)
  const [dark, setDark] = useState(false)
  const [query, setQuery] = useState('')
  const [priorityFilter, setPriorityFilter] = useState('All')

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE)
      if (raw) setColumns(JSON.parse(raw))
    } catch (e) { }
  }, [])

  useEffect(() => {
    try { localStorage.setItem(STORAGE, JSON.stringify(columns)) } catch (e) { }
  }, [columns])

  function addTask({ title, desc, priority }) {
    const t = { id: Date.now().toString(), title, desc, priority, createdAt: Date.now() }
    setColumns(prev => ({ ...prev, Todo: [t, ...prev.Todo] }))
  }

  function findColumnOfTask(id) {
    for (const k of Object.keys(columns)) {
      if (columns[k].some(t => t.id === id)) return k
    }
    return null
  }

  function moveTask(id, toCol) {
    setColumns(prev => {
      const from = findColumnOfTask(id)
      if (!from) return prev
      if (from === toCol) return prev
      const task = prev[from].find(t => t.id === id)
      if (!task) return prev
      return {
        ...prev,
        [from]: prev[from].filter(t => t.id !== id),
        [toCol]: [task, ...prev[toCol]]
      }
    })
  }

  function deleteTask(id) {
    setColumns(prev => {
      const where = findColumnOfTask(id)
      if (!where) return prev
      return { ...prev, [where]: prev[where].filter(t => t.id !== id) }
    })
  }

  function editTask(id) {
    const where = findColumnOfTask(id)
    if (!where) return
    const task = columns[where].find(t => t.id === id)
    const title = prompt('Edit title', task.title)
    if (!title) return
    const desc = prompt('Edit description', task.desc || '')
    const priority = prompt('Priority (Low/Medium/High)', task.priority || 'Low') || task.priority
    setColumns(prev => ({
      ...prev,
      [where]: prev[where].map(t => t.id === id ? { ...t, title, desc, priority } : t)
    }))
  }

  function onDropTask(id, toTitle) {
    // accept drop and move accordingly
    moveTask(id, toTitle)
  }

  // filtering & search applied on render; maintain original columns in state
  function filteredColumns() {
    const out = { Todo: [], 'In Progress': [], Done: [] }
    const q = query.trim().toLowerCase()
    Object.entries(columns).forEach(([k, arr]) => {
      out[k] = arr.filter(t => {
        if (priorityFilter !== 'All' && t.priority !== priorityFilter) return false
        if (!q) return true
        return (t.title + ' ' + (t.desc || '')).toLowerCase().includes(q)
      })
    })
    return out
  }

  const total = Object.values(columns).reduce((s, a) => s + a.length, 0)

  return (
    <div className={`kanban-root ${dark ? 'dark' : ''}`}>
      <div className="kanban-container">
        <Header title="Kanban Board" count={total} dark={dark} onToggleDark={() => setDark(d => !d)} query={query} setQuery={setQuery} />

        <div className="kb-controls">
          <AddTaskForm onAdd={addTask} />
          <div className="filters">
            <label>Priority:</label>
            <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
              <option>All</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <Board columns={filteredColumns()} onDropTask={(id, to) => onDropTask(id, to)} onDelete={deleteTask} onEdit={editTask} />
      </div>
    </div>
  )
}
