import React from 'react'
import styles from './CharList.module.css'

const CharList = () => {
  return (
    <section className={styles.section}>
      <h2 className='visually-hidden'>Characters List</h2>

      <ul className={styles.list}>
        {Array.from({ length: 9 })
          .fill(null)
          .map((_, i) => {
            return (
              <li
                key={i}
                data-testid='charListItem'
                className={styles.listItem}
              >
                <button type='button'>
                  <img
                    src='https://images.placeholders.dev/?width=200&height=200&bgColor=%231e90ff'
                    alt='Character'
                    width={200}
                    height={200}
                  />
                  <div className={styles.charNameWrapper}>
                    <h3>{'CharName ' + ++i}</h3>
                  </div>
                </button>
              </li>
            )
          })}
      </ul>

      <button
        type='button'
        className='btn btn-primary m-auto'
      >
        Load More
      </button>
    </section>
  )
}

export default CharList
