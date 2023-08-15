import { render } from '@testing-library/react'
import { AppProvider } from '../providers/AppProvider'

export const renderWithProviders = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, { wrapper: AppProvider }),
  }
}
