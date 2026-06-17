import React from 'react'

function LineChart() {
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="svg-chart">
      <polyline fill="none" stroke="#2563eb" strokeWidth="2" points="0,30 15,24 30,18 45,14 60,10 75,12 90,8 100,6" />
    </svg>
  )
}

function BarChart() {
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="svg-chart">
      <rect x="5" y="18" width="12" height="20" fill="#60a5fa" />
      <rect x="22" y="10" width="12" height="28" fill="#3b82f6" />
      <rect x="39" y="14" width="12" height="24" fill="#2563eb" />
      <rect x="56" y="6" width="12" height="32" fill="#1e40af" />
      <rect x="73" y="20" width="12" height="18" fill="#60a5fa" />
    </svg>
  )
}

export default function Charts({ type = 'line' }) {
  return (
    <div className="charts-wrapper">
      {type === 'line' ? <LineChart /> : <BarChart />}
    </div>
  )
}
