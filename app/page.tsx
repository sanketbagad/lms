"use client";

import { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./_components/Header";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <>
      <Heading
        title="LMS - By Sanket Bagad"
        description="LMS- is a Learning Management System"
        keywords="LMS, Learning Management System"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
    </>
  );
};

export default Page;
