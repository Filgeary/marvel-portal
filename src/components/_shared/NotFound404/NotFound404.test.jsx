import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import NotFound404 from './NotFound404'

describe('NotFound404', () => {
  it('should render properly', () => {
    render(
      <MemoryRouter>
        <NotFound404 />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('notFound404')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Not Found page/i })).toBeInTheDocument()
  })
})
