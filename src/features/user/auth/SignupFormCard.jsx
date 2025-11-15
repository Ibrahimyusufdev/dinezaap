// ui components from shadcn
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// content wrapper
import ContentWrapper from "../../../components/common/ContentWrapper";
// SignupForm component
import SignupForm from "./SignupForm";

const SignupFormCard = () => {
  return (
    <ContentWrapper>
      <Card classname="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Get Paid to Dine at the Finest Restaurants!</CardTitle>
          <CardDescription>
            Your time is precious. Turn every date into a rewarding experience with cash back on
            your dining
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </ContentWrapper>
  );
};

export default SignupFormCard;
