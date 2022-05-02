export interface Cat {
  name: string
  image: string
  cutenessLevel: number
  allergyInducingFur: boolean
  livesLeft: number
}

export interface ContextInterface {
  cats: Cat[]
  filter: Filter
  sortingMethod: Sorting
  setFilter: React.Dispatch<React.SetStateAction<Filter>>
  setSortingMethod: React.Dispatch<React.SetStateAction<Sorting>>
}

export enum Sorting {
  NONE,
  CUTE,
  NOT_CUTE,
}

export enum Filter {
  ALL = 'All',
  NON_ALLERGY = 'Not allergy inducing',
}
