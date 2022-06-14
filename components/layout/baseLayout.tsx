import Header from './header'

import styles from './baseLayout.module.scss'
import { ReactNode } from 'react'

type baseLayoutProps = {
  dividerText?: string
  children: ReactNode
}

const BaseLayout = ({ dividerText, children }: baseLayoutProps) => {
  return <div className={styles.container}>
  <Header />
  <div className={styles.dividerwrapper}>
    <div className={styles.divider}>
    </div>
  </div>
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <h1>{ dividerText }</h1>
      { children }
    </div>
  </div>
</div>
}

export default BaseLayout