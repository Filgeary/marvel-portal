import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import RandomChar from './RandomChar'

describe('RandomChar', () => {
  it('should render correctly', () => {
    render(<RandomChar />)

    expect(screen.getByRole('heading', { name: /random-char/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /random char/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /char info/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /char wiki/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /random character for today! do you wanna know them better\?/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /try it!/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /captain america shield/i })).toBeInTheDocument()
  })
})
