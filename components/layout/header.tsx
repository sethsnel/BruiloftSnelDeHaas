import styles from './header.module.scss'

const header = () => {
  return <div className={styles.header}>
    <h1 className={`${styles.title} ${styles.text}`}><span>Seth & Annemijn</span></h1>
    <h2 className={`${styles.date} ${styles.text}`}><span>19-05-2023</span></h2>
  </div>
}

export default header
