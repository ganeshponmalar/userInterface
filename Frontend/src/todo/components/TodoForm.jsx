import React, { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  function submit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={submit}>
      <input
        className="todo-input"
        placeholder="Add a new task..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="btn add" type="submit">Add Task</button>
    </form>
  )
}
