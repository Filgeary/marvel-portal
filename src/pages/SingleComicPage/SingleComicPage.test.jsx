import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

const initRender = (path = '/comics/95790') => {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('SingleComicPage', () => {
  it('should handle certain comic path & render SingleComicPage', async () => {
    initRender()

    expect(screen.getByTestId('singleComicPage')).toBeInTheDocument()

    // wait loading data
    await screen.findByTestId('comicProfile')
    expect(
      screen.getByRole('heading', { name: /captain marvel \(2019\) #44/i }),
    ).toBeInTheDocument()
  })
})
