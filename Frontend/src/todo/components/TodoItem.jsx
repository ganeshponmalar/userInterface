import React, { useState, useRef, useEffect } from 'react'

export default function TodoItem({ item, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(item.title)
  const inputRef = useRef(null)
  const [myValue,setMyValue] = useState(item.title)

  useEffect(() => {
    if (editing && inputRef.current) inputRef.current.focus()
  }, [editing])

  function save() {
    const trimmed = value.trim()
    if (!trimmed) return
    onEdit(item.id, trimmed)
    setEditing(false)
  }



  return (
    <li className={`todo-item ${item.completed ? 'completed' : ''}`}>
      <label className="checkbox">
        <input type="checkbox" checked={item.completed} onChange={() => onToggle(item.id)} />
        <span className="checkmark" />
      </label>

      {!editing ? (
        <div className="title" onDoubleClick={() => setEditing(true)}>{item.title}</div>
      ) : (
        <div className="edit-wrap">
          <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
          <button className="btn small" onClick={save}>Save</button>
          <button className="btn small ghost" onClick={() => { setEditing(false); setValue(item.title) }}>Cancel</button>
        </div>
      )}

      <div className="actions">
        <button className="btn small" onClick={() => setEditing(e => !e)}>Edit</button>
        <button className="btn small danger" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </li>
  )
}
