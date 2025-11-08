import { useState, useEffect } from "react";
import ContentWrapper from "../components/common/ContentWrapper";
import { Navigate } from "react-router-dom";

const NoPage = () => {
  const [seconds, setSeconds] = useState(3); // countdown start
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Decrease timer every second
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setRedirect(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  if (redirect) {
    return <Navigate to="/" replace />;
  }
  return (
    <ContentWrapper>
      <h1 className="text-center text-2xl font-bold text-red-500">404 - No page found</h1>
      <p className="mt-2 text-center">
        You will be redirected to the home page in <span className="font-semibold">{seconds}</span>{" "}
        seconds.
      </p>
    </ContentWrapper>
  );
};

export default NoPage;
