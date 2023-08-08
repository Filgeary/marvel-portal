import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ComicsListContainer from './ComicsListContainer'

describe('ComicsListContainer', () => {
  it('should render Heading & click on button', () => {
    render(<ComicsListContainer />)
    expect(screen.getByRole('heading', { name: /ComicsListContainer-component/i })).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /ComicsListContainer-button/i }))
  })
})
