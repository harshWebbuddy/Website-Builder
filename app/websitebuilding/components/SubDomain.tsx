import React from "react";

const SubDomain = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col space-y-1.5">
        <h2 className="2xl:text-[14px] xl:text-[12px] text-[10px] font-bold">
          Subdomain configuration
        </h2>
        <p className="2xl:text-[12px] xl:text-[10px] text-[8px] font-light  ">
          Subdomains are prefixes to your project's URL. You can use them for
          public access or testing.
        </p>
      </div>
      <div className="flex flex-col gap-1.5 font-medium">
        {" "}
        <h2>
          Draft subdomain{" "}
          <span className="text-red-500 font-bold xl:text-[14px] sm:text-[12px]">
            *
          </span>
        </h2>
        <span className="justify-between rounded-xl font-light w-full flex bg-[#F2F2F2]  flex-row">
          <button className="UPPERCASE   text-black text-[14px] font-semibold rounded-xl p-2 px-4">
            aibuilder.blythe-jbe{" "}
          </button>{" "}
          <button className="UPPERCASE bg-[#E5E5E5] w-full max-w-[147px] text-black text-[14px]  rounded-xl p-2 px-4">
            .aibuilder.dev{" "}
          </button>
        </span>
      </div>
      <div className="flex flex-col gap-1.5 font-medium">
        {" "}
        <h2>
          Draft subdomain{" "}
          <span className="text-red-500 font-bold xl:text-[14px] sm:text-[12px]">
            *
          </span>
        </h2>
        <span className="justify-between rounded-xl font-light w-full flex bg-[#F2F2F2]  flex-row">
          <button className="UPPERCASE   text-black text-[14px] font-semibold rounded-xl p-2 px-4">
            aibuilder.blythe-jbe{" "}
          </button>{" "}
          <button className="UPPERCASE bg-[#E5E5E5] w-full max-w-[147px] text-black text-[14px]  rounded-xl p-2 px-4">
            .aibuilder.dev{" "}
          </button>
        </span>
      </div>
    </div>
  );
};

export default SubDomain;
