"use client"

import { Button } from "@/components/ui/button"
import { PhoneCall, Download } from "lucide-react"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { env } from "@/env"

export default function ThankYou() {
  const handleDownload = () => {
    // Replace this URL with your actual CDN URL
    window.open(env.NEXT_PUBLIC_BROCHURE_URL, "_blank")
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center">Thank you for your interest in the program.</DialogTitle>
        <h2 className="text-lg font-semibold text-center mt-2">What to do next?</h2>
      </DialogHeader>

      <div className="space-y-6 mt-6">
        <div className="flex items-start gap-4">
          <Download className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-primary">Download Brochure</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Learn about the syllabus, key takeaways, learning experience and more.
            </p>
            <Button variant="outline" onClick={handleDownload}>
              Download Brochure
            </Button>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <PhoneCall className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-primary">Schedule a call with an Advisor</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Talk to one of our program advisors and have your questions answered. You can also call them directly at
            </p>
            <div className="space-y-1 text-sm">
              <p>
                US <span className="font-semibold">+1 415 609 2306</span>
              </p>
              <p>
                CG <span className="font-semibold">+242 06 615 22 54</span>
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex items-start gap-4">
          <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-primary">Save on program fees with referrals</h3>
            <p className="text-sm text-muted-foreground">
              You can save on program fees when you invite colleagues to join with you.
            </p>
          </div>
        </div> */}
      </div>

      {/* <Button className="w-full mt-6" size="lg" onClick={onClose}>
        APPLY NOW
      </Button> */}
    </>
  )
}