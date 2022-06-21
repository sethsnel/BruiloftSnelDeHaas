import Header from './header'

import styles from './baseLayout.module.scss'
import { ReactNode } from 'react'

type baseLayoutProps = {
  children: ReactNode
}

const BaseLayout = ({ children }: baseLayoutProps) => {
  return <div className={styles.container}>
  <Header />
  <div className={styles.divider}>
  </div>
  <div className={styles.wrapper}>
    <div className={styles.content}>
      { children }
    </div>
  </div>
</div>
}

export default BaseLayout