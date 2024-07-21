"use client";

import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import ProjectCard from "./components/project";
import { projects } from "../mainapp/components/data";
import RootLayout from "../layout";
import Image from "next/image";

const WebsiteBuilder=()=> {
  return (
    
    <Fragment>
      <main className="mt-40">
        <div className="flex max-w-[1740px] max-h-[1080x] mx-auto justify-between items-center mt-20">
          <div className="space-y-2 w-full">
            <h1 className="text-2xl font-semibold">AI website builder</h1>
            <p className="flex items-center gap-2 text-[#3D3D3D] text-opacity-50 text-[15px]">Manage your projects.</p>
          </div>
          <div className="w-full flex justify-end gap-2">
            <div className="bg-white border border-[#EBEBEB] px-4 py-1 rounded-xl flex gap-3 items-center w-full max-w-md">
              <Search className="text-gray-500" size={20} />
              <input type="search" className="outline-none h-[40px] w-full" placeholder="Search websites" />
            </div>
            <Link href="/app/create/website-builder/new-website">
              <button className="bg-[#00A4A6] text-white sheen transition duration-500 px-5 py-4 rounded-xl flex items-center gap-2">
                <Plus size={20} />
                Create new AI Website
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-[1500px] w-full mx-auto grid grid-cols-4  gap-4 mt-6">
          {projects.map((data, index) => (
            <ProjectCard {...data} key={index} />
          ))}
        </div>
      </main>
    </Fragment>
  );
}


const WebApp = () => {
  return (
    <RootLayout shoWebar={true} >
    <div className="bg-[#E8E8E8]/50">  <main className="">
      
      
    <section className="max-w-[1450px] mx-auto mb-10 xl:mb-16 2xl:mb-20">
 <WebsiteBuilder/>
    </section>

    

    
   
    
  </main></div></RootLayout>
  )
}

export default WebApp