import { render, screen } from '@testing-library/react'
import React from 'react'
import CharactersPage from './CharactersPage'

describe('CharactersPage', () => {
  it('should render properly', async () => {
    render(<CharactersPage />)

    await screen.findByRole('heading', { name: /characters list/i })
  })
})
