import React from "react";
import ValidateTask from "../popup/validateTask";
export default function ProjectComponent() {
  const [validate, setValidation] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(1);
  const [taskUpdate, setUpdateTask] = React.useState(false);
  const handleValidation = () => {
    setValidation(true);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="w-full h-full px-16per tablet:px-4per mobile:px-4per">
      <div className="flex py-4 gap-x-1">
        <div className="text-blue-55 text-ft1 font-PoppinsMedium">Projects</div>
        <div className=" text-black-20 text-ft1 font-PoppinsMedium">{">"}</div>
        <div className=" text-black-20 text-ft1 font-PoppinsMedium">
          Details
        </div>
      </div>
      <div className=" font-PoppinsMedium text-ft6 text-black-50 pb-4">
        Project Details
      </div>
      <div className="bg-project rounded-md bg-cover w-full h-full">
        <div className="p-4per flex w-full justify-between tablet:gap-x-8 mobile:gap-x-0 mobile:block">
          <div className="grid content-start mobile:justify-center mobile:my-3per">
            <img
              src="/images/bridge-icon.svg"
              alt="icon"
              className="tablet:w-52 tablet:h-24 mobile:w-52 mobile:h-24"
            />
          </div>
          <div className="flex tablet:block mobile:block w-full justify-between">
            <div className="w-1/2 tablet:w-full mobile:w-full">
              <div className="grid content-center text-ft9 font-PoppinsSemiBold w-3/4 tablet:w-full mobile:w-full text-white pl-2per">
                Bridge Tokens on PancakeSwap
              </div>
              <div className=" font-PoppinsRegular text-ft1 w-3/4 tablet:w-full mobile:w-full text-white pl-2per pt-1per mobile:hidden">
                Ullamco qui excepteur anim labore nisi consectetur est esse duis
                in incididunt ullamco eu. Voluptate qui aliqua laboris deserunt
                cupidatat Lorem nulla in dolor dolor. Do laborum eu magna tempor
                amet officia.
              </div>
              <img
                src="/images/bridge-duration.svg"
                alt="duration"
                className="pt-4per pl-2per w-3/4 tablet:hidden mobile:hidden"
              />
            </div>
            <div className="flex tablet:mt-3per mobile:mt-3per mobile:justify-between">
              <div className="grid content-start">
                <img
                  src="/images/bridge-cake.svg"
                  alt="cake"
                  className="pt-4per pl-2per"
                />
              </div>
              <div className="grid content-start pt-13 px-1 text-grey-60">
                {"+"}
              </div>
              <div className="grid content-start">
                <img
                  src="/images/bridge-nft.svg"
                  alt="nft"
                  className="pt-4per pl-2per"
                />
              </div>
            </div>
            <div className="hidden mobile:block font-PoppinsRegular text-ft1 w-3/4 tablet:w-full mobile:w-full text-white pl-2per pt-1per mobile:my-3per">
              Ullamco qui excepteur anim labore nisi consectetur est esse duis
              in incididunt ullamco eu. Voluptate qui aliqua laboris deserunt
              cupidatat Lorem nulla in dolor dolor. Do laborum eu magna tempor
              amet officia.
            </div>
            <img
              src="/images/bridge-duration.svg"
              alt="duration"
              className="hidden tablet:block mobile:block pt-4per pl-2per w-3/4 tablet:w-full mobile:w-full tablet:mt-1per mobile:mt-1per tablet:mb-3per mobile:mb-3per"
            />
          </div>
        </div>
      </div>
      <div className="flex pt-2per mobile:py-4per">
        <div className="font-PoppinsMedium text-ft6">Project Status</div>
        <div className="bg-green-10 text-green-20 px-5 grid content-center rounded-md ml-1per mobile:ml-2per text-ft1 font-PoppinsMedium">
          {taskUpdate ? "In Progress" : "Activated"}
        </div>
      </div>
      <div className="pt-2per mobile:pt-0">
        <div className="flex justify-between w-full bg-blue-10 rounded-md h-10">
          <div
            className={`text-blue-20 w-1/3 flex justify-center mobile:text-ft1 font-PoppinsMedium cursor-pointer ${
              activeTab === 1
                ? "bg-white text-navyBlue-99 shadow-md rounded-md"
                : ""
            }`}
            onClick={() => setActiveTab(1)}
          >
            <div className="grid content-center">
              {taskUpdate && (
                <img
                  src="/images/check-true.png"
                  alt="true"
                  className="w-4 h-4 mr-1"
                />
              )}
            </div>
            <div className="grid content-center">Task 1</div>
          </div>
          <div
            className={`text-blue-20 w-1/3 grid content-center mobile:text-ft1 justify-center font-PoppinsMedium cursor-pointer ${
              activeTab === 2
                ? "bg-white text-navyBlue-99 shadow-md rounded-md"
                : ""
            } ${taskUpdate ? "pointer-events-auto" : "pointer-events-none"}`}
            onClick={() => setActiveTab(2)}
          >
            Task 2
          </div>
          <div
            className={`text-blue-20 w-1/3 grid content-center mobile:text-ft1 justify-center font-PoppinsMedium cursor-pointer ${
              activeTab === 3
                ? "bg-white text-navyBlue-99 shadow-md rounded-md"
                : ""
            } ${taskUpdate ? "pointer-events-auto" : "pointer-events-none"}`}
            onClick={() => setActiveTab(3)}
          >
            Claim Reward
          </div>
        </div>
        {activeTab === 1 && (
          <div className="pt-3per flex justify-between pb-4per tablet:block mobile:block">
            <img
              src="/images/bridge-graph.png"
              alt="graph"
              className="w-2/3 tablet:w-full mobile:w-full"
            />
            <div className="w-1/3 ml-3per tablet:w-full mobile:w-full tablet:ml-0 mobile:ml-0">
              <div className="font-PoppinsSemiBold text-ft8 py-2 tablet:mt-2per mobile:mt-2per">
                Perform a Swap
              </div>
              <p className=" font-PoppinsRegular text-ft3 py-2">
                Nulla ipsum fugiat sit amet exercitation mollit consequat
                commodo commodo culpa Lorem irure ad. Nulla consequat qui ad
                velit veniam ipsum tempor Lorem eu sit adipisicing tempor.
                Aliqua adipisicing cillum laborum elit non consequat.
              </p>
              <div className="font-PoppinsRegular text-ft2 pt-16per tablet:pt-8per mobile:pt-8per mobile:flex mobile:justify-center">
                Watched the video?
              </div>
              {validate && (
                <ValidateTask
                  popup={validate}
                  close={() => setValidation(false)}
                  changeTab={() => setActiveTab(2)}
                  updateTask={() => setUpdateTask(true)}
                />
              )}
              <div className="mobile:flex mobile:justify-center">
                <button
                  className="grid content-center bg-blue-55 text-white rounded-md mt-2per py-2 px-8per"
                  onClick={() => handleValidation()}
                >
                  Validate Task
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <div className="pt-3per flex w-full tablet:block mobile:block">
              <img
                src="/images/import-pool.png"
                alt="pool"
                className="w-3/5 tablet:w-full mobile:w-full"
              />
              <div className="w-2/5 ml-3per tablet:w-full mobile:w-full tablet:ml-0 mobile:ml-0">
                <div className="font-PoppinsSemiBold text-ft8 py-2 tablet:mt-2per mobile:mt-2per">
                  Import Pool
                </div>
                <p className=" font-PoppinsRegular text-ft3 py-2">
                  Sunt sit qui aliquip ullamco commodo nostrud reprehenderit
                  magna. Dolor fugiat labore amet dolor incididunt consequat
                  officia minim nostrud Lorem dolor excepteur irure incididunt.
                  Ex amet duis id ipsum cupidatat.
                </p>
                <div className="font-PoppinsRegular text-ft2 pt-16per tablet:pt-8per mobile:pt-8per mobile:flex mobile:justify-center">
                  Watched the video?
                </div>
                {validate && <ValidateTask />}
                <div className="mobile:flex mobile:justify-center">
                  <button className="grid content-center bg-blue-55 text-white rounded-md mt-2per py-2 px-8per">
                    Validate Task
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center py-4per whitespace-nowrap">
              Facing any technical issue?&nbsp;
              <span className="text-navyBlue-99 cursor-pointer">
                Contact us
              </span>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <div className="w-full flex tablet:block mobile:block">
              <div className="w-3/5 pt-3per tablet:w-full mobile:w-full">
                <img
                  src="/images/bridge-reward.png"
                  alt="reward"
                  className="w-full h-full"
                />
              </div>
              <div className="w-2/5 ml-3per mt-3per tablet:w-full mobile:w-full tablet:ml-0 mobile:ml-0">
                <div className="font-PoppinsSemiBold text-ft8 py-2 tablet:mt-2per mobile:mt-2per">
                  Claim your Reward
                </div>
                <p className=" font-PoppinsRegular text-ft3 py-2">
                  Sunt sit qui aliquip ullamco commodo nostrud reprehenderit
                  magna. Dolor fugiat labore amet dolor incididunt.
                </p>
                <div className="mobile:flex mobile:justify-center">
                  <button className="grid content-center bg-green-20 text-white rounded-md mt-8per py-2 px-8per">
                    Claim Reward
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center py-4per whitespace-nowrap">
              Facing any technical issue?&nbsp;
              <span className="text-navyBlue-99 cursor-pointer">
                Contact us
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
