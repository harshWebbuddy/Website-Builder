import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronRight, Edit, MoreVertical, Trash2, XIcon } from "lucide-react";

type ProjectCardProps = {
  id: string;
  title: string;
  preview_html: string;
  created_on: {
    date: string;
    time: string;
  };
  onDelete: (id: string) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  preview_html,
  created_on,
  onDelete,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = preview_html;
      const adjustIframeHeight = () => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          const iframeDocument = iframeRef.current.contentWindow.document;
          const height = iframeDocument.body.scrollHeight;
          iframeRef.current.style.height = `${height * 0.8}px`; // Adjust height based on scaling
        }
      };
      iframeRef.current.addEventListener("load", adjustIframeHeight);
      return () => {
        if (iframeRef.current) {
          iframeRef.current.removeEventListener("load", adjustIframeHeight);
        }
      };
    }
  }, [preview_html]);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMMM dd, yyyy");
    } catch (error) {
      console.error("Invalid date format:", error);
      return "Invalid Date";
    }
  };

  const handleEdit = () => {
    const projectData = {
      id,
      title,
      preview_html,
      created_on,
    };

    console.log("Saving project data to localStorage:", projectData);

    try {
      localStorage.setItem("projectData", JSON.stringify(projectData));
      router.push(`/websitebuilding/view/${id}`);
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  };

  const handleDelete = () => {
    console.log("Opening delete confirmation modal...");
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    console.log("Confirming delete...");
    onDelete(id);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    console.log("Closing modal...");
    setIsModalOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="border hover:shadow-md hover:shadow-[#00A4A6] hover:scale-105 transform transition-transform duration-300 ease-out max-w-[402px] max-h-[302px] w-full border-[#E8E8E8] p-6 rounded-3xl bg-white space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="rounded-3xl overflow-hidden">
            <iframe
              ref={iframeRef}
              title="HTML Preview"
              scrolling="no"
              style={{
                width: "372px",
                maxHeight: "181px",
                border: "none",
                overflow: "hidden",
                height: "auto",
                transform: "scale(0.8)",
                transformOrigin: "0 0",
              }}
            />
          </div>
          <div className="flex items-start">
            <div className="w-full text-black xl:text-[14px] font-light">
              <h1 className="xl:text-[18px] font-bold sm:text-[14px]">
                {title}
              </h1>
              <p className="text-primary-black xl:text-[14px] sm:text-[12px] text-opacity-70 flex items-center gap-2 mt-2">
                {formatDate(created_on.date)} {created_on.time}
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-2 hover:bg-gray-100 h-10 w-10 rounded-full">
                  <MoreVertical size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[40] bg-white">
                <DropdownMenuItem
                  inset
                  className="min-w-[200px] flex justify-between gap-8 items-center my-1"
                  onClick={handleEdit}
                >
                  <div className="flex gap-3">
                    <Edit size={20} />
                    <h2>Edit</h2>
                  </div>
                  <ChevronRight size={20} />
                </DropdownMenuItem>
                <DropdownMenuItem
                  inset
                  className="min-w-[200px] flex justify-between gap-8 items-center my-1"
                  onClick={handleDelete}
                >
                  <div className="flex gap-3">
                    <Trash2 size={20} />
                    <h2>Delete</h2>
                  </div>
                  <ChevronRight size={20} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.div>
      </AnimatePresence>

      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="fixed inset-0 z-[20] overflow-y-auto"
      >
        <div className="min-h-screen z-[20] flex items-center justify-center px-4 text-center">
          <div
            className="inset-0 fixed z-[20] bg-black opacity-20"
            aria-hidden="true"
          ></div>
          <div className="bg-white border z-[50] border-md rounded-lg max-w-sm w-full p-6 mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Delete Project</h2>
              <button onClick={closeModal}>
                <XIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-700">
                Are you sure you want to delete this project? This action cannot
                be undone.
              </p>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm font-medium hover:shadow-md shadow-gray-700 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm hover:shadow-md shadow-red-500 dfont-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProjectCard;
