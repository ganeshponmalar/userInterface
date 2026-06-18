import React, { useState, useEffect } from 'react'
import '../styles/job.css'

export default function JobPortal({ onNavigate }) {
  const [jobs, setJobs] = useState([])
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [applications, setApplications] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    // initial job list or load from localStorage
    try {
      const raw = localStorage.getItem('jobs')
      if (raw) {
        setJobs(JSON.parse(raw))
      } else {
        const sample = [
          { id: 1, title: 'Developer', type: 'Full-time', location: 'Remote' },
          { id: 2, title: 'Tester', type: 'Part-time', location: 'Onsite' },
          { id: 3, title: 'Designer', type: 'Contract', location: 'Remote' },
        ]
        setJobs(sample)
      }
    } catch (e) {
      setJobs([])
    }

    try {
      const rawA = localStorage.getItem('applications')
      if (rawA) setApplications(JSON.parse(rawA))
    } catch (e) {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('jobs', JSON.stringify(jobs))
    } catch (e) {}
  }, [jobs])

  useEffect(() => {
    try {
      localStorage.setItem('applied', JSON.stringify(applications))
    } catch (e) {}
  }, [applications])

  function handleSearch(e) {
    setQuery(e.target.value)
  }

  function handleFilter(e) {
    setFilter(e.target.value)
  }

  function handleSubmitSelected() {
    console.log('selectedId:', selectedId)
    if (selectedId === null || selectedId === undefined) {
      alert('Please select a job to apply')
      return
    }
    const appExists = applications.find(a => a.jobId === selectedId)
    if (appExists) {
      alert('You have already applied to this job')
      return
    }
    const name = prompt('Enter your name to apply:')
    if (!name) return
    const job = jobs.find(j => j.id === selectedId)
    if (!job) {
      alert('Job not found')
      return
    }
    setApplications(prev => [...prev, { id: Date.now(), jobId: selectedId, jobTitle: job.title, applicantName: name, appliedDate: new Date().toLocaleDateString() }])
    alert('Application submitted for ' + job.title)
    setSelectedId(null)
  }

  const filtered = jobs.filter(j => {
    const q = query.toLowerCase()
    if (filter !== 'all' && j.title.toLowerCase() !== filter.toLowerCase()) return false
    if (!q) return true
    return j.title.toLowerCase().includes(q) || j.type.toLowerCase().includes(q) || (j.location || '').toLowerCase().includes(q)
  })

  const getAppliedStatus = (jobId) => applications.find(a => a.jobId === jobId) ? 'Applied' : '-'

  return (
    <div className="job-root">
      <div className="job-header">
        <h2>Job Listings</h2>
        <div>
          <button onClick={() => onNavigate && onNavigate('dashboard')}>Back</button>
        </div>
      </div>

      <div className="job-controls">
        <input placeholder="Search jobs..." value={query} onChange={handleSearch} />
        <select value={filter} onChange={handleFilter}>
          <option value="all">All</option>
          <option value="developer">Developer</option>
          <option value="tester">Tester</option>
          <option value="designer">Designer</option>
        </select>
        <button onClick={handleSubmitSelected} style={{ marginLeft: 8 }}>Submit Application</button>
      </div>

      <div className="job-list">
        {filtered.length === 0 && <div className="job-empty">No jobs found.</div>}
        {filtered.length > 0 && (
          <table className="job-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>Select</th>
                <th>Title</th>
                <th>Type</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(j => (
                <tr key={j.id} style={{ backgroundColor: selectedId === j.id ? '#f0f0f0' : 'transparent' }}>
                  <td style={{ width: 60 }}>
                    <input 
                      type="radio" 
                      name="selectedJob" 
                      value={j.id}
                      checked={selectedId === j.id} 
                      onChange={() => {
                        console.log('Selected job:', j.id)
                        setSelectedId(j.id)
                      }} 
                    />
                  </td>
                  <td>{j.title}</td>
                  <td>{j.type}</td>
                  <td>{j.location}</td>
                  <td>{getAppliedStatus(j.id)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ marginTop: 30 }}>
        <h3>Your Applications</h3>
        {applications.length === 0 ? (
          <div className="job-empty">No applications yet.</div>
        ) : (
          <table className="job-table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Applicant Name</th>
                <th>Applied Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id}>
                  <td>{app.jobTitle}</td>
                  <td>{app.applicantName}</td>
                  <td>{app.appliedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
