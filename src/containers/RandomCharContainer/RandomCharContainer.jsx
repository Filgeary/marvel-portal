import React from 'react'
import CallToActionBox from '../../components/CallToActionBox'
import ErrorMessage from '../../components/ErrorMessage'
import RandomChar from '../../components/RandomChar'
import Spinner from '../../components/Spinner'
import { marvelService } from '../../services/marvelService'
import { randomCharId, validateError } from '../../utils'
import styles from './RandomCharContainer.module.css'

class RandomCharContainer extends React.Component {
  state = {
    /**
     * @type {import('../../types/ICharacter').ICharacter | null}
     */
    char: null,
    isLoading: false,
    isError: false,
    errorMsg: '',
  }

  componentDidMount() {
    this.handleUpdate()
  }

  handleUpdate() {
    this.setState({ isLoading: true })

    marvelService
      .getAllChars({ limit: 1, offset: randomCharId() })
      .then(res => {
        this.setState({ char: res.data?.results?.at(0), isLoading: false, isError: false })
      })
      .catch(err => this.handleError(err))
  }

  handleError(err) {
    this.setState({ isLoading: false, isError: true, errorMsg: validateError(err) })
  }

  render() {
    const { char, isLoading, isError, errorMsg } = this.state

    return (
      <div className='container'>
        <div className={styles.wrapper}>
          {isLoading && <Spinner />}
          {isError && <ErrorMessage text={errorMsg} />}
          {!isError && !isLoading && <RandomChar char={char} />}
          <CallToActionBox />
        </div>
      </div>
    )
  }
}

export default RandomCharContainer
