import React, { useState, useEffect } from 'react'
import '../styles/employee.css'

export default function EmployeeManagement({ onNavigate }) {
  const [employees, setEmployees] = useState([])
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', role: '' })

  useEffect(() => {
    if (editing) {
      setForm({ name: editing.name, email: editing.email, role: editing.role })
    } else {
      setForm({ name: '', email: '', role: '' })
    }
  }, [editing])

  // load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('employees')
      if (raw) {
        setEmployees(JSON.parse(raw))
      } else {
        // initial sample
        setEmployees([{ id: 1, name: 'John', email: 'abc@example.com', role: 'Admin' }])
      }
    } catch (e) {
      setEmployees([{ id: 1, name: 'John', email: 'abc@example.com', role: 'Admin' }])
    }
  }, [])

  // persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('employees', JSON.stringify(employees))
    } catch (e) {
      // ignore
    }
  }, [employees])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email) return

    if (editing) {
      setEmployees(prev => prev.map(emp => emp.id === editing.id ? { ...emp, ...form } : emp))
      setEditing(null)
    } else {
      const id = Date.now()
      setEmployees(prev => [...prev, { id, ...form }])
    }
    setForm({ name: '', email: '', role: '' })
  }

  function handleEdit(emp) {
    setEditing(emp)
  }

  function handleDelete(id) {
    if (!confirm('Delete this employee?')) return
    setEmployees(prev => prev.filter(e => e.id !== id))
  }

  const filtered = employees.filter(e => {
    const q = query.toLowerCase()
    return (
      e.name.toLowerCase().includes(q) ||
      e.email.toLowerCase().includes(q) ||
      e.role.toLowerCase().includes(q)
    )
  })

  return (
    <div className="employee-root">
      <div className="employee-header">
        <h2>Employee Management</h2>
        <div>
          <button onClick={() => onNavigate && onNavigate('dashboard')}>Back</button>
        </div>
      </div>

      <section>
        <form className="employee-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input name="role" placeholder="Role" value={form.role} onChange={handleChange} />
          <button type="submit">{editing ? 'Save' : 'Add Employee'}</button>
          {editing && <button type="button" onClick={() => setEditing(null)}>Cancel</button>}
        </form>
      </section>

      <section className="employee-search">
        <input placeholder="Search employees..." value={query} onChange={e => setQuery(e.target.value)} />
      </section>

      <section>
        <table className="employee-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Name</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Email</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Role</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(emp => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
                <td className="employee-actions">
                  <button onClick={() => handleEdit(emp)}>Edit</button>
                  <button onClick={() => handleDelete(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: 12 }}>No employees found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  )
}
