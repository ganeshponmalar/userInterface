import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Login from './components/Login'

test('renders login form elements', () => {
  render(<Login />)
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  expect(screen.getByText(/remember me/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
})

test('validation shows errors for empty submit', () => {
  render(<Login />)
  fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
  expect(screen.getByText(/email is required/i)).toBeInTheDocument()
  expect(screen.getByText(/password is required/i)).toBeInTheDocument()
})

test('show/hide password toggles input type', () => {
  render(<Login />)
  const pass = screen.getByLabelText(/password/i)
  const toggle = screen.getByRole('button', { name: /show/i })
  expect(pass).toHaveAttribute('type', 'password')
  fireEvent.click(toggle)
  expect(pass).toHaveAttribute('type', 'text')
})
