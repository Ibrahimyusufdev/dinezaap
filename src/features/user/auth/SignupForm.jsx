// shadcn components
import { Field, FieldLabel, FieldError, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

// rhf + zod
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// signup schema
import { signupSchema } from "./signupSchema";

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

  // logic to run once form is submitted, that is create user with the signup data

  return (
    <form className="space-y-4">
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
            />
            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
          </Field>
        )}
      />
    </form>
  );
};

export default SignupForm;
