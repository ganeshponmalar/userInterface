import React from 'react'

export default function SchoolSidebar({ onNavigate }) {
  return (
    <aside className="school-sidebar">
      <div className="school-brand">EduManage</div>
      <nav className="school-nav">
        <button onClick={() => onNavigate && onNavigate('dashboard')}>Dashboard</button>
        <button onClick={() => onNavigate && onNavigate('students')}>Students</button>
        <button onClick={() => onNavigate && onNavigate('teachers')}>Teachers</button>
        <button onClick={() => onNavigate && onNavigate('attendance')}>Attendance</button>
        <button onClick={() => onNavigate && onNavigate('classes')}>Classes</button>
        <button onClick={() => onNavigate && onNavigate('exams')}>Exams</button>
        <button onClick={() => onNavigate && onNavigate('reports')}>Reports</button>
        <button onClick={() => onNavigate && onNavigate('settings')}>Settings</button>
        <button onClick={() => onNavigate && onNavigate('logout')}>Logout</button>
      </nav>
      <div className="school-footer">© EduManage</div>
    </aside>
  )
}
