"use client";
import React, { ReactNode, useEffect } from "react";
import { userAuthStore } from "@/features/auth/store/userAuthStore";
import { Loader } from "lucide-react";

import { useRouter } from "next/navigation";
import UserDataProvider from "@/hooks/userContext";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  // Move the store hook inside the component body
  const { checkAuth, isCheckingAuth, authUser } = userAuthStore();

  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    // Wait for `isCheckingAuth` to complete before navigating
    if (!isCheckingAuth) {
      if (!authUser) {
        router.push("/auth/login"); // Navigate to login page if not authenticated
      }
    }
  }, [authUser, isCheckingAuth, router]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <UserDataProvider>{children}</UserDataProvider>
    </>
  );
};

export default HomeLayout;
