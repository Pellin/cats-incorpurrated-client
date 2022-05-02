import { Sorting } from '../../context/types'

export type SortingMenuProps = {
  sortingMethod: Sorting
  setSortingMethod: React.Dispatch<React.SetStateAction<Sorting>>
}
