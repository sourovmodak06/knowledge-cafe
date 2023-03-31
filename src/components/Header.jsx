import React from "react";
import user from "../images/user.png";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-2xl md:text-4xl font-bold">Knowledge Cafe</h2>
        <img src={user} alt="User-images" className="rounded-full" />
      </div>
      <div className="h-[1px] bg-[#11111126]"></div>
    </div>
  );
};

export default Header;
