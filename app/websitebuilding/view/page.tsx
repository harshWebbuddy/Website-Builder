"use client";

import { Eye, Rocket, ZoomInIcon, ZoomOutIcon } from "lucide-react";
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
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
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
    <div className="relative w-64" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full border p-2 rounded-lg bg-white"
      >
        <div className="flex items-center">
          <span className="mr-2">{selectedDesign}</span>
        </div>
        <FaChevronDown />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-2 p-2">
            {designOptions.map((option) => (
              <div
                key={option.value}
                className={`flex flex-col items-center p-2 cursor-pointer relative ${
                  selectedDesign === option.value ? "bg-gray-300" : "bg-white"
                }`}
                onClick={() => handleSelect(option.value)}
              >
                <img
                  src={option.imgSrc}
                  alt={option.label}
                  className="w-16 h-16 mb-2"
                />
                <span>{option.label}</span>
                {selectedDesign === option.value && (
                  <div className="absolute top-1 right-1 text-green-500">
                    <FaCheck />
                  </div>
                )}
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
      className="relative inline-block w-64"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full border rounded-lg p-2 bg-white text-gray-700"
        style={{ fontFamily: selectedFont || "Arial" }}
      >
        <span>{selectedFont || "Select a Font"}</span>
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
// dd
const ZoomControls = () => {
  const [zoom, setZoom] = useState(1); // Initial zoom level

  const zoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Zoom in
  };

  const zoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Zoom out
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <button
        onClick={zoomOut}
        className="flex items-center justify-center p-2 rounded border"
        aria-label="Zoom Out"
      >
        <ZoomOutIcon className="w-5 h-5" />
      </button>
      <span>{(zoom * 100).toFixed(0)}%</span>
      <button
        onClick={zoomIn}
        className="flex items-center justify-center p-2 rounded border"
        aria-label="Zoom In"
      >
        <ZoomInIcon className="w-5 h-5" />
      </button>
    </div>
  );
};
export default function ViewGeneratedWebsite() {
  const router = useRouter();
  const [iframeWidth, setIframeWidth] = useState("100%");
  const [editingMode, setEditingMode] = useState(false);
  const [generatedHtml, setGeneratedHtml] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [selectedDesign, setSelectedDesign] = useState<string>("Classic");
  const [color, setColor] = useState<string>("#ffffff");
  const [zoom, setZoom] = useState<number>(1);
  const [selectedFont, setSelectedFont] = useState<string>("");

  const handleFontSelect = (font: string) => {
    setSelectedFont(font);
  };
  useEffect(() => {
    const fetchData = async () => {
      const prompt = sessionStorage.getItem("savedPrompt");
      console.log("Prompt from session storage:", prompt);
      console.log(prompt);
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
            {
              user_prompt: prompt,
              model: "gpt-4o",
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data.success) {
            setGeneratedHtml(response.data.data.data.doc_content);
          } else {
            throw new Error("Failed to generate website");
          }
        } catch (error) {
          if (error instanceof Error) {
            toast.error(error.message);
          } else {
            toast.error("An unexpected error occurred");
          }
          console.error("Error generating website:", error);
        }
      }
    };

    fetchData();
  }, [router]);

  useEffect(() => {
    if (generatedHtml) {
      updateHtmlFont();
    }
  }, [selectedFont, generatedHtml, selectedDesign]);
  const updateHtmlFont = () => {
    if (iframeRef.current && generatedHtml) {
      const updatedHtml = `
        <html>
          <head>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&family=Bricolage:wght@400;700&family=Grotesque:wght@400;700&family=Inter:wght@400;700&family=Montserrat:wght@400;700&family=Poppins:wght@400;700&family=Open+Sans:wght@400;700&display=swap');
              body {
                font-family: ${selectedFont} !important;
                color: ${color} !important;
              }
              .classic {
                /* Default Classic theme styles */
                background-color: #f5f5f5;
                color: #333;
              }
              .modern {
                /* Default Modern theme styles */
                background-color: #fff;
                color: #000;
              }
              .main {
                /* Default Main theme styles */
                background-color: #eaeaea;
                color: #000;
              }
              .vintage {
                /* Default Vintage theme styles */
                background-color: #f9f3e1;
                color: #555;
              }
              .minimal {
                /* Default Minimal theme styles */
                background-color: #fff;
                color: #666;
              }
              .${selectedDesign.toLowerCase()} {
                /* Add the selected design theme class */
              }
            </style>
          </head>
          <body class="${selectedDesign.toLowerCase()}">
            ${generatedHtml}
          </body>
        </html>
      `;
      iframeRef.current.srcdoc = updatedHtml;
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

  const handleExitEdit = () => {
    setEditingMode(false);
  };

  return (
    <RootLayout shoWebar={true}>
      <main className="flex-1 h-full w-full flex flex-col mt-10">
        <div className="bg-white py-3 px-5 flex flex-col justify-between max-w-[1668px] mx-auto w-full items-center rounded-xl translate-y-1 shadow shadow-gray-100 mt-20">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center gap-x-1.5 w-full max-w-fit">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <span className="w-3 h-3 rounded-full bg-[#EAB308]" />
              <span className="w-3 h-3 rounded-full bg-[#22C55E]" />
            </div>

            <div className="flex flex-col gap-5 p-5">
              {!editingMode ? (
                <>
                  <button
                    className="border h-10 w-20 rounded-lg flex items-center justify-center"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>

                  {/* View Screen Options */}
                  <div className="flex items-center gap-3 mb-4">
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

                    <button className="border h-10 w-10 rounded-lg flex gap-2 items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVG">
<path id="Vector" d="M8.00016 14.7669C11.6821 14.7669 14.6668 11.7822 14.6668 8.10026C14.6668 4.41836 11.6821 1.43359 8.00016 1.43359C4.31826 1.43359 1.3335 4.41836 1.3335 8.10026C1.3335 11.7822 4.31826 14.7669 8.00016 14.7669Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M8.00016 1.43359C6.28832 3.23103 5.3335 5.61809 5.3335 8.10026C5.3335 10.5824 6.28832 12.9695 8.00016 14.7669C9.71201 12.9695 10.6668 10.5824 10.6668 8.10026C10.6668 5.61809 9.71201 3.23103 8.00016 1.43359Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M1.3335 8.10156H14.6668" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

                    </button>
                    <button className="border h-10 py-2 px-4 rounded-lg flex gap-2 items-center justify-center">
                      <Rocket size={20} />
                      Publish
                    </button>
                    <button className="border h-10 py-2 px-4 rounded-lg flex gap-2 items-center justify-center">
                      <Eye size={20} />
                      Preview
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="border h-10 w-20 rounded-lg flex items-center justify-center"
                    onClick={handleExitEdit}
                  >
                    Exit Edit
                  </button>
                  <div className="flex flex-row">
                    {" "}
                    <CustomDropdown
                      selectedFont={selectedFont}
                      onSelectFont={handleFontSelect}
                    />
                    <CustomDesignDropdown
                      selectedDesign={selectedDesign}
                      setSelectedDesign={setSelectedDesign}
                    />
                    {/* Color Picker */}
                    <div className="flex flex-col gap-2 mb-4">
                      <label htmlFor="color-picker">Select Color:</label>
                      <input
                        id="color-picker"
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="border p-2 rounded"
                      />
                    </div>
                    {/* Magnification Tool */}
                    <div className="flex items-center gap-2 mb-4">
                      <input
                        id="zoom-slider"
                        type="range"
                        min="0.5"
                        max="3"
                        step="0.1"
                        value={zoom}
                        onChange={(e) => setZoom(parseFloat(e.target.value))}
                        className="border p-2 rounded"
                      />
                      <span>{(zoom * 100).toFixed(0)}%</span>
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
              <p className="text-center text-gray-500">Loading...</p>
            )}
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
