import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/styles";
import { validationId } from "../../constants";

const useStyles = makeStyles(() => ({
  paper: {
    width: "auto !important",
    alignSelf: "baseline",
    top: "3% !important",
    zIndex: "20 !important",
    borderRadius: "10px !important",
    paddingLeft: "16px !important",
    paddingRight: "16px !important",
    paddingBottom: "40px !important",
    "@media screen and (min-width: 300px) and (max-width: 767px)": {
      width: "100% !important",
      height: "100% !important",
      top: "6.5% !important",
      margin: "0px !important",
      borderRadius: "0px !important",
      backgroundColor: "#F8FBFF !important",
    },
  },
}));

export default function ValidationPopup(props) {
  const classes = useStyles();
  const [success, setSuccess] = React.useState(false);

  const handleValidate = async () => {
    if (success) {
      await props.close();
      await props.changeTab();
      await props.updateTask();
    }
    setSuccess(true);
  };

  return (
    <>
      <div className="mobile:bg-blue-5">
        <Dialog
          classes={{ paper: classes.paper }}
          open={props.popup}
          hideBackdrop={
            window.outerWidth > 300 && window.outerWidth < 768 ? true : false
          }
        >
          <div className="flex pt-3per justify-between">
            <div className="grid content-center font-PoppinsSemiBold text-ft6 mobile:py-2per">
              Validate Task
            </div>
            <div className="grid content-center">
              <img
                src="/images/close.png"
                alt="close"
                className="w-6 h-6 cursor-pointer mobile:hidden"
                onClick={() => props.close()}
              />
            </div>
          </div>
          <div className="mobile:bg-white mobile:px-4per py-4per">
            <div className="pt-4per">
              <div className="font-PoppinsRegular whitespace-nowrap mobile:whitespace-normal text-ft2">
                1. Open&nbsp;
                <span className="text-navyBlue-99">
                  www.pancakeswap.finance
                </span>
                &nbsp;and click on Trade.
              </div>
              <div className="grid content-center font-PoppinsRegular pt-1per text-ft2">
                2. Connect your wallet.
              </div>
              <div className="grid content-center font-PoppinsRegular pt-1per text-ft2">
                3. Make a Swap as explained in the video.
              </div>
            </div>
            <div className=" font-PoppinsRegular text-ft2 pt-8per">
              Copy paste swap transaction address from&nbsp;
              <span className="text-navyBlue-99">Etherscan</span>
              &nbsp;and click verify.
            </div>
            <div className="mt-2per grid content-center py-1per border-black-20 border-current border-2 text-black-50 rounded w-full px-1per mobile:overflow-auto">
              {validationId.PANCAKESWAP}
            </div>
            <div
              className={`flex ${success ? "justify-between" : " ml-4per justify-end"}`}
            >
              {success && (
                <div className="flex">
                  <div className="grid content-center">
                    <img
                      src="/images/check-true.png"
                      alt="true"
                      className="w-4 h-4 mobile:h-6 mobile:w-6 mobile:mr-2"
                    />
                  </div>
                  <div className="text-green-20 mt-3per mobile:mt-1per py-2 whitespace-nowrap mobile:whitespace-normal font-PoppinsRegular ml-1per w-full mobile:text-ft1">
                    Success! Task-1 Completed
                  </div>
                </div>
              )}

              <button
                className="grid content-center bg-blue-55 text-white mobile:text-ft1 rounded-md mt-2per py-2 px-8per"
                onClick={() => handleValidate()}
              >
                {success ? "Next Task" : "Validate Task"}
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
