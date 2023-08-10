import React from 'react'
import styles from './ComicsBanner.module.css'

const ComicsBanner = () => {
  return (
    <section
      className={styles.wrapper}
      data-testid='comicsBanner'
    >
      <h2 className={styles.heading}>
        New comics every week! <br /> Stay tuned!
      </h2>
    </section>
  )
}

export default ComicsBanner
