import { ReactElement } from 'react'
import { render } from '@testing-library/react'
import ContextProvider from '../context/Context'

export const renderWithContext = (ui: ReactElement) => {
  render(<ContextProvider>{ui}</ContextProvider>)
}
