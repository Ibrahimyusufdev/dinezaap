import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import UserLayout from "./layout/UserLayout";

import Dashboard from "./features/user/pages/Dashboard";
import Explore from "./features/user/pages/Explore";
import Earnings from "./features/user/pages/Earnings";
import Invite from "./features/user/pages/Invite";
import Messages from "./features/user/pages/Messages";
import Reservations from "./features/user/pages/Reservations";

const App = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <BrowserRouter>
      <Routes>
        {/* user route layout - Remember to update it to make it feature based on keep the layout routing close to the feature folder */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/user/explore" element={<Explore />} />
          <Route path="/user/reservations" element={<Reservations />} />
          <Route path="/user/earnings" element={<Earnings />} />
          <Route path="/user/invite" element={<Invite />} />
          <Route path="/user/messages" element={<Messages />} />

          {/* No page route */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
