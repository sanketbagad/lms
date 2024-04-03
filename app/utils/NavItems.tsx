import Link from "next/link";
import React from "react";

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const navItemsData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Policy",
    path: "/policy",
  },
  {
    name: "Faq",
    path: "/faq",
  },
];

const NavItems = ({ activeItem, isMobile }: Props) => {
  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData.map((item, index) => (
          <Link href={item.path} key={index} passHref>
            <span
              className={`${
                activeItem === index
                  ? "text-[crimson] dark:text-[#37a39a]"
                  : "text-black dark:text-white"
              } cursor-pointer px-6 font-Poppins font-[400] text-[15px]`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      {isMobile && (
        <div className="flex 800px:hidden">
          <div className="py-6 text-center w-full">
            {navItemsData.map((item, index) => (
            <Link href="/" passHref key={index}>
              <span
                className={`${
                  activeItem === 0
                    ? "text-[crimson] dark:text-[#37a39a]"
                    : "text-black dark:text-white"
                } cursor-pointer px-6 font-Poppins font-[400] text-[10px]`}
              ></span>
            </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
