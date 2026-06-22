import React, { useState } from 'react'
import SchoolSidebar from '../components/SchoolSidebar'
import SchoolHeader from '../components/SchoolHeader'
import SchoolStatsCards from '../components/SchoolStatsCards'
import AttendanceChart from '../components/AttendanceChart'
import StudentTable from '../components/StudentTable'
import SchoolNotifications from '../components/SchoolNotifications'
import SchoolActivities from '../components/SchoolActivities'
import NewStudentForm from '../components/NewStudentForm'
import '../styles/school.css'

export default function SchoolDashboard({ onNavigate }) {
  const [students, setStudents] = useState([
    { id: 'S001', name: 'Aisha Khan', className: '5A', gender: 'F', attendance: 95, status: 'Active' },
    { id: 'S002', name: 'Rahul Mehta', className: '6B', gender: 'M', attendance: 88, status: 'Active' },
    { id: 'S003', name: 'Sara Ali', className: '5A', gender: 'F', attendance: 92, status: 'Active' },
    { id: 'S004', name: 'Tom Lee', className: '7C', gender: 'M', attendance: 78, status: 'At Risk' },
  ])

  const stats = [
    { id:1, title: 'Total Students', value: 520, delta: '+3.2%' },
    { id:2, title: 'Total Teachers', value: 42, delta: '+1.1%' },
    { id:3, title: 'Total Classes', value: 28, delta: '+0.5%' },
    { id:4, title: 'Attendance %', value: '92.1%', delta: '-0.4%' },
  ]

  const notes = ['Fee reminder: Class 5A', 'Attendance alert: Tom Lee', 'Exam schedule published']
  const activities = [
    { time: '10m ago', text: 'New student admitted: Aisha Khan' },
    { time: '1h ago', text: 'Teacher assigned to Class 6B' },
    { time: '1d ago', text: 'Exam schedule released' },
  ]

  function handleAddStudent(student) {
    setStudents(prev => [student, ...prev])
  }

  return (
    <div className="school-root">
      <SchoolSidebar onNavigate={onNavigate} />
      <div className="school-main">
        <SchoolHeader />
        <main className="school-content">
          <section className="school-top">
            <SchoolStatsCards stats={stats} />
          </section>

          <section className="school-middle">
            <div className="school-left">
              <AttendanceChart />
              <NewStudentForm onAddStudent={handleAddStudent} />
              <StudentTable students={students} />
            </div>
            <aside className="school-right">
              <SchoolNotifications notes={notes} />
              <SchoolActivities activities={activities} />
            </aside>
          </section>
        </main>
      </div>
    </div>
  )
}
