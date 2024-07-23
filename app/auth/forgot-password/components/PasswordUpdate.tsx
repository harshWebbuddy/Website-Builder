"use client";

import Motion from "@/components/client/Motion";
import Spinner from "@/components/Spinner";
import { API_URL } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

interface PasswordUpdateProps {
  email: string;
  otp: string;
  setStep: (value: number) => void;
}

const PasswordUpdate: React.FC<PasswordUpdateProps> = ({
  email,
  otp,
  setStep,
}) => {
  const [isPending, setIsPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  const router = useRouter();

  const PasswordUpdateSchema = z
    .object({
      password: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  type PasswordUpdateSchemaType = z.infer<typeof PasswordUpdateSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordUpdateSchemaType>({
    resolver: zodResolver(PasswordUpdateSchema),
  });

  const onSubmit: SubmitHandler<PasswordUpdateSchemaType> = async (data) => {
    setIsPending(true);
    try {
      const response = await axios.put(
        API_URL + "/users/api/v1/reset-password",
        { email, otp, password: data.password }
      );
      toast.success(response.data.message);
      router.push("/login"); // Redirect to login page
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.error || error.response.data);
      } else {
        toast.error(error.message);
      }
      console.error("Couldn't update password!", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Motion
      transition={{ duration: 0.2 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      classNames={undefined}
    >
      <div className="space-y-6 w-full">
        <div className="space-y-3">
          <Image
            src="/auth/passupdate.svg"
            alt="growstack"
            height={331}
            width={220}
            className="mx-auto"
          />

          <h1 className="2xl:text-[34px] xl:text-[24px] text-[12px] font-semibold text-center">
            Reset your password
          </h1>
          <p className="text-[#002030B2] 2xl:text-[16px] xl:text-[14px] text-[12px] font-medium text-center">
            Lorem ipsum dolor sit amet consectetur. Sit nec at rhoncus vulputate
            ornare mauris adipiscing amet. Lacus viverra arcu nulla.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="2xl:p-0 p-4 space-y-7 !mt-7 w-full"
        >
          <div>
            <h2 className="2xl:text-[16px] xl:text-[14px] text-[12px] font-medium mb-4">
              {" "}
              New password
            </h2>
            <div
              className={clsx(
                "w-full h-full flex items-center gap-3 bg-white outline-none border border-[#00203056] rounded-xl px-4 transition-all focus-within:border-primary-green",
                errors["password"] &&
                  "border-rose-600 focus-within:border-rose-600"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.0089 0.667799C10.104 0.667799 11.8102 2.41153 11.8102 4.55489L11.8101 5.71098C13.0838 6.164 14 7.40324 14 8.85761V12.0026C14 13.8395 12.5385 15.3332 10.7412 15.3332H5.25883C3.46152 15.3332 2 13.8395 2 12.0026V8.85761C2 7.40351 2.91589 6.16447 4.18921 5.71123L4.1897 4.55489C4.19401 3.49898 4.59365 2.52445 5.31473 1.79411C6.03652 1.06304 6.98935 0.639935 8.0089 0.667799ZM10.7412 6.62699H5.25883C4.05489 6.62699 3.07623 7.62717 3.07623 8.85761V12.0026C3.07623 13.2331 4.05489 14.2333 5.25883 14.2333H10.7412C11.9444 14.2333 12.9238 13.2331 12.9238 12.0026V8.85761C12.9238 7.62717 11.9444 6.62699 10.7412 6.62699ZM7.99986 9.06571C8.2969 9.06571 8.53797 9.31209 8.53797 9.61567V11.2443C8.53797 11.5479 8.2969 11.7942 7.99986 11.7942C7.70282 11.7942 7.46174 11.5479 7.46174 11.2443V9.61567C7.46174 9.31209 7.70282 9.06571 7.99986 9.06571ZM8.00674 1.76771H7.99526C7.26845 1.76771 6.58755 2.05369 6.07311 2.57505C5.55508 3.09861 5.26881 3.79742 5.26594 4.54243L5.26529 5.52666H10.7333L10.7339 4.55489C10.7339 3.01795 9.5106 1.76771 8.00674 1.76771Z"
                  fill="#667085"
                />
              </svg>
              <div className="relative group space-y-2 cursor-text w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="password"
                  placeholder="Enter your password..."
                  className={clsx("text-sm peer focus:ring-0 h-[60px] w-full")}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-4"
                >
                  {showPassword ? (
                    <Eye size={20} color="#667085" />
                  ) : (
                    <EyeOff size={20} color="#667085" />
                  )}
                </button>
              </div>
            </div>
            {errors.password && (
              <span className="text-rose-600 text-sm">
                {errors.password?.message}
              </span>
            )}
          </div>
          <div>
            <h2 className="2xl:text-[16px] xl:text-[14px] text-[12px] font-medium mb-4">
              {" "}
              Confirm password
            </h2>
            <div
              className={clsx(
                "w-full h-full flex items-center gap-3 bg-white outline-none border border-[#00203056] rounded-xl px-4 transition-all focus-within:border-primary-green",
                errors["confirmPassword"] &&
                  "border-rose-600 focus-within:border-rose-600"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.0089 0.667799C10.104 0.667799 11.8102 2.41153 11.8102 4.55489L11.8101 5.71098C13.0838 6.164 14 7.40324 14 8.85761V12.0026C14 13.8395 12.5385 15.3332 10.7412 15.3332H5.25883C3.46152 15.3332 2 13.8395 2 12.0026V8.85761C2 7.40351 2.91589 6.16447 4.18921 5.71123L4.1897 4.55489C4.19401 3.49898 4.59365 2.52445 5.31473 1.79411C6.03652 1.06304 6.98935 0.639935 8.0089 0.667799ZM10.7412 6.62699H5.25883C4.05489 6.62699 3.07623 7.62717 3.07623 8.85761V12.0026C3.07623 13.2331 4.05489 14.2333 5.25883 14.2333H10.7412C11.9444 14.2333 12.9238 13.2331 12.9238 12.0026V8.85761C12.9238 7.62717 11.9444 6.62699 10.7412 6.62699ZM7.99986 9.06571C8.2969 9.06571 8.53797 9.31209 8.53797 9.61567V11.2443C8.53797 11.5479 8.2969 11.7942 7.99986 11.7942C7.70282 11.7942 7.46174 11.5479 7.46174 11.2443V9.61567C7.46174 9.31209 7.70282 9.06571 7.99986 9.06571ZM8.00674 1.76771H7.99526C7.26845 1.76771 6.58755 2.05369 6.07311 2.57505C5.55508 3.09861 5.26881 3.79742 5.26594 4.54243L5.26529 5.52666H10.7333L10.7339 4.55489C10.7339 3.01795 9.5106 1.76771 8.00674 1.76771Z"
                  fill="#667085"
                />
              </svg>
              <div className="relative group space-y-2 cursor-text w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"} // Toggle visibility
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  placeholder="Confirm your password..."
                  className={clsx("text-sm peer focus:ring-0 h-[60px] w-full")}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-4"
                >
                  {showConfirmPassword ? (
                    <Eye size={20} color="#667085" />
                  ) : (
                    <EyeOff size={20} color="#667085" />
                  )}
                </button>
              </div>
            </div>
            {errors.confirmPassword && (
              <span className="text-rose-600 text-sm">
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 px-4 bg-[#00A4A6] hover:bg-[#00A4A6]/90 text-white font-semibold rounded-lg"
          >
            {isPending ? <Spinner /> : "Update Password"}
          </button>
        </form>
      </div>
    </Motion>
  );
};

export default PasswordUpdate;
