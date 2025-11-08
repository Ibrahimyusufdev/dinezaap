import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";

const App = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>

          {/* No page route */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
