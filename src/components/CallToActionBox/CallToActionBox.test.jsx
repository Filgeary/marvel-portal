import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import CallToActionBox from './CallToActionBox'

describe('CallToActionBox', () => {
  it('should render properly', () => {
    render(<CallToActionBox />)

    expect(
      screen.getByRole('heading', {
        name: /random character for today! do you wanna know them better\?/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /try it!/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /captain america shield/i })).toBeInTheDocument()
  })
})
