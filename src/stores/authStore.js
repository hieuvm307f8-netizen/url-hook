//Custom hook
// Được phép sử dụng các hook khác bên trong (Có sẵn react)
// Được phép sử dụng các custom hook khác
// không return JSX (Không phải component)

import { create } from "zustand";
export const useAuth = create((set) => {
  return {
    user: {
      name: "Guest",
    },
    isAuthenticated: false,
    updateUser: () => set({ user: { name: "Minh Hieu" } }),
    logOut: () => set({ user: { name: "Guest" } }),
    todos: [],
    fetchTodos: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      set({ todos: data });
    },
  };
});
