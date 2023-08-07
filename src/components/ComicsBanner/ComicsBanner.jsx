import React from 'react'
import styles from './ComicsBanner.module.css'

const ComicsBanner = () => {
  return (
    <div className='container'>
      <section className={styles.wrapper}>
        <h2 className={styles.heading}>
          New comics every week! <br /> Stay tuned!
        </h2>
      </section>
    </div>
  )
}

export default ComicsBanner
