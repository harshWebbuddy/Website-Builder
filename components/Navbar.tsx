"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Menu } from "./client/Menu";
import Modal from "./client/Modal";
interface NavbarProps {
  bcolor?: boolean;
  gradientbg?: boolean;
  aicolor?: boolean;
  project?: any; // Adjust this type based on what `project` should be
  isTransparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ bcolor, gradientbg, aicolor, project, isTransparent }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 80);
    setPrevScrollPos(currentScrollPos);
  };

  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Fragment>
      <header
        ref={headerRef}
        className={`absolute z-10 top-0 py-2 left-0 w-full navbar ${isTransparent && !isScrolled && "!bg-transparent"} ${
          gradientbg && "bg-gradient-to-r from-[#3E0300] to-[#202020] !text-white"
        } ${aicolor && "bg-[#F4F4F4ff]"} ${bcolor && "bg-[#202020ff]"} ${
          visible ? `visible ${isScrolled && "bg-white shadow-2xl shadow-[#bdbdbd31]"}` : "hidden shadow-lg shadow-[#bdbdbd31] !bg-[#FFF]"
        }`}
      >
        <div className="px-2 sm:px-6 md:px-16 py-0.5 md:py-2.5 w-full">
          <nav className="max-w-[1054px] mx-auto w-full">
            <div className="flex justify-between items-center">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={160}
                  height={50}
                  className="hidden md:block"
                />
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={130}
                  height={50}
                  className="md:hidden block"
                />
              </Link>
              <div className="flex xl:hidden items-center gap-x-4 md:gap-3 text-white">
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-[#00A4A6] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] grid place-content-center rounded-md"
                >
                  <BiMenu size={27} className="text-white" />
                </button>
              </div>
              <div className={`hidden xl:flex items-center gap-x-4 md:gap-3 text-[#151515] ${isTransparent && !isScrolled && "text-white"}`}>
                <div className="flex gap-x-4 right-0 top-1  font-bold rounded-xl nav-bg bg-transparent mt-2">
                  <Menu />
                </div>
                <div><svg width="2" height="21" viewBox="0 0 2 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" y1="2.18557e-08" x2="0.999999" y2="21" stroke="#C9C9C9"/>
</svg>
</div>
                <Link href="" className="group ml-4">
      <button className="px-8 py-2.5 flex flex-row items-center gap-x-2 shadow-md shadow-[#00A4A6] text-ellipsis border border-[#00A4A6] rounded-md group-hover:bg-white text-[16px] text-[#00A4A6] font-medium group-hover:text-[#00A4A6] whitespace-nowrap transition-all duration-300 ease-in-out">
        Sign Up
      
      </button>
    </Link> <Link href="/mainapp" className="group">
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
    </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} project={project} /> */}
    </Fragment>
  );
};

export default Navbar;
