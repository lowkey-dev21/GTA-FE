import { create } from "zustand"
import { LoginFormI, SignUpFromI } from "../types/types";
import axiosInstance from "@/services/api";
import { toaster } from "@/config/config";




interface UserAuthStoreTypes {
  isCheckingAuth: null | boolean;
  authUser: null | any;
  isLoggingIn: boolean;
  isSigningUp: boolean;

  //signedUp: boolean;
  //loggedIn: boolean;

  checkAuth: () => void;
  login: (formData: LoginFormI) => void;
  signUp: (formaData: SignUpFromI) => void;
  logout: () => void
}

export const userAuthStore = create<UserAuthStoreTypes>()((set) => ({
  isCheckingAuth: true,
  authUser: null,
  isLoggingIn: false,
  isSigningUp: false,
  //signedUp: false,
  //loggedIn: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/api/auth/check-auth");
      set({ authUser: res.data.user, isCheckingAuth: false });
    } catch (error: any) {
      console.log(error);
      set({ authUser: null, isCheckingAuth: false }); // Ensure authUser is reset to null
    }
  },

  login: async (formData) => {
    try {
      set({ isLoggingIn: true });
      const res = await axiosInstance.post("/api/auth/login", formData);
      set({ authUser: res.data.user, isLoggingIn: false });
      toaster.toastS(res.data.message)
      return res
      // Return the response
    } catch (error: any) {
      // Re-throw to be handled by caller
      toaster.toastE(error.response?.data.message)
      set({ isLoggingIn: false })

    }
  },

  signUp: async (formData: SignUpFromI) => {
    try {
      const response = await axiosInstance.post("/api/auth/sign-up", formData);
      console.log(response.data);// Log the response to see what is returned
      toaster.toastS(response.data.message)
      return response
    } catch (error: any) {
      toaster.toastE(error.response?.data.message)

    }
  },


  logout: async () => {
    try {
      const res = await axiosInstance.post("/api/auth/logout", {});
      toaster.toastS(res.data.message)
      return res
    } catch (error: any) {
      toaster.toastE(error.response?.data.message)
    }
  },

}));
