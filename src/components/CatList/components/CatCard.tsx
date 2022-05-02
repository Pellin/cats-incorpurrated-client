import { CatCardProps } from '../../types'
import styles from '../CatList.module.scss'

const CatCard = ({ cat }: CatCardProps) => {
  return (
    <li className={styles.catCard} key={cat.name}>
      <div className={styles.imageWrapper}>
        <img src={`/images/${cat.image}`} alt={cat.name} />
        <div className={styles.cuteness}>
          <p>{cat.cutenessLevel}</p>
        </div>
      </div>
      <h3>{cat.name}</h3>
    </li>
  )
}

export default CatCard
