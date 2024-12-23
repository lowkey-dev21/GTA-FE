"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { SignUpFromI } from "../types/types";
import { userAuthStore } from "../store/userAuthStore";


const SignUpSubmitter = () => {

  const { signUp } = userAuthStore() || {};  // Default to an empty object if userAuthStore() is undefined

  const [signUpForm, setSignUpForm] = useState<SignUpFromI>({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    isPasswordVisible: false,
    isConfirmPasswordVisible: false
  });

  // Handle input changes
  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSignUpForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setSignUpForm((prev) => ({
      ...prev,
      isPasswordVisible: !prev.isPasswordVisible,
    }));
  };

  // Toggle confirm password visibility
  const toggleConfirmPassword = () => {
    setSignUpForm((prev) => ({
      ...prev,
      isConfirmPasswordVisible: !prev.isConfirmPasswordVisible,
    }));
  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData: SignUpFromI = {
        firstName: signUpForm.firstName,
        lastName: signUpForm.lastName,
        email: signUpForm.email,
        password: signUpForm.password
      }

      console.log(formData)

      await signUp(formData)

    } catch (error: any) {

      console.error("Login error:", error);
    }
  };

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-center">Create an account</h1>
        <div className="bg-white dark:border-slate-800 dark:bg-[black] w-full md:p-[2rem] p-4 border rounded-[8px] mt-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className=" w-full grid grid-cols-1 xl:grid-cols-2 xl:gap-3 ">
              {/* first Name*/}
              <div className="flex flex-col">
                <label htmlFor="email">first name</label>
                <input
                  id="firstName"
                  placeholder="Muiz"
                  type="text"
                  value={signUpForm.firstName}
                  onChange={handleInputChange("firstName")}
                  className={`mt-2 w-full px-3 sm:p-3 py-4 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:text-slate-300 dark:bg-[black] dark:placeholder-slate-500`}
                  autoComplete="off"
                />
              </div>

              {/* Last Name*/}
              <div className="flex flex-col">
                <label htmlFor="lastName">last name</label>
                <input
                  id="lastName"
                  placeholder="Oyetola"
                  type="text"
                  value={signUpForm.lastName}
                  onChange={handleInputChange("lastName")}
                  className={`mt-2 w-full px-3  sm:p-3  py-4 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:text-slate-300 dark:bg-[black] dark:placeholder-slate-500`}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* email*/}
            <div className="flex flex-col">
              <label htmlFor="email">email</label>

              <div className=" flex-1  ">
                <input
                  id="email"
                  placeholder="lowkey"
                  type="text"
                  value={signUpForm.email}
                  onChange={handleInputChange("email")}
                  className={`mt-2 w-full px-3  sm:p-3  py-4 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:text-slate-300 dark:bg-[black] dark:placeholder-slate-500`}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col">
              <label htmlFor="password" className="flex justify-between">
                <span>password</span>
              </label>
              <div className="flex">
                <input
                  id="password"
                  placeholder="••••••••"
                  type={signUpForm.isPasswordVisible ? "text" : "password"}
                  value={signUpForm.password}
                  onChange={handleInputChange("password")}
                  className="mt-1 w-full px-3 py-4 sm:p-3 border border-slate-400 rounded-l-md rounded-r-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:text-slate-300 dark:bg-[black] dark:placeholder-slate-500"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-center text-[small] mt-1 bg-white dark:bg-black border-slate-400 border rounded-r-md xl:w-[10%] w-[15%] flex items-center justify-center px-3 py-2"
                >
                  {signUpForm.isPasswordVisible ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/*Confirm password*/}
            <div className="flex flex-col">
              <label htmlFor="password" className="flex justify-between">
                <span>confirm password</span>
              </label>
              <div className="flex">
                <input
                  id="password"
                  placeholder="••••••••"
                  type={signUpForm.isConfirmPasswordVisible ? "text" : "password"}
                  value={signUpForm.confirmPassword}
                  onChange={handleInputChange("confirmPassword")}
                  className="mt-1 w-full px-3 py-4 sm:p-3 border border-slate-400 rounded-l-md rounded-r-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:text-slate-300 dark:bg-[black] dark:placeholder-slate-500"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPassword}
                  className="text-center text-[small] mt-1 bg-white dark:bg-black border-slate-400 border rounded-r-md xl:w-[10%] w-[15%] flex items-center justify-center px-3 py-2"
                >
                  {signUpForm.isConfirmPasswordVisible ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/*Sign up button*/}
            <button
              type="submit"
              className={`mt-4 text-white rounded-md sm:h-[60px] w-full text-xl sm:text-2xl mb-[1rem] px-3 h-[55px] py-4 bg-blue-600 text-white"
                 flex justify-center items-center `}
            >
              Signup
            </button>

            <p className="text-center w-full gap-2 flex md:flex justify-center mt-3">
              <span>have an account? </span>
              <Link
                className="text-blue-600 font-semibold "
                href={"/auth/login"}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUpSubmitter;
