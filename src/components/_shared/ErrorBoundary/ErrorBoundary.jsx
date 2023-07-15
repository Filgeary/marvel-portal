import React from 'react'
import ErrorMessage from '../ErrorMessage'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
    console.log(info?.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage text='Something went wrong! Reload App, please!' />
    }

    return this.props.children
  }
}

export default ErrorBoundary
