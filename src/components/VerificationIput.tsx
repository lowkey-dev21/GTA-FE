"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import axiosInstance from "@/services/api";
import { toaster } from "@/config/config";

interface Code {
  [key: `digit${number}`]: string;
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
  digit5: string;
  digit6: string;
}

const VerificationInput = ({ title, btnTitle, api }: { title: string, api: string, btnTitle: string }) => {


  const [code, setCode] = useState<Code>({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
    digit5: "",
    digit6: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null | any)[]>([]);

  const handleChange = (index: number, value: string): void => {
    const newCode = { ...code };

    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[`digit${i + 1}` as keyof Code] = pastedCode[i] || "";
      }
      setCode(newCode);

      const lastFilledIndex = Object.values(newCode).findIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex]?.focus();
    } else {
      newCode[`digit${index + 1}` as keyof Code] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Backspace" && !code[`digit${index + 1}` as keyof Code] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const verificationCode = Object.values(code).join("");
      // API call implementation here
      const response = await axiosInstance.post(api, { code: verificationCode })
      toaster.toastS(response?.data?.message)
      setIsLoading(false);
    } catch (error: any) {
      toaster.toastE(error.response?.data?.message)

      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (Object.values(code).every((digit) => digit !== "")) {
      const event = new Event("submit") as unknown as React.FormEvent<HTMLFormElement>;
      handleSubmit(event);
    }
  }, [code, handleSubmit]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-opacity-50 overflow-hidden">
      <Logo />
      <div className="max-w-md w-full flex flex-col items-center rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Enter the 6-digit code sent to your email address.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between gap-4">
            {(Object.keys(code) as Array<keyof Code>).map((key, index) => (
              <input
                key={index}
                ref={(el: any) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={code[key]}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-bold focus:ring-blue-500 outline-none focus:border-blue-500  rounded-md border-[1px] border-slate-800"
                disabled={isLoading}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg focus:ring-opacity-50 disabled:bg-slate-600"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : btnTitle}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400 font-normal cursor-pointer hover:underline">
          Back to sign in
        </p>
      </div>
    </div>
  );
};

export default VerificationInput;

