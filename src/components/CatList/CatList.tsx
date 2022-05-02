import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Filter } from '../../context/types'
import styles from './CatList.module.scss'
import CatCard from './components/CatCard'

const CatList = () => {
  const { cats, filter } = useContext(Context)!

  return (
    <ul className={styles.catList}>
      {cats
        .filter((cat) =>
          filter === Filter.NON_ALLERGY ? !cat.allergyInducingFur : true
        )
        .map((cat) => (
          <CatCard cat={cat} />
        ))}
    </ul>
  )
}

export default CatList
