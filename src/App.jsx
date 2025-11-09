import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import NoPage from "./pages/NoPage";
import UserLayout from "./layout/UserLayout";

import Dashboard from "./features/user/pages/Dashboard";
import Explore from "./features/user/pages/Explore";
import Earnings from "./features/user/pages/Earnings";
import Invite from "./features/user/pages/Invite";
import Messages from "./features/user/pages/Messages";
import Reservations from "./features/user/pages/Reservations";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import LoginPage from "./features/auth/pages/LoginPage";
import AuthLayout from "./layout/AuthLayout";
import SignupPage from "./features/auth/pages/SignupPage";

const App = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Layout Routing*/}
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/signup-page" element={<SignupPage />} />
        </Route>

        {/* Protected Routes for user */}
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="/user/explore" element={<Explore />} />
          <Route path="/user/reservations" element={<Reservations />} />
          <Route path="/user/earnings" element={<Earnings />} />
          <Route path="/user/invite" element={<Invite />} />
          <Route path="/user/messages" element={<Messages />} />
        </Route>

        {/* No page route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


        // <Route path="/" element={<UserLayout />}>
        //   {/* <Route index element={<Dashboard />} />
        //   <Route path="/user/explore" element={<Explore />} />
        //   <Route path="/user/reservations" element={<Reservations />} />
        //   <Route path="/user/earnings" element={<Earnings />} />
        //   <Route path="/user/invite" element={<Invite />} />
        //   <Route path="/user/messages" element={<Messages />} /> */}
        //   <Route path="/loginPage" element={<LoginPage />} />

        //   {/* Auth Layout Routing*/}
             
         

        
        // </Route>
