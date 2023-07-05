import React from 'react'
import RandomChar from '../../components/RandomChar'
import { marvelService } from '../../services/marvelService'
import { randomCharId } from '../../utils'
// import styles from './RandomCharContainer.module.css'

class RandomCharContainer extends React.Component {
  state = {
    /**
     * @type {import('../../types/ICharacter').ICharacter | null}
     */
    char: null,
  }

  componentDidMount() {
    marvelService
      .getAllChars({ limit: 1, offset: randomCharId() })
      .then(res => this.setState({ char: res.data?.results?.at(0) }))
      .catch(err => console.error(err))
  }

  render() {
    const { char } = this.state

    return (
      <>
        <RandomChar char={char} />
      </>
    )
  }
}

export default RandomCharContainer
