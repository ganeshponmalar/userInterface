import React, { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

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
    </div>
  )
}
