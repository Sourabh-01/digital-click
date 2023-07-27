import React from "react";
import { history } from "../../managers/history";
const SideDrawer = (props) => {
  return (
    <div
      className={`absolute h-full right-0 z-40 w-0 bg-navyBlue-99 duration-100
          ${props.open ? "w-full tablet:w-96 px-5 tablet:px-10 right-0" : "w-0"}
          `}
    >
      <div className={`${props.open ? "block" : "hidden"}`}>
        <div
          className={`relative my-7 text-white font-OpenSansRegular text-ft3 tablet:text-ft5 tablet:my-10 w-fit`}
          onClick={() => {
            history.push("/dashboard");
            props.changeDrawer("sideDrawer", false);
          }}
        >
          Home
        </div>
        <div
          className={`relative my-7 text-white font-OpenSansRegular text-ft3 tablet:my-10 w-fit`}
        >
          Services
        </div>
        <div
          className={`relative my-7 text-white font-OpenSansRegular text-ft3 tablet:my-10 w-fit`}
        >
          About
        </div>
        <div
          className={`relative my-7 text-white font-OpenSansRegular text-ft3 tablet:my-10 w-fit`}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
