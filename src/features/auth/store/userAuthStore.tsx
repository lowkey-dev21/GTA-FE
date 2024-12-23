import { create } from "zustand";
import { postConfig, getConfig } from "@/config/config";
import { LoginFormI, SignUpFromI } from "../types/types";


interface UserAuthStoreTypes {
  isCheckingAuth: null | boolean;
  authUser: null | any;
  isLoggingIn: boolean;
  isSigningUp: boolean;

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

  checkAuth: async () => {
    try {
      const res = await getConfig("/api/auth/check-auth");
      set({ authUser: res.user, isCheckingAuth: false });
    } catch (error: any) {
      console.log(error);
      set({ authUser: null, isCheckingAuth: false }); // Ensure authUser is reset to null
    }
  },

  login: async (formData) => {
    try {
      set({ isLoggingIn: true });
      const res = await postConfig("/api/auth/login", formData);
      set({ authUser: res.user });
      return res; // Return the response
    } catch (error) {
      console.error("API error:", error);
      throw error; // Re-throw to be handled by caller
    } finally {
      set({ isLoggingIn: false });
    }
  },

  signUp: async (formData: SignUpFromI) => {
    try {
      set({ isSigningUp: true });
      const res = await postConfig("/api/auth/sign-up", formData);
      console.log(res.message);
    } catch (error: any) {
      console.log(error);
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      // Perform the logout API call
      await getConfig("/api/auth/logout");

      // Get the `checkAuth` function from the store
      const { checkAuth } = userAuthStore.getState();

      // Run `checkAuth` to verify the authentication state after logging out
      checkAuth();
    } catch (error: any) {
      console.log(error);
    }
  },

}));
