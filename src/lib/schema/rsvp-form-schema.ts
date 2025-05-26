import { z } from "zod";

export const RsvpFormSchema = z.object({
  fullName: z
    .string({
      required_error: "Full name is required",
    })
    .regex(/^[A-Za-z' ]+$/, "Special characters are not allowed"),
  nickName: z
    .string({
      required_error: "Nickname is required",
    })
    .regex(/^[A-Za-z' ]+$/, "Special characters are not allowed"),
  shortDescription: z
    .string({
      required_error: "Short description is required",
    })
    .regex(/^[A-Za-z0-9',.\s]+$/, "Special characters are not allowed")
    .min(1, "Short description is required")
    .max(1000, "Short description is too long"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email adress"),
  linkedIn: z
    .string({
      required_error: "LinkedIn profile is required",
    })
    .url("LinkedIn profile must be a valid URL"),
  phoneNumber: z
    .string({
      required_error: "Phone number is required",
    })
    .regex(
      /^\+?[0-9\s-]+$/,
      "Phone number must be a valid format (e.g., +1234567890 or 123-456-7890)",
    ),
  tiktok: z
    .string({
      required_error: "TikTok username is required",
    })
    .regex(/^[A-Za-z0-9_.]{2,24}$/, "Invalid TikTok username"),
  instagram: z
    .string({
      required_error: "Instagram username is required",
    })
    .regex(/^[A-Za-z0-9_.]{1,30}$/, "Invalid Instagram username"),
});

export type RsvpFormValues = z.infer<typeof RsvpFormSchema>;
