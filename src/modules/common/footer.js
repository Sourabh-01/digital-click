import React from "react";
const Footer = (props) => {
  return (
    <div className="bg-navyBlue-99 px-16per pb-10 tablet:px-8 mobile:px-4">
      <div className="flex w-full text-white tablet:h-125 mobile:h-135.5 mobile:text-ft1 ">
        <div className="tablet:block mobile:block flex w-full justify-between tablet:p-3 tablet:pt-8 tablet:w-full mobile:w-full">
          <div className="pt-5 w-4/5 tablet:w-full tablet:ml-0 tablet:pt-0 mobile:ml-0 mobile:pt-0">
            <div className="mobile:flex mr-15 mobile:mr-0 mobile:justify-center">
              <img
                src="/images/logo-whites.png"
                alt="Logo"
                className="tablet:mt-0 tablet:w-80 mobile:w-45 mobile:pt-10per mobile:mt-0"
              />
            </div>
          </div>
          <div className="flex w-full justify-between lg:gap-x-4 xl:gap-x-12 pt-5 tablet:mt-25 tablet:pt-0 tablet:w-auto tablet:max-w-xl tablet:pl-0 mobile:block mobile:ml-0 mobile:pl-0 mobile:gap-x-0 mobile:pt-0">
            <div className="font-PoppinsRegular text-ft1 cursor-pointer whitespace-nowrap">
              <div className="mt-7 tablet:mt-8">Home</div>
              <div className="mt-7 tablet:mt-8 whitespace-nowrap">Services</div>
              <div className="mt-7 tablet:mt-8">About</div>
              <div className="hidden mt-7 tablet:block tablet:mt-10">
                2022 © RunCrypto LLC
              </div>
            </div>
            <div className="font-PoppinsRegular text-ft1 cursor-pointer tablet:ml-25">
              <div className="mt-7 tablet:mt-8 whitespace-nowrap">
                Contact Us
              </div>
            </div>
            <div className="font-PoppinsRegular cursor-pointer pt-5 tablet:ml-25">
              <div className="flex gap-x-5">
                <img src="/images/Facebook.svg" alt="fb" />
                <img src="/images/Twitter.svg" alt="tw" />
                <img src="/images/Discord.svg" alt="dc" />
                <img src="/images/Reddit.svg" alt="rt" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-white text-ft3 mobile:text-ft1 mobile:mt-7">
        Made By New-Aged Techies
      </div>
    </div>
  );
};
export default Footer;
