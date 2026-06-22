import React, { useState, useMemo } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import StatisticsCards from '../components/StatisticsCards'
import TrackingForm from '../components/TrackingForm'
import FailureTable from '../components/FailureTable'
import RepairStatus from '../components/RepairStatus'
import ActivityPanel from '../components/ActivityPanel'
import '../App.css'

const FACTORIES = {
  Foxconn: ['iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max'],
  Pegatron: ['iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro'],
  Wistron: ['iPhone 15', 'iPhone 15 Pro'],
  Luxshare: ['iPhone 15', 'iPhone 15 Pro Max'],
}

const MOCK_FAILURES = [
  { serial: 'SN12345', factory: 'Foxconn', model: 'iPhone 15', station: 'A1', failureCode: 'F01', symptom: 'No Power', rootCause: 'Connector', action: 'Replaced connector', status: 'Failed' },
  { serial: 'SN12346', factory: 'Pegatron', model: 'iPhone 15', station: 'B3', failureCode: 'P02', symptom: 'Camera Fault', rootCause: 'Sensor', action: 'Replaced module', status: 'Repaired' },
  { serial: 'SN12347', factory: 'Wistron', model: 'iPhone 15 Pro', station: 'C2', failureCode: 'T03', symptom: 'Touch not responsive', rootCause: 'T', action: 'Calibrated', status: 'Closed' },
  { serial: 'SN12348', factory: 'Luxshare', model: 'iPhone 15 Pro Max', station: 'A2', failureCode: 'F04', symptom: 'Overheat', rootCause: 'Thermal paste', action: 'Applied paste', status: 'Under Repair' },
]

export default function ManufacturingDashboard({ onNavigate }) {
  const [failures, setFailures] = useState(MOCK_FAILURES)
  const [filter, setFilter] = useState(null)

  const stats = useMemo(() => {
    const total = failures.length
    const passed = failures.filter(f => f.status === 'Closed').length
    const failed = failures.filter(f => f.status === 'Failed').length
    const repair = failures.filter(f => f.status === 'Under Repair' || f.status === 'Repaired').length
    const yieldPct = total ? Math.round(((passed + (total - failed - repair)) / total) * 100) : 100
    return [
      { id: 1, title: 'Total Units Produced', value: total },
      { id: 2, title: 'Units Passed', value: passed },
      { id: 3, title: 'Units Failed', value: failed },
      { id: 4, title: 'Units Under Repair', value: repair },
      { id: 5, title: 'Yield %', value: yieldPct + '%' },
    ]
  }, [failures])

  function handleSearch(criteria) {
    if (!criteria) {
      setFilter(null)
      return
    }
    setFilter(criteria)
  }

  const filteredFailures = useMemo(() => {

    if (!filter) return failures
    return failures.filter(f => {
      if (filter.factory && filter.factory !== '' && f.factory !== filter.factory) return false
      if (filter.model && filter.model !== '' && f.model !== filter.model) return false
      if (filter.serial && filter.serial !== '' && !f.serial.includes(filter.serial)) return false
      if (filter.station && filter.station !== '' && f.station !== filter.station) return false
      if (filter.technician && filter.technician !== '' && f.technician && !f.technician.includes(filter.technician)) return false
      if (filter.failure && filter.failure !== '' && !f.failureCode.includes(filter.failure)) return false
      return true
    })
  }, [failures, filter])

  const repairStats = useMemo(() => ({ open: 20, analysis: 40, repair: 70, closed: 100 }), [])

  const activities = [
    { title: 'Repaired SN12346', meta: 'Technician: Alice' },
    { title: 'New failure SN12348', meta: 'Reported by: Line B' },
    { title: 'Assigned SN12345 to repair', meta: 'Technician: Bob' },
  ]

  return (
    <div className="manufacturing-root">
      <Sidebar onNavigate={onNavigate} />
      <div className="main-area">
        <Header />
        <main className="main-content">
          <section className="top-row">
            <StatisticsCards stats={stats} />
          </section>

          <section className="middle-row">
            <div className="left-col">
              <div className="card">
                <h4>Tracking Form</h4>
                <TrackingForm factories={FACTORIES} onSearch={handleSearch} />
              </div>

              <div className="card">
                <h4>Failure Analysis</h4>
                <FailureTable data={filteredFailures} />
              </div>
            </div>

            <div className="right-col">
              <div className="card">
                <RepairStatus stats={repairStats} />
              </div>

              <div className="card">
                <h4>Charts (placeholders)</h4>
                <div className="charts">
                  <div className="chart">Failure Trend Chart</div>
                  <div className="chart">Top Failure Categories</div>
                  <div className="chart">Production Yield Chart</div>
                </div>
              </div>

              <ActivityPanel activities={activities} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
