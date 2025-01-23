import { cookies } from "next/headers"

export const getThankYouCookie = async () => {
  const cookieStore = await cookies()
  return cookieStore.get("thank_you")?.value
}