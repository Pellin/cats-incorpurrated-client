import { screen } from '@testing-library/react'
import { renderWithContext } from '../../utils/test-utils'
import CatList from './CatList'

describe('CatList', () => {
  it('renders a list with all cats', async () => {
    renderWithContext(<CatList />)
    const catList = await screen.findAllByRole('listitem')

    expect(catList).toHaveLength(24)
  })
})
