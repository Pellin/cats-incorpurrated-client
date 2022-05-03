import React, { useEffect, useState } from 'react'
import { Cat, ContextInterface, Filter, Sorting } from './types'
import catData from '../data/catdata.json'
import { getCatData } from '../api'

export const Context = React.createContext<ContextInterface | null>(null)

const ContextProvider = (props: { children: React.ReactNode }) => {
  const [cats, setCats] = useState<Cat[]>([])
  const [sortingMethod, setSortingMethod] = useState<Sorting>(Sorting.NONE)
  const [filter, setFilter] = useState<Filter>(Filter.ALL)

  useEffect(() => {
    getCatData().then((data) => {
      if (data.cats) {
        setCats(data.cats)
      }
    })
  }, [])

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
