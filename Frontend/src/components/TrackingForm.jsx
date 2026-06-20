import React, { useState, useEffect } from 'react'

export default function TrackingForm({ factories, onSearch }) {
  const [factory, setFactory] = useState('')
  const [model, setModel] = useState('')
  const [serial, setSerial] = useState('')
  const [station, setStation] = useState('')
  const [technician, setTechnician] = useState('')
  const [failure, setFailure] = useState('')
  const [models, setModels] = useState([])

  useEffect(() => {
    if (factory && factories[factory]) setModels(factories[factory])
    else setModels([])
    setModel('')
  }, [factory, factories])

  function handleSearch(e) {
    e.preventDefault()
    onSearch && onSearch({ factory, model, serial, station, technician, failure })
  }

  function handleReset() {
    setFactory('')
    setModel('')
    setSerial('')
    setStation('')
    setTechnician('')
    setFailure('')
    onSearch && onSearch(null)
  }

  return (
    <form className="tracking-form" onSubmit={handleSearch}>
      <select value={factory} onChange={e => setFactory(e.target.value)}>
        <option value="">All Factories</option>
        {Object.keys(factories).map(f => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>

      <select value={model} onChange={e => setModel(e.target.value)}>
        <option value="">All Models</option>
        {models.map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <input placeholder="Serial Number" value={serial} onChange={e => setSerial(e.target.value)} />
      <input placeholder="Station" value={station} onChange={e => setStation(e.target.value)} />
      <input placeholder="Technician" value={technician} onChange={e => setTechnician(e.target.value)} />
      <input placeholder="Failure Code" value={failure} onChange={e => setFailure(e.target.value)} />

      <div className="tracking-actions">
        <button type="submit" className="btn-primary">Search</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
    </form>
  )
}
