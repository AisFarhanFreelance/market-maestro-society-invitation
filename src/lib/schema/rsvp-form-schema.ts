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
  occupation: z
    .string({
      required_error: "Occupation is required",
    })
    .regex(/^[A-Za-z0-9',.\s]+$/, "Special characters are not allowed")
    .min(1, "Occupation is required"),
  description: z
    .string({
      required_error: "Short description is required",
    })
    .min(1, "Short description is required")
    .max(1000, "Short description is too long"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email adress"),
  linkedinLink: z.string({
    required_error: "LinkedIn profile is required",
  }),
  phoneNumber: z
    .string({
      required_error: "Phone number is required",
    })
    .regex(
      /^[0-9,-]+$/,
      "Phone number must only contain digits, commas, or hyphens",
    ),
  tiktokUser: z
    .string({
      required_error: "TikTok username is required",
    })
    .regex(/^[A-Za-z0-9_.]{2,24}$/, "Invalid TikTok username"),
  instagramUser: z
    .string({
      required_error: "Instagram username is required",
    })
    .regex(/^[A-Za-z0-9_.]{1,30}$/, "Invalid Instagram username"),
});

export type RsvpFormValues = z.infer<typeof RsvpFormSchema>;
