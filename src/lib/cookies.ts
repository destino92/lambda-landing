import { cookies } from "next/headers"
import { cache } from "react"

export const getThankYouCookie = cache(async () => {
  const cookieStore = await cookies()
  return cookieStore.get("thank_you")?.value
})