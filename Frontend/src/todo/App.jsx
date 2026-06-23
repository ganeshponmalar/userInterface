import React, { useEffect, useState, useMemo } from 'react'
import './App.css'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import FilterButtons from './components/FilterButtons'

const STORAGE_KEY = 'todo-app:tasks'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setTasks(JSON.parse(raw))
    } catch (e) {
      console.warn('Failed to read tasks', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch (e) {
      console.warn('Failed to save tasks', e)
    }
  }, [tasks])

  function addTask(title) {
    const t = { id: Date.now(), title, completed: false }
    setTasks(prev => [t, ...prev])
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function toggleTask(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  function editTask(id, title) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, title } : t))
  }

  function clearCompleted() {
    setTasks(prev => prev.filter(t => !t.completed))
  }

  const counts = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter(t => t.completed).length
    return { total, completed, remaining: total - completed }
  }, [tasks])

  const visible = tasks.filter(t => {
    if (filter === 'all') return true
    if (filter === 'active') return !t.completed
    return t.completed
  })

  return (
    <div className={`todo-root ${dark ? 'dark' : ''}`}>
      <div className="container">
        <div className="card">
          <Header dark={dark} onToggleDark={() => setDark(d => !d)} />

          <main className="card-body">
            <TodoForm onAdd={addTask} />

            <div className="controls">
              <FilterButtons filter={filter} onChange={setFilter} />
              <div className="right-controls">
                <button className="btn small ghost" onClick={clearCompleted}>Clear Completed</button>
              </div>
            </div>

            <TodoList items={visible} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
          </main>

          <footer className="card-footer">
            <div className="counts">
              <div>Total: <strong>{counts.total}</strong></div>
              <div>Completed: <strong>{counts.completed}</strong></div>
              <div>Remaining: <strong>{counts.remaining}</strong></div>
            </div>
            <div className="attribution">Built with care</div>
          </footer>
        </div>
      </div>
    </div>
  )
}
