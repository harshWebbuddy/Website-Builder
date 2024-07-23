"use client";

import "@/styles/button.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { navLinks } from "./nav";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Collapse } from "react-collapse";
import { ProfileButton } from "../ProfileButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: Props) {
  const pathname = usePathname();
  const mainRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(isOpen);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentItem, setCurrentItem] = useState<number | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (mainRef.current && !mainRef.current.contains(event.target as Node)) {
      setOpen(false);
      onClose()
      
    }
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={mainRef}
      className={`${
        open ? "w-[300px]" : "w-0"
      } overflow-hidden bg-[#0D121F] fixed right-0 top-0 bottom-0 h-screen shadow-2xl z-[9999999] transition-[width] duration-500`}
    >
      <div className="pl-8 flex flex-col space-y-8 pt-6 pb-10 px-4 h-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo or Brand Name */}
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={160} height={100} className="hidden md:block" />
            <Image src="/logo.svg" alt="logo" width={140} height={100} className="md:hidden  block" />
          </Link>
          {/* Close Button */}
          <button
            onClick={() => {
              setOpen(false);
              onClose();
            }}
            className="p-2 ring-1 ring-[#00A4A6] shadow-md shadow-[#00A4A6] rounded-xl cursor-pointer"
          >
            <MdArrowOutward size={24} className="text-white" />
          </button>
        </div>
        <div className="">
          {navLinks.map((navItem, i) => (
            <div key={i} className="border-b text-white border-[#00A4A6] pb-2">
              {navItem.href ? (
                <Link className="flex w-full justify-between" href={navItem.href}>
                  <h2 className={`block text-lg font-medium ${
                    pathname === navItem.href ? "text-white" : "text-gray-400"
                  }`}>
                    {navItem.label}
                  </h2> <MdArrowOutward size={24} className="text-white" />
                </Link>
              ) : (
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => {
                    if (currentItem === i) {
                      setIsExpanded(!isExpanded);
                    } else {
                      setIsExpanded(true);
                      setCurrentItem(i);
                    }
                  }}
                >
               
                </div>
              )}
            
            </div>
          ))}
        </div>
        <div className="flex flex-col absolute  bottom-4 space-y-4">
          <ProfileButton /> {/* Replace buttons with ProfileButton */}
        </div>
      </div>
    </nav>
  );
}
