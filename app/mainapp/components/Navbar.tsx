"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/button.css";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { navLinks } from "./nav";
import MobileSidebar from "./MobileSide";

export default function WebsiteNavbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="absolute top-0 w-full px-4 py-4 z-[5] bg-[#E8E8E8]">
      <div className="bg-white border shadow-xl rounded-xl max-w-[1480px] mx-auto">
        <nav className="w-full flex items-center justify-between">
        <svg  className="select-none min-w-[180px] max-h-14 ml-6" 
 width="162" height="35" viewBox="0 0 162 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_47_212)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.77832 11.2708C0.77832 8.26061 3.21859 5.82034 6.22882 5.82034H18.6871C21.6973 5.82034 24.1376 8.26061 24.1376 11.2708V17.5C24.1376 17.93 23.789 18.2786 23.359 18.2786C22.9289 18.2786 22.5803 17.93 22.5803 17.5V13.2175H2.33561V23.7291C2.33561 25.8793 4.07868 27.6224 6.22882 27.6224H12.458C12.888 27.6224 13.2366 27.971 13.2366 28.401C13.2366 28.831 12.888 29.1796 12.458 29.1796H6.22882C3.21859 29.1796 0.77832 26.7394 0.77832 23.7291V11.2708ZM5.06086 9.71356C5.06086 9.28351 5.40946 8.93492 5.8395 8.93492H6.61814C7.04819 8.93492 7.39679 9.28351 7.39679 9.71356C7.39679 10.1436 7.04819 10.4922 6.61814 10.4922H5.8395C5.40946 10.4922 5.06086 10.1436 5.06086 9.71356Z" fill="black"/>
