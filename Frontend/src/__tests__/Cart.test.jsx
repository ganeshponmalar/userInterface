import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Cart from '../components/Cart'

test('displays cart items and remove works', () => {
  const items = [{ id: 'p1', title: 'Sample', price: 5, qty: 2 }]
  const onRemove = vi.fn()
  render(<Cart items={items} onRemove={onRemove} />)

  expect(screen.getByText(/Sample/)).toBeInTheDocument()
  const btn = screen.getByText(/Remove/)
  userEvent.click(btn)
  expect(onRemove).toHaveBeenCalledWith('p1')
})
