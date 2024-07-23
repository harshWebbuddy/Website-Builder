"use client";

import Motion from "@/components/client/Motion";
import Spinner from "@/components/Spinner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { API_URL } from "@/lib/api";
import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

interface OtpVerificationProps {
  email: string;
  onOtpVerified: (otp: string) => void;
  setStep: (value: number) => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  email,
  onOtpVerified,
  setStep,
}) => {
  const [isPending, setIsPending] = useState(false);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<{ otp: string }>({
    defaultValues: { otp: "1234" },
  });

  const onSubmit: SubmitHandler<{ otp: string }> = async (data) => {
    setIsPending(true);
    try {
      const response = await axios.post(API_URL + "/users/api/v1/verify-otp", {
        email,
        otp: data.otp,
      });
      toast.success(response.data.message);
      toast.success("OTP VERIFIED SUCCESSFULLY");
      onOtpVerified(data.otp);
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.error || error.response.data);
      } else {
        toast.error(error.message);
      }
      console.error("Couldn't verify OTP!", error);
    } finally {
      setIsPending(false);
    }
  };

  const handleOtpChange = (value: string) => {
    setValue("otp", value, { shouldValidate: true });
  };

  return (
    <Motion
      transition={{ duration: 0.2 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      classNames={undefined}
    >
      <div className="space-y-6 w-full">
        <div className="space-y-3">
          <h1 className="2xl:text-[34px] xl:text-[24px] text-[12px] font-bold text-center">
            OTP
          </h1>
          <p className="text-[#002030B2] 2xl:text-[16px] xl:text-[14px] text-[12px] font-medium text-center">
            Lorem ipsum dolor sit amet consectetur. Sit nec at rhoncus vulputate
            ornare mauris adipiscing amet.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7 !mt-7 w-full"
        >
          <div>
            <div className="relative group space-y-2 cursor-text w-full flex justify-center">
              <InputOTP maxLength={4} onChange={handleOtpChange}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            {errors.otp && (
              <span className="text-rose-600 text-sm">
                {errors.otp.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#00A4A6] hover:bg-[#00A4A6]/90 hover:shadow-[#00A4A6] shadow-md text-white h-[60px] w-full rounded-xl flex justify-center items-center"
          >
            {isPending ? <Spinner /> : "Verify OTP"}
          </button>
        </form>
        <button
          onClick={() => setStep(1)}
          className="text-[#14171B] text-center flex items-center gap-4 justify-center cursor-pointer mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="#14171B"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
      </div>
    </Motion>
  );
};

export default OtpVerification;
