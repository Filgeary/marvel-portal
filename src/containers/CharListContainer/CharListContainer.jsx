import _uniqBy from 'lodash/uniqBy'
import React from 'react'
import CharInfo from '../../components/CharInfo'
import CharList from '../../components/CharList'
import ErrorMessage from '../../components/_shared/ErrorMessage'
import Spinner from '../../components/_shared/Spinner'
import { CHAR_PAGE_LIMIT } from '../../constants'
import { marvelService } from '../../services/marvelService'
import { validateError } from '../../utils'
import styles from './CharListContainer.module.css'

class CharListContainer extends React.Component {
  state = {
    /**
     * @type {import('../../types/ICharacter').ICharacter[] | null}
     */
    charList: null,
    /**
     * @type {import('../../types/ICharacter').ICharacter | null}
     */
    selectedChar: null,
    isLoading: false,
    isError: false,
    errorMsg: '',
    isInitialFetching: true,
    offset: 0,
    charsCount: 0,
    totalChars: 0,
  }

  componentDidMount() {
    this.handleUpdate()
  }

  handleUpdate = (offset = 0, limit = CHAR_PAGE_LIMIT) => {
    this.setState({ isLoading: true })

    marvelService
      .getAllChars({ limit, offset })
      .then(res => {
        const { results = [], offset = 0, count = 0, total = 0 } = res.data ?? {}

        this.setState(prevState => {
          // to prevent duplicating in strict mode
          const uniqedCharList = _uniqBy([...(prevState.charList ?? []), ...results], 'id')

          return {
            charList: uniqedCharList,
            isLoading: false,
            isError: false,
            isInitialFetching: false,
            offset: offset,
            charsCount: count,
            totalChars: total,
          }
        })
      })
      .catch(err => this.handleError(err))
  }

  handleError = err => {
    this.setState({ isLoading: false, isError: true, errorMsg: validateError(err) })
  }

  handleSelectChar = id => {
    const selectedChar = this.state.charList?.find(char => char.id === id)
    this.setState({ selectedChar })
  }

  render() {
    const {
      charList,
      isLoading,
      isError,
      errorMsg,
      selectedChar,
      isInitialFetching,
      offset,
      charsCount,
      totalChars,
    } = this.state

    const hasMoreChars = totalChars - offset - charsCount > 0

    return (
      <div className='container'>
        <div className={styles.wrapper}>
          <div style={{ minHeight: 250 }}>
            {isLoading && isInitialFetching && <Spinner />}
            {isError && <ErrorMessage text={errorMsg} />}
            {!isError && !isInitialFetching && (
              <CharList
                charList={charList}
                onSelectChar={id => this.handleSelectChar(id)}
                onLoadMore={() => this.handleUpdate(offset + CHAR_PAGE_LIMIT)}
                isLoading={isLoading}
                hasMoreChars={hasMoreChars}
              />
            )}
          </div>

          <CharInfo char={selectedChar} />
        </div>
      </div>
    )
  }
}

export default CharListContainer
