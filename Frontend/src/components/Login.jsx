import React, { useState } from 'react'

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const errs = {}
    if (!email) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email.'
    if (!password) errs.password = 'Password is required.'
    else if (password.length < 6) errs.password = 'Password must be at least 6 characters.'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) {
      if (remember) localStorage.setItem('rememberEmail', email)
      else localStorage.removeItem('rememberEmail')
      // In real app: send credentials to server
      if (onNavigate) onNavigate('dashboard')
      else alert('Logged in (demo)')
    }
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit} noValidate role="form" aria-labelledby="login-title">
        <h2 className="title" id="login-title">Sign In</h2>

        <label className="field">
          <span className="label-text">Email</span>
          <input
            id="email"
            aria-label="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'invalid' : ''}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <div className="error" id="email-error" aria-live="polite">{errors.email}</div>}
        </label>

        <label className="field">
          <span className="label-text">Password</span>
          <div className="password-row">
            <input
              id="password"
              aria-label="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'invalid' : ''}
              placeholder="Enter your password"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword((s) => !s)}
              aria-pressed={showPassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <div className="error" id="password-error" aria-live="polite">{errors.password}</div>}
        </label>

        <div className="options-row">
          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#" className="forgot" onClick={(e)=>{e.preventDefault(); alert('Password reset flow (demo).')}}>Forgot?</a>
        </div>

        <button className="submit" type="submit">Sign In</button>
        <div style={{marginTop:12, textAlign:'center'}}>
          <button type="button" onClick={() => onNavigate && onNavigate('dashboard')} style={{background:'none',border:'none',color:'#2563eb',cursor:'pointer'}}>
            Open Admin Dashboard (demo)
          </button>
        </div>
      </form>
    </div>
  )
}
