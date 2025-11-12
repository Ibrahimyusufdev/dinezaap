import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import NoPage from "./pages/NoPage";

// Pages from User
import DashboardUser from "./features/user/pages/DashboardUser";
import Explore from "./features/user/pages/Explore";
import Earnings from "./features/user/pages/Earnings";
import Invite from "./features/user/pages/Invite";
import Messages from "./features/user/pages/Messages";
import Reservations from "./features/user/pages/Reservations";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import LoginPage from "./features/auth/pages/LoginPage";
import AuthLayout from "./layout/AuthLayout";
import SignupPage from "./features/auth/pages/SignupPage";

// Pages from restaurant
import DashboardRestaurant from "./features/restaurant/pages/DashboardRestaurant";
import Analytics from "./features/restaurant/pages/Analytics";
import Payment from "./features/restaurant/pages/Payment";
import Offer from "./features/restaurant/pages/Offer.jsx";

// Dashboard Layout
import DashboardLayout from "./layout/DashboardLayout";

// store
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";

const App = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  const user = useAuthStore((state) => state.user);

  const renderRouting = () => {
    if (user?.role === "user") {
      return (
        <Route element={<DashboardLayout />}>
          <Route index element={<DashboardUser />} />
          <Route path="/user/explore" element={<Explore />} />
          <Route path="/user/reservations" element={<Reservations />} />
          <Route path="/user/earnings" element={<Earnings />} />
          <Route path="/user/invite" element={<Invite />} />
          <Route path="/user/messages" element={<Messages />} />
        </Route>
      );
    } else if (user?.role == "restaurant") {
      return (
        <Route element={<DashboardLayout />}>
          <Route index element={<DashboardRestaurant />} />
          <Route path="/restaurant/analytics" element={<Analytics />} />
          <Route path="/restaurant/payment" element={<Payment />} />
          <Route path="/restaurant/offer" element={<Offer />} />
        </Route>
      );
    }

    return null;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Layout Routing*/}
        <Route path="/" element={<AuthLayout />}>
          <Route index path="/login-page" element={<LoginPage />} />
          <Route path="/signup-page" element={<SignupPage />} />
        </Route>

        {/* Protected Routes for user */}
        <Route element={<ProtectedRoutes />}>{renderRouting()}</Route>

        {/* No page route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <Route path="/" element={<UserLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="/user/explore" element={<Explore />} />
  <Route path="/user/reservations" element={<Reservations />} />
  <Route path="/user/earnings" element={<Earnings />} />
  <Route path="/user/invite" element={<Invite />} />
  <Route path="/user/messages" element={<Messages />} />
  <Route path="/loginPage" element={<LoginPage />} /> */
}

//   {/* Auth Layout Routing*/}

// // </Route>
