import * as z from "zod";
// import { isPossiblePhoneNumber } from "react-phone-number-input/max";

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phoneNumber: z.string().nonempty({
    message: "Phone number is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})