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


  registerUser: (user) =>
    set((state) => {
      if (state.users.some((u) => u.email === user.email)) {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "User with this email already exists!",
        });
        return state;
      }
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "User has been registered!",
      });
      const updatedUsers = [...state.users, user];
      saveToLocalStorage("users", updatedUsers); 
      return { users: updatedUsers };
    }),

  // Login User
  loginUser: (email, password) =>
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
        return state;
      }
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${user.name}!`,
      });
      localStorage.setItem("currentUser", JSON.stringify(user)); 
      return { currentUser: user };
    }),

  // Logout User
  logoutUser: () => {
    localStorage.removeItem("currentUser"); 
    return { currentUser: null };
  },
}));

export default useStore;
