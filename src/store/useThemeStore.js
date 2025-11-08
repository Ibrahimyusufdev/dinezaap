import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// Helper function to update html class
const updateHtmlClass = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
};

// ✅ Store
export const useThemeStore = create(
  persist(
    immer((set) => ({
      theme: "system",

      // Toggle manually
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          state.theme = newTheme;
          updateHtmlClass(newTheme);
        });
      },

      // Set specific theme (light, dark, or system)
      setTheme: (theme) => {
        set((state) => {
          state.theme = theme;

          if (theme === "system") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            updateHtmlClass(prefersDark ? "dark" : "light");
          } else {
            updateHtmlClass(theme);
          }
        });
      },

      // Initialize theme on app load
      initializeTheme: () => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = savedTheme || "system";

        let effectiveTheme = defaultTheme;
        if (defaultTheme === "system") {
          effectiveTheme = prefersDark ? "light" : "light"; // Remember to change back to dark
        }

        updateHtmlClass(effectiveTheme);

        set((state) => {
          state.theme = defaultTheme;
        });

        // ✅ Listen to system changes in real-time
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
          const currentTheme = useThemeStore.getState().theme;
          if (currentTheme === "system") {
            updateHtmlClass(e.matches ? "dark" : "light"); 
          }
        };

        mediaQuery.addEventListener("change", handleChange);
      },
    })),

    {
      name: "theme-storage",
      getStorage: () => localStorage,
      partialize: (state) => ({
        theme: state.theme,
      }),
    }
  )
);
