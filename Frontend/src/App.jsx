import React, { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Ecommerce from './components/Ecommerce'
import EmployeeManagement from './components/EmployeeManagement'
import JobPortal from './components/JobPortal'

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
    </div>
  )
}
