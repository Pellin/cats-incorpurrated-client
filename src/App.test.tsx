import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App integration', () => {
  it('renders app with header, two menus and a catList', () => {
    render(<App />)

    const header = screen.getByRole('banner')
    const menus = screen.getAllByRole('navigation')
    const catListItems = screen.getAllByRole('listitem', { name: /cat/i })

    expect(header).toBeInTheDocument()
    expect(menus).toHaveLength(2)
    expect(catListItems).toHaveLength(24)
  })
  it('initially renders an unsorted catList', () => {
    render(<App />)

    const catListItems = screen.getAllByRole('listitem', { name: /cat/i })

    expect(catListItems[0]).toHaveTextContent('Parker')
    expect(catListItems[1]).toHaveTextContent('Savage')
    expect(catListItems[2]).toHaveTextContent('Ginger')
  })
  it('sorts cats by cuteness when "Cutest" button is clicked', () => {
    render(<App />)

    const cuteButton = screen.getByText(/cutest/i)
    userEvent.click(cuteButton)

    const catListItems = screen.getAllByRole('listitem', { name: /cat/i })

    expect(catListItems[0]).toHaveTextContent('Pitts')
    expect(catListItems[1]).toHaveTextContent('Bruce')
    expect(catListItems[2]).toHaveTextContent('Malinda')
  })
  it('sorts uglier cats first when "Least cute" button is clicked', () => {
    render(<App />)

    const uglyButton = screen.getByText(/least cute/i)
    userEvent.click(uglyButton)

    const catListItems = screen.getAllByRole('listitem', { name: /cat/i })

    expect(catListItems[0]).toHaveTextContent('Grimes')
    expect(catListItems[1]).toHaveTextContent('Ginger')
    expect(catListItems[2]).toHaveTextContent('Vickie')
  })
  it('returns to original order when "None" button is clicked after another button', () => {
    render(<App />)

    const uglyButton = screen.getByText(/least cute/i)
    userEvent.click(uglyButton)

    const noOrderButton = screen.getByText(/none/i)
    userEvent.click(noOrderButton)

    const catListItems = screen.getAllByRole('listitem', { name: /cat/i })

    expect(catListItems[0]).toHaveTextContent('Parker')
    expect(catListItems[1]).toHaveTextContent('Savage')
    expect(catListItems[2]).toHaveTextContent('Ginger')
  })
  it('initally shows all 24 cats, then filters out 13 cats when "Non-allergenic" button is pressed', () => {
    render(<App />)

    const catListItems = screen.getAllByRole('listitem', { name: /cat/i })

    expect(catListItems).toHaveLength(24)

    const nonAllergicFilterButton = screen.getByText(/non-allergenic/i)
    userEvent.click(nonAllergicFilterButton)

    const filteredCatListItems = screen.getAllByRole('listitem', {
      name: /cat/i,
    })

    expect(filteredCatListItems).toHaveLength(13)
  })
  it('shows all 24 cats again when "All" button is pressed', () => {
    render(<App />)

    const nonAllergicFilterButton = screen.getByText(/non-allergenic/i)
    userEvent.click(nonAllergicFilterButton)

    const filteredCatListItems = screen.getAllByRole('listitem', {
      name: /cat/i,
    })

    expect(filteredCatListItems).toHaveLength(13)

    const noFilterButton = screen.getByText('All')
    userEvent.click(noFilterButton)

    const catListItems = screen.getAllByRole('listitem', { name: /cat/i })

    expect(catListItems).toHaveLength(24)
  })
})
