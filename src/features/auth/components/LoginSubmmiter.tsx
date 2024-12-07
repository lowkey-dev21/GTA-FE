"use client";

import { useState, useEffect } from "react";
import validator from "validator";
import { useRouter } from "next/navigation";
import LoadBtn from "../../../components/LoadBtn";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const LoginSubmitter = ({ api, formData }: { api: string; formData: any }) => {
  const router = useRouter();
  // loading
  const [load, setLoad] = useState(false);

  // Email state
  const [emailOrUsername, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  useEffect(() => {
    if (emailOrUsername !== "") {
      if (validator.isEmail(emailOrUsername)) {
        setValidEmail(true);
        setEmailMsg("");
      } else if (emailOrUsername.includes("@")) {
        setValidEmail(false);
        setEmailMsg("Please enter a valid email");
      } else if (!emailOrUsername.endsWith(".gta")) {
        setValidEmail(false);
        setEmailMsg("Username must end with '.gta'");
      } else {
        setValidEmail(true);
        setEmailMsg("");
      }
    }
  }, [emailOrUsername]);

  // Password state
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState("");

  // confirm all fields
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(!emailOrUsername || !password || !validEmail);
  }, [emailOrUsername, password, validEmail]);

  // Handle form submission
  const handleSubmit = async (): Promise<void> => {};
  return (
    <>
      <section>
        <p className=" mt-2 ">Please enter your account details</p>
        {/* Login Form */}
        <div className="bg-white dark:border-slate-800 dark:bg-[black] w-full md:p-[2rem] p-4 border  rounded-[8px] mt-6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email">Username or Email</label>
              <input
                id="email"
                placeholder="gtaweb@gmail.com or test.gta"
                type="text"
                value={emailOrUsername}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-2 w-full px-3 sm:p-4 py-2 border ${
                  !validEmail ? "border-red-400" : "border-slate-400"
                } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:text-slate-300 dark:bg-[black] dark:placeholder-slate-500`}
                autoComplete="off"
              />
              {/* Email message */}
              {emailMsg && (
                <p className="text-xs mt-2 text-red-500">{emailMsg}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label htmlFor="password" className="flex justify-between">
                <span>Password</span>{" "}
                <p
                  onClick={() => router.push("/forgot")}
                  className=" text-blue-600 "
                >
                  Forgot?
                </p>
              </label>
              <div className="flex">
                <input
                  id="password"
                  placeholder="••••••••"
                  type={eye ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full px-3 py-2 sm:p-4 border border-slate-400 rounded-l-md rounded-r-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 dark:text-slate-300 dark:bg-[black] dark:placeholder-slate-500"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setEye((prev) => !prev)}
                  className="text-center text-[small] mt-1 bg-white dark:bg-black border-slate-400 border rounded-r-md xl:w-[10%] w-[15%] flex items-center justify-center px-3 py-2"
                >
                  {eye ? (
                    <FaEyeSlash className=" text-2xl" />
                  ) : (
                    <IoEyeSharp className="text-2xl" />
                  )}
                </button>
              </div>
              {/* Password validation message */}
            </div>

            {/* Login button */}
            <button
              type="submit"
              onClick={() => setLoad(true)}
              disabled={isSubmitDisabled}
              className={`mt-4 rounded-md sm:h-[60px] w-full text-xl sm:text-2xl mb-[1rem] px-3 h-[45px] py-3 ${
                isSubmitDisabled
                  ? "bg-gray-300 cursor-not-allowed dark:bg-slate-600 text-slate-400"
                  : "bg-blue-600 text-white"
              } flex justify-center items-center  w-full `}
            >
              <span className={`${load ? " hidden" : "flex"}`}>Login</span>
              <div className={` ${load ? "flex" : "hidden"}  `}>
                <LoadBtn size={"30"} speed="1.75" color={"white"} />
              </div>
            </button>
            <Link
              href={"/register"}
              className=" text-center w-full md:flex justify-center mt-3  "
            >
              Don&apos;t have an account?
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginSubmitter;
