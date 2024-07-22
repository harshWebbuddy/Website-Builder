"use client";

import { Plus, Search } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./components/project";
import { projects } from "../mainapp/components/data";
import RootLayout from "../layout";
import { useRouter } from "next/navigation";

const WebsiteBuilder = () => {
   const router = useRouter(); 

  const handleCreateNewClick = () => {
    router.push('/websitebuilding'); 
  };
  return (
    <div >
           <div className="2xl:p-0 p-4  ">
 <div className="mt-40 flex flex-col xl:flex-row 2xl:flex-row justify-between gap-8 max-w-[1700px] w-full mx-auto  "> <div className="space-y-2 w-full flex flex-col 2xl:items-start xl:items-center items-center ">
    <h1 className="xl:text-[18px] text-[16px] 2xl:text-[22px] font-semibold">AI website builder</h1>
    <p className="flex items-center gap-2 text-[#3D3D3D] text-opacity-50 text-[12px] 2xl:text-[15px]">
      Manage your projects.
    </p>
  </div>
  <div className="w-full flex gap-2 ">
    <div className="bg-[#F4F4F4] border border-[#EBEBEB] px-2 py-1 rounded-xl flex gap-2 items-center w-full max-w-[416px]">
      <Search className="text-gray-500" size={16} />
      <input
        type="search"
        className="outline-none h-[24px]  2xl:h-[42px] w-full bg-[#F4F4F4] text-sm"
        placeholder="Search websites"
      />
    </div>
    <button
      onClick={handleCreateNewClick}
      className="bg-[#00A4A6] text-white text-[10px] xl:text-[14px] 2xl:text-[18px] sheen transition duration-500 px-2 2xl:px-5 py-2 rounded-xl flex items-center gap-2"
    >
      <Plus size={20} />
      Create new AI Website
    </button>
  </div>
</div></div>

        <div className="2xl:p-0 p-4 max-w-[1700px] w-full mx-auto grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-6">
        {projects.map((data, index) => (
          <ProjectCard {...data} key={index} />
        ))}
      </div>
      </div>
    )
}

const WebApp = () => {
  return (
    <RootLayout shoWebar={true}>
      <main className="max-w-[1450px] mx-auto mb-10 xl:mb-16 2xl:mb-20">
        <WebsiteBuilder />
      </main>
    </RootLayout>
  );
};

export default WebApp;