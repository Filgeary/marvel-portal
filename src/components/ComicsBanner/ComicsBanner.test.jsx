import { render, screen } from '@testing-library/react'
import React from 'react'
import ComicsBanner from './ComicsBanner'

describe('ComicsBanner', () => {
  it('should render properly', () => {
    render(<ComicsBanner />)

    expect(
      screen.getByRole('heading', { name: /New comics every week! Stay tuned!/i }),
    ).toBeInTheDocument()
  })
})
