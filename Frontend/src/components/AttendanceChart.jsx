import React from 'react'

export default function AttendanceChart() {
  return (
    <div className="attendance-chart card">
      <h4>Attendance Chart</h4>
      <div className="chart-placeholder">[Attendance chart placeholder]</div>
      <div className="attendance-overview">
        <div>Present: <strong>320</strong></div>
        <div>Absent: <strong>28</strong></div>
        <div>Attendance: <strong>91.9%</strong></div>
      </div>
    </div>
  )
}
