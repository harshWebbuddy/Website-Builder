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
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "A digital agency landing page",
    "A fashion design landing page",
    "A tech company landing page",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
  };

  const [colorIndex, setColorIndex] = useState(0);

  const handleImageClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };
  const FeatureCard: React.FC<FeatureProps> = ({
    imageSrc,
    title,
    description,
    delay,
  }) => (
    <Motion
      classNames="h-full"
      transition={{ duration: 0.5, delay }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="bg-[#FAFAFF] group flex flex-row items-center gap-x-4 justify-start rounded-[10px] px-8 w-full">
        <Image
          src={imageSrc}
          className="rounded-[20px] flex-shrink-0"
          alt="product"
          width={102}
          height={102}
        />
        <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
          <h1 className="text-[20px] md:text-[26px] leading-[36px] font-bold text-[#151515]">
            {title}
          </h1>
          <p className="text-[#151515] w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
            {description}
          </p>
        </div>
      </div>
    </Motion>
  );
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
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1,
          },
        },
      ],
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow onClick={next} />,
    prevArrow: <PrevArrow onClick={previous} />,
  };
  return (
    <main className="">
      <section className="mb-10 xl:mb-16 2xl:mb-20">
        <div className="relative flex flex-col items-center py-32  xl:py-40 2xl:py-56 space-y-4 bg-[#0D121F] overflow-hidden">
          <Image
            src="/landingpage/sidecircle.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-[900px] translate-y-[500px]  xl:flex 2xl:flex hidden absolute inset-0 -translate-x-60"
          />

          <div className="p-2 2xl:p-0 slide-reveal relative z-[2] w-full h-full flex flex-col space-y-8 justify-center items-center text-white">
            <div className="flex flex-col items-center space-y-6">
              <Image
                src="/landingpage/landingpageicon.svg"
                alt="logo"
                width={64}
                height={64}
                className=""
              />
              <div className="flex flex-row items-center gap-x-4">
                <h2
                  className={`font-semibold 2xl:font-bold text-2xl sm:text-5xl 2xl:text-[56px] capitalize text-center ${colors[colorIndex]}`}
                >
                  Create Landing Pages with AI
                </h2>
                <Image
                  src="/landingpage/search.svg"
                  alt="search icon"
                  width={74}
                  height={64}
                  className="translate-y-8 2xl:flex xl:flex hidden cursor-pointer"
                  onClick={handleImageClick}
                />
              </div>
              <h4 className="text-sm 2xl:text-lg text-center">
                🚀 Just Launched: Learn how to upload PDFs, eBooks, and more to
                your landing page.
              </h4>
            </div>

            <div className="max-w-[950px] w-full text-center">
              <h4 className="text-sm 2xl:text-[16px] font-light">
                Ultimate solution for designing landing pages with the aid of
                cutting-edge AI technology. Say goodbye to hours of coding and
                designing – AIPage.dev is here to transform your ideas into
                reality with just a single prompt.
              </h4>
            </div>
            <div className="bg-white text-black  rounded-2xl border border-[#E8E8E8] w-full max-w-[672px] flex gap-4 shadow-xl shadow-gray-200/60">
              <Image
                src="/landingpage/searchicon.svg"
                alt="logo"
                width={34}
                height={34}
                className="opacity-0"
              />
              <input
                className="h-11 w-full"
                placeholder="A landing page for cozy bakery"
                value={prompt}
                onChange={handleInputChange}
              />
              <Image
                src="/landingpage/searchicon.svg"
                alt="logo"
                width={34}
                height={34}
                className="2xl:translate-x-8 xl:translate-x-8 "
              />

              <button className="bg-primary-green p-3 rounded-2xl grid place-content-center">
                {/* {loading ? <Spinner /> : <SendIcon />} */}
              </button>
            </div>
          </div>
          <div className="flex flex-col max-w-[606px] items-start text-white space-y-4">
            <h2 className="text-[12px] font-medium text-primary-black items-start text-opacity-60">
              Describe your business
            </h2>
            <div className="flex 2xl:flex-row xl:flex-row flex-col lg:flex-row md:flex-row  items-center gap-4">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:shadow-lg hover:shadow-gray-200 transition duration-300 flex items-center gap-2  border font-light border-[#E4E4E7] py-2 px-2.5 rounded-md text-[11px]"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion} <TbArrowUpRight size={18} />
                </div>
              ))}
            </div>
          </div>

          <Image
            src="/landingpage/sidecircle.svg"
            alt="logo"
            width={100}
            height={100}
            className="rotate-90 w-[900px] 2xl:flex xl:flex hidden -translate-y-[620px] absolute inset-0 translate-x-[1200px]"
          />
        </div>
      </section>

      <section className="px-6 md:px-16  bg-white text-black">
        <div className="max-w-[1720px] mx-auto">
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
            <div className="flex mt-6 flex-col sm:flex-row justify-between gap-x-3 items-start">
              <div className="flex justify-between flex-col xl:flex-row 2xl:flex-row w-full">
                <h1 className="text-[32px] 2xl:text-[40px] leading-relaxed font-bold text-[#151515] mb-3">
                  Easy, simple, AI templates
                </h1>
                <p className="leading-[30px] text-[16px] 2xl:text-[20px] md:text-[20px] text-[#151515]">
                  Our platform helps your business in managing expenses. These
                  are some of <br /> the reasons why you should use our platform
                  in managing business finances.
                </p>
              </div>
            </div>
          </Motion>

          <div className="mt-16 2xl:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
  {[
    "/templates/temp1.png",
    "/templates/temp2.png",
    "/templates/temp3.png",
    "/templates/temp4.png",
    "/templates/temp5.png",
    "/templates/temp6.png"
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
          {/* <div className="lg:hidden flex justify-center">
          <Link href="/products" className="w-fit">
            <button className="md:px-3 md:py-3 mt-6 w-28 whitespace-nowrap transition duration-300 px-2 py-3 text-[#FB524A] ring-1 ring-[#FB524A] rounded-md font-bold hover:bg-[#FB524A] outline-none hover:text-[white]">
              View All
            </button>
          </Link>
        </div> */}
        </div>
      </section>

      <section className="px-6 md:px-16 py-10 mb-20 bg-white text-black">
        <div className="max-w-[1720px] mx-auto">
          <svg
            className="translate-y-24 2xl:flex xl:flex hidden "
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
              <div className="flex flex-col gap-y-3.5">
                <h4 className=" text-center tracking-[3.35px] leading-[19.2px] font-bold mb-2 text-[20px] text-[#00A4A6]">
                  FEATURES
                </h4>
                <h1 className="text-[40px] md:text-5xl leading-relaxed font-bold text-[#151515] mb-3">
                  Our AI features
                </h1>
              </div>
            </div>
          </Motion>

          <div className="mt-16 2xl:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-10">
            <Motion
              classNames="h-full"
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="bg-[#FAFAFF] group flex flex-col md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-8 w-full">
                <Image
                  src="./features/features1.svg"
                  className="rounded-[20px] flex-shrink-0"
                  alt="product"
                  width={102}
                  height={102}
                />
                <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                  <h1 className="text-[20px] md:text-[26px] leading-[36px] font-bold text-[#151515]">
                    AI-driven design
                  </h1>
                  <p className="text-[#151515] w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                    Just describe your vision, and our AI will craft a landing
                    page that not only looks great but also aligns perfectly
                    with your goals.
                  </p>
                </div>
              </div>
            </Motion>
            <Motion
              classNames="h-full"
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="bg-[#FAFAFF] group flex flex-col md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-8 w-full">
                <Image
                  src="./features/features2.svg"
                  className="rounded-[20px] flex-shrink-0"
                  alt="product"
                  width={102}
                  height={102}
                />
                <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                  <h1 className="text-[20px] md:text-[26px] leading-[36px] font-bold text-[#151515]">
                    AI-driven design
                  </h1>
                  <p className="text-[#151515] w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                    Just describe your vision, and our AI will craft a landing
                    page that not only looks great but also aligns perfectly
                    with your goals.
                  </p>
                </div>
              </div>
            </Motion>
            <Motion
              classNames="h-full"
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="bg-[#FAFAFF] group flex flex-col md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-8 w-full">
                <Image
                  src="./features/features3.svg"
                  className="rounded-[20px] flex-shrink-0"
                  alt="product"
                  width={102}
                  height={102}
                />
                <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                  <h1 className="text-[20px] md:text-[26px] leading-[36px] font-bold text-[#151515]">
                    AI-driven design
                  </h1>
                  <p className="text-[#151515] w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                    Just describe your vision, and our AI will craft a landing
                    page that not only looks great but also aligns perfectly
                    with your goals.
                  </p>
                </div>
              </div>
            </Motion>
            <Motion
              classNames="h-full"
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="bg-[#FAFAFF] group flex flex-col md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-8 w-full">
                <Image
                  src="./features/features4.svg"
                  className="rounded-[20px] flex-shrink-0"
                  alt="product"
                  width={102}
                  height={102}
                />
                <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                  <h1 className="text-[20px] md:text-[26px] leading-[36px] font-bold text-[#151515]">
                    AI-driven design
                  </h1>
                  <p className="text-[#151515] w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                    Just describe your vision, and our AI will craft a landing
                    page that not only looks great but also aligns perfectly
                    with your goals.
                  </p>
                </div>
              </div>
            </Motion>
            <Motion
              classNames="h-full"
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="bg-[#FAFAFF] group flex flex-col md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-8 w-full">
                <Image
                  src="./features/features5.svg"
                  className="rounded-[20px] flex-shrink-0"
                  alt="product"
                  width={102}
                  height={102}
                />
                <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                  <h1 className="text-[20px] md:text-[26px] leading-[36px] font-bold text-[#151515]">
                    AI-driven design
                  </h1>
                  <p className="text-[#151515] w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                    Just describe your vision, and our AI will craft a landing
                    page that not only looks great but also aligns perfectly
                    with your goals.
                  </p>
                </div>
              </div>
            </Motion>
            <Motion
              classNames="h-full"
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="bg-[#FAFAFF] group flex flex-col md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-8 w-full">
                <Image
                  src="./features/features6.svg"
                  className="rounded-[20px] flex-shrink-0"
                  alt="product"
                  width={102}
                  height={102}
                />
                <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                  <h1 className="text-[20px] md:text-[26px] leading-[36px] font-bold text-[#151515]">
                    AI-driven design
                  </h1>
                  <p className="text-[#151515] w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                    Just describe your vision, and our AI will craft a landing
                    page that not only looks great but also aligns perfectly
                    with your goals.
                  </p>
                </div>
              </div>
            </Motion>
            <Motion
              classNames="h-full"
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="bg-[#FAFAFF] group flex flex-col md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-8 w-full">
                <Image
                  src="./features/features7.svg"
                  className="rounded-[20px] flex-shrink-0"
                  alt="product"
                  width={102}
                  height={102}
                />
                <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                  <h1 className="text-[20px] md:text-[26px] leading-[36px] font-bold text-[#151515]">
                    AI-driven design
                  </h1>
                  <p className="text-[#151515] w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                    Just describe your vision, and our AI will craft a landing
                    page that not only looks great but also aligns perfectly
                    with your goals.
                  </p>
                </div>
              </div>
            </Motion>
            <Motion
              classNames="h-full"
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="bg-[#FAFAFF] group flex flex-col md:flex-row lg:flex-row sm:flex-row xl:flex-row 2xl:flex-row items-center gap-x-4 justify-start rounded-[10px] py-6 2xl:py-0 xl:py-0 sm:py-0 md:py-0 lg:py-0 px-8 w-full">
                <Image
                  src="./features/features8.svg"
                  className="rounded-[20px] flex-shrink-0"
                  alt="product"
                  width={102}
                  height={102}
                />
                <div className="flex flex-col justify-center w-full gap-y-2 mt-6">
                  <h1 className="text-[20px] md:text-[26px] leading-[36px] font-bold text-[#151515]">
                    AI-driven design
                  </h1>
                  <p className="text-[#151515] w-full text-[16px] md:text-[18px] leading-[34px] mb-8">
                    Just describe your vision, and our AI will craft a landing
                    page that not only looks great but also aligns perfectly
                    with your goals.
                  </p>
                </div>
              </div>
            </Motion>
          </div>
          {/* <div className="lg:hidden flex justify-center">
          <Link href="/products" className="w-fit">
            <button className="md:px-3 md:py-3 mt-6 w-28 whitespace-nowrap transition duration-300 px-2 py-3 text-[#FB524A] ring-1 ring-[#FB524A] rounded-md font-bold hover:bg-[#FB524A] outline-none hover:text-[white]">
              View All
            </button>
          </Link>
        </div> */}
        </div>
      </section>
      <section className="px-6 md:px-16 py-20 bg-[#FAFAFF] text-black">
        <div className="max-w-[1720px] mx-auto">
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
            <div className="flex mt-6 flex-col sm:flex-row justify-between gap-x-3 items-start">
              <div className="flex justify-between flex-col xl:flex-row 2xl:flex-row w-full">
                <h1 className="ytext-[32px] 2xl:text-[40px] md:text-5xl leading-relaxed font-bold text-[#151515] mb-3">
                  Easy, simple, AI templates
                </h1>
                <p className="leading-[30px] text-[16px] 2xl:text-[20px] md:text-[20px] text-[#151515]">
                  Our platform helps your business in managing expenses. These
                  are some of <br /> the reasons why you should use our platform
                  in managing business finances.
                </p>
              </div>
            </div>
          </Motion>

          <div className="max-w-[1720px] mx-auto mt-20">
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
 <GoArrowRight size={25} />      </button>
                </div>
              </div>
            </div>
            {/* <div className="mt-6 flex justify-center">
          <Link target="blank" href="https://www.trustpilot.com/review/webbuddy.agency">
            <button className="md:px-3 md:py-3  whitespace-nowrap transition duration-300 px-2 py-3 text-[#FB524A] ring-1 ring-[#FB524A] rounded-md font-bold hover:bg-[#FB524A] outline-none hover:text-[white]">
              View All Reviews on Trustpilot
            </button>
          </Link>
        </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
