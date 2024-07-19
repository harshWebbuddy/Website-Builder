import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { navArray } from "../data";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Collapse } from "react-collapse";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

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
              <Dialog.Panel className="overflow-auto new-scroll w-full h-full max-w-[1520px] mx-auto bg-white backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-between gap-10">
                <div>
                  <div className="flex justify-between">
                    <Link href="/">
                      <img src="/logo/logo.png" alt="logo" width={160} className="hidden md:block" />
                      <img src="/logo/logo.png" alt="logo" width={140} className="md:hidden block" />
                    </Link>
                    <button onClick={onClose} className="p-2 ring-1 ring-[gray] rounded-xl cursor-pointer">
                      <MdClose size={25} className="text-[gray]" />
                    </button>
                  </div>
                  <div className="mt-8">
                    <div className="space-y-4 mt-4">
                      {navArray.map((navItem, i) => (
                        <div key={i} className="border-b border-[gray] pb-2">
                          {navItem.link ? (
                            <div className={`flex justify-between ${pathname == navItem.link && "!border-[#FB524A] !text-[#FB524A]"}`}>
                              <h1>
                                <Link href={navItem.link && navItem.link}>{navItem.category_title}</Link>
                              </h1>
                              <ArrowDownRight size={20} className="transform -rotate-90 text-[gray]" />
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
                          {/* <div className="ml-6">
                            {navItem.link ? null : (
                              <Collapse isOpened={isExpanded && currentItem === i}>
                                <div className="pb-6 max-w-3xl space-y-4 mt-3">
                                  {navItem.sublinks.map((linkItem, i) => (
                                    <div key={i}>
                                      {linkItem.services ? (
                                        <div className="flex gap-x-2 items-center group">
                                          <h2
                                            className="cursor-pointer"
                                            onClick={() => {
                                              if (currentSubItem === i) {
                                                return setSubItemExpanded((prev) => !prev);
                                              }
                                              setSubItemExpanded(true);
                                              setCurrentSubItem(i);
                                            }}>
                                            {linkItem.title}
                                          </h2>
                                          <ChevronDown
                                            size={16}
                                            className={`text-[#7c7c7c] transition duration-200 ${subItemExpanded && currentSubItem === i && "rotate-180"}`}
                                          />
                                        </div>
                                      ) : (
                                        <Link href={linkItem.link} onClick={onClose}>
                                          <h2 className="hover:underline w-fit decoration-[gray]">{linkItem.title}</h2>
                                        </Link>
                                      )}
                                      <div className="pl-6 border-l-[4px] rounded-l border-[#e4e4e4]">
                                        {linkItem.services && (
                                          <Collapse isOpened={subItemExpanded && currentSubItem === i}>
                                            <div className="max-w-3xl space-y-4 py-3">
                                              {linkItem.services.map((serviceItem, i) => (
                                                <div key={i}>
                                                  <Link href={serviceItem.link} onClick={onClose}>
                                                    <p className="hover:underline w-fit decoration-[gray]">{serviceItem.name}</p>
                                                  </Link>
                                                </div>
                                              ))}
                                            </div>
                                          </Collapse>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </Collapse>
                            )}
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <Link href="/contact" className="self-end">
                  <button className="px-6 h-[54px] border border-[#FB524A] bg-transparent rounded-md hover:bg-white/10 transition duration-300 font-bold whitespace-nowrap">
                    {project ? "Start A Project" : "Get Qoute -It's Free"}
                  </button>
                </Link> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
