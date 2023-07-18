import React from 'react'
import { ExternalLink as ExternalLinkIcon } from 'react-feather'
import { upperFirstLetter } from '../../../utils'
import styles from './ExternalLink.module.css'

/**
 * @param {object} props
 * @param {string | undefined} props.href
 * @param {string | undefined} props.label
 * @param {number=} props.iconSize
 */
const ExternalLink = ({ href, label, iconSize = 20 }) => {
  if (!href || !label) return null

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
