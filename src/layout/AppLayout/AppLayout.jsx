import React from 'react'
import AppFooter from '../../components/AppFooter'
import AppHeader from '../../components/AppHeader'
import styles from './AppLayout.module.css'

const AppLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main className={styles.main}>{children}</main>

      <AppFooter />
    </div>
  )
}

export default AppLayout
