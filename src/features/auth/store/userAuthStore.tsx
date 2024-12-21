import { create } from "zustand";
import { postConfig, getConfig } from "@/config/config";
import { SignUpFromI } from "../components/SignUpSubmitter";
import { LoginFormI } from "../components/LoginSubmmiter";

interface UserAuthStoreTypes {
  isCheckingAuth: null | boolean;
  authUser: null | any;
  isLoggingIn: boolean;
  isSigningUp: boolean;

  checkAuth: () => void;
  login: (formData: LoginFormI) => void;
  signUp: (formaData: SignUpFromI) => void;
}

export const userAuthStore = create<UserAuthStoreTypes>()((set) => ({
  isCheckingAuth: true,
  authUser: null,
  isLoggingIn: false,
  isSigningUp: false,

  checkAuth: async () => {
    try {
      const res = await getConfig("/api/auth/check-auth");

      set({ authUser: res.user });
    } catch (error: any) {
      console.log(error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  login: async (formData) => {
    try {
      set({ isLoggingIn: true });

      const res = await postConfig("/api/auth/login", formData);
      set({ authUser: res.user });
      console.log(res.message);
    } catch (error: any) {
      console.log(error);
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
}));
