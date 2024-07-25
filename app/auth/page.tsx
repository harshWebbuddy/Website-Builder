"use client";

import { useEffect, useState } from "react";
import Register from "./register/page";
import Login from "./login/page";
import Image from "next/image";
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
export default function AuthPage() {
  const tabs = ["Log In", "Sign Up"];
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleRegisterClick = () => {
    setShowSignUp(true);
  };

  useEffect(() => {
    const totalTabs = tabs.length;
    const percentage = (selectedTabIndex / totalTabs) * 100;
    setTabUnderlineLeft(percentage);
  }, [selectedTabIndex, tabs.length]);

  const renderContent = () => {
    switch (selectedTabIndex) {
      case 0:
        return <Login />;
      case 1:
        return <Register />;
      default:
        return null;
    }
  };
  const handleLinkClick = () => {
    setSelectedTabIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  return (
    <Provider store={store}>
      <main className="w-full h-full flex justify-center  overflow-hidden   ">
        <div className=" w-full  flex justify-between h-screen overflow-hidden">
          <div className="relative flex flex-col items-center justify-center w-full 2xl:p-0 p-4  ">
            <Image
              src="/auth/circle.svg"
              alt="circle"
              width={100}
              height={100}
              className="w-[600px] z-[0] h-[600px] 2xl:flex left-0 top-0  hidden  absolute "
            />
            <Image
              src="/auth/circle.svg"
              alt="circle"
              width={100}
              height={100}
              className="w-[600px] h-[600px] hidden 2xl:flex absolute z-[0] -right-10 bottom-0 rotate-180"
            />
            <div className="items-center justify-center z-[90] mx-auto w-full">
              <div className="w-full flex flex-col gap-y-4 xl:gap-y-10 items-center justify-center mx-auto py-2">
                <div className="items-center absolute top-6 justify-center mx-auto w-full">
                  <svg
                    className="animate-shine hover:scale-125 hover:brightness-90  items-center justify-center mx-auto"
                    width="162"
                    height="35"
                    viewBox="0 0 162 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_154_657)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.779297 11.2708C0.779297 8.26061 3.21957 5.82034 6.2298 5.82034H18.6881C21.6983 5.82034 24.1386 8.26061 24.1386 11.2708V17.5C24.1386 17.93 23.79 18.2786 23.36 18.2786C22.9299 18.2786 22.5813 17.93 22.5813 17.5V13.2175H2.33658V23.7291C2.33658 25.8793 4.07965 27.6224 6.2298 27.6224H12.4589C12.889 27.6224 13.2376 27.971 13.2376 28.401C13.2376 28.831 12.889 29.1796 12.4589 29.1796H6.2298C3.21957 29.1796 0.779297 26.7394 0.779297 23.7291V11.2708ZM5.06183 9.71356C5.06183 9.28351 5.41043 8.93492 5.84048 8.93492H6.61912C7.04917 8.93492 7.39776 9.28351 7.39776 9.71356C7.39776 10.1436 7.04917 10.4922 6.61912 10.4922H5.84048C5.41043 10.4922 5.06183 10.1436 5.06183 9.71356Z"
                        fill="black"
                      />
                      <path
                        d="M19.4461 18.8846C19.3655 18.5302 19.0503 18.2786 18.6868 18.2786C18.3233 18.2786 18.0082 18.5302 17.9276 18.8846L17.4968 20.7792C17.2975 21.6555 16.6132 22.3398 15.7369 22.5391L13.8423 22.9699C13.4879 23.0505 13.2363 23.3656 13.2363 23.7291C13.2363 24.0927 13.4879 24.4078 13.8423 24.4884L15.7369 24.9192C16.6132 25.1185 17.2975 25.8027 17.4968 26.6791L17.9276 28.5737C18.0082 28.9281 18.3233 29.1796 18.6868 29.1796C19.0503 29.1796 19.3655 28.9281 19.4461 28.5737L19.8769 26.6791C20.0762 25.8027 20.7604 25.1185 21.6368 24.9192L23.5314 24.4884C23.8858 24.4078 24.1373 24.0927 24.1373 23.7291C24.1373 23.3656 23.8858 23.0505 23.5314 22.9699L21.6368 22.5391C20.7604 22.3398 20.0762 21.6555 19.8769 20.7792L19.4461 18.8846Z"
                        fill="#00A4A6"
                      />
                    </g>
                    <path
                      d="M35.8229 26L41.631 9.13096H45.935L51.7432 26H48.573L47.3003 22.2976H40.2658L39.0162 26H35.8229ZM41.0062 19.9373H46.583L44.9169 15.1936L43.8525 11.9309H43.7368L42.6492 15.1936L41.0062 19.9373ZM53.0479 26V9.13096H56.1024V26H53.0479ZM63.6136 26V9.13096H71.6432C72.7848 9.13096 73.7258 9.31608 74.4663 9.68632C75.2222 10.0411 75.793 10.5425 76.1786 11.1904C76.5643 11.8383 76.7571 12.5942 76.7571 13.4581C76.7571 14.0443 76.6569 14.592 76.4563 15.1011C76.2558 15.6102 75.9627 16.0421 75.577 16.3969C75.1913 16.7517 74.7131 17.0063 74.1423 17.1605V17.3225C74.8211 17.4459 75.3842 17.7005 75.8315 18.0861C76.2789 18.4564 76.6183 18.9115 76.8497 19.4514C77.0965 19.9759 77.2199 20.5621 77.2199 21.21C77.2199 22.2436 76.9808 23.1229 76.5026 23.848C76.0398 24.5576 75.3687 25.0975 74.4894 25.4678C73.6101 25.8226 72.5457 26 71.2961 26H63.6136ZM66.5755 23.6166H70.9721C72.052 23.6166 72.8388 23.3775 73.3324 22.8992C73.8415 22.421 74.096 21.7962 74.096 21.0249C74.096 20.1919 73.8338 19.5671 73.3093 19.1506C72.8002 18.734 72.0906 18.5258 71.1804 18.5258H66.5755V23.6166ZM66.5755 16.2349H71.0416C71.6432 16.2349 72.1369 16.1347 72.5225 15.9341C72.9082 15.7336 73.1936 15.4636 73.3787 15.1242C73.5792 14.7694 73.6795 14.3529 73.6795 13.8747C73.6795 13.1033 73.425 12.5171 72.9159 12.116C72.4068 11.6995 71.7203 11.4912 70.8564 11.4912H66.5755V16.2349ZM86.108 26.2083C84.6271 26.2083 83.3621 25.946 82.3131 25.4215C81.2641 24.8816 80.4619 24.1257 79.9065 23.1538C79.3512 22.1665 79.0735 21.0018 79.0735 19.6596V9.13096H82.1048V19.6365C82.1048 20.485 82.2668 21.1946 82.5908 21.7654C82.9147 22.3362 83.3775 22.7681 83.9792 23.0612C84.5808 23.3389 85.2981 23.4777 86.1312 23.4777C87.0259 23.4777 87.7664 23.3235 88.3526 23.0149C88.9388 22.7064 89.3785 22.2668 89.6716 21.696C89.9801 21.1252 90.1344 20.4387 90.1344 19.6365V9.13096H93.1657V19.6596C93.1657 21.0172 92.8803 22.1896 92.3096 23.1769C91.7388 24.1488 90.9289 24.897 89.8799 25.4215C88.8308 25.946 87.5736 26.2083 86.108 26.2083ZM96.1895 26V9.13096H99.244V26H96.1895ZM102.41 26V9.13096H105.465V23.848L104.956 23.2695H113.24V26H102.41ZM114.687 26V9.13096H121.675C123.326 9.13096 124.722 9.48577 125.864 10.1954C127.021 10.8896 127.892 11.8692 128.478 13.1342C129.08 14.3992 129.381 15.8801 129.381 17.577C129.381 18.8266 129.211 19.9759 128.872 21.0249C128.532 22.0585 128.031 22.9455 127.368 23.686C126.72 24.4265 125.918 24.9973 124.961 25.3984C124.005 25.7995 122.909 26 121.675 26H114.687ZM117.741 23.362H121.212C121.953 23.362 122.632 23.2541 123.249 23.0381C123.866 22.8221 124.398 22.4827 124.845 22.0199C125.293 21.5417 125.64 20.9323 125.887 20.1919C126.134 19.4514 126.257 18.5566 126.257 17.5076C126.257 16.1347 126.041 15.0317 125.609 14.1986C125.177 13.3501 124.583 12.7331 123.827 12.3474C123.087 11.9463 122.215 11.7458 121.212 11.7458H117.741V23.362ZM131.506 26V9.13096H143.539V11.7689H133.889L134.56 11.0979V16.8366L133.889 16.1655H142.405V18.6415H133.889L134.56 17.9704V24.0331L133.889 23.362H143.585V26H131.506ZM145.975 26V9.13096H154.074C155.015 9.13096 155.84 9.23894 156.55 9.45492C157.275 9.65546 157.876 9.964 158.355 10.3805C158.833 10.7816 159.188 11.2753 159.419 11.8615C159.666 12.4323 159.789 13.1033 159.789 13.8747C159.789 14.8774 159.527 15.7413 159.003 16.4663C158.494 17.1914 157.776 17.6773 156.851 17.9241V18.0861C157.73 18.2558 158.37 18.6106 158.771 19.1506C159.188 19.6905 159.396 20.431 159.396 21.372V24.1025C159.396 24.4111 159.404 24.7273 159.419 25.0513C159.45 25.3598 159.535 25.676 159.674 26H156.596C156.503 25.784 156.434 25.5141 156.388 25.1901C156.341 24.8661 156.318 24.4959 156.318 24.0794V21.9042C156.318 21.3797 156.241 20.9401 156.087 20.5852C155.933 20.2304 155.655 19.9605 155.254 19.7753C154.853 19.5748 154.282 19.4745 153.542 19.4745H149.029V26H145.975ZM149.029 17.0217H153.634C154.729 17.0217 155.508 16.7671 155.971 16.2581C156.434 15.749 156.665 15.0934 156.665 14.2912C156.665 13.6587 156.534 13.1573 156.272 12.7871C156.025 12.4014 155.67 12.1237 155.208 11.954C154.76 11.7689 154.236 11.6764 153.634 11.6764H149.029V17.0217Z"
                      fill="black"
                    />
                    <defs>
                      <clipPath id="clip0_154_657">
                        <rect
                          width="24.9166"
                          height="24.9166"
                          fill="white"
                          transform="translate(0 5.0417)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-full max-w-[445px] relative flex justify-center">
                  {tabs.map((tab, index) => (
                    <div
                      key={index}
                      className={`w-full h-[48px] flex flex-row gap-x-2 justify-center items-center relative cursor-pointer z-[1] transition-all duration-300 ${
                        selectedTabIndex === index
                          ? "!text-[#00A4A6] border-b-4 font-bold  sm:text-xl xl:text-2xl rounded-sm border-[#00A4A6] whitespace-nowrap   mr-4"
                          : "!text-primary-grey mr-4 xl:text-[18px] text-[16px] 2xl:text-[24px] whitespace-nowrap"
                      }`}
                      onClick={() => setSelectedTabIndex(index)}
                    >
                      {tab}
                    </div>
                  ))}
                  <div
                    className="absolute bottom-0 h-[2px] bg-[#00A4A6] rounded-lg"
                    style={{
                      left: `calc(${tabUnderlineLeft}%)`,
                      transition: "left 0.3s ease, width 0.3s ease", // Ensure smooth transition
                    }}
                  />
                </div>
              </div>
              <div className="w-full rounded-2xl z-[20] overflow-hidden mt-4 xl:mt-8 2xl:mt-12 ">
                {renderContent()}
              </div>

              <div className="z-[60] sm:text-[12px] xl:text-[16px] w-full text-[#12121299] flex 2xl:bottom-4 2xl:absolute  items-center justify-center mt-4">
                <a
                  className={`cursor-pointer ${
                    selectedTabIndex === 0
                      ? "text-[#00A4A6] hover:underline"
                      : "text-[#00A4A6] hover:underline"
                  }`}
                  onClick={handleLinkClick}
                >
                  <span
                    className={`${
                      selectedTabIndex === 0
                        ? "text-[#667085]"
                        : "text-[#667085]"
                    }`}
                  >
                    {selectedTabIndex === 0
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </span>
                  <span
                    className={`${
                      selectedTabIndex === 0
                        ? "text-[#00A4A6]"
                        : "text-[#00A4A6]"
                    }`}
                  >
                    {selectedTabIndex === 0 ? " Sign Up" : " Log In"}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className=" w-full 2xl:flex xl:flex lg:flex md:flex sm:flex hidden h-screen  max-w-[920px] z-[20] ">
            <section className="w-full max-w-[930px] h-full bg-[url('/auth/register.svg')] bg-no-repeat bg-cover flex flex-col justify-center items-center p-5 py-12 md:py-20 gap-20 bg-[#F7FAFC]">
              <div className="max-w-[692px] w-full flex flex-col text-white h-screen gap-y-8">
                <h1 className="xl:text-[28px] text-[22px] 2xl:text-[34px]  font-semibold">
                  Create landing page with AI
                </h1>
                <p className="xl:text-[14px] text-[10px] 2xl:text-[16px] font-light leading-normal">
                  Ultimate solution for designing landing pages with the aid of
                  cutting-edge AI technology. Say goodbye to hours of coding and
                  designing – AIBuilder is here to transform your ideas into
                  reality with just a single prompt.
                </p>
              </div>{" "}
            </section>
          </div>
        </div>
      </main>
    </Provider>
  );
}
