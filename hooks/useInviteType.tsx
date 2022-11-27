import { useLayoutEffect, useState } from "react"

type inviteType = 'day' | 'evening' | 'church' | null

export default function useInviteType() {
  const [inviteType, setInviteType] = useState<inviteType>('day')
  const selectInviteType = (inviteType: inviteType) => {
    if (inviteType !== null) {
      localStorage.setItem('inviteType', inviteType)
    }
    setInviteType(inviteType)
  }

  const resetInviteType = () => {
    localStorage.removeItem('inviteType')
    location.replace('/')
  }

  useLayoutEffect(() => {
    selectInviteType(typeof localStorage !== 'undefined' ? localStorage?.getItem('inviteType') as inviteType : null)
  }, [])

  return { inviteType, selectInviteType, resetInviteType }
}