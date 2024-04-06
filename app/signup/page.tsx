"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Navbar from "../_components/ui/FloatingNavbar";
import EmailVerification from "../_components/EmailVerification";
import { useUserRegistrationMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import Link from "next/link";
import Heading from "../utils/Heading";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [VerificationData, setVerificationData] = useState({});
  const [userRegistration, { isError, data, isLoading, isSuccess }] =
    useUserRegistrationMutation();

  useEffect(() => {
    if (isSuccess && data) {
      setVerificationData(data);
      setShowEmailVerification(true);
    } else if (isError) {
      toast.error("An error occurred. Please try again later.");
    } else {
      setShowEmailVerification(false);
    }
  }, [isSuccess, isError, data]);

  const onSubmit = (data: FormData) => {
    userRegistration({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <Heading
        title="Sign Up - LMS"
        description="Sign up to create an account"
        keywords="Sign up, LMS"
      />
      <Navbar />
      {!showEmailVerification ? (
        <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-black">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full  max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800"
          >
            <h2 className="mb-3 text-3xl font-semibold text-center">
              Create an account
            </h2>
            <p className="text-sm text-center dark:text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                rel="noopener noreferrer"
                className="focus:underline hover:underline"
              >
                Sign in
              </Link>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4">
                <div className="my-6 space-y-4">
                  <button
                    aria-label="Login with Google"
                    type="button"
                    className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Sign Up with Google</p>
                  </button>
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Leroy Jenkins"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">Name is required</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">Email is required</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">Password is required</span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                {isLoading ? "Loading..." : "Sign up"}
              </button>
            </form>
          </motion.div>
        </div>
      ) : (
        <EmailVerification verificationData={VerificationData} email={watch("email")} setShowEmailVerification={setShowEmailVerification} />
      )}
    </>
  );
};

export default Page;
