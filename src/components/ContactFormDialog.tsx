"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CustomButton } from "./CustomButton"

const ContactForm = dynamic(() => import("./ContactForm"))
const ThankYou = dynamic(() => import("./ThankYou"))

interface ContactFormDialogProps {
  thankYou: string
}

export function ContactFormDialog({ thankYou }: ContactFormDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CustomButton variant="primary">
            {thankYou === "success" ? "Apply Now" : "Download Brochure"}
        </CustomButton>
      </DialogTrigger>
      <DialogContent className={thankYou ? "sm:max-w-xl" : "sm:max-w-[425px]"}>
        {open &&
          (thankYou ? (
            <ThankYou />
          ) : (
            <ContactForm />
          ))}
      </DialogContent>
    </Dialog>
  )
}