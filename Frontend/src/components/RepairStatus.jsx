import React from 'react'

function ProgressBar({ label, percent, color }) {
  return (
    <div className="progress-row">
      <div className="progress-label">{label}</div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: percent + '%', background: color }} />
      </div>
      <div className="progress-value">{percent}%</div>
    </div>
  )
}

export default function RepairStatus({ stats = {} }) {
  return (
    <div className="repair-status">
      <h4>Repair Status</h4>
      <ProgressBar label="Open" percent={stats.open || 10} color="#ef4444" />
      <ProgressBar label="Under Analysis" percent={stats.analysis || 40} color="#f59e0b" />
      <ProgressBar label="Repair Completed" percent={stats.repair || 70} color="#10b981" />
      <ProgressBar label="Closed" percent={stats.closed || 100} color="#6366f1" />
    </div>
  )
}
