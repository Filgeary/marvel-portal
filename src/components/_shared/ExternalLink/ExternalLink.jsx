import React from 'react'
import { ExternalLink as ExternalLinkIcon } from 'react-feather'
import { upperFirstLetter } from '../../../utils'
import styles from './ExternalLink.module.css'

const ExternalLink = ({ href, label, iconSize = 20 }) => {
  return (
    <>
      <a
        data-testid='externalLink'
        href={href}
        target='_blank'
        rel='noreferrer noopener'
        className={styles.link}
      >
        <span>{upperFirstLetter(label)}</span>
        <ExternalLinkIcon size={iconSize} />
      </a>
    </>
  )
}

export default ExternalLink
