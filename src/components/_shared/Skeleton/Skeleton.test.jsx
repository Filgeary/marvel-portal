import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import Skeleton from './Skeleton'

describe('Skeleton', () => {
  it('should render properly', () => {
    render(<Skeleton />)

    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })
})
