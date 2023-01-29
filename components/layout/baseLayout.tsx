import { ReactNode } from 'react'

import Header from './header'
import useInviteType from '../../hooks/useInviteType'

import styles from './baseLayout.module.scss'
import Footer from './footer'

type baseLayoutProps = {
  children: ReactNode
}

const BaseLayout = ({ children }: baseLayoutProps) => {
  const { inviteType, resetInviteType } = useInviteType()

  return <div className={styles.container}>
    <Header />
    <div className={styles.divider}>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
        <Footer {...{ inviteType, resetInviteType }} />
      </div>
    </div>
  </div>
}

export default BaseLayout