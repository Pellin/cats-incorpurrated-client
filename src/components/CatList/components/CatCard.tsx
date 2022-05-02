import { CatCardProps } from '../types'
import styles from '../CatList.module.scss'

const CatCard = ({ cat }: CatCardProps) => {
  return (
    <li className={styles.catCard} key={cat.name}>
      <div className={styles.imageWrapper}>
        <img src={`/images/${cat.image}`} alt={cat.name} />
      </div>
      <span>
        <h3>{cat.name}</h3>
        <p>
          <strong>
            {cat.livesLeft} {cat.livesLeft === 1 ? 'life' : 'lives'} left
          </strong>
        </p>
      </span>
      <div className={styles.cutometerWrapper}>
        <p>Cuteness:</p>
        <div className={styles.cutometer}>
          <div
            className={styles.cutometerValue}
            style={{
              backgroundColor: '#000',
              width: `${cat.cutenessLevel}%`,
            }}
          ></div>
        </div>
      </div>
    </li>
  )
}

export default CatCard
