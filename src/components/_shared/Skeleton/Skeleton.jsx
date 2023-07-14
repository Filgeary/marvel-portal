import cn from 'clsx'
import React from 'react'
import styles from './Skeleton.module.css'

const Skeleton = () => {
  return (
    <div
      data-testid='skeleton'
      className={styles.wrapper}
    >
      <div className={styles.header}>
        <div className={cn(styles.circle, 'animation-pulse')}></div>
        <div className={cn(styles.mini, 'animation-pulse')}></div>
      </div>

      {Array.from({ length: 3 })
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={cn(styles.block, 'animation-pulse')}
          ></div>
        ))}
    </div>
  )
}

export default Skeleton
