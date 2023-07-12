import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import CharListContainer from './CharListContainer'

// TODO: make tests
describe('CharListContainer', () => {
  it('should render Heading & click on button', () => {
    render(<CharListContainer />)

    expect(screen.getByRole('heading', { name: /Characters list/i })).toBeInTheDocument()
  })
})
