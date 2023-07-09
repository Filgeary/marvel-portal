import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import ErrorMessage from './ErrorMessage'

describe('ErrorMessage', () => {
  it('should render properly', () => {
    render(<ErrorMessage />)

    expect(screen.getByTestId('errorMessage')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /pulsating-engine/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Unknown Error!/i })).toBeInTheDocument()
  })
})
