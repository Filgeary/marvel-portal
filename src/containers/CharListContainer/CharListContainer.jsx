import React from 'react'
import CharInfo from '../../components/CharInfo'
import CharList from '../../components/CharList'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { marvelService } from '../../services/marvelService'
import { validateError } from '../../utils'
import styles from './CharListContainer.module.css'

class CharListContainer extends React.Component {
  state = {
    /**
     * @type {import('../../types/ICharacter').ICharacter[] | null}
     */
    charList: null,
    isLoading: false,
    isError: false,
    errorMsg: '',
  }

  componentDidMount() {
    this.handleUpdate()
  }

  handleUpdate = () => {
    this.setState({ isLoading: true })

    marvelService
      .getAllChars({ limit: 18 })
      .then(res => {
        this.setState({ charList: res.data?.results, isLoading: false, isError: false })
      })
      .catch(err => this.handleError(err))
  }

  handleError = err => {
    this.setState({ isLoading: false, isError: true, errorMsg: validateError(err) })
  }

  render() {
    const { charList, isLoading, isError, errorMsg } = this.state

    return (
      <div className='container'>
        <div className={styles.wrapper}>
          <div style={{ minHeight: 250 }}>
            {isLoading && <Spinner />}
            {isError && <ErrorMessage text={errorMsg} />}
            {!isError && !isLoading && (
              <CharList
                charList={charList}
                onSelectChar={id => console.log(id)}
                onLoadMore={() => {}}
              />
            )}
          </div>

          <CharInfo />
        </div>
      </div>
    )
  }
}

export default CharListContainer
