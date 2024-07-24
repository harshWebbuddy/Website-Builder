"use client";
import Motion from "@/components/client/Motion";
import next from "next";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData as testimonials } from "../lib/data";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Spinner from "@/components/Spinner";
import { BsArrowReturnLeft } from "react-icons/bs";
import RootLayout from "./layout";
// import AuthProvider from "@/providers/AuthProvider";

export default function Home() {
  interface FeatureProps {
    imageSrc: string;
    title: string;
    description: string;
    delay: number;
  }
  const features = [
    {
      imageSrc: "./features/features1.svg",
      title: "AI-driven design",
      description:
        "Just describe your vision, and our AI will craft a landing page that not only looks great but also aligns perfectly with your goals.",
      delay: 0,
    },
    {
      imageSrc: "./features/features2.svg",
      title: "AI-driven design",
      description:
        "Just describe your vision, and our AI will craft a landing page that not only looks great but also aligns perfectly with your goals.",
      delay: 0.1,
    },
    {
      imageSrc: "./features/features3.svg",
      title: "AI-driven design",
      description:
        "Just describe your vision, and our AI will craft a landing page that not only looks great but also aligns perfectly with your goals.",
      delay: 0.2,
    },
    {
      imageSrc: "./features/features4.svg",
      title: "AI-driven design",
      description:
        "Just describe your vision, and our AI will craft a landing page that not only looks great but also aligns perfectly with your goals.",
      delay: 0.3,
    },
    {
      imageSrc: "./features/features5.svg",
      title: "AI-driven design",
      description:
        "Just describe your vision, and our AI will craft a landing page that not only looks great but also aligns perfectly with your goals.",
      delay: 0.4,
    },
    {
      imageSrc: "./features/features6.svg",
      title: "AI-driven design",
      description:
        "Just describe your vision, and our AI will craft a landing page that not only looks great but also aligns perfectly with your goals.",
      delay: 0.5,
    },
    {
      imageSrc: "./features/features7.svg",
      title: "AI-driven design",
      description:
        "Just describe your vision, and our AI will craft a landing page that not only looks great but also aligns perfectly with your goals.",
      delay: 0.6,
    },
    {
      imageSrc: "./features/features8.svg",
      title: "AI-driven design",
      description:
        "Just describe your vision, and our AI will craft a landing page that not only looks great but also aligns perfectly with your goals.",
      delay: 0.7,
    },
  ];
  const colors = [
    "text-white",
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
  ];
  const suggestions = [
    "A digital agency landing page",
    "A fashion design landing page",
    "A tech company landing page",
  ];
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
  };

  const handleImageClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };
  type SliderRef = Slider | null;

  const sliderRef = useRef<SliderRef>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const NextArrow = ({ onClick }: { onClick: () => void }) => {
    return <div onClick={onClick}></div>;
  };

  const PrevArrow = ({ onClick }: { onClick: () => void }) => {
    return <div onClick={onClick}></div>;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <AuthProvider>
      <RootLayout showNavbar={true} showFooter={true}>
        <main className="">
          <section className="mb-10 brightness-125 xl:mb-16 2xl:mb-20 ">
            <div className="relative flex  flex-col items-center py-16  xl:py-40 2xl:py-56 space-y-6 bg-[#0D121F] overflow-hidden">
              <div className="p-8 2xl:p-0 slide-reveal relative z-[2] w-full h-full flex flex-col space-y-8 justify-center items-center text-white">
                <div className="flex flex-col items-center space-y-6 2xl:space-y-8">
                  <Image
                    src="/landingpage/landingpageicon.svg"
                    alt="logo"
                    width={64}
                    height={64}
                    className="animate-shine"
                  />
                  <div className="flex flex-row items-center gap-x-4">
                    <h2
                      className={`font-semibold 2xl:font-bold text-2xl sm:text-5xl 2xl:text-[56px]  capitalize text-center ${colors[colorIndex]}`}
                    >
                      Create Landing Pages with AI
                    </h2>
                    <Image
                      src="/landingpage/search.svg"
                      alt="search icon"
                      width={74}
                      height={64}
                      className=" 2xl:flex xl:flex hidden cursor-pointer animate-bounce"
                      onClick={handleImageClick}
                    />
                  </div>

                  <h4 className="text-sm 2xl:text-lg text-center ">
                    🚀 Just Launched: Learn how to upload PDFs, eBooks, and more
                    to your landing page.
                  </h4>
                </div>

                <div className="max-w-[950px] w-full text-center">
                  <h4 className="text-sm 2xl:text-[16px] font-light">
                    Ultimate solution for designing landing pages with the aid
                    of cutting-edge AI technology. Say goodbye to hours of
                    coding and designing – AIPage.dev is here to transform your
                    ideas into reality with just a single prompt.
                  </h4>
                </div>
                <div className="bg-white brightness-90 text-[#000000] pl-4 pr-2 py-2 rounded-2xl border border-[#E8E8E8] w-full max-w-[672px] flex gap-4 shadow-xl hover:shadow-gray-200/60">
      
 <input className="h-11 w-full border-none outline-none " placeholder="A landing page for cozy bakery" value={prompt} onChange={handleInputChange}  />
        <button className="bg-[#00A4A6]  -translate-x-2 text-gray-100 translate-y-2 px-2 py-2 rounded-full grid place-content-center w-8 h-8">
                {loading ? <Spinner /> : <BsArrowReturnLeft className="text-white text-sm font-bold transform scale-125" />}
              </button>
      </div>
              </div>
      <div className="max-w-[606px] flex flex-col space-y-4">     
      <h2 className="text-sm text-ellipsis text-white font-medium  text-primary-black text-center 2xl:text-left 2xl:items-start 2xl:justify-start relative text-opacity-60">Describe your business</h2>
      <div className="flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row flex-col justify-center mx-auto   items-center gap-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="cursor-pointer max-w-[195px] whitespace-nowrap hover:shadow-md w-full justify-between  bg-transparent text-white hover:bg-white hover:shadow-gray-100 hover:text-black transition duration-300 flex items-center gap-2  border border-[#EBEBEB] py-4 px-2 rounded-xl text-[12px] font-light"
            onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion} <TbArrowUpRight size={12} />
          </div>
        ))}</div>
      </div>

              <Image
                src="/landingpage/sidecircle.svg"
                alt="logo"
                width={100}
                height={100}
                className="rotate-90 w-[900px] 2xl:flex xl:flex hidden -translate-y-[620px] absolute inset-0 translate-x-[1400px]"
              />
            </div>
          </section>

          <section className="px-6 md:px-16  bg-white text-black">
            <div className="max-w-[1420px] mx-auto">
              <h4 className="text-[#00A4A6] brightness-90 font-light uppercase mb-2 text-[14px] xl:text-[16px] 2xl:text-[20px]">
                Templates
              </h4>
              <Motion
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                classNames={undefined}
              >
                <div className="flex xl:mt-2 2xl:mt-4 flex-col sm:flex-row justify-between gap-x-3 items-start">
                  <div className="flex justify-between flex-col xl:flex-row 2xl:flex-row w-full">
                    <h1 className="     text-[12px]   xl:text-[28px] 2xl:text-[40px] 2xl:leading-relaxed font-bold text-[#151515] mb-3">
                      Easy, simple, AI templates
                    </h1>
                    <p className="2xl:leading-[30px] text-[14px] xl:text-[16px] 2xl:text-[20px] md: text-[12px]text-[#151515]">
                      Our platform helps your business in managing expenses.
                      These are some of <br /> the reasons why you should use
                      our platform in managing business finances.
                    </p>
                  </div>
                </div>
              </Motion>
              <svg
                className="absolute 2xl:flex hidden   translate-y-20 -translate-x-52"
                width="71"
                height="71"
                viewBox="0 0 71 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_10_3708)">
                  <circle
                    cx="35.5"
                    cy="32.5"
                    r="15.5"
                    fill="url(#paint0_linear_10_3708)"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_10_3708"
                    x="0"
                    y="0"
                    width="71"
                    height="71"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_10_3708"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_10_3708"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_10_3708"
                    x1="35.5"
                    y1="17"
                    x2="35.5"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4485FF" stop-opacity="0.8" />
                    <stop offset="1" stop-color="#377DFF" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="mt-6 xl:mt-16 2xl:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-3.5">
                {[
                  "/templates/temp1.png",
                  "/templates/temp2.png",
                  "/templates/temp3.png",
                  "/templates/temp4.png",
                  "/templates/temp5.png",
                  "/templates/temp6.png",
                ].map((src, index) => (
                  <Motion
                    key={index}
                    classNames="h-full"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <div className="relative w-full h-64">
                      <Image
                        src={src}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                        alt={`product-${index}`}
                      />
                    </div>
                  </Motion>
                ))}
              </div>
              <svg
                className="absolute translate-x-[1550px] 2xl:flex hidden -translate-y-24"
                width="71"
                height="71"
                viewBox="0 0 71 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_10_3707)">
                  <circle
                    cx="35.5"
                    cy="32.5"
                    r="15.5"
                    fill="url(#paint0_linear_10_3707)"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_10_3707"
                    x="0"
                    y="0"
                    width="71"
                    height="71"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_10_3707"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_10_3707"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_10_3707"
                    x1="35.5"
                    y1="17"
                    x2="35.5"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00A4A6" stop-opacity="0.8" />
                    <stop offset="1" stop-color="#00A4A6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </section>

          <section className="px-6 md:px-16 py-10 mb-2 xl:mb-20 2xl:mb-40 bg-white text-black">
            <div className="max-w-[1420px] mx-auto">
              <svg
                className="rotating  relative top-24 2xl:flex xl:flex hidden "
                width="115"
                height="96"
                viewBox="0 0 115 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="3.13675"
                  cy="29.485"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 3.13675 29.485)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="15.4387"
                  cy="71.5055"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 15.4387 71.5055)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="39.0206"
                  cy="18.9796"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 39.0206 18.9796)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="51.3226"
                  cy="61.0001"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 51.3226 61.0001)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="74.9044"
                  cy="8.47426"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 74.9044 8.47426)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="87.2065"
                  cy="50.4948"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 87.2065 50.4948)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="9.28775"
                  cy="50.4953"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 9.28775 50.4953)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="21.5897"
                  cy="92.5158"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 21.5897 92.5158)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="45.1716"
                  cy="39.9899"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 45.1716 39.9899)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="57.4735"
                  cy="82.0104"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 57.4735 82.0104)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="81.0555"
                  cy="29.4845"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 81.0555 29.4845)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="93.3574"
                  cy="71.505"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 93.3574 71.505)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="21.0786"
                  cy="24.2321"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 21.0786 24.2321)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="33.3807"
                  cy="66.2531"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 33.3807 66.2531)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="56.9625"
                  cy="13.7267"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 56.9625 13.7267)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="69.2646"
                  cy="55.7477"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 69.2646 55.7477)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="92.8463"
                  cy="3.22133"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 92.8463 3.22133)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="105.148"
                  cy="45.2423"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 105.148 45.2423)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="27.2296"
                  cy="45.2423"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 27.2296 45.2423)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="39.5316"
                  cy="87.2628"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 39.5316 87.2628)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="63.1135"
                  cy="34.7369"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 63.1135 34.7369)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="75.4154"
                  cy="76.7575"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 75.4154 76.7575)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="98.9973"
                  cy="24.2316"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 98.9973 24.2316)"
                  fill="#00A4A6"
                />
                <ellipse
                  cx="111.299"
                  cy="66.2521"
                  rx="2.5"
                  ry="2.62469"
                  transform="rotate(-16.318 111.299 66.2521)"
                  fill="#00A4A6"
                />
              </svg>

              <Motion
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                classNames={undefined}
              >
                <div className="flex flex-col  mx-auto gap-x-3 items-center">
                  <div className="flex flex-col ">
                    <h4 className="text-[#00A4A6] brightness-90 text-center font-light uppercase mb-2 text-[14px] xl:text-[16px] 2xl:text-[20px]">
                      FEATURES
                    </h4>
                    <h1 className=" text-[12px]xl:text-[28px] 2xl:text-[40px] 2xl:leading-relaxed font-bold text-[#151515] mb-3">
                      Our AI features
                    </h1>
                  </div>
                </div>
              </Motion>

              <div className="mt-2 xl:mt-16 2xl:mt-20 grid grid-cols-1 lg:grid-cols-wsm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-x-4 2xl:gap-x-10 gap-y-4 2xl:gap-y-10 ">
                <Motion
                  classNames="h-full 2xl:flex xl:flex md:hidden lg:hidden hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-6  w-full">
                    <Image
                      src="./features/features1.svg"
                      className="2xl:w-[102px] xl:w-[102px] rounded-[20px] flex-shrink-0"
                      alt="product"
                      width={102}
                      height={102}
                    />
                    <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                      <h1 className=" text-[12px] md:text-[24px] 2xl:leading-[36px] font-semibold text-[#151515]">
                        AI-driven design
                      </h1>
                      <p className="text-[#151515]  w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                        Just describe your vision, and our AI will craft a
                        landing page that not only looks great but also aligns
                        perfectly with your.
                      </p>
                    </div>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:hidden xl:hidden flex"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex flex-col  p-4 gap-y-2  rounded-[10px] ">
                    <div className="flex flex-row gap-x-4  w-full ">
                      {" "}
                      <Image
                        src="./features/features1.svg"
                        className="w-[30px] h-[30px] rounded-[20px]  "
                        alt="product"
                        width={102}
                        height={102}
                      />
                      <h1 className="text-[16px] font-semibold text-[#151515]">
                        AI-driven design
                      </h1>{" "}
                    </div>
                    <p className="text-[#151515]  w-full     text-[12px]   ">
                      Just describe your vision, and our AI will craft a landing
                      page that not only looks great but also aligns perfectly
                      with your.{" "}
                    </p>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:flex xl:flex md:hidden lg:hidden hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-6  w-full">
                    <Image
                      src="./features/features2.svg"
                      className="2xl:w-[102px] xl:w-[102px] rounded-[20px] flex-shrink-0"
                      alt="product"
                      width={102}
                      height={102}
                    />
                    <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                      <h1 className=" text-[12px] md:text-[24px] 2xl:leading-[36px] font-semibold text-[#151515]">
                        Intuitive editing interface
                      </h1>
                      <p className="text-[#151515]  w-full whitespace-normal word-wrap-break-word text-[16px] md:text-[18px] leading-[34px] mb-8">
                        Enjoy the freedom to tweak your landing pages.Add
                        sections, change templates, and refine text with ease –
                        either manually .
                      </p>
                    </div>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:hidden xl:hidden flex"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex flex-col  p-4 gap-y-2  rounded-[10px] ">
                    <div className="flex flex-row items-center gap-x-4  w-full ">
                      {" "}
                      <Image
                        src="./features/features2.svg"
                        className="w-[30px] h-[30px] rounded-[20px] "
                        alt="product"
                        width={102}
                        height={102}
                      />
                      <h1 className="text-[16px] w-full font-semibold text-left text-[#151515]">
                        Intuitive editing interface
                      </h1>{" "}
                    </div>
                    <p className="text-[#151515]  w-full     text-[12px]   ">
                      Enjoy the freedom to tweak your landing pages. Add
                      sections, change templates, and refine text with ease –
                      either manually or .
                    </p>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:flex xl:flex hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-6  w-full">
                    <Image
                      src="./features/features3.svg"
                      className="2xl:w-[102px] xl:w-[102px] rounded-[20px] flex-shrink-0"
                      alt="product"
                      width={102}
                      height={102}
                    />
                    <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                      <h1 className=" text-[12px] md:text-[24px] 2xl:leading-[36px] font-semibold text-[#151515]">
                        Seamless cloud deployment
                      </h1>
                      <p className="text-[#151515]  w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                        Launch your landing page in the cloud with just a few
                        clicks. Connect it to your domain for a professional
                        touch Connect it to your.
                      </p>
                    </div>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:hidden xl:hidden flex"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex flex-col  p-4 gap-y-2 rounded-[10px] ">
                    <div className="flex flex-row gap-x-4  w-full ">
                      {" "}
                      <Image
                        src="./features/features3.svg"
                        className="w-[30px] h-[30px] rounded-[20px] "
                        alt="product"
                        width={102}
                        height={102}
                      />
                      <h1 className="text-[16px] w-full font-semibold text-[#151515]">
                        Seamless cloud deployment
                      </h1>{" "}
                    </div>
                    <p className="text-[#151515]  w-full     text-[12px]   ">
                      Launch your landing page in the cloud with just a few
                      clicks. Connect it to your domain for a professional touch
                      Connect it to your.
                    </p>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:flex xl:flex hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-6  w-full">
                    <Image
                      src="./features/features4.svg"
                      className="2xl:w-[102px] xl:w-[102px] rounded-[20px] flex-shrink-0"
                      alt="product"
                      width={102}
                      height={102}
                    />
                    <div className="flex flex-col justify-start w-full gap-y-2 mt-6">
                      <h1 className=" text-[12px] md:text-[24px] 2xl:leading-[36px]  font-semibold text-[#151515]">
                        Rapid development
                      </h1>
                      <p className="text-[#151515]  w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                        Ideal for developers and businesses, AIPage.dev
                        significantly reduces the time and effort required to
                        build and deploy landing .
                      </p>
                    </div>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:hidden xl:hidden  flex"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex flex-col  p-4 gap-y-2 rounded-[10px] ">
                    <div className="flex flex-row    w-full ">
                      {" "}
                      <Image
                        src="./features/features4.svg"
                        className="w-[30px] h-[30px] rounded-[20px] mr-4"
                        alt="product"
                        width={102}
                        height={102}
                      />
                      <h1 className="text-[16px] font-semibold text-[#151515]">
                        Rapid development{" "}
                      </h1>{" "}
                    </div>
                    <p className="text-[#151515]  w-full     text-[12px]   ">
                      Ideal for developers and businesses, AIPage.dev
                      significantly reduces the time and effort required to
                      build and deploy landing pages.
                    </p>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:flex xl:flex hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-6  w-full">
                    <Image
                      src="./features/features5.svg"
                      className="2xl:w-[102px] xl:w-[102px] rounded-[20px] flex-shrink-0"
                      alt="product"
                      width={102}
                      height={102}
                    />
                    <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                      <h1 className=" text-[12px] md:text-[24px] 2xl:leading-[36px] font-semibold text-[#151515]">
                        Effortless blog post creation
                      </h1>
                      <p className="text-[#151515]  w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                        Easily generate, customize, and publish captivating blog
                        posts using our AI-powered tool. Craft engaging content
                        without the .
                      </p>
                    </div>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:hidden xl:hidden flex"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex flex-col  p-4 gap-y-2 rounded-[10px] ">
                    <div className="flex flex-row w-full ">
                      {" "}
                      <Image
                        src="./features/features5.svg"
                        className="w-[30px] h-[30px] rounded-[20px] mr-4"
                        alt="product"
                        width={102}
                        height={102}
                      />
                      <h1 className="text-[16px] font-semibold text-[#151515]">
                        Effortless blog post creation
                      </h1>{" "}
                    </div>
                    <p className="text-[#151515]  w-full     text-[12px]   ">
                      Easily generate, customize, and publish captivating blog
                      posts using our AI-powered tool. Craft engaging content
                      without the.
                    </p>
                  </div>
                </Motion>{" "}
                <Motion
                  classNames="h-full 2xl:flex xl:flex  hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-6  w-full">
                    <Image
                      src="./features/features6.svg"
                      className="2xl:w-[102px] xl:w-[102px] rounded-[20px] flex-shrink-0"
                      alt="product"
                      width={102}
                      height={102}
                    />
                    <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                      <h1 className="     text-[12px]   md:text-[24px] 2xl:leading-[36px] font-semibold text-[#151515]">
                        Unlimited hosting for blog posts
                      </h1>
                      <p className="text-[#151515]  w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                        Host an unlimited number of blog posts on our platform,
                        allowing you to share your insights and expertise with
                        your audience seamlessly.
                      </p>
                    </div>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:hidden xl:hidden flex"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex flex-col  p-4 gap-y-2 rounded-[10px] ">
                    <div className="flex flex-row   w-full ">
                      {" "}
                      <Image
                        src="./features/features6.svg"
                        className="w-[30px] h-[30px] rounded-[20px] mr-4"
                        alt="product"
                        width={102}
                        height={102}
                      />
                      <h1 className="text-[16px]  font-semibold text-[#151515]">
                        Unlimited hosting for blog posts
                      </h1>{" "}
                    </div>
                    <p className="text-[#151515]  w-full     text-[12px]   ">
                      Host an unlimited number of blog posts on our platform,
                      allowing you to share your insights and expertise with
                      your audience seamlessly.
                    </p>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:flex xl:flex  hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-6  w-full">
                    <Image
                      src="./features/features7.svg"
                      className="2xl:w-[102px] xl:w-[102px] rounded-[20px] flex-shrink-0"
                      alt="product"
                      width={102}
                      height={102}
                    />
                    <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                      <h1 className="     text-[12px]   md:text-[24px] 2xl:leading-[36px] font-semibold text-[#151515]">
                        Lead collection
                      </h1>
                      <p className="text-[#151515]  w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                        Collecting leads for your events has never been easier.
                        With Event Registration Form section, seamlessly gather
                        attendee information directly from your landing pages.
                        Effortlessly manage RSVPs and streamline your event
                        planning process.{" "}
                      </p>
                    </div>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:hidden xl:hidden flex"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex flex-col  p-4 gap-y-2 rounded-[10px] ">
                    <div className="flex flex-row   w-full ">
                      {" "}
                      <Image
                        src="./features/features7.svg"
                        className="w-[30px] h-[30px] rounded-[20px] mr-4"
                        alt="product"
                        width={102}
                        height={102}
                      />
                      <h1 className="text-[16px] font-semibold text-[#151515]">
                        Lead collection
                      </h1>{" "}
                    </div>
                    <p className="text-[#151515]  w-full     text-[12px]   ">
                      Collecting leads for your events has never been easier.
                      With Event Registration Form section, seamlessly gather
                      attendee information directly from your landing pages.
                      Effortlessly manage RSVPs and streamline your event
                      planning process.{" "}
                    </p>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:flex xl:flex  hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-6  w-full">
                    <Image
                      src="./features/features8.svg"
                      className="2xl:w-[102px] xl:w-[102px] rounded-[20px] flex-shrink-0"
                      alt="product"
                      width={102}
                      height={102}
                    />
                    <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                      <h1 className="     text-[12px]   md:text-[24px] 2xl:leading-[36px] font-semibold text-[#151515]">
                        Seamless integration with leading providers{" "}
                      </h1>
                      <p className="text-[#151515]  w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                        Integrate with your favorite providers effortlessly.
                        Event Registration Form section allows you to sync
                        collected leads with leading service providers such as
                        SendGrid, Klaviyo, Intercom, and more. Connect with your
                        preferred email marketing, CRM, or communication tools
                        with ease.{" "}
                      </p>
                    </div>
                  </div>
                </Motion>
                <Motion
                  classNames="h-full 2xl:hidden xl:hidden flex"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="bg-[#FAFAFF]  group flex flex-col  p-4 gap-y-2 rounded-[10px] ">
                    <div className="flex flex-row  w-full ">
                      {" "}
                      <Image
                        src="./features/features8.svg"
                        className="w-[30px] h-[30px] rounded-[20px] mr-4"
                        alt="product"
                        width={102}
                        height={102}
                      />
                      <h1 className="text-[16px]  font-semibold text-[#151515]">
                        Seamless integration with leading providers
                      </h1>{" "}
                    </div>
                    <p className="text-[#151515]  w-full    text-[12px] ">
                      Integrate with your favorite providers effortlessly. Event
                      Registration Form section allows you to sync collected
                      leads with leading service providers such as SendGrid,
                      Klaviyo, Intercom, and more. Connect with your preferred
                      email marketing, CRM, or communication tools with ease.{" "}
                    </p>
                  </div>
                </Motion>
              </div>
            </div>
          </section>
          <section className="px-6 md:px-16 py-10 xl:py-16 backdrop:2xl:py-20 bg-[#FAFAFF] text-black">
            <div className="max-w-[1420px] mx-auto">
              <h4 className="text-[#00A4A6] tracking-[3.35px] leading-[19.2px] font-medium uppercase mb-2 text-[16px] 2xl:text-[20px]">
                Templates
              </h4>
              <Motion
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                classNames={undefined}
              >
                <div className="flex xl:mt-2 2xl:mt-4 flex-col sm:flex-row justify-between gap-x-3 items-start">
                  <div className="flex justify-between flex-col xl:flex-row 2xl:flex-row w-full">
                    <h1 className="    text-[12px] xl:text-[28px] 2xl:text-[40px] 2xl:leading-relaxed font-bold text-[#151515] mb-3">
                      Easy, simple, AI templates
                    </h1>
                    <p className="2xl:leading-[30px] text-[14px] xl:text-[16px] 2xl:text-[20px] md:text-[20px] text-[#151515]">
                      Our platform helps your business in managing expenses.
                      These are some of the reasons why you should use our
                      platform in managing business finances.
                    </p>
                  </div>
                </div>
              </Motion>

              <div className="max-w-[1720px] mx-auto mt-10 2xl:mt-20">
                <div className="testimonials">
                  <Slider ref={sliderRef} {...settings}>
                    {testimonials.map((item, index) => (
                      <div
                        key={index}
                        className="max-w-[454px] max-h-[394px] bg-[#191E2A] min-h-[320px] min-[400px]:min-h-[220px] md:px-1 py-4 rounded-[17px] border border-[#e9e7e7] flex"
                      >
                        <div className=" flex  px-4 md:px-6  md:py-6 py-4  flex-col justify-between h-full w-full">
                          <div className="flex flex-col gap-y-4  pb-6">
                            {" "}
                            <h1 className="text-[20px] text-white leading-normal font-semibold">
                              {item.companyImage}
                            </h1>
                            <h1 className="text-white !leading-loose whitespace-normal text-[16px] font-light w-[380px] h-[110px] ">
                              {item.description}
                            </h1>
                          </div>
                          <div className="border-[0.2px] border-[#90A3BF]" />
                          <div className="space-x-4 mt-10 flex flex-row   ">
                            <div className="">
                              <Image
                                src={item.img1}
                                alt="image"
                                width={82}
                                height={82}
                                className="rounded-xl"
                              />
                            </div>
                            <div className="flex flex-col gap-y-2">
                              {" "}
                              <h1 className="text-lg text-white leading-normal font-bold">
                                {item.name}
                              </h1>
                              <p className="text-sm text-white">{item.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="mt-16">
                  <div className="hidden lg:block">
                    <div className="flex justify-center items-center  gap-6">
                      <button
                        className=" transition duration-300 cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-[#009a9b]"
                        title="Previous"
                        onClick={previous}
                      >
                        <GoArrowLeft size={25} />
                      </button>
                      <button
                        className=" transition duration-300 cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-[#009a9b]"
                        title="Next"
                        onClick={next}
                      >
                        <GoArrowRight size={25} />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </RootLayout>
    // </AuthProvider>
  );
}
