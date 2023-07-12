import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import ExternalLink from './ExternalLink'

const initRender = () => {
  render(
    <ExternalLink
      href={'some-url'}
      label={'example-link'}
    />,
  )
}

describe('ExternalLink', () => {
  it('should render properly', () => {
    initRender()

    expect(screen.getByTestId('externalLink')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /example-link/i })).toHaveAttribute('href', 'some-url')
  })
})
