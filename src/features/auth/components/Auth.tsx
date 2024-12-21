import React, { useEffect } from "react";
import { userAuthStore } from "../store/userAuthStore";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";

const Auth = () => {
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
        return; // Navigate to login page if not authenticated
      }
    }
  }, [authUser, isCheckingAuth, router]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className=" flex  gap-4 items-center   ">
        <CustomButton
          title="Login"
          styles=" border-[2px] border-initialPrimary-500 hover:opacity-80 text-initialPrimary-500 py-2 rounded-full  px-6 "
          action={() => router.push("/auth/login")}
        />

        <CustomButton
          title="Sign Up"
          styles=" border-initialPrimary-500 border-[2px] hover:opacity-80  bg-initialPrimary-500 text-white py-2 rounded-full  px-6 "
          action={() => router.push("/auth/sign-up")}
        />
      </div>
    );
  }

  return (
    <div>
      {authUser && authUser.email ? (
        <div>{authUser.username}</div>
      ) : (
        <div className=" flex  gap-4 items-center   ">
          <CustomButton
            title="Login"
            styles=" border-[2px] border-initialPrimary-500 hover:opacity-80 text-initialPrimary-500 py-2 rounded-full  px-6 "
            action={() => router.push("/auth/login")}
          />

          <CustomButton
            title="Sign Up"
            styles=" border-initialPrimary-500 border-[2px] hover:opacity-80  bg-initialPrimary-500 text-white py-2 rounded-full  px-6 "
            action={() => router.push("/auth/sign-up")}
          />
        </div>
      )}
    </div>
  );
};

export default Auth;
