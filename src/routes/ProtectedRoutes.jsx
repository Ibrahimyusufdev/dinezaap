import { useAuthStore } from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = useAuthStore((state) => state.user);
  // const user = null;

  return user ? <Outlet /> : <Navigate to="/login-page" replace />;
};

export default ProtectedRoutes;
