"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FaSearchPlus, FaSearchMinus, FaEdit } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {
  ZoomInIcon,
  ZoomOutIcon,
  FullscreenIcon,
  MoonIcon,
  SunIcon,
  XIcon,
} from "lucide-react";

import {
  SlScreenDesktop,
  SlScreenTablet,
  SlScreenSmartphone,
} from "react-icons/sl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { Switch } from "@/components/ui/switch";
import RootLayout from "@/app/layout";
import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "@/lib/api";
import { RxCross1, RxCross2 } from "react-icons/rx";

import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ChromePicker } from "react-color";
import { BsPlus } from "react-icons/bs";
import CustomDomain from "../components/CustomDomain";
import SubDomain from "../components/SubDomain";
import CustomDropdown from "../components/CustomFont";
import CustomColorDropdown from "../components/CustomColor";
type DesignOption = {
  value: string;
  label: string;
  imgSrc: string;
};

const designOptions: DesignOption[] = [
  { value: "Classic", label: "Classic", imgSrc: "/websitebuilding/1.png" },
  { value: "Modern", label: "Modern", imgSrc: "/websitebuilding/2.png" },
  { value: "Main", label: "Main", imgSrc: "/websitebuilding/3.png" },
  { value: "Vintage", label: "Vintage", imgSrc: "/websitebuilding/4.png" },
  { value: "Minimal", label: "Minimal", imgSrc: "/websitebuilding/5.png" },
];
interface CustomDesignDropdownProps {
  selectedDesign: string;
  setSelectedDesign: React.Dispatch<React.SetStateAction<string>>;
}

