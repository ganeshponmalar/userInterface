import React, { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Ecommerce from './components/Ecommerce'
import EmployeeManagement from './components/EmployeeManagement'
import TravelLanding from './components/TravelLanding'
import JobPortal from './components/JobPortal'
import CRMDashboard from './pages/CRMDashboard'
import ManufacturingDashboard from './pages/ManufacturingDashboard'
import BankingDashboard from './pages/BankingDashboard'
import SchoolDashboard from './pages/SchoolDashboard'
import TodoApp from './todo/App'
import KanbanApp from './kanban/App'

export default function App() {
  const [route, setRoute] = useState('login')

  function navigate(r) {
    setRoute(r)
  }

  return (
    <div className="app-root">
      {route === 'login' && <Login onNavigate={navigate} />}
      {route === 'dashboard' && <Dashboard onNavigate={navigate} />}
      {route === 'ecommerce' && <Ecommerce onNavigate={navigate} />}
      {route === 'employees' && <EmployeeManagement onNavigate={navigate} />}
      {route === 'jobs' && <JobPortal onNavigate={navigate} />}
      {route === 'travel' && <TravelLanding onNavigate={navigate} />}
      {route === 'manufacturing' && <ManufacturingDashboard onNavigate={navigate} />}
      {route === 'crm' && <CRMDashboard onNavigate={navigate} />}
      {route === 'banking' && <BankingDashboard onNavigate={navigate} />}
      {route === 'todo' && <TodoApp />}
      {route === 'kanban' && <KanbanApp />}
      {route === 'school' && <SchoolDashboard onNavigate={navigate} />}
    </div>
  )
}
