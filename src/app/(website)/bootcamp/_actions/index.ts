"use server"

import { actionClient } from "@/lib/safe-action"
import { formSchema } from "@/lib/schema"
import { supabase } from "@/lib/supabase"
import { cookies } from 'next/headers'

export const newsLetterAction = actionClient
    .schema(formSchema)
    .action(async ({parsedInput: {firstName, lastName, email, phoneNumber}}) => {
        const cookieStore = await cookies()

        try {
            const { error } = await supabase
                .from('bootcamp_newsletter')
                .insert([{ firstName, lastName, email, phoneNumber }])

            if (error) {
                return { success: false, errors: error.message }
            }

        } catch(error) {
            console.error("Error writing to file:", error)
            return { success: false, message: "Error saving data" }
        }

        cookieStore.set({
            name: 'thank_you',
            value: 'success',
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            httpOnly: true,
            path: '/',
        })

        return { success: true }
    })