const CustomDesignDropdown: React.FC<CustomDesignDropdownProps> = ({
  selectedDesign,
  setSelectedDesign,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelectedDesign(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.className = ""; // Clear previous classes
    document.body.classList.add(selectedDesign.toLowerCase()); // Add the new class
  }, [selectedDesign]);

  return (
    <div
      className="relative xl:w-[518px] w-[300px] lg:w-[418px] 2xl:w-[518px]"
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center max-w-[82px] w-full justify-between border p-2 rounded-lg bg-white"
      >
        <div className="flex items-center">
          <span className="mr-2 text-[12px]">{selectedDesign}</span>
        </div>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 max-w-[518px] w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-2 p-2 w-full">
            {designOptions.map((option) => (
              <div
                key={option.value}
                className={`flex w-full max-w-[146px] justify-between flex-col items-center p-2 cursor-pointer relative`}
                onClick={() => handleSelect(option.value)}
              >
                <img
                  src={option.imgSrc}
                  alt={option.label}
                  className="w-full 2xl:w-[146px] 2xl:h-[79px] h-full mb-2"
                />
                <div className="flex flex-row items-center w-full justify-between">
                  {option.label}
                  <input
                    type="checkbox"
                    checked={selectedDesign === option.value}
                    readOnly
                    className="mr-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function ViewGeneratedWebsite() {
  const router = useRouter();
  const [iframeWidth, setIframeWidth] = useState<string>("100%");
  const [editingMode, setEditingMode] = useState<boolean>(false);
  const [generatedHtml, setGeneratedHtml] = useState<string | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<string>("Classic");
  const [color, setColor] = useState<string>("#ffffff");
  const [zoom, setZoom] = useState<number>(1);
  const [generatedId, setGeneratedId] = useState<string | null>(null);
  const [selectedFont, setSelectedFont] = useState<string>("");
  const [selectedButtonColor, setSelectedButtonColor] =
    useState<string>("#007bff");
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>("");

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const filterMenuRef = useRef<HTMLDivElement | null>(null);

  const tabs = ["CustomDomain", "SubDomain"];
  const fontOptions = [
    "Arial",
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Verdana",
  ];
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  const renderContent = (selectedTabIndex: number) => {
    switch (selectedTabIndex) {
      case 0:
        return <CustomDomain />;
      case 1:
        return <SubDomain />;
      default:
        return null;
    }
  };
  const handleFontSelect = (font: string) => {
    setSelectedFont(font);
  };
  const handlePreview = () => {
    if (generatedHtml) {
      sessionStorage.setItem("previewHtml", generatedHtml);
      window.open("/websitebuilding/preview", "_blank");
    } else {
      toast.error("No content to preview");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const prompt = sessionStorage.getItem("savedPrompt");
      if (prompt) {
        try {
          const token = document.cookie.match(
            new RegExp("(^| )token=([^;]+)")
          )?.[2];
          if (!token) {
            throw new Error("Authentication token not found");
          }

          const response = await axios.post(
            `${API_URL}/ai/api/v1/generate-website`,
            { user_prompt: prompt, model: "gpt-4o" },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          if (response.data.success) {
            setGeneratedHtml(response.data.data.data.doc_content);
            setGeneratedId(response.data.data.data._id);
          } else {
            throw new Error("Failed to generate website");
          }
        } catch (error) {
          toast.error(
            error instanceof Error
              ? error.message
              : "An unexpected error occurred"
          );
          console.error("Error generating website:", error);
        }
      }
    };

    fetchData();
  }, []);

  const handleViewScreenChange = (view: string) => {
    switch (view) {
      case "desktop":
        setIframeWidth("100%");
        break;
      case "tablet":
        setIframeWidth("768px");
        break;
      case "mobile":
        setIframeWidth("375px");
        break;
      default:
        setIframeWidth("100%");
        break;
    }
  };

  const handleEdit = () => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        iframeDocument.querySelectorAll<HTMLElement>("*").forEach((element) => {
          element.contentEditable = editingMode ? "false" : "true";
          if (editingMode) {
            element.style.outline = "none";
          } else {
            element.addEventListener("mouseover", handleMouseOver);
            element.addEventListener("mouseout", handleMouseOut);
            element.addEventListener("focus", handleFocus);
            element.addEventListener("blur", handleBlur);
          }
        });
      }
    }
    setEditingMode(!editingMode);
  };

  const handleMouseOver = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    element.style.outline = "2px dashed blue";
  };

  const handleMouseOut = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    element.style.outline = "none";
  };

  const handleFocus = (event: FocusEvent) => {
    const element = event.target as HTMLElement;
    element.style.border = "2px solid blue";
  };

  const handleBlur = (event: FocusEvent) => {
    const element = event.target as HTMLElement;
    element.style.border = "none";
  };

  const handlePublish = () => {
    toast.success("Project saved successfully", {
      // position: toast.POSITION.TOP_CENTER,
      // autoClose: 3000,
      style: {
        backgroundColor: '#4caf50', // Stylish background color
        color: '#fff', // Text color
        borderRadius: '8px', // Rounded corners
        padding: '16px', // Padding
        fontSize: '16px', // Font size
      }
    });
  };

  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3));
  const handleZoomOut = () =>
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
  const toggleFullScreen = () => {
    if (iframeRef.current) {
      if (!document.fullscreenElement) {
        iframeRef.current.requestFullscreen();
        setIsFullScreen(true);
      } else {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  useEffect(() => {
    const updateIframeContent = () => {
      if (iframeRef.current && generatedHtml) {
        const iframeDocument = iframeRef.current.contentDocument;
        if (iframeDocument) {
          iframeDocument.open();
          iframeDocument.write(generatedHtml);
          iframeDocument.close();

          iframeDocument.addEventListener("DOMContentLoaded", () => {
            const body = iframeDocument.body;
            if (body) {
              const existingStyles = body.querySelectorAll(
                "style[data-dark-mode], style[data-font]"
              );
              existingStyles.forEach((style) => style.remove());

              const style = document.createElement("style");
              style.setAttribute("data-dark-mode", "true");
              style.setAttribute("data-font", selectedFont);
              style.textContent = `
               @import url('https://fonts.googleapis.com/css2?family=${selectedFont.replace(
                 /\s+/g,
                 "+"
               )}&display=swap');
   button {
                background-color: ${selectedColor || "#007bff"} !important;
                color: #fff !important;
              }
              
                body {
                   background-color: ${selectedColor || "#007bff"} !important;
                 background-color: ${isDarkMode ? "#000" : "#fff"} !important;
                  color: ${isDarkMode ? "black" : "white"} !important;
                  font-family: ${selectedFont}, sans-serif !important;
                }
                .dark-mode * {
                  color: ${isDarkMode ? "yellow" : "red"} !important;
                  background-color: ${isDarkMode ? "#000" : "#fff"} !important;
                }
              `;
              body.appendChild(style);

              const updatedHtml = iframeDocument.documentElement.outerHTML;
              if (generatedId) {
                updateHtmlOnServer(updatedHtml, generatedId);
              } else {
                console.error("Generated ID is not available");
              }
            }
          });
        }
      }
    };

    if (generatedHtml) {
      updateIframeContent();
    }
  }, [generatedHtml, isDarkMode, selectedFont, selectedColor, generatedId]);

  const updateHtmlOnServer = async (html: string, id: string) => {
    if (!id) {
      console.error("ID is required for updating the server");
      return;
    }

    try {
      const token = document.cookie.match(
        new RegExp("(^| )token=([^;]+)")
      )?.[2];
      if (!token) {
        throw new Error("Authentication token not found");
      }

      const response = await axios.put(
        `${API_URL}/users/api/v1/docs/${id}`,
        { updated_data: html },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success("Website updated successfully");
      } else {
        throw new Error("Failed to update website");
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
      console.error("Error updating website:", error);
    }
  };

  const handleExitEdit = async () => {
    setEditingMode(false);
    if (generatedId) {
      await updateHtmlOnServer(generatedHtml || "", generatedId);
    } else {
      toast.error("ID not found. Cannot update website.");
    }
  };
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleMenuToggle = () => {
    setIsFilterMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target as Node)
      ) {
        setIsFilterMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <RootLayout shoWebar={true}>
      <main className="flex-1 h-full w-full flex flex-col  border-white">
        <div className="bg-white mt-40 flex flex-col justify-between max-w-[1668px] mx-auto w-full items-center rounded-xl  shadow  shadow-gray-100 ">
          <div className="flex px-4 flex-wrap border-b-2  rounded-xl 2xl:flex-nowrap 2xl:justify-between items-center w-full max-w-[1668px]">
            <div className="flex items-center gap-x-1.5 w-full max-w-[718px]">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <span className="w-3 h-3 rounded-full bg-[#EAB308]" />
              <span className="w-3 h-3 rounded-full bg-[#22C55E]" />
              <span className="ml-4 flex flex-row justify-between w-full border border-[#E2E8F0] max-w-[518px] rounded-xl px-2">
                {" "}
                <span className="text-[14px] flex flex-row gap-2 items-center">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8834 6.41797H3.71672C3.07238 6.41797 2.55005 6.9403 2.55005 7.58464V11.668C2.55005 12.3123 3.07238 12.8346 3.71672 12.8346H11.8834C12.5277 12.8346 13.05 12.3123 13.05 11.668V7.58464C13.05 6.9403 12.5277 6.41797 11.8834 6.41797Z"
                      stroke="#22C55E"
                      stroke-width="1.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.8833 6.41797V4.08464C4.8833 3.31109 5.19059 2.56922 5.73757 2.02224C6.28455 1.47526 7.02642 1.16797 7.79997 1.16797C8.57352 1.16797 9.31538 1.47526 9.86236 2.02224C10.4093 2.56922 10.7166 3.31109 10.7166 4.08464V6.41797"
                      stroke="#22C55E"
                      stroke-width="1.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  https://aquamarine-blythe-donkey.AIBuilder/?preview=true
                </span>{" "}
                <svg
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6667 9.66797H5.83341C5.18908 9.66797 4.66675 10.1903 4.66675 10.8346V16.668C4.66675 17.3123 5.18908 17.8346 5.83341 17.8346H11.6667C12.3111 17.8346 12.8334 17.3123 12.8334 16.668V10.8346C12.8334 10.1903 12.3111 9.66797 11.6667 9.66797Z"
                    stroke="#9CA3AF"
                    stroke-width="1.16667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.33341 14.3346C1.69175 14.3346 1.16675 13.8096 1.16675 13.168V7.33464C1.16675 6.69297 1.69175 6.16797 2.33341 6.16797H8.16675C8.80841 6.16797 9.33341 6.69297 9.33341 7.33464"
                    stroke="#9CA3AF"
                    stroke-width="1.16667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>{" "}
            </div>

            <div className="flex flex-wrap 2xl:flex-row 2xl:flex-nowrap gap-5 ">
              {!editingMode ? (
                <>
                  <div className="flex xl:flex-nowrap 2xl:flex-nowrap flex-wrap 2xl:flex-row items-center gap-3 ">
                    {/* <div className="flex flex-row items-center mx-auto justify-center gap-2 2xl:gap-4 flex-1">
                      <div className="toggle-container flex-1">
                        <input
                          type="checkbox"
                          id="toggle"
                          className="toggle-input"
                        />
                        <label htmlFor="toggle" className="toggle-label">
                          <svg
                            className="toggle-svg"
                            viewBox="0 0 72 34"
                            fill="#00A4A6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              className="toggle-background"
                              opacity="0.15"
                              y="0.5"
                              width="72"
                              height="33"
                              rx="16.5"
                              fill="#16191C"
                            />
                            <circle
                              className="toggle-circle"
                              cx="17.5"
                              cy="17"
                              r="10.5"
                              fill="white"
                            />
                          </svg>
                        </label>
                      </div>
                      <h2 className="font-mona-sans text-[10px] xl:text-[12px] 2xl:text-[14px] bl:text-base font-light whitespace-nowrap leading-normal 2xl:leading-[24px] bl:leading-[32px] tracking-[0.05em] bl:tracking-[0.2px] flex-1">
                        Construction mode
                      </h2>
                    </div> */}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            className={clsx(
                              "border h-10 w-10 rounded-lg flex gap-2 items-center justify-center flex-1",
                              iframeWidth === "100%" &&
                                "border-[3px] border-blue-400"
                            )}
                            onClick={() => handleViewScreenChange("desktop")}
                          >
                            <SlScreenDesktop size={22} />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <p>View in desktop</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            className={clsx(
                              "border h-10 w-10 rounded-lg flex gap-2 items-center justify-center flex-1",
                              iframeWidth === "768px" &&
                                "border-[3px] border-blue-400"
                            )}
                            onClick={() => handleViewScreenChange("tablet")}
                          >
                            <SlScreenTablet size={22} />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <p>View in tablet</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            className={clsx(
                              "border h-10 w-10 rounded-lg flex gap-2 items-center justify-center flex-1",
                              iframeWidth === "375px" &&
                                "border-[3px] border-blue-400"
                            )}
                            onClick={() => handleViewScreenChange("mobile")}
                          >
                            <SlScreenSmartphone size={22} />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                          <p>View in mobile</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <div className="relative flex-1">
                      <div
                        className="py-2 cursor-pointer"
                        onClick={handleMenuToggle}
                      >
                        <button className="border h-10 w-10 rounded-lg flex gap-2 items-center justify-center flex-1">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVG">
                              <path
                                id="Vector"
                                d="M8.00016 14.7669C11.6821 14.7669 14.6668 11.7822 14.6668 8.10026C14.6668 4.41836 11.6821 1.43359 8.00016 1.43359C4.31826 1.43359 1.3335 4.41836 1.3335 8.10026C1.3335 11.7822 4.31826 14.7669 8.00016 14.7669Z"
                                stroke="currentColor"
                                stroke-width="1.33333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                id="Vector_2"
                                d="M8.00016 1.43359C6.28832 3.23103 5.3335 5.61809 5.3335 8.10026C5.3335 10.5824 6.28832 12.9695 8.00016 14.7669C9.71201 12.9695 10.6668 10.5824 10.6668 8.10026C10.6668 5.61809 9.71201 3.23103 8.00016 1.43359Z"
                                stroke="currentColor"
                                stroke-width="1.33333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                id="Vector_3"
                                d="M1.3335 8.10156H14.6668"
                                stroke="currentColor"
                                stroke-width="1.33333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>

                      {isFilterMenuOpen && (
                        <div
                          ref={filterMenuRef}
                          className="absolute z-20 mt-2 top-16 -right-6 w-[448px] max-h-[757px] bg-white border border-gray-300 rounded-2xl shadow-lg"
                        >
                          <div className="p-4">
                            <div className="flex justify-between items-center">
                              <div className="w-full flex items-center gap-3">
                                <div className="w-full max-w-[272px] bg-gray-200 shadow-2xl shadow-gray-200 px-1.5 py-1.5 rounded-xl">
                                  <div className="w-full flex relative bg-gray-200">
                                    {tabs.map((tab, index) => (
                                      <div
                                        key={index}
                                        className={`w-full h-[32px] flex gap-x-2 justify-center xl:text-[14px] sm:text-[12px] font-medium items-center rounded-md relative cursor-pointer z-[1] transition-all duration-500 ${
                                          selectedTabIndex === index
                                            ? "bg-[#00A4A6] text-white"
                                            : "text-black bg-gray-200"
                                        }`}
                                        onClick={() => {
                                          const totalTabs = tabs.length;
                                          const percentage =
                                            (index / totalTabs) * 100;
                                          setSelectedTabIndex(index);
                                          setTabUnderlineLeft(percentage);
                                        }}
                                      >
                                        {tab}
                                      </div>
                                    ))}

                                    <div
                                      className="absolute bottom-0 h-[48px] bg-primary-green custom-transition rounded-lg"
                                      style={{
                                        left: `calc(${tabUnderlineLeft}%)`,
                                        width: `${100 / tabs.length}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4">
                              {renderContent(selectedTabIndex)}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      className="border h-full max-h-[38px] w-full max-w-[81px] px-2 text-[10px] font-light xl:text-[12px] gap-2 rounded-lg flex items-center justify-center flex-1"
                      onClick={handlePublish}
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78988 11.0998C2.78988 11.9398 2.45654 14.4332 2.45654 14.4332C2.45654 14.4332 4.94988 14.0998 5.78988 13.0998C6.26321 12.5398 6.25654 11.6798 5.72988 11.1598C5.47075 10.9125 5.12941 10.7696 4.77136 10.7585C4.41332 10.7474 4.06379 10.8699 3.81554 11.0998C3.63415 11.2832 3.47654 11.5015 3.3388 11.7332"
                          stroke="#9B9B9B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.5706 3.69731L13.6306 1.63731C14.3516 0.916312 15.5506 0.916312 16.2716 1.63731C16.9926 2.35831 16.9926 3.55731 16.2716 4.27831L14.1816 6.36831"
                          stroke="#9B9B9B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.76062 9.31966L11.8096 6.27066"
                          stroke="#9B9B9B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.7064 4.63666L8.07299 7.27066"
                          stroke="#9B9B9B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.7805 5.49991L6.9015 7.37691"
                          stroke="#9B9B9B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Publish</span>
                    </button>
                    <button
                      className="border h-full max-h-[38px] w-full max-w-[81px] text-[10px] font-light xl:text-[12px] gap-2 rounded-lg flex items-center justify-center"
                      onClick={handlePreview}
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.41382 8.10026C1.41382 8.10026 3.41382 3.43359 8.08049 3.43359C12.7472 3.43359 14.7472 8.10026 14.7472 8.10026C14.7472 8.10026 12.7472 12.7669 8.08049 12.7669C3.41382 12.7669 1.41382 8.10026 1.41382 8.10026Z"
                          stroke="#14171B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.08032 10.1016C9.18489 10.1016 10.0803 9.20613 10.0803 8.10156C10.0803 6.99699 9.18489 6.10156 8.08032 6.10156C6.97575 6.10156 6.08032 6.99699 6.08032 8.10156C6.08032 9.20613 6.97575 10.1016 8.08032 10.1016Z"
                          stroke="#14171B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Preview
                    </button>
                    <button
                      className="border px-2 py-4 max-h-[22px]   rounded-lg flex items-center justify-center"
                      onClick={handleEdit}
                    >
                      <FaEdit size={15} />
                    </button>{" "}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <div className="flex-grow  ">
                      <CustomDropdown
                        selectedFont={selectedFont}
                        onSelectFont={handleFontSelect}
                      />
                    </div>
                    <div className="flex-grow ">
                      <CustomColorDropdown
                        selectedColor={selectedColor}
                        onSelectColor={handleColorSelect}
                      />
                    </div>
                    <div className="flex-grow  flex items-center gap-2">
                      <button
                        onClick={handleZoomOut}
                        className="p-1 border rounded-lg w-full"
                      >
                        <ZoomOutIcon />
                      </button>
                      <button
                        onClick={handleZoomIn}
                        className="p-1 border rounded-lg w-full"
                      >
                        <ZoomInIcon />
                      </button>
                      <button
                        onClick={toggleFullScreen}
                        className="p-1 border rounded-lg w-full"
                      >
                        {isFullScreen ? <XIcon /> : <FullscreenIcon />}
                      </button>
                      <button
                        onClick={toggleDarkMode}
                        className="p-1 border rounded-lg w-full"
                      >
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                      </button>
                    </div>
                    <div className="flex-grow flex ">
                      <button
                        className="border w-10 h-8 rounded-lg flex items-center justify-center"
                        onClick={handleExitEdit}
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
              <div
            className="flex-1 max-w-[1668px]  w-full mx-auto items-center justify-center"
            style={{ width: iframeWidth, zoom: zoom }}
          >
            {generatedHtml ? (
              <iframe
                ref={iframeRef}
                srcDoc={generatedHtml}
                title="Generated Website"
                className="w-full h-full pt-3 bg-white"
                style={{
                  width: iframeWidth,
                  height: "calc(100vh - 100px)",
                  margin: "0 auto",
                }}
              />
            ) : (
              <div className="flex flex-col items-center translate-y-60 relative">
                <img
                  src="/LoadingCircles.gif"
                  alt="Loading"
                  className="w-32 h-32 mb-2"
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
