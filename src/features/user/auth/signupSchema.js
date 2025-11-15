import z from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least two letter")
      .max(30, "First name cannot be more than 30 letters"),

    lastName: z
      .string()
      .min(2, "First name must be at least two letter")
      .max(30, "First name cannot be more than 30 letters"),

    email: z.email({ pattern: z.regexes.email }),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password is too long"),

    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password is too long"),

    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number is too long")
      .refine((val) => /^\+?\d{10,15}$/.test(val), "Invalid phone number"),

    preferredDiningLocations: z
      .array(z.string())
      .nonempty({ error: "Pick at least one preferred location" })
      .max(5, "Choose up to 5 locations")
      .refine((arr) => new Set(arr).size === arr.length, "Duplicate locations are not allowed"),

    profilePicture: z
      .file("Please select an image file")
      .min(10_000)
      .max(1_000_000, "The image is too large")
      .mime(["image/png", "image/jpeg"], "Please upload a valid image file (JPEG/PNG)"),

    agreeToTerms: z.boolean().refine((val) => val === true, {
      error: "Please accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Password do not match",
    path: ["confirmPassword"],

    // Run if password & confirmPassword are valid
    when(payload) {
      return signupSchema.pick({ password: true, confirmPassword: true }).safeParse(payload.value)
        .success;
    },
  });
