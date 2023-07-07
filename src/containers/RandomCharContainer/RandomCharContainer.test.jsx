import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import RandomCharContainer from './RandomCharContainer'

describe('RandomCharContainer', () => {
  it('should fetch & render Random Character', async () => {
    render(<RandomCharContainer />)

    await screen.findByRole('heading', { name: /guardians of the galaxy/i })

    expect(screen.getByRole('img', { name: /guardians of the galaxy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /detail ↗️/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wiki ↗️/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /comiclink ↗️/i })).toBeInTheDocument()
    expect(
      screen.getByText(
        /a group of cosmic adventurers brought together by star-lord, the guardians of the galaxy protect the universe from threats all across space\. the team also includes drax, gamora, groot and rocket raccoon!/i,
      ),
    ).toBeInTheDocument()
  })
})
