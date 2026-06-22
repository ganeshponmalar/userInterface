import React from 'react'

export default function StudentTable({ students = [] }) {
  return (
    <div className="student-table card">
      <h4>Students</h4>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Gender</th>
              <th>Attendance %</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => {
              const statusClass = s.status.toLowerCase().replace(/\s+/g, '-')
              return (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td className="student-name">
                    <div className="avatar">{s.name.charAt(0)}</div>
                    <div>{s.name}</div>
                  </td>
                  <td>{s.className}</td>
                  <td>{s.gender}</td>
                  <td>{s.attendance}%</td>
                  <td><span className={`status ${statusClass}`}>{s.status}</span></td>
                  <td>
                    <button className="btn-sm">View</button>
                    <button className="btn-sm">Edit</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
