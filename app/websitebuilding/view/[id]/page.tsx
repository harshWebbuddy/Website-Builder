"use client";

import {
  Eye,
  FullscreenIcon,
  MoonIcon,
  Rocket,
  SunIcon,
  XIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";
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
import { FaEdit } from "react-icons/fa";

import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import CustomDomain from "../../components/CustomDomain";
import SubDomain from "../../components/SubDomain";
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

interface CustomDropdownProps {
  selectedFont: string;
  onSelectFont: (font: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  selectedFont,
  onSelectFont,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fontOptions = [
    "Albert Sans",
    "Bricolage",
    "Grotesque",
    "Inter",
    "Montserrat",
    "Poppins",
    "Open Sans",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (font: string) => {
    onSelectFont(font);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        prev === null ? 0 : Math.min(prev + 1, fontOptions.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) =>
        prev === null ? 0 : Math.max(prev - 1, 0)
      );
    } else if (e.key === "Enter" && highlightedIndex !== null) {
      handleSelect(fontOptions[highlightedIndex]);
    }
  };

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative text-[12px] w-full max-w-[109.5px]"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button
        onClick={toggleDropdown}
        className="flex  text-[12px] items-center justify-between w-full border rounded-lg p-2 bg-white text-gray-700"
        style={{ fontFamily: selectedFont || "Arial" }}
      >
        <span className=" text-[12px]">{selectedFont || "Select a Font"}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="p-2">
            {fontOptions.map((font, index) => (
              <li
                key={font}
                className={`p-2 cursor-pointer ${
                  highlightedIndex === index ? "bg-gray-300" : ""
                }`}
                onClick={() => handleSelect(font)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {font}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ViewGeneratedWebsite = () => {
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

  useEffect(() => {
    const storedData = localStorage.getItem("projectData");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (parsedData.preview_html) {
          setGeneratedHtml(parsedData.preview_html);
        } else {
          toast.error("No HTML content found in stored data.");
        }
      } catch (error) {
        toast.error("Failed to parse stored data.");
        console.error("Error parsing stored data:", error);
      }
    } else {
      toast.error("No data found in local storage.");
    }
  }, []);

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
    toast.success("Project saved successfully");
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

                body {
                  background-color: ${isDarkMode ? "#000" : "#fff"} !important;
                  color: ${isDarkMode ? "#fff" : "#000"} !important;
                  font-family: ${selectedFont}, sans-serif !important;
                }
                .dark-mode * {
                  color: ${isDarkMode ? "#fff" : "#000"} !important;
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
  }, [generatedHtml, isDarkMode, selectedFont, generatedId]);

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
      <main className="flex-1 h-full w-full flex flex-col mt-10">
        <div className="bg-white py-3 px-5 flex flex-col justify-between max-w-[1668px] mx-auto w-full items-center rounded-xl translate-y-1 shadow shadow-gray-100 mt-20">
          <div className="flex flex-wrap 2xl:justify-between w-full">
            <div className="flex items-center gap-x-1.5 w-full max-w-fit">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <span className="w-3 h-3 rounded-full bg-[#EAB308]" />
              <span className="w-3 h-3 rounded-full bg-[#22C55E]" />
            </div>

            <div className="flex flex-wrap gap-5 p-5">
              {!editingMode ? (
                <>
                  <div className="flex xl:flex-nowrap  flex-wrap 2xl:flex-row items-center gap-3 mb-4">
                    <div className="flex flex-row items-center mx-auto justify-center gap-2 2xl:gap-4">
                      <div className="toggle-container">
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
                      <h2 className="font-mona-sans text-[10px] xl:text-[12px] 2xl:text-[14px] bl:text-base font-light whitespace-nowrap    leading-normal 2xl:leading-[24px] bl:leading-[32px] tracking-[0.05em] bl:tracking-[0.2px]">
                        Construction mode
                      </h2>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            className={clsx(
                              "border h-10 w-10 rounded-lg flex gap-2 items-center justify-center",
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
                              "border h-10 w-10 rounded-lg flex gap-2 items-center justify-center",
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
                              "border h-10 w-10 rounded-lg flex gap-2 items-center justify-center",
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
                    <div className="relative">
                      <div
                        className=" py-2 cursor-pointer"
                        onClick={handleMenuToggle}
                      >
                        <button className="border h-10 w-10 rounded-lg flex gap-2 items-center justify-center">
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
                        </button>{" "}
                      </div>

                      {isFilterMenuOpen && (
                        <div
                          ref={filterMenuRef}
                          className="absolute z-20 mt-2 top-16 -right-6 w-[448px] max-h-[757px]  bg-white border border-gray-300 rounded-2xl shadow-lg"
                        >
                          <div className="p-4">
                            <div className="flex justify-between items-center ">
                              <div className="w-full flex items-center  gap-3">
                                <div className="w-full max-w-[272px] bg-gray-200 shadow-2xl shadow-gray-200 px-1.5 py-1.5 rounded-xl">
                                  <div className="w-full flex relative bg-gray-200">
                                    {tabs.map((tab, index) => (
                                      <div
                                        key={index}
                                        className={`w-full h-[32px] flex gap-x-2 justify-center xl:text-[14px] sm:text-[12px] font-medium items-center rounded-md relative cursor-pointer z-[1] transition-all duration-500 ${
                                          selectedTabIndex === index
                                            ? "bg-[#00A4A6] text-white "
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
                      className="border h-full max-h-[38px] w-full max-w-[81px] text-[10px] font-light xl:text-[12px] gap-2 rounded-lg flex items-center justify-center"
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
                          d="M3.78988 11.0998C2.78988 11.9398 2.45654 14.4332 2.45654 14.4332C2.45654 14.4332 4.94988 14.0998 5.78988 13.0998C6.26321 12.5398 6.25654 11.6798 5.72988 11.1598C5.47075 10.9125 5.12941 10.7696 4.77136 10.7585C4.41332 10.7474 4.06379 10.869 3.78988 11.0998Z"
                          stroke="#14171B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.79004 10.1004L6.79004 8.10043C7.1448 7.18005 7.59151 6.2978 8.12337 5.46709C8.90016 4.22508 9.98179 3.20246 11.2654 2.49649C12.549 1.79051 13.9918 1.42467 15.4567 1.43376C15.4567 3.24709 14.9367 6.43376 11.4567 8.76709C10.6146 9.29957 9.72127 9.74625 8.79004 10.1004Z"
                          stroke="#14171B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.78988 8.09995H3.45654C3.45654 8.09995 3.82321 6.07995 4.78988 5.43328C5.86988 4.71328 8.12321 5.43328 8.12321 5.43328"
                          stroke="#14171B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.79004 10.1029V13.4362C8.79004 13.4362 10.81 13.0695 11.4567 12.1029C12.1767 11.0229 11.4567 8.76953 11.4567 8.76953"
                          stroke="#14171B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Publish
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
                      className="border px-2 py-4 max-h-[22px] translate-y-  rounded-lg flex items-center justify-center"
                      onClick={handleEdit}
                    >
                      <FaEdit size={15} />
                    </button>{" "}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex 2xl:flex-nowrap flex-wrap flex-row gap-2">
                    {" "}
                    <CustomDropdown
                      selectedFont={selectedFont}
                      onSelectFont={handleFontSelect}
                    />
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleZoomOut}
                        className="p-1 border rounded-lg"
                      >
                        <ZoomOutIcon />
                      </button>

                      <button
                        onClick={handleZoomIn}
                        className="p-1 border rounded-lg"
                      >
                        <ZoomInIcon />
                      </button>
                      <button
                        onClick={toggleFullScreen}
                        className="p-1 border rounded-lg"
                      >
                        {isFullScreen ? <XIcon /> : <FullscreenIcon />}{" "}
                        {isFullScreen ? "" : ""}
                      </button>
                      <button
                        onClick={toggleDarkMode}
                        className="p-1 border rounded-lg"
                      >
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                        {isDarkMode ? "" : ""}
                      </button>
                    </div>{" "}
                    <button
                      className="border w-10 h-8 rounded-lg flex items-center justify-center"
                      onClick={handleExitEdit}
                    >
                      <RxCross2 />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="flex-1 max-w-[1668px]  w-full mx-auto items-center justify-center"
            style={{ width: "100%", zoom: "1" }}
          >
            {generatedHtml ? (
              <iframe
                ref={iframeRef}
                srcDoc={generatedHtml}
                title="Generated Website"
                className="w-full h-full pt-3 bg-white"
                style={{
                  width: "100%",
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
};
export default ViewGeneratedWebsite;
