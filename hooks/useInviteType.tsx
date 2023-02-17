import { createContext, useContext } from "react"

export type inviteType = 'day' | 'evening' | 'church' | null

export const InviteContext = createContext<inviteType>(null)

export default function useInviteType() {
  const inviteType = useContext<inviteType>(InviteContext)

  const href = inviteType === 'day' ? 'daggast' : 'avondgast'

  return { inviteType, href }
}