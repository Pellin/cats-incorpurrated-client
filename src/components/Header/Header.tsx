import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={styles.innerWrapper}>
        <img src="/images/cat.svg" alt="Cats Incorpurrated" />
        <h1>CATS INCORPURRATED</h1>
      </div>
    </header>
  )
}

export default Header
