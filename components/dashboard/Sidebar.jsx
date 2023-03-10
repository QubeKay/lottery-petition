import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { IconButton } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import {menu} from '../../data/menu'
const Sidebar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div
      className="flex flex-col justify-between w-50 bg-white overflow-y-scroll py-8 px-5 scrollbar-hide fixed shadow-2xl"
      style={{
        width: "14vw",
        height: "calc(100vh - 4.5rem)",
        top: "4.5rem",
        borderRight: "1px solid #E8E2E2",
      }}
    >
      <div className="flex flex-col gap-3">
        {menu.map((item) => (
          <Link
            key={item.url}
            href={`${item.url}`}
            className={
              currentRoute === item.url
                ? "active-link rounded-full py-[.6rem] px-2"
                : "group nav-link hover:px-7 hover:bg-[#ecf3ff] rounded-full hover:text-[#4b5251] transition-all hover:duration-500"
            }
          >
            {
              <item.icon className=" text-gray-500 group-hover:text-[#4b5251]" />
            }
            <span className="opacity-70 group-hover:opacity-100">
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      <IconButton className="flex justify-self-center self-center bg-[#ecf3ff] hover:bg-[#ecf3ff] hover:opacity:90 text-center">
        <ArrowBackIosNewOutlinedIcon className="opacity-70" />
      </IconButton>
    </div>
  );
};

export default Sidebar;