<path d="M19.4471 18.8846C19.3665 18.5302 19.0513 18.2786 18.6878 18.2786C18.3243 18.2786 18.0091 18.5302 17.9286 18.8846L17.4977 20.7792C17.2985 21.6555 16.6142 22.3398 15.7379 22.5391L13.8433 22.9699C13.4888 23.0505 13.2373 23.3656 13.2373 23.7291C13.2373 24.0927 13.4888 24.4078 13.8433 24.4884L15.7379 24.9192C16.6142 25.1185 17.2985 25.8027 17.4977 26.6791L17.9286 28.5737C18.0091 28.9281 18.3243 29.1796 18.6878 29.1796C19.0513 29.1796 19.3665 28.9281 19.4471 28.5737L19.8779 26.6791C20.0771 25.8027 20.7614 25.1185 21.6377 24.9192L23.5323 24.4884C23.8868 24.4078 24.1383 24.0927 24.1383 23.7291C24.1383 23.3656 23.8868 23.0505 23.5323 22.9699L21.6377 22.5391C20.7614 22.3398 20.0771 21.6555 19.8779 20.7792L19.4471 18.8846Z" fill="#00A4A6"/>
</g>
<path d="M35.8229 26L41.631 9.13096H45.935L51.7432 26H48.573L47.3003 22.2976H40.2658L39.0162 26H35.8229ZM41.0062 19.9373H46.583L44.9169 15.1936L43.8525 11.9309H43.7368L42.6492 15.1936L41.0062 19.9373ZM53.0479 26V9.13096H56.1024V26H53.0479ZM63.6136 26V9.13096H71.6432C72.7848 9.13096 73.7258 9.31608 74.4663 9.68632C75.2222 10.0411 75.793 10.5425 76.1786 11.1904C76.5643 11.8383 76.7571 12.5942 76.7571 13.4581C76.7571 14.0443 76.6569 14.592 76.4563 15.1011C76.2558 15.6102 75.9627 16.0421 75.577 16.3969C75.1913 16.7517 74.7131 17.0063 74.1423 17.1605V17.3225C74.8211 17.4459 75.3842 17.7005 75.8315 18.0861C76.2789 18.4564 76.6183 18.9115 76.8497 19.4514C77.0965 19.9759 77.2199 20.5621 77.2199 21.21C77.2199 22.2436 76.9808 23.1229 76.5026 23.848C76.0398 24.5576 75.3687 25.0975 74.4894 25.4678C73.6101 25.8226 72.5457 26 71.2961 26H63.6136ZM66.5755 23.6166H70.9721C72.052 23.6166 72.8388 23.3775 73.3324 22.8992C73.8415 22.421 74.096 21.7962 74.096 21.0249C74.096 20.1919 73.8338 19.5671 73.3093 19.1506C72.8002 18.734 72.0906 18.5258 71.1804 18.5258H66.5755V23.6166ZM66.5755 16.2349H71.0416C71.6432 16.2349 72.1369 16.1347 72.5225 15.9341C72.9082 15.7336 73.1936 15.4636 73.3787 15.1242C73.5792 14.7694 73.6795 14.3529 73.6795 13.8747C73.6795 13.1033 73.425 12.5171 72.9159 12.116C72.4068 11.6995 71.7203 11.4912 70.8564 11.4912H66.5755V16.2349ZM86.108 26.2083C84.6271 26.2083 83.3621 25.946 82.3131 25.4215C81.2641 24.8816 80.4619 24.1257 79.9065 23.1538C79.3512 22.1665 79.0735 21.0018 79.0735 19.6596V9.13096H82.1048V19.6365C82.1048 20.485 82.2668 21.1946 82.5908 21.7654C82.9147 22.3362 83.3775 22.7681 83.9792 23.0612C84.5808 23.3389 85.2981 23.4777 86.1312 23.4777C87.0259 23.4777 87.7664 23.3235 88.3526 23.0149C88.9388 22.7064 89.3785 22.2668 89.6716 21.696C89.9801 21.1252 90.1344 20.4387 90.1344 19.6365V9.13096H93.1657V19.6596C93.1657 21.0172 92.8803 22.1896 92.3096 23.1769C91.7388 24.1488 90.9289 24.897 89.8799 25.4215C88.8308 25.946 87.5736 26.2083 86.108 26.2083ZM96.1895 26V9.13096H99.244V26H96.1895ZM102.41 26V9.13096H105.465V23.848L104.956 23.2695H113.24V26H102.41ZM114.687 26V9.13096H121.675C123.326 9.13096 124.722 9.48577 125.864 10.1954C127.021 10.8896 127.892 11.8692 128.478 13.1342C129.08 14.3992 129.381 15.8801 129.381 17.577C129.381 18.8266 129.211 19.9759 128.872 21.0249C128.532 22.0585 128.031 22.9455 127.368 23.686C126.72 24.4265 125.918 24.9973 124.961 25.3984C124.005 25.7995 122.909 26 121.675 26H114.687ZM117.741 23.362H121.212C121.953 23.362 122.632 23.2541 123.249 23.0381C123.866 22.8221 124.398 22.4827 124.845 22.0199C125.293 21.5417 125.64 20.9323 125.887 20.1919C126.134 19.4514 126.257 18.5566 126.257 17.5076C126.257 16.1347 126.041 15.0317 125.609 14.1986C125.177 13.3501 124.583 12.7331 123.827 12.3474C123.087 11.9463 122.215 11.7458 121.212 11.7458H117.741V23.362ZM131.506 26V9.13096H143.539V11.7689H133.889L134.56 11.0979V16.8366L133.889 16.1655H142.405V18.6415H133.889L134.56 17.9704V24.0331L133.889 23.362H143.585V26H131.506ZM145.975 26V9.13096H154.074C155.015 9.13096 155.84 9.23894 156.55 9.45492C157.275 9.65546 157.876 9.964 158.355 10.3805C158.833 10.7816 159.188 11.2753 159.419 11.8615C159.666 12.4323 159.789 13.1033 159.789 13.8747C159.789 14.8774 159.527 15.7413 159.003 16.4663C158.494 17.1914 157.776 17.6773 156.851 17.9241V18.0861C157.73 18.2558 158.37 18.6106 158.771 19.1506C159.188 19.6905 159.396 20.431 159.396 21.372V24.1025C159.396 24.4111 159.404 24.7273 159.419 25.0513C159.45 25.3598 159.535 25.676 159.674 26H156.596C156.503 25.784 156.434 25.5141 156.388 25.1901C156.341 24.8661 156.318 24.4959 156.318 24.0794V21.9042C156.318 21.3797 156.241 20.9401 156.087 20.5852C155.933 20.2304 155.655 19.9605 155.254 19.7753C154.853 19.5748 154.282 19.4745 153.542 19.4745H149.029V26H145.975ZM149.029 17.0217H153.634C154.729 17.0217 155.508 16.7671 155.971 16.2581C156.434 15.749 156.665 15.0934 156.665 14.2912C156.665 13.6587 156.534 13.1573 156.272 12.7871C156.025 12.4014 155.67 12.1237 155.208 11.954C154.76 11.7689 154.236 11.6764 153.634 11.6764H149.029V17.0217Z" fill="black"/>
<defs>
<clipPath id="clip0_47_212">
<rect width="24.9166" height="24.9166" fill="white" transform="translate(0 5.0417)"/>
</clipPath>
</defs>
</svg>  <div className="bg-[#C9C9C9] h-8 w-[1px] -translate-x-96" />
        <div className="w-10 grid place-content-center ml-6 xl:hidden">
            <div
              className="flex flex-col items-end justify-center rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer group"
              onClick={() => setIsExpanded(true)}>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] block transition rounded-full duration-300 ${
                  isExpanded && "rotate-[135deg] translate-y-[9px] w-5"
                }`}></span>
              <span
                className={`w-4 relative h-[2px] bg-[#8E93A4] transition  rounded-full duration-100 opacity-100 ${
                  isExpanded && "opacity-0 invisible"
                } `}></span>
              <span
                className={`w-5 relative h-[2px] bg-[#8E93A4] rounded-full transition duration-300 ${
                  isExpanded && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}></span>
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-x-12">
            <div className="">
              <ul className="text-[#636369] flex gap-x-10">
                {navLinks.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <div
                      className={`flex flex-row gap-[10px] items-center justify-center cursor-pointer relative ${
                        pathname === link.href && "text-primary-green font-bold"
                      }`}><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="32" height="32" rx="8" fill="#FAFAFB"/>
                      <g clip-path="url(#clip0_47_606)">
                      <path d="M15.9998 8.66658C11.6798 8.66658 8.1665 12.1799 8.1665 16.4999C8.1665 20.8199 11.6798 24.3332 15.9998 24.3332C18.0932 24.3332 20.0598 23.5199 21.5398 22.0399C23.0198 20.5599 23.8332 18.5932 23.8332 16.4999C23.8332 12.1799 20.3198 8.66658 15.9998 8.66658ZM22.8165 15.9999H16.4998V9.68325C19.8698 9.92991 22.5698 12.6299 22.8165 15.9999ZM9.1665 16.4999C9.1665 12.8999 11.9632 9.93991 15.4998 9.68325V16.4999C15.4998 16.5332 15.5032 16.5632 15.5098 16.5966V16.5999C15.5132 16.6232 15.5232 16.6432 15.5298 16.6632L15.5398 16.6932C15.5432 16.7032 15.5498 16.7132 15.5532 16.7232C15.5565 16.7332 15.5632 16.7399 15.5665 16.7499C15.5698 16.7532 15.5732 16.7599 15.5732 16.7632C15.5765 16.7699 15.5798 16.7732 15.5832 16.7799C15.6032 16.8066 15.6232 16.8332 15.6465 16.8566L20.4665 21.6732C19.2265 22.7466 17.6598 23.3332 15.9998 23.3332C12.2332 23.3332 9.1665 20.2666 9.1665 16.4999ZM21.1732 20.9666L17.2065 16.9999H22.8132C22.7098 18.4699 22.1398 19.8499 21.1732 20.9666Z" fill="#14171B"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_47_606">
                      <rect width="16" height="16" fill="white" transform="translate(8 8.5)"/>
                      </clipPath>
                      </defs>
                      </svg>
                      
                      <h1 className="whitespace-nowrap hover:font-bold">{link.label}</h1>
                      <div
                        className={`w-0 h-1 rounded-full bg-primary-green font-bold absolute left-0 mt-10 transition-all duration-300 ${
                          pathname === link.href ? "!w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="bg-[#C9C9C9] h-8 w-[1px]" />
             
              <Link href="/auth/register" className="sheen bg-primary-green text-black text-[20px] font-semibold py-3.5 px-9 rounded-xl flex flex-row gap-6 items-center justify-center">
              Marian Jhon 
               
               <Image src="/websitebuilder/3.svg" alt="website" width={50} height={30}/>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <MobileSidebar onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
    </section>
  );
}
