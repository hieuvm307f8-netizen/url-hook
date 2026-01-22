//Custom hook
// Được phép sử dụng các hook khác bên trong (Có sẵn react)
// Được phép sử dụng các custom hook khác
// không return JSX (Không phải component)

import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useAuth = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      accessToken: null,

      login: (userData, token) => set({ 
        user: userData, 
        isAuthenticated: true, 
        accessToken: token 
      }),

      logOut: () => set({ 
        user: null, 
        isAuthenticated: false, 
        accessToken: null 
      }),
    }),
    {
      name: "auth-storage",
    }
  )
);