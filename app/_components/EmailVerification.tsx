import { useForm } from "react-hook-form";
import { useActivationMutation } from "@/redux/features/auth/authApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function EmailVerification({ email, setShowEmailVerification }: any) {
  const { token } = useSelector((state: any) => state.auth);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [activation, { isError, isLoading, isSuccess, data }] = useActivationMutation();

  const [isShaking, setIsShaking] = useState(false);

  const onSubmit = (data: any) => {
    const code = Object.values(data).join("");
    activation({ activationCode: code, activationToken: token });
  };

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
    } else if (isError) {
      toast.error("Invalid OTP. Please try again.");
      setIsShaking(true);
    }
  }, [isSuccess, data, isError]);

  console.log(isError, isShaking);

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">Email Verification</div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {email}</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="w-10 h-16">
                      <motion.input
                        {...register(`digit-${index}`, { required: true, pattern: /^[0-9]*$/ })}
                        className={`w-full h-full flex items-center justify-center text-center px-3 outline-none rounded-lg border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 ${errors[`digit-${index}`] ? 'border-red-500' : ''}`}
                        type="text"
                        maxLength={1}
                        name={`digit-${index}`}
                        id={`digit-${index}`}
                        onAnimationStart={() => setIsShaking(true)}
                        onAnimationEnd={() => setIsShaking(false)}
                        initial={{ x: 0 }}
                        animate={isShaking ? { x: [-5, 5, -5, 5, 0] } : {}}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 font-semibold rounded-lg outline-none bg-blue-700 text-white text-sm shadow-sm hover:bg-blue-800 focus:ring focus:ring-blue-700 focus:ring-offset-1 focus:outline-none"
                    >
                      {isLoading ? "Verifying..." : "Verify"}
                    </button>
                  </div>

                  <div className="flex items-center justify-center text-sm font-medium space-x-1 text-gray-500">
                    {isError && <p className="text-red-500">Invalid OTP {" "}</p>}
                    <button className="text-blue-600 hover:underline" onClick={() => setShowEmailVerification(false)}>
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
