import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    immer((set) => ({
      user: {
        name: "Ibrahim Yusuf",
        role: "user",
        email: "ibrahimyusuf1304@gmail.com",
      },

      logout: () => set({ user: null }),
    })),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);
