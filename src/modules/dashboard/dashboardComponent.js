import React from "react";

export default function Dashboard() {
  const projects = [
    {
      image: "/images/Img1.jpg",
      description: "Social Media Marketing",
      count: "Improve your online visibility and increase organic traffic to your website.",
    },
    {
      image: "/images/Img2.jpg",
      description: "Search Engine Optimization",
      count: "Reach and engage with your target audience through strategic social media campaigns.",
    },
    {
      image: "/images/Img3.jpg",
      description: "Pay-Per-Click Advertising",
      count: "Drive immediate and targeted traffic to your website with optimized PPC campaigns.",
    },
  ];

  return (
    <div>
      <div className="bg-banner-background bg-cover bg-no-repeat px-16per mobile:px-4per mobile:relative tablet:relative">
        <div className="flex w-full h-full tablet:block mobile:block">
          <div className="w-full pt-4per">
            <div className="text-white 2xl:text-ft20 xl:text-ft11 lg:text-ft9 py-2per tablet:text-ft15 tablet:grid tablet:w-full tablet:justify-items-center mobile:grid mobile:text-ft11 mobile:w-full mobile:justify-center mobile:text-center tablet:text-center">
              About Digital Click
            </div>
            <div className="text-white text-ft5 w-full py-2per tablet:w-full mobile:w-full mobile:text-center tablet:text-center">
              We specialize in providing comprehensive digital marketing
              solutions to businesses of all sizes. Our team of experts is
              passionate about creating innovative and effective strategies that
              help our clients achieve their marketing goals. <br />
              <br />
              Whether you need help with SEO, PPC, social media marketing, or
              any other aspect of digital marketing, we are here to help.
            </div>
            <div className="text-white text-ft5 py-2per">
              <div className="flex gap-x-5 w-full tablet:justify-center mobile:block">
                <button className="cursor-pointer whitespace-nowrap mobile:w-full mobile:mt-4per grid content-center bg-blue-55 rounded-lg p-3 2xl:px-10 xl:px-5 font-PoppinsMedium text-ft4">
                  Start Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full px-16per bg-grey-60 pt-5 pb-10 tablet:px-4per mobile:px-4per">
        <div className="flex justify-between tablet:justify-start">
          <div className="grid content-center font-PoppinsSemiBold text-ft6 mobile:text-ft2">
           Our Services
          </div>
        </div>
        <div className="pt-5">
          <div className="grid grid-cols-3 gap-5 tablet:grid-cols-2 mobile:grid-cols-1">
            {projects &&
              projects.map((data, index) => {
                return (
                  <div
                    className="bg-white h-auto cursor-pointer"
                    key={index}
                  >
                    <div className="grid w-full place-content-center">
                      <img
                        src={data.image}
                        alt="img"
                        className="pt-8 w-auto h-auto"
                      />
                    </div>
                    <div className="w-full py-4">
                      <div className="grid content-center font-PoppinsBold text-ft3">
                        {data.description}
                      </div>
                      <div className=" border-t-2 border-grey-60">
                        <div className="flex">
                          &nbsp;
                          <div className="grid content-center text-ft1">
                            {data.count} &nbsp;
                          </div>
                          <div className="grid content-center text-ft1">
                            {data.extension}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
