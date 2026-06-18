import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Ecommerce from '../components/Ecommerce'

test('fetches and displays products and allows adding to cart', async () => {
  render(<Ecommerce />)

  // wait for products to appear
  await waitFor(() => expect(screen.getByText(/Blue Sneakers/i)).toBeInTheDocument())

  const addButtons = screen.getAllByText('Add')
  expect(addButtons.length).toBeGreaterThan(0)

  userEvent.click(addButtons[0])

  // Cart should show added item
  expect(await screen.findByText(/Cart/i)).toBeInTheDocument()
})
