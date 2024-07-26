import React from "react";

const CustomDomain = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-[414px] w-full 2xl:text-[14px] xl:text-[12px] text-[10px] custom-bg shadow-left p-4">
        <h2 className="gap-2 flex font-bold items-center">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.80005 13.7492C11.2518 13.7492 14.05 10.951 14.05 7.49922C14.05 4.04744 11.2518 1.24922 7.80005 1.24922C4.34827 1.24922 1.55005 4.04744 1.55005 7.49922C1.55005 10.951 4.34827 13.7492 7.80005 13.7492Z"
              stroke="#334155"
              stroke-width="1.875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.80005 4.99922V7.49922"
              stroke="#334155"
              stroke-width="1.875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.80005 9.99922H7.8063"
              stroke="#334155"
              stroke-width="1.875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Important notice
        </h2>
        <div className="2xl:text-[12px] xl:text-[10px] flex flex-col space-y-4 mt-4">
          <p className=" font-medium">
            To complete domain integration, please note that you must:
          </p>
          <p className="font-light">
            Purchase a Monthly Domain Subscription to seamlessly link your
            custom domain for a professional presence.
            <br />
            Consider our Bundle Subscription for domain integration along with
            additional features like newsletters, contact forms, blogs, andmore.
          </p>
          <p className="2xl:text-[12px] xl:text-[10px] font-medium">
            Choose the option that best suits your needs, and feel free to reach
            out to our support team for assistance.
          </p>
        </div>
      </div>
      <div className="border-[#E2E8F0] rounded-xl border ">
        <div className="px-6 py-4 flex flex-col space-y-4  ">
          {" "}
          <div className="border-[#E2E8F0] rounded-xl border w-full max-w-[372px] flex-col p-4  space-y-2">
            <h2 className="gap-2 flex font-light items-center">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.80005 13.7492C11.2518 13.7492 14.05 10.951 14.05 7.49922C14.05 4.04744 11.2518 1.24922 7.80005 1.24922C4.34827 1.24922 1.55005 4.04744 1.55005 7.49922C1.55005 10.951 4.34827 13.7492 7.80005 13.7492Z"
                  stroke="#334155"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.80005 4.99922V7.49922"
                  stroke="#334155"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.80005 9.99922H7.8063"
                  stroke="#334155"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Set the following record on your DNS provider to continue
            </h2>
            <div className="text-[14px] font-bold flex items-center w-full justify-between flex-row px-6">
              <span className="flex gap-0.5 flex-col">
                <h2>Type</h2>
                <h2 className="font-light">A</h2>
              </span>
              <span className="border-[#E2E8F0] border h-[25px]"></span>
              <span className="flex gap-0.5 flex-col">
                <h2>Name</h2>
                <h2 className="font-light">@</h2>
              </span>
              <span className="border-[#E2E8F0] opacity-0  border h-[25px]"></span>
              <span className="flex gap-0.5 flex-col">
                <h2>Value</h2>
                <h2 className="font-light flex w-full justify-between gap-6 flex-row">
                  34.172.101.42
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.1001"
                      y="0.650024"
                      width="23"
                      height="23"
                      rx="5.5"
                      fill="white"
                    />
                    <rect
                      x="1.1001"
                      y="0.650024"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#E2E8F0"
                    />
                    <path
                      d="M16.2667 10.3167H11.6834C11.1771 10.3167 10.7667 10.7271 10.7667 11.2333V15.8167C10.7667 16.3229 11.1771 16.7333 11.6834 16.7333H16.2667C16.773 16.7333 17.1834 16.3229 17.1834 15.8167V11.2333C17.1834 10.7271 16.773 10.3167 16.2667 10.3167Z"
                      stroke="#1E293B"
                      stroke-width="0.916667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.93339 13.9833C8.42922 13.9833 8.01672 13.5708 8.01672 13.0667V8.48335C8.01672 7.97918 8.42922 7.56668 8.93339 7.56668H13.5167C14.0209 7.56668 14.4334 7.97918 14.4334 8.48335"
                      stroke="#1E293B"
                      stroke-width="0.916667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h2>
              </span>
            </div>
            <div className="text-[14px] font-bold flex items-center w-full justify-between flex-row px-6 pb-4">
              <span className="flex  flex-col">
                <h2 className="font-light">CNAME</h2>
              </span>
              <span className="border-[#E2E8F0] border h-[25px]"></span>
              <span className="flex flex-col">
                <h2 className="font-light">www</h2>
              </span>
              <span className="border-[#E2E8F0] opacity-0  border h-[25px]"></span>
              <span className="flex gap-0.5 flex-col">
                <span className="font-light flex w-full   justify-between gap-6 flex-row">
                  <span className="opacity-0">dc</span>
                  <h2 className="translate-x-4">YOUR_DOMAIN </h2>{" "}
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.1001"
                      y="0.650024"
                      width="23"
                      height="23"
                      rx="5.5"
                      fill="white"
                    />
                    <rect
                      x="1.1001"
                      y="0.650024"
                      width="23"
                      height="23"
                      rx="5.5"
                      stroke="#E2E8F0"
                    />
                    <path
                      d="M16.2667 10.3167H11.6834C11.1771 10.3167 10.7667 10.7271 10.7667 11.2333V15.8167C10.7667 16.3229 11.1771 16.7333 11.6834 16.7333H16.2667C16.773 16.7333 17.1834 16.3229 17.1834 15.8167V11.2333C17.1834 10.7271 16.773 10.3167 16.2667 10.3167Z"
                      stroke="#1E293B"
                      stroke-width="0.916667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.93339 13.9833C8.42922 13.9833 8.01672 13.5708 8.01672 13.0667V8.48335C8.01672 7.97918 8.42922 7.56668 8.93339 7.56668H13.5167C14.0209 7.56668 14.4334 7.97918 14.4334 8.48335"
                      stroke="#1E293B"
                      stroke-width="0.916667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>{" "}
          <div className="flex flex-col space-y-2.5">
            <h2 className="2xl:text-[22px] xl:text-[16px] text-[12px] ">
              Custom domain
            </h2>
            <p className="2xl:text-[14px] xl:text-[12px] text-[10px]  ">
              This will be the domain used for your project.
            </p>
          </div>
          <div>
            <input
              className="bg-gray-200 text-black p-2 rounded-xl w-full"
              placeholder="example.com"
            />
          </div>
        </div>
        <div className="justify-between w-full flex bg-[#F9FAFB] p-3.5 flex-row">
          <button className="opacity-0 UPPERCASE bg-[#00A4A6] text-white text-[14px] font-semibold rounded-xl p-2 px-4">
            Add domain
          </button>{" "}
          <button className="UPPERCASE bg-[#00A4A6] text-white text-[14px] font-semibold rounded-xl p-2 px-4">
            Add domain
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDomain;
