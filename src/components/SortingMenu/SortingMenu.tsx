import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Sorting } from '../../context/types'
import styles from './SortingMenu.module.scss'

const SortingMenu = () => {
  const { sortingMethod, setSortingMethod } = useContext(Context)!

  return (
    <nav aria-label="sort" className={styles.sortingMenu}>
      <div className={styles.sortingHeader}>
        <img src="/images/sort-icon.png" alt="List icon" />
        <h3>Sort:</h3>
      </div>
      <ul className={styles.menuItems}>
        <li
          onClick={() => setSortingMethod(Sorting.NONE)}
          className={sortingMethod === Sorting.NONE ? styles.active : ''}
        >
          None
        </li>
        <li
          onClick={() => setSortingMethod(Sorting.CUTE)}
          className={sortingMethod === Sorting.CUTE ? styles.active : ''}
        >
          Cutest
        </li>
        <li
          onClick={() => setSortingMethod(Sorting.NOT_CUTE)}
          className={sortingMethod === Sorting.NOT_CUTE ? styles.active : ''}
        >
          Least cute
        </li>
      </ul>
    </nav>
  )
}

export default SortingMenu
