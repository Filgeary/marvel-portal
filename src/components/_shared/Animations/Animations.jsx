// @ts-nocheck
import React, { forwardRef } from 'react'
import { CSSTransition } from 'react-transition-group'

// TODO: make components more generic, we need TS

/**
 * props: key, ref, in
 */
export const FadeInZoomIn = forwardRef((props, forwardedRef) => {
  return (
    <CSSTransition
      in={props.in}
      nodeRef={forwardedRef}
      timeout={300}
      classNames='fadeInZoomIn'
      mountOnEnter
      unmountOnExit
    >
      {props.children}
    </CSSTransition>
  )
})

/**
 * props: key, ref, in
 */
export const FadeInUp = forwardRef((props, forwardedRef) => {
  return (
    <CSSTransition
      in={props.in}
      nodeRef={forwardedRef}
      timeout={300}
      classNames='fadeInUp'
      mountOnEnter
      unmountOnExit
    >
      {props.children}
    </CSSTransition>
  )
})
