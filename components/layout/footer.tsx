import Image from 'next/legacy/image'

import styles from '../../styles/Home.module.scss'

const footer = ({ inviteType, resetInviteType }: { inviteType: 'day' | 'evening' | 'church' | null, resetInviteType: () => void }) => {
  return <footer className={styles.footer}>
    <p>Ik ben: {inviteType === 'day' ? 'Daggast' : 'Avondgast'} (<a onClick={() => resetInviteType()} href="#">wijzig</a>)</p>
    <div className={styles.footerImage}>
      <Image src="/seth-en-annemijn.JPG" alt="Seth en Annemijn" width="250" height="250" objectFit='cover' />
    </div>
  </footer>
}

export default footer