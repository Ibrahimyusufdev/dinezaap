import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    immer((set) => ({
      user: {
        name: "Ibrahim",
        role: "user",
        email: "ibrahimyusuf1304@gmail.com"
      },
    })),
    {
      // your persist logic here
    }
  )
);
