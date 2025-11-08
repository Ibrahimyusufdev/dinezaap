import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import WomenLayout from "./layout/WomenLayout";

const App = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Women route layout */}
        <Route path="/" element={<WomenLayout />}>
          <Route index element={<p>Dummy home page</p>} />

          {/* No page route */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
