import React, { useState } from 'react'

export default function NewStudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [className, setClassName] = useState('')
  const [gender, setGender] = useState('M')
  const [attendance, setAttendance] = useState(100)
  const [status, setStatus] = useState('Active')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !className) {
      alert('Please enter name and class')
      return
    }
    const student = {
      id: 'S' + Date.now(),
      name: name.trim(),
      className: className.trim(),
      gender,
      attendance: Number(attendance),
      status,
    }
    onAddStudent && onAddStudent(student)
    setName('')
    setClassName('')
    setGender('M')
    setAttendance(100)
    setStatus('Active')
  }

  return (
    <form className="new-student-form card" onSubmit={handleSubmit}>
      <h4>Add New Student</h4>
      <div className="form-row">
        <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Class (e.g. 5A)" value={className} onChange={e => setClassName(e.target.value)} />
      </div>
      <div className="form-row">
        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <input type="number" min="0" max="100" value={attendance} onChange={e => setAttendance(e.target.value)} />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option>Active</option>
          <option>At Risk</option>
          <option>Inactive</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">Add Student</button>
      </div>
    </form>
  )
}
