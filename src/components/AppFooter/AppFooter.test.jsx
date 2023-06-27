import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import AppFooter from './AppFooter'

describe('AppFooter', () => {
  it('should render properly', () => {
    render(<AppFooter />)

    expect(screen.getByRole('heading', { name: /project info/i })).toBeInTheDocument()
    expect(screen.getByText(/developed by filgeary/i)).toBeInTheDocument()
    expect(screen.getByText(/data provided by marvel\. © 2023 marvel/i)).toBeInTheDocument()
  })
})
