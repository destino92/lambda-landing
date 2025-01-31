"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/lib/schema"
import { useAction } from "next-safe-action/hooks";
import { newsLetterAction } from "@/app/(website)/_bootcamp/_actions/index"
import { z } from "zod"
import { PhoneInput } from "./PhoneInput"

export default function CTAForm() {
  // const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
    mode: "onTouched",
  })

  const { execute, status } = useAction(newsLetterAction, {
    onSuccess({data}) {
      if (data?.success === false) console.error(data.errors)
    },
    onError(error) {
      console.log("OH NO FROM ONERROR", error);
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    execute(data)
  }

  return (
    <>
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogDescription>Please fill out the form below with your contact details.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput {...field} defaultCountry="US" />
                  </FormControl>
                  <FormDescription>Please enter your phone number.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-xs text-gray-500">
              By clicking the button below, you agree to receive communications via Email/Call/WhatsApp/SMS from AI SCALER about this program and other relevant programs.
            </p>
            <Button type="submit" className="w-full" disabled={status === "executing" || !form.formState.isValid}>
              
              {status === "executing" ? "Submitting..." : "Download Brochure"}
            </Button>
          </form>
        </Form>
    </>
  )
}