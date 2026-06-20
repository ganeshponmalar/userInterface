import React from 'react'

export default function FailureTable({ data = [] }) {
  return (
    <div className="failure-table">
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Factory</th>
            <th>Model</th>
            <th>Station</th>
            <th>Failure Code</th>
            <th>Symptom</th>
            <th>Root Cause</th>
            <th>Action Taken</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(r => (
            <tr key={r.serial}>
              <td>{r.serial}</td>
              <td>{r.factory}</td>
              <td>{r.model}</td>
              <td>{r.station}</td>
              <td>{r.failureCode}</td>
              <td>{r.symptom}</td>
              <td>{r.rootCause}</td>
              <td>{r.action}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
