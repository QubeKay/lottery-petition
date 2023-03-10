import React from "react";
import Image from "next/image";
import { Avatar, IconButton } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import logo from '../../public/images/logo.png';

const Header = () => {
  return (
    <header
      className="flex justify-between items-center py-2 px-5 w-full bg-white z-10 fixed top-0"
      style={{ height: "4.5rem", borderBottom: "1px solid #E8E2E2" }}
    >
      <Image src={logo} className="h-12 w-12" alt="Lottery Petition" />

      <IconButton className="absolute left-[16vw] bg-[#ecf3ff] hover:bg-[#ecf3ff] hover:opacity:90">
        <CloseOutlinedIcon />
      </IconButton>

      <div className="flex items-center gap-5">
        <IconButton className="cursor-pointer bg-[#ecf3ff] hover:bg-[#ecf3ff]">
          <NotificationsNoneOutlinedIcon />
        </IconButton>

        <div className="flex items-center gap-1 opacity-75 cursor-pointer">
          <Avatar />
          Admin
          <KeyboardArrowDownOutlinedIcon className="opacity-70" />
        </div>
      </div>
    </header>
  );
};

export default Header;
