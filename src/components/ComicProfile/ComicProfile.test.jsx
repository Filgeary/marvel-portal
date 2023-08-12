import { render, screen } from '@testing-library/react'
import React from 'react'
import comicResponseJson from '../../__fixtures/api/comicById.json'
import ComicProfile from './ComicProfile'

/**
 * @type {import('../../types/IComic').IComicDataWrapper}
 */
const comicResponseObj = JSON.parse(JSON.stringify(comicResponseJson))
const comic = comicResponseObj?.data?.results?.at(0)

describe('ComicProfile', () => {
  it('should render properly', () => {
    render(<ComicProfile comic={comic} />)

    expect(screen.getByTestId('comicProfile')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /captain marvel \(2019\) #44/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /captain marvel \(2019\) #44/i })).toBeInTheDocument()
  })
})
