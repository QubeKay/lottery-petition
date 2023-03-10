import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1 pb-[5rem] pt-[7rem] pl-[16.5vw] pr-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
