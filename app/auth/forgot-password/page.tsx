"use client";

import Image from "next/image";
import { useState } from "react";
import EmailForm from "./components/EmailForm";
import OtpVerification from "./components/OtpVerification";
import PasswordUpdate from "./components/PasswordUpdate";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmitted = async (submittedEmail: string) => {
    setLoading(true);
    setTimeout(() => {
      setEmail(submittedEmail);
      setStep(2);
      setLoading(false);
    }, 500); 
  };

  const handleOtpVerified = async (submittedOtp: string) => {
    setLoading(true);
    setTimeout(() => {
      setOtp(submittedOtp);
      setStep(3);
      setLoading(false);
    },500); 
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-full  h-fit flex flex-col ">  <Image src="/auth/circle.svg" alt="circle" width={100} height={100} className="w-[600px] z-[0] h-[600px] 2xl:flex top-0 hidden absolute "/> 
      <Image src="/auth/circle.svg" alt="circle" width={100} height={100} className="w-[600px] z-[0] h-[600px] 2xl:flex bottom-0 right-0  rotate-180 hidden absolute "/> 
        <div className="w-full h-full max-w-[582px] mx-auto flex flex-col justify-between items-center space-y-10">
       
           <div className="w-full">
            {loading ? (
              <div className="flex justify-center items-center">
                <img src="/ripples.svg" alt="Loading..." className="w-16 h-16" />
              </div>
            ) : (
              <>
                {step === 1 && <EmailForm onEmailSubmitted={handleEmailSubmitted} />}
                {step === 2 && <OtpVerification email={email} onOtpVerified={handleOtpVerified} setStep={setStep} />}
                {step === 3 && <PasswordUpdate email={email} otp={otp} setStep={setStep} />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
