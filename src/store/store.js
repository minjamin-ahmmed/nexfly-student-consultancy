import Swal from "sweetalert2";
import { create } from "zustand";

// Helper function to save data to localStorage
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Helper function to get data from localStorage
const getFromLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : [];
};

const useStore = create((set) => ({
  users: getFromLocalStorage("users"), 
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null, 
  loading: false, // Add loading state

  // Register User
  registerUser: async (user) => {
    set({ loading: true }); // Start loading
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        set((state) => {
          if (state.users.some((u) => u.email === user.email)) {
            Swal.fire({
              icon: "error",
              title: "Registration Failed",
              text: "User with this email already exists!",
            });
            resolve(false);
            return state;
          }
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "User has been registered!",
          });
          const updatedUsers = [...state.users, user];
          saveToLocalStorage("users", updatedUsers);
          resolve(true);
          return { users: updatedUsers };
        });
      }, 1000); // Simulating an API delay
    });
    set({ loading: false }); // End loading
    return result;
  },

  // Login User
  loginUser: async (email, password) => {
    set({ loading: true }); // Start loading
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        set((state) => {
          const user = state.users.find(
            (u) => u.email === email && u.password === password
          );
          if (!user) {
            Swal.fire({
              icon: "error",
              title: "Login Failed",
              text: "Invalid email or password!",
            });
            resolve(false);
            return state;
          }
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: `Welcome back, ${user.name}!`,
          });
          localStorage.setItem("currentUser", JSON.stringify(user));
          resolve(true);
          return { currentUser: user };
        });
      }, 1000); // Simulating an API delay
    });
    set({ loading: false }); // End loading
    return result;
  },

  // Logout User
  logoutUser: async () => {
    set({ loading: true }); // Start loading
    await new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem("currentUser");
        set({ currentUser: null });
        resolve();
      }, 500); // Simulating an API delay
    });
    set({ loading: false }); // End loading
  },
}));

export default useStore;
