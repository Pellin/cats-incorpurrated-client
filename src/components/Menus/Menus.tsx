import Filter from '../Filter'
import SortingMenu from '../SortingMenu'
import styles from './Menus.module.scss'

const Menus = () => {
  return (
    <section className={styles.menus}>
      <SortingMenu />
      <Filter />
    </section>
  )
}

export default Menus
