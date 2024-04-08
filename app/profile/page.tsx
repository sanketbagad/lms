"use client";
import React from "react";
import Protected from "../hooks/Protected";
import Heading from "../utils/Heading";
import { useSelector } from "react-redux";
import Navbar from "../_components/ui/Navbar";
import ProfileComponent from "../_components/Profile/ProfileComponent";

type Props = {};

const Page = (props: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <Protected>
      <Heading
        title={user.name}
        description={`Welcome to your profile ${user.name}`}
        keywords={`Profile, ${user.name}, LMS, Learning Management System, Sanket Bagad`}
      />
      <Navbar />
        <ProfileComponent />
    </Protected>
  );
};

export default Page;
