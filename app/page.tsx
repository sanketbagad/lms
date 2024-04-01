"use client";

import { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="LMS - By Sanket Bagad"
        description="LMS- is a Learning Management System"
        keywords="LMS, Learning Management System"
      />
    </div>
  );
};

export default Page;
