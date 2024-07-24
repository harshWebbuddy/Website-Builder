"use client";

import { Eye, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
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

export default function ViewGeneratedWebsite() {
  const router = useRouter();
  const [iframeWidth, setIframeWidth] = useState("100%");
  const [editingMode, setEditingMode] = useState(false);
  const [generatedHtml, setGeneratedHtml] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const content = url.searchParams.get("doc_content");
    if (content) {
      setGeneratedHtml(decodeURIComponent(content));
    }
  }, [router]);

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

  return (
    <RootLayout shoWebar={true}>
      <main className="flex-1 h-full w-full flex flex-col mt-10">
        <div className="bg-white py-3 px-5 flex justify-between max-w-[1668px] mx-auto w-full items-center rounded-xl translate-y-1 shadow shadow-gray-100 mt-20">
          <div className="flex items-center gap-x-1.5 w-full max-w-fit">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <span className="w-3 h-3 rounded-full bg-[#EAB308]" />
            <span className="w-3 h-3 rounded-full bg-[#22C55E]" />
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Switch checked={editingMode} onClick={handleEdit} />
              Construction Mode
            </div>
            <div className="flex items-center gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      className={clsx(
                        "border h-10 w-10 rounded-lg flex gap-2 items-center justify-center",
                        iframeWidth === "100%" && "border-[3px] border-blue-400"
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
                {/* <WwwIcon /> */}wwicon
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
          </div>
        </div>
        <div className="flex-1 max-w-[1668px]  w-full mx-auto items-center justify-center">
          {generatedHtml ? (
            <iframe
              ref={iframeRef}
              srcDoc={generatedHtml}
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
      </main>
    </RootLayout>
  );
}
