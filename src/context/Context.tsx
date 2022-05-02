import React, { useEffect, useState } from 'react'
import { Cat, ContextInterface, Filter, Sorting } from './types'
import catData from '../data/catdata.json'

export const Context = React.createContext<ContextInterface | null>(null)

const ContextProvider = (props: { children: React.ReactNode }) => {
  const [cats, setCats] = useState<Cat[]>(catData.cats)
  const [sortingMethod, setSortingMethod] = useState<Sorting>(Sorting.NONE)
  const [filter, setFilter] = useState<Filter>(Filter.ALL)

  useEffect(() => {
    switch (sortingMethod) {
      case Sorting.NONE:
        setCats(() => [...catData.cats])
        break
      case Sorting.CUTE:
        setCats((c) => [...c.sort((a, b) => b.cutenessLevel - a.cutenessLevel)])
        break
      case Sorting.NOT_CUTE:
        setCats((c) => [...c.sort((a, b) => a.cutenessLevel - b.cutenessLevel)])
        break
    }
  }, [sortingMethod])

  const context: ContextInterface = {
    cats,
    sortingMethod,
    filter,
    setFilter,
    setSortingMethod,
  }

  return <Context.Provider value={context}>{props.children}</Context.Provider>
}

export default ContextProvider
