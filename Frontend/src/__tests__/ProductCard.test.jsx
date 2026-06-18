import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductCard from '../components/ProductCard'

test('renders product card and triggers add handler', () => {
  const product = { id: 'p1', title: 'Sample', price: 10, category: 'Test' }
  const onAdd = vi.fn()
  render(<ProductCard product={product} onAdd={onAdd} />)

  expect(screen.getByText(/Sample/)).toBeInTheDocument()
  const btn = screen.getByText('Add')
  userEvent.click(btn)
  expect(onAdd).toHaveBeenCalled()
})
