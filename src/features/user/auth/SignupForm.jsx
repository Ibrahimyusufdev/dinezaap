// shadcn components
import { Field, FieldLabel, FieldError, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

// Lucide react
import { Eye, EyeOff } from "lucide-react";

// rhf + zod
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// signup schema
import { signupSchema } from "./signupSchema";
import { formatInternationalPhone } from "../../../helpers/formatPhoneNumber";
import { useState } from "react";

const SignupForm = () => {
  // Wiring up form using useForm rhf
  const form = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      preferredDiningLocations: "",
      profilePicture: null,
      agreeToTerms: null,
    },
  });

  // state for toggling password open & close
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Control disabling the input field and your button for your form

  const isFormDisabled = form.formState.isSubmitting;
  const isSubmitDisabled = !form.formState.isValid || !form.formState.isDirty;

  // logic to run once form is submitted, that is create user with the signup data
  const createUser = async (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={form.handleSubmit(createUser)} className="space-y-4">
      {/* First name input wiring up */}
      <Controller
        name="firstName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>First Name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              placeholder="Enter your first name"
              autoComplete="off"
              type="text"
              disabled={isFormDisabled}
            />
            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
          </Field>
        )}
      />

      {/* Last name input wiring up */}
      <Controller
        name="lastName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              placeholder="Enter your last name"
              autoComplete="off"
              type="text"
              disabled={isFormDisabled}
            />
            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
          </Field>
        )}
      />

      {/* Email input wiring up */}
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
              {...field}
              id={field.name}
              placeholder="Enter your email"
              autoComplete="off"
              type="email"
              disabled={isFormDisabled}
            />
            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
          </Field>
        )}
      />

      {/* Password input wiring up */}
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
            <div className="relative flex items-center">
              <Input
                {...field}
                id={field.name}
                placeholder="••••••••"
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                disabled={isFormDisabled}
              />
              <Button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                variant="ghost"
                className="absolute right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </Button>
            </div>
            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
          </Field>
        )}
      />

      {/* Confirm Password input wiring up */}
      <Controller
        name="confirmPassword"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
            <div className="relative flex items-center">
              <Input
                {...field}
                id={field.name}
                placeholder="••••••••"
                autoComplete="off"
                type={showConfirmPassword ? "text" : "password"}
                disabled={isFormDisabled}
              />
              <Button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                variant="ghost"
                className="absolute right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </Button>
            </div>
            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
          </Field>
        )}
      />

   

      {/* Phone Number input wiring up */}
      <Controller
        name="phoneNumber"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
            <Input
              {...field}
              id={field.name}
              placeholder="+234 706 893 6114"
              value={field.value ? formatInternationalPhone(field.value) : ""}
              onChange={(e) => field.onChange(e.target.value.replace(/[^\d+]/g, ""))} // keep only digits/+ in state
              autoComplete="off"
              type="tel"
              disabled={isFormDisabled}
            />
            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
          </Field>
        )}
      />

      {/* Button */}
      <Button type="submit" disabled={isSubmitDisabled}>
        {form.formState.isSubmitting ? (
          <>
            <Spinner />
            Signing up...
          </>
        ) : (
          "Signup"
        )}
      </Button>
    </form>
  );
};

export default SignupForm;
