import React from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";


const Stat = ({ title, icon, total, url, description, color }) => {
  return (
    <div
      className="group shadow-xl hover:shadow-2xl rounded-md pt-8 pb-4 relative transition-all hover:duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="px-6 pb-5">
        <h4 className="text-lg opacity-80 mb-7 text-white group-hover:opacity-100 transition-all hover:duration-500">
          {title}{" "}
        </h4>
        <h2 className="text-4xl font-bold text-white opacity-70 group-hover:opacity-90 transition-all hover:duration-500">
          {total}
        </h2>
        <IconButton className="absolute top-[1rem] right-[1rem] transition-all hover:duration-500 stat-icon">
          {icon}
        </IconButton>
      </div>

      <div className="pt-4 px-6 mt-3">
        <Link
          href={url}
          className="flex items-center gap-2 text-white text-md opacity-80 group-hover:opacity-90 transition-all hover:duration-500"
        >
          {description}
          <ArrowRightAltOutlinedIcon className="opacity-80 text-md group-hover:opacity-90 transition-all hover:duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default Stat;
