import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { navArray } from "../data";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Collapse } from "react-collapse";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Image from "next/image";

export default function Modal({ onClose, isOpen, project }) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const [subItemExpanded, setSubItemExpanded] = useState(false);
  const [currentSubItem, setCurrentSubItem] = useState(0);
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="w-full h-full flex min-h-full  p-3">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="overflow-auto new-scroll w-full h-full max-w-[1520px] mx-auto bg-[#0D121F] backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-between gap-10">
                <div className="">
                  <div className="flex justify-between">
                    <Link href="/">
                      <Image src="/logo.svg" alt="logo" width={160} className="hidden md:block" />
                      <Image src="/logo.svg" alt="logo" width={140} className="md:hidden block" />
                    </Link>
                    <button onClick={onClose} className="p-2 ring-1 ring-[#00A4A6] shadow-md shadow-[#00A4A6] rounded-xl cursor-pointer">
                      <MdClose size={25} className="text-[white]" />
                    </button>
                  </div>
                  <div className="mt-8">
                    <div className="space-y-4 mt-4">
                      {navArray.map((navItem, i) => (
                        <div key={i} className="border-b border-[#00A4A6] pb-2">
                          {navItem.link ? (
                            <div className={`flex justify-between ${pathname == navItem.link && "!border-[#00A4A6] !text-white"}`}>
                              <h1>
                                <Link href={navItem.link && navItem.link}>{navItem.category_title}</Link>
                              </h1>
                              <ArrowDownRight size={20} className="transform -rotate-90 text-[white] " />
                            </div>
                          ) : (
                            <div
                              className={`flex justify-between`}
                              onClick={() => {
                                if (currentItem === i) {
                                  setSubItemExpanded(false);
                                  return setIsExpanded((prev) => !prev);
                                }
                                setIsExpanded(true);
                                setCurrentItem(i);
                              }}>
                              <h1 className={`cursor-pointer transition ${isExpanded && currentItem === i && "font-bold"}`}>{navItem.category_title}</h1>
                              <p className="text-[gray] cursor-pointer">
                                {isExpanded && currentItem === i ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
                              </p>
                            </div>
                          )}
                        
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
             <div className="flex flex-row justify-between">           
                <Link href="" className="group ">
      <button className="px-8 py-2.5 flex flex-row items-center gap-x-2 shadow-md shadow-[#00A4A6] text-ellipsis border border-[#00A4A6] rounded-md group-hover:bg-white text-[16px] text-[#00A4A6] font-medium group-hover:text-[#00A4A6] whitespace-nowrap transition-all duration-300 ease-in-out">
        Sign Up
      
      </button>
    </Link> <Link href="" className="group">
      <button className="px-8 py-2.5 flex flex-row items-center gap-x-2 text-ellipsis shadow-md shadow-[#00A4A6] bg-[#00A4A6] rounded-md group-hover:bg-white text-[16px] text-white font-medium group-hover:text-[#00A4A6] whitespace-nowrap transition-all duration-300 ease-in-out">
        Sign In
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 ease-in-out fill-current group-hover:fill-[#00A4A6]"
        >
          <path d="M12.5 1C12.5 0.447714 12.0523 -7.61451e-07 11.5 -3.39982e-07L2.5 -2.13542e-07C1.94772 -5.50717e-07 1.5 0.447715 1.5 0.999999C1.5 1.55228 1.94772 2 2.5 2L10.5 2L10.5 10C10.5 10.5523 10.9477 11 11.5 11C12.0523 11 12.5 10.5523 12.5 10L12.5 1ZM2.20711 11.7071L12.2071 1.70711L10.7929 0.292893L0.792893 10.2929L2.20711 11.7071Z" />
        </svg>
      </button>
    </Link></div>
          
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
