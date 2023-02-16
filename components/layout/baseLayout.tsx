import { ReactNode } from 'react'

import Header from './header'
import styles from './baseLayout.module.scss'
import Footer from './footer'
import { inviteType } from '../../hooks/useInviteType'

type baseLayoutProps = {
  children: ReactNode
  selectInviteType: (type: inviteType) => void
}

const BaseLayout = ({ children, selectInviteType }: baseLayoutProps) => {
  return <div className={styles.container}>
    <Header />
    <div className={styles.divider}>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
        <Footer selectInviteType={selectInviteType} />
      </div>
    </div>
  </div>
}

export default BaseLayout