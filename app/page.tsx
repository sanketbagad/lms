"use client";

import { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./_components/Header";
import { MacbookScroll } from "./_components/ui/MacbookScroll";
import Navbar  from "./_components/ui/FloatingNavbar";
import Hero from "./_components/Route/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

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
