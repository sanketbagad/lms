"use client";

import { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Navbar from "./_components/ui/Navbar";
import Hero from "./_components/Route/Hero";
import { useSocialLoginMutation } from "@/redux/features/auth/authApi";
import { useSession } from "next-auth/react";

interface Props {}

const Page: FC<Props> = (props) => {
  const [socialLogin, { isError, isLoading, isSuccess, data }] =
    useSocialLoginMutation();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      socialLogin({
        email: session.user?.email,
        name: session.user?.name,
        avatar: session.user?.image,
      });
    }
  }, [session, socialLogin]);

  return (
    <>
      <Heading
        title="LMS - By Sanket Bagad"
        description="LMS- is a Learning Management System"
        keywords="LMS, Learning Management System"
      />
      <Navbar />
      <Hero />
    </>
  );
};

export default Page;
