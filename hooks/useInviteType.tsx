import { useLayoutEffect, useState } from "react"

type inviteType = 'day' | 'evening' | 'church' | null

export default function useInviteType() {
  const [inviteType, setInviteType] = useState<inviteType>('day')
  const updateInviteType = (inviteType: inviteType) => {
    if (inviteType !== null) {
      localStorage.setItem('inviteType', inviteType)
    }
    else {
      localStorage.removeItem('inviteType')
    }
    setInviteType(inviteType)
  }

  useLayoutEffect(() => {
    updateInviteType(typeof localStorage !== 'undefined' ? localStorage?.getItem('inviteType') as inviteType : null)
  }, [])

  return { inviteType, updateInviteType }
}