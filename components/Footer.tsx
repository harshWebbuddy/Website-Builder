import Link from "next/link";
import React from "react";
import Motion from "@/components/client/Motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" px-6 xl:py-8 2xl:py-16 md:px-16 md:pt-16 md:pb-6 2xl:px-24 text-white">
    <div className="max-w-[1420px] mx-auto pt-10">
  <div className="flex flex-row w-full justify-between">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-2  gap-y-10">
      <div className="flex flex-col 2xl:gap-y-8 items-center  ">
        <Motion 
                              transition={{ duration: 0.4 }}
                              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                              className="flex flex-col 2xl:gap-y-6" classNames={undefined}   >
<svg width="232" height="50" viewBox="0 0 232 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.125 16C1.125 11.6508 4.65076 8.125 9 8.125H27C31.3493 8.125 34.875 11.6508 34.875 16V25C34.875 25.6213 34.3713 26.125 33.75 26.125C33.1287 26.125 32.625 25.6213 32.625 25V18.8125H3.375V34C3.375 37.1066 5.89342 39.625 9 39.625H18C18.6213 39.625 19.125 40.1287 19.125 40.75C19.125 41.3713 18.6213 41.875 18 41.875H9C4.65076 41.875 1.125 38.3493 1.125 34V16ZM7.3125 13.75C7.3125 13.1287 7.81616 12.625 8.4375 12.625H9.5625C10.1838 12.625 10.6875 13.1287 10.6875 13.75C10.6875 14.3713 10.1838 14.875 9.5625 14.875H8.4375C7.81616 14.875 7.3125 14.3713 7.3125 13.75Z" fill="black"/>
<path d="M28.097 27.0005C27.9805 26.4884 27.5252 26.125 27 26.125C26.4748 26.125 26.0195 26.4884 25.903 27.0005L25.2805 29.7379C24.9927 31.004 24.004 31.9927 22.7379 32.2805L20.0005 32.903C19.4884 33.0195 19.125 33.4748 19.125 34C19.125 34.5252 19.4884 34.9805 20.0005 35.097L22.7379 35.7194C24.004 36.0073 24.9927 36.996 25.2805 38.2621L25.903 40.9995C26.0195 41.5116 26.4748 41.875 27 41.875C27.5252 41.875 27.9805 41.5116 28.097 40.9995L28.7194 38.2621C29.0073 36.996 29.996 36.0073 31.2621 35.7194L33.9995 35.097C34.5116 34.9805 34.875 34.5252 34.875 34C34.875 33.4748 34.5116 33.0195 33.9995 32.903L31.2621 32.2805C29.996 31.9927 29.0073 31.004 28.7194 29.7379L28.097 27.0005Z" fill="#00A4A6"/>
<path d="M51.2334 37L59.6252 12.6273H65.8437L74.2354 37H69.6551L67.8163 31.6507H57.6526L55.8472 37H51.2334ZM58.7225 28.2405H66.7798L64.3727 21.3867L62.8347 16.6727H62.6676L61.0962 21.3867L58.7225 28.2405ZM76.1205 37V12.6273H80.5337V37H76.1205ZM91.3861 37V12.6273H102.987C104.637 12.6273 105.996 12.8947 107.066 13.4296C108.158 13.9423 108.983 14.6667 109.54 15.6028C110.098 16.5389 110.376 17.6311 110.376 18.8792C110.376 19.7262 110.231 20.5175 109.941 21.253C109.652 21.9885 109.228 22.6126 108.671 23.1253C108.114 23.6379 107.423 24.0057 106.598 24.2285V24.4626C107.579 24.6409 108.392 25.0087 109.039 25.5659C109.685 26.1008 110.176 26.7583 110.51 27.5384C110.866 28.2962 111.045 29.1432 111.045 30.0793C111.045 31.5727 110.699 32.8431 110.008 33.8907C109.34 34.916 108.37 35.6961 107.1 36.231C105.829 36.7437 104.291 37 102.486 37H91.3861ZM95.6655 33.5564H102.018C103.578 33.5564 104.715 33.2109 105.428 32.52C106.164 31.829 106.531 30.9263 106.531 29.8119C106.531 28.6083 106.152 27.7056 105.395 27.1038C104.659 26.502 103.634 26.2011 102.319 26.2011H95.6655V33.5564ZM95.6655 22.8912H102.118C102.987 22.8912 103.701 22.7463 104.258 22.4566C104.815 22.1668 105.227 21.7768 105.495 21.2864C105.785 20.7738 105.93 20.172 105.93 19.481C105.93 18.3666 105.562 17.5196 104.826 16.9401C104.091 16.3383 103.099 16.0374 101.851 16.0374H95.6655V22.8912ZM123.886 37.3009C121.747 37.3009 119.919 36.922 118.403 36.1642C116.888 35.3841 115.729 34.2919 114.926 32.8877C114.124 31.4612 113.723 29.7784 113.723 27.8393V12.6273H118.103V27.8059C118.103 29.0318 118.337 30.0571 118.805 30.8817C119.273 31.7064 119.941 32.3305 120.811 32.754C121.68 33.1552 122.716 33.3558 123.92 33.3558C125.213 33.3558 126.283 33.1329 127.13 32.6871C127.976 32.2414 128.612 31.6061 129.035 30.7814C129.481 29.9568 129.704 28.9649 129.704 27.8059V12.6273H134.084V27.8393C134.084 29.8007 133.671 31.4947 132.847 32.9212C132.022 34.3254 130.852 35.4064 129.336 36.1642C127.82 36.922 126.004 37.3009 123.886 37.3009ZM138.452 37V12.6273H142.866V37H138.452ZM147.44 37V12.6273H151.853V33.8907L151.118 33.0549H163.087V37H147.44ZM165.178 37V12.6273H175.275C177.66 12.6273 179.677 13.1399 181.326 14.1652C182.998 15.1682 184.257 16.5835 185.104 18.4112C185.973 20.2389 186.408 22.3786 186.408 24.8303C186.408 26.6357 186.163 28.2962 185.672 29.8119C185.182 31.3052 184.458 32.5868 183.499 33.6567C182.563 34.7265 181.404 35.5512 180.022 36.1307C178.64 36.7102 177.058 37 175.275 37H165.178ZM169.591 33.1886H174.606C175.676 33.1886 176.657 33.0326 177.548 32.7206C178.44 32.4085 179.209 31.9182 179.855 31.2495C180.501 30.5586 181.003 29.6781 181.36 28.6083C181.716 27.5384 181.895 26.2457 181.895 24.73C181.895 22.7463 181.582 21.1527 180.958 19.9491C180.334 18.7232 179.476 17.8317 178.384 17.2745C177.314 16.6949 176.055 16.4052 174.606 16.4052H169.591V33.1886ZM189.478 37V12.6273H206.864V16.4386H192.922L193.892 15.4691V23.7605L192.922 22.7909H205.225V26.3683H192.922L193.892 25.3987V34.1582L192.922 33.1886H206.93V37H189.478ZM210.383 37V12.6273H222.085C223.444 12.6273 224.637 12.7833 225.662 13.0953C226.71 13.3851 227.579 13.8308 228.27 14.4326C228.961 15.0121 229.474 15.7254 229.808 16.5724C230.164 17.397 230.343 18.3666 230.343 19.481C230.343 20.9298 229.964 22.178 229.206 23.2256C228.471 24.2731 227.434 24.9752 226.097 25.3318V25.5659C227.367 25.811 228.292 26.3237 228.872 27.1038C229.474 27.8839 229.774 28.9538 229.774 30.3134V34.2585C229.774 34.7043 229.786 35.1612 229.808 35.6292C229.852 36.075 229.975 36.5319 230.176 37H225.729C225.595 36.688 225.495 36.2979 225.428 35.8298C225.361 35.3618 225.328 34.8268 225.328 34.2251V31.0823C225.328 30.3245 225.216 29.6893 224.993 29.1766C224.771 28.664 224.369 28.274 223.79 28.0065C223.21 27.7167 222.386 27.5719 221.316 27.5719H214.796V37H210.383ZM214.796 24.0279H221.45C223.032 24.0279 224.158 23.6602 224.826 22.9247C225.495 22.1891 225.829 21.2419 225.829 20.0828C225.829 19.169 225.64 18.4446 225.261 17.9097C224.904 17.3525 224.392 16.9513 223.723 16.7061C223.077 16.4386 222.319 16.3049 221.45 16.3049H214.796V24.0279Z" fill="black"/>
</svg>
          <h1 className="text-xs text-[#596780] leading-normal max-w-[350px] mt-2 2xl:mt-8 text-[18px] 2xl:text-[22px] text-left">
            Create beautiful landing pages for your projects and products with power of AI.
          </h1>
        </Motion>
        
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-16 gap-y-4 2xl:gap-y-10"> 
            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-6">
                <li className="text-black text-[24px] font-bold mb-1.5 2xl:mb-3">Product</li>
                <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}classNames={undefined}>
                {/* <Link className="w-fit" href="/services/mobile/"> */}
                    <li className="text-[#596780] hover:text-black whitespace-nowrap">Why AI builder</li>
                {/* </Link> */}
                </Motion>
                <Motion transition={{ duration: 0.4, delay: 0.1 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} classNames={undefined}>
                {/* <Link className="w-fit" href="/services/web"> */}
                    <li className="text-[#596780] hover:text-black">Credits</li>
                {/* </Link> */}
                </Motion>
                <Motion transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}classNames={undefined}>
                {/* <Link className="w-fit" href="/services/blockchain"> */}
                    <li className="text-[#596780] hover:text-black">Plans</li>
                {/* </Link> */}
                </Motion>

        
            </ul>

            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-6">
                <li className="text-black text-[20px] font-bold mb-1.5 2xl:mb-3">Resources</li>
                <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} classNames={undefined}>
                <Link className="w-fit" href="/products/narratex">
                    <li className="text-[#596780] hover:text-black">Help Center</li>
                </Link>
                </Motion>
                <Motion transition={{ duration: 0.4, delay: 0.1 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} classNames={undefined}>
                <Link className="w-fit" href="/products">
                    <li className="text-[#596780] hover:text-black">Blog</li>
                </Link>
                </Motion>
                <Motion transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}  classNames={undefined}>
                <Link className="w-fit" href="/products">
                    <li className="text-[#596780] hover:text-black">FAQs</li>
                </Link>
                </Motion>
            
            </ul>

            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-6">
                <li className="text-black  text-[24px]  font-bold mb-1.5">Features</li>
                <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}  classNames={undefined}>
                <Link className="w-fit" href="/about">
                    <li className="text-[#596780] hover:text-black whitespace-nowrap">AI blog generation</li>
                </Link>
                </Motion>
                <Motion transition={{ duration: 0.4, delay: 0.1 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} classNames={undefined}>
                <Link className="w-fit" href="/contact">
                    <li className="text-[#596780] hover:text-black">AI lead collection</li>
                </Link>
                </Motion>
                <Motion transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}  classNames={undefined}>
                <Link className="w-fit" href="/career">
                    <li className="text-[#596780] hover:text-black">Custom domain
                    connection</li>
                </Link>
                </Motion>
            
            </ul>

            <ul className="text-white leading-2 2xl:leading-8 flex flex-col gap-y-2 2xl:gap-y-6">
                <li className="text-black text-xl md: text-[24px]  font-bold mb-1.5 2xl:mb-3 whitespace-nowrap">Follow Us</li>
                <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}  classNames={undefined}>
                <Link className="w-fit" href="/blog">
                    <li className="text-[#596780] hover:text-black">LinkedIn</li>
                </Link>
                </Motion>
                <Motion transition={{ duration: 0.4, delay: 0.1 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} classNames={undefined}>
                <Link className="w-fit" href="/faq">
                    <li className="text-[#596780] hover:text-black">Twitter</li>
                </Link>
                </Motion>
                <Motion transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} classNames={undefined}>
                <Link className="w-fit" href="/reviews">
                    <li className="text-[#596780] hover:text-black">Instagram</li>
                </Link>
                </Motion>  <Motion transition={{ duration: 0.4, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} classNames={undefined}>
                <Link className="w-fit" href="/reviews">
                    <li className="text-[#596780] hover:text-black">Facebook</li>
                </Link>
                </Motion>
            
            </ul></div>
        </div>
        </div>
        <div className="border border-[#CEBEFE] mt-2 2xl:mt-10 mb-2 "></div>
        <Motion transition={{ duration: 0.4 }} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}  classNames={undefined}>
     
          <div className="text-black text-[12px] xl:text-[16px] 2xl:text-[20px] flex flex-col-reverse lg:flex-row-reverse gap-y-4 2xl:gap-y-8 gap-x-2 2xl:gap-x-6 justify-between items-center pt-4 2xl:pt-10 pb-2 2xl:pb-6">
            <h3 className="">© AI builder 2024</h3>
            <div className="flex flex-row items-center gap-x-2 2xl:gap-x-8 gap-y-8">
            <Link href="/policies/refund" className="border-r  pr-2 2xl:pr-8 border-[#525050] whitespace-nowrap w-fit">
            Privacy policy
              </Link>
            <Link href="/policies/shipping"  className="border-r  pr-2 2xl:pr-8 border-[#525050] whitespace-nowrap w-fit">
            Terms & conditions
              </Link>
              <Link href="/policies/terms" className=" pr-2 2xl:pr-8 border-[#525050] whitespace-nowrap w-fit">
              Cookie policy
              </Link>
           
            </div>
          </div>
        </Motion>
      </div>
    </footer>
  );
};

export default Footer;
