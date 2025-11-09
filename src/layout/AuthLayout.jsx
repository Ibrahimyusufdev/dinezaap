import ContentWrapper from "../components/common/ContentWrapper";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-gray-400">
      <Outlet />
    </section>
  );
};

export default AuthLayout;
