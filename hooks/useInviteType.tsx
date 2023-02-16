import { createContext, useContext } from "react"

export type inviteType = 'day' | 'evening' | 'church' | ''

export const InviteContext = createContext<inviteType>('')

export default function useInviteType() {
  const inviteType = useContext<inviteType>(InviteContext)
  return { inviteType }
}