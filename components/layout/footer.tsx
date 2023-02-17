import Image from 'next/legacy/image'

import useInviteType, { inviteType } from '../../hooks/useInviteType'

import styles from '../../styles/Home.module.scss'

const Footer = ({ selectInviteType }: { selectInviteType: (type: inviteType) => void }) => {
  const { inviteType } = useInviteType()

  return <footer className={styles.footer}>
    {
      inviteType !== null && <p>Ik ben: {inviteType === 'day' ? 'Daggast' : 'Avondgast'} (<a onClick={() => selectInviteType(null)}>wijzig</a>)</p>
    }
    <div className={styles.footerImage}>
      <Image src="/seth-en-annemijn.png" alt="Seth en Annemijn" width="250" height="250" objectFit='cover' />
    </div>
  </footer>
}

export default Footer