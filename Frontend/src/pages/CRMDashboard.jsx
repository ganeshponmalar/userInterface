import React, { useState, useMemo } from 'react'
import CRMHeader from '../components/CRMHeader'
import CRMAnalyticsCards from '../components/CRMAnalyticsCards'
import CRMCustomerList from '../components/CRMCustomerList'
import CRMSalesPipeline from '../components/CRMSalesPipeline'
import CRMNotifications from '../components/CRMNotifications'
import CRMActivityFeed from '../components/CRMActivityFeed'
import '../styles/crm.css'

export default function CRMDashboard({ onNavigate }) {
  const [customers] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-1234', company: 'Acme Co', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '555-2345', company: 'Beta LLC', status: 'Lead' },
    { id: 3, name: 'Carol Lee', email: 'carol@example.com', phone: '555-3456', company: 'Gamma Inc', status: 'Customer' },
  ])

  const pipeline = useMemo(() => ({
    lead: [{ id: 'L1', name: 'Bob Smith', company: 'Beta LLC' }],
    contacted: [{ id: 'C1', name: 'Diana Prince', company: 'Wayne Co' }],
    proposal: [{ id: 'P1', name: 'Eve Adams', company: 'Stark Ltd' }],
    negotiation: [{ id: 'N1', name: 'Frank Hill', company: 'Parker Co' }],
    closed: [{ id: 'W1', name: 'Grace Kim', company: 'OsCorp' }],
  }), [])

  const stats = [
    { id: 1, title: 'Total Customers', value: 1240 },
    { id: 2, title: 'Active Leads', value: 86 },
    { id: 3, title: 'Monthly Revenue', value: '$24,800' },
    { id: 4, title: 'Conversion Rate', value: '12.4%' },
  ]

  const notes = ['New customer added: Alice Johnson', 'Lead status changed: Bob Smith', 'Meeting at 3pm']
  const activities = [
    { time: '2m ago', text: 'Added customer Alice Johnson' },
    { time: '1h ago', text: 'Marked deal for Bob Smith as contacted' },
    { time: '2d ago', text: 'Closed deal with Grace Kim' },
  ]

  return (
    <div className="crm-root">
      <div className="crm-sidebar-fixed">
        {/* reuse existing Sidebar for navigation */}
        {/* but keep design separate for this page */}
      </div>
      <div className="crm-main">
        <CRMHeader />
        <div className="crm-top">
          <CRMAnalyticsCards stats={stats} />
        </div>

        <div className="crm-content">
          <div className="crm-left">
            <CRMCustomerList customers={customers} />
            <CRMSalesPipeline pipeline={pipeline} />
          </div>
          <div className="crm-right">
            <CRMNotifications notes={notes} />
            <CRMActivityFeed activities={activities} />
          </div>
        </div>
      </div>
    </div>
  )
}
