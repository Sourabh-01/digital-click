import React from "react";
import { history } from "../../managers/history";
export default function Header(props) {
  return (
    <div className="w-full h-full grid content-center">
      <div className="w-full h-15 flex justify-between bg-navyBlue-99 py-1per px-16per tablet:px-4per mobile:px-4per">
        <div className="grid content-center">
          <img src="/images/logo-header.png" alt="logo" className="h-8 cursor-pointer" onClick={()=> history.replace("/")}/>
        </div>
        <div className="flex justify-between gap-x-10 text-white tablet:gap-x-5 mobile:gap-x-5">
          <div className="grid content-center text-ft2 font-PoppinsRegular pt-0.5 tablet:hidden mobile:hidden cursor-pointer">
            Home
          </div>
          <div className="grid content-center text-ft2 font-PoppinsRegular pt-0.5 tablet:hidden mobile:hidden cursor-pointer">
            Services
          </div>
          <div className="grid content-center text-ft2 font-PoppinsRegular pt-0.5 tablet:hidden mobile:hidden cursor-pointer">
            About
          </div>
          <div className="grid content-center text-ft2 font-PoppinsRegular pt-0.5 tablet:hidden mobile:hidden cursor-pointer">
            Contact Us
          </div>
          <div className="hidden tablet:grid tablet:content-center mobile:grid mobile:content-center">
            <img
              src="/images/menu.svg"
              alt="menu"
              className="w-7 h-7"
              onClick={()=> props.handleDrawer()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
