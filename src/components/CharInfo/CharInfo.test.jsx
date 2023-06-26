import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import CharInfo from './CharInfo'

describe('CharInfo', () => {
  it('should render properly', () => {
    render(<CharInfo />)

    expect(screen.getByRole('heading', { name: /char info/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /charinfo avatar/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /char info/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /char wiki/i })).toBeInTheDocument()
    expect(screen.getByTestId('charInfo-description')).toBeInTheDocument()
  })
})
