import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('should render properly', () => {
    render(<Spinner />)

    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })
})
