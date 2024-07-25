"use client";

import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import toast from "react-hot-toast";
import { API_URL } from "@/lib/api";
import { useRouter } from "next/navigation";
import { SendIcon } from "lucide-react";
import RootLayout from "../layout";
import { BsArrowReturnLeft } from "react-icons/bs";
// import { useGeneratedHtml } from "@/components/context/GeneratedHtmlContext";

export default function NewWebsite() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  // const { setGeneratedHtml } = useGeneratedHtml();
  const router = useRouter();

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

  const handleSubmit = () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setLoading(true);

    try {
      console.log("Saving prompt:", prompt);

      sessionStorage.removeItem("savedPrompt");

      sessionStorage.setItem("savedPrompt", prompt);

      router.push("/websitebuilding/view");
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error("Error navigating to view page:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RootLayout shoWebar={true}>
      <section className="flex justify-center items-center h-screen 2xl:mt-0 xl:mt-0 mt-16">
        <main className=" h-full w-full flex flex-col justify-center items-center gap-8 2xl:p-0 p-4 ">
          <svg
            className="animate-shine"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0307617 14.25C0.0307617 6.3972 6.39671 0.03125 14.2495 0.03125H46.7495C54.6023 0.03125 60.9683 6.3972 60.9683 14.25V30.5C60.9683 31.6219 60.0589 32.5312 58.937 32.5312C57.8152 32.5312 56.9058 31.6219 56.9058 30.5V19.3281H4.09326V46.75C4.09326 52.3591 8.64042 56.9062 14.2495 56.9062H30.4995C31.6214 56.9062 32.5308 57.8156 32.5308 58.9375C32.5308 60.0594 31.6214 60.9688 30.4995 60.9688H14.2495C6.39671 60.9688 0.0307617 54.6028 0.0307617 46.75V14.25ZM11.2026 10.1875C11.2026 9.06564 12.112 8.15625 13.2339 8.15625H15.2651C16.387 8.15625 17.2964 9.06564 17.2964 10.1875C17.2964 11.3094 16.387 12.2188 15.2651 12.2188H13.2339C12.112 12.2188 11.2026 11.3094 11.2026 10.1875Z"
              fill="black"
            />
            <path
              d="M48.7307 34.1121C48.5204 33.1875 47.6983 32.5313 46.75 32.5313C45.8017 32.5313 44.9796 33.1875 44.7693 34.1121L43.6454 39.0545C43.1256 41.3406 41.3406 43.1257 39.0545 43.6455L34.1121 44.7693C33.1874 44.9796 32.5312 45.8017 32.5312 46.75C32.5312 47.6983 33.1874 48.5205 34.1121 48.7307L39.0545 49.8546C41.3406 50.3744 43.1256 52.1594 43.6454 54.4455L44.7693 59.3879C44.9796 60.3126 45.8017 60.9688 46.75 60.9688C47.6983 60.9688 48.5204 60.3126 48.7307 59.3879L49.8546 54.4455C50.3744 52.1594 52.1594 50.3744 54.4455 49.8546L59.3879 48.7307C60.3126 48.5205 60.9688 47.6983 60.9688 46.75C60.9688 45.8017 60.3126 44.9796 59.3879 44.7693L54.4455 43.6455C52.1594 43.1257 50.3744 41.3406 49.8546 39.0545L48.7307 34.1121Z"
              fill="#00A4A6"
            />
          </svg>

          <h2
            className={`font-semibold 2xl:font-bold text-2xl sm:text-5xl 2xl:text-[56px] capitalize text-center`}
          >
            Create Landing Pages with AI
          </h2>
          <p className="text-center max-w-4xl font-light xl:text-[16px] text-[12px] 2xl:text-[18px] mx-auto leading-relaxed text-primary-black text-opacity-70">
            Ultimate solution for designing landing pages with the aid of
            cutting-edge AI technology. Say goodbye to hours of coding and
            designing – AIPage.dev is here to transform your ideas into reality
            with just a single prompt.
          </p>
          <div className="bg-white pl-4 pr-2 py-2 rounded-2xl border border-[#E8E8E8] w-full max-w-[824px] flex gap-4 shadow-xl hover:shadow-gray-200/60">
            <svg
              className="mt-2.5 animate-shine"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_47_248)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.75 6C0.75 3.1005 3.1005 0.75 6 0.75H18C20.8995 0.75 23.25 3.1005 23.25 6V12C23.25 12.4142 22.9142 12.75 22.5 12.75C22.0858 12.75 21.75 12.4142 21.75 12V7.875H2.25V18C2.25 20.0711 3.92895 21.75 6 21.75H12C12.4142 21.75 12.75 22.0858 12.75 22.5C12.75 22.9142 12.4142 23.25 12 23.25H6C3.1005 23.25 0.75 20.8995 0.75 18V6ZM4.875 4.5C4.875 4.08577 5.21077 3.75 5.625 3.75H6.375C6.78923 3.75 7.125 4.08577 7.125 4.5C7.125 4.91423 6.78923 5.25 6.375 5.25H5.625C5.21077 5.25 4.875 4.91423 4.875 4.5Z"
                  fill="black"
                />
                <path
                  d="M18.7313 13.3337C18.6537 12.9923 18.3501 12.75 18 12.75C17.6499 12.75 17.3463 12.9923 17.2687 13.3337L16.8537 15.1586C16.6618 16.0027 16.0027 16.6618 15.1586 16.8537L13.3337 17.2687C12.9923 17.3463 12.75 17.6499 12.75 18C12.75 18.3501 12.9923 18.6537 13.3337 18.7313L15.1586 19.1463C16.0027 19.3382 16.6618 19.9973 16.8537 20.8414L17.2687 22.6663C17.3463 23.0077 17.6499 23.25 18 23.25C18.3501 23.25 18.6537 23.0077 18.7313 22.6663L19.1463 20.8414C19.3382 19.9973 19.9973 19.3382 20.8414 19.1463L22.6663 18.7313C23.0077 18.6537 23.25 18.3501 23.25 18C23.25 17.6499 23.0077 17.3463 22.6663 17.2687L20.8414 16.8537C19.9973 16.6618 19.3382 16.0027 19.1463 15.1586L18.7313 13.3337Z"
                  fill="#00A4A6"
                />
              </g>
              <defs>
                <clipPath id="clip0_47_248">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              className="h-11 w-full outline-none border-none"
              placeholder="A landing page for cozy bakery"
              value={prompt}
              onChange={handleInputChange}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#00A4A6] -translate-x-2 translate-y-2 px-2 py-2 rounded-full grid place-content-center w-8 h-8"
            >
              {loading ? (
                <Spinner />
              ) : (
                <BsArrowReturnLeft className="text-white text-sm font-bold transform scale-125" />
              )}
            </button>
          </div>
          <h2 className="text-sm text-primary-black text-center 2xl:text-left 2xl:items-start 2xl:justify-start relative xl:-translate-x-80 2xl:-translate-x-80 text-opacity-60">
            Describe your business
          </h2>
          <div className="flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row flex-col   items-center gap-4">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="cursor-pointer hover:shadow-lg bg-[#EBEBEB]/60 hover:bg-white hover:shadow-gray-100 transition duration-300 flex items-center gap-2  border border-[#EBEBEB] py-3 px-4 rounded-xl text-sm"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion} <TbArrowUpRight size={22} />
              </div>
            ))}
          </div>
        </main>
      </section>
    </RootLayout>
  );
}
