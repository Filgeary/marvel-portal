import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import CharList from './CharList'

describe('CharList', () => {
  it('should render properly', () => {
    render(<CharList />)

    expect(screen.getByRole('heading', { name: /characters list/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('charListItem')).toHaveLength(9)
  })
})
