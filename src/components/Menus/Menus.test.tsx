import { screen } from '@testing-library/react'
import { renderWithContext } from '../../utils/test-utils'
import Menus from './Menus'

describe('Menus', () => {
  it('renders two menus', () => {
    renderWithContext(<Menus />)

    const menus = screen.getAllByRole('navigation')

    expect(menus.length).toBe(2)
  })
})
