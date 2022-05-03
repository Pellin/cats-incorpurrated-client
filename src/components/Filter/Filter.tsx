import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Filter } from '../../context/types'
import styles from './Filter.module.scss'

const FilterMenu = () => {
  const { filter, setFilter } = useContext(Context)!

  return (
    <nav className={styles.filter}>
      <div className={styles.filterHeader}>
        <img src="/images/filter-icon.png" alt="Filter icon" />
        <h3>Show:</h3>
      </div>
      <ul className={styles.menuItems}>
        <li
          onClick={() => setFilter(Filter.ALL)}
          className={filter === Filter.ALL ? styles.active : ''}
        >
          All
        </li>
        <li
          onClick={() => setFilter(Filter.NON_ALLERGY)}
          className={filter === Filter.NON_ALLERGY ? styles.active : ''}
        >
          Non-allergenic
        </li>
      </ul>
    </nav>
  )
}

export default FilterMenu
