import { screen, render } from '@testing-library/react'
import Header from './Header'

describe('Header unit tests', () => {
  it('renders Header with logo and app name', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    const logo = screen.getByRole('img')
    const h1 = screen.getByText(/cats incorpurrated/i)

    expect(header).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(h1).toHaveTextContent('CATS INCORPURRATED')
  })
})
