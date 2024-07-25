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
    <div className="p-4 flex flex-col xl:flex-col 2xl:flex-col gap-8 mx-auto max-w-[1640px]">
      <div className="xl:mt-28 mt-20 2xl:mt-40 flex flex-col xl:flex-row 2xl:flex-row md:flex-row lg:flex-row sm:flex-row justify-between  w-full mx-auto">
        <div className="xl:space-y-2 space-y-0.5 2xl:space-y-2 flex flex-col   ">
          <h1 className="text-[16px] xl:text-[18px] 2xl:text-[22px] font-semibold">AI Website Builder</h1>
          <p className="text-gray-600 text-[12px] xl:text-[16px]">Manage your projects.</p>
        </div>
        <div className="flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row sm:flex-row flex-col  gap-6  mt-4 xl:mt-0">
          <div className="bg-gray-100 border  border-gray-300 px-3 py-2 rounded-xl flex items-center w-full ">
            <Search className="text-gray-500" size={16} />
            <input
              type="search"
              className="outline-none h-[24px] xl:w-[461px] 2xl:w-[461px] max-w-[461px] xl:h-[34px] 2xl:h-[52px] w-full bg-gray-100 text-sm px-2"
              placeholder="Search websites"
            />
          </div>
          <button
            onClick={handleCreateNewClick}
            className="bg-teal-600 whitespace-nowrap text-white text-sm xl:text-base py-2 px-4 xl:px-6 rounded-xl flex items-center gap-2"
          >
            <Plus size={20} />
            Create new AI website 
          </button>
        </div>
      </div>

      <div className="p-4 grid gap-4 mt-2 w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {projects.map((data, index) => (
          <ProjectCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
}

const WebApp = () => {
  return (
    <RootLayout shoWebar={true}>
      <main className="max-w-[1640px] mx-auto">
        <WebsiteBuilder />
      </main>
    </RootLayout>
  );
};

export default WebApp;
