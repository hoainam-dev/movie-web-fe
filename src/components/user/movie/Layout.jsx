import React from "react";
import Navbar from "../../navbar/Navbar";
import Fotter from "../../footer/Fotter";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[695px] h-full bg-[rgb(16,20,44)]">
        <div className="pt-24 px-2">{children}</div>
      </div>
      <Fotter />
    </>
  );
};

export default Layout;
