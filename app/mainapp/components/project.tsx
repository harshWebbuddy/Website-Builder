import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronRight, Edit, MoreVertical, Trash2 } from "lucide-react";

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

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = preview_html;
      const adjustIframeHeight = () => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          const iframeDocument = iframeRef.current.contentWindow.document;
          const height = iframeDocument.body.scrollHeight;
          iframeRef.current.style.height = `${height}px`;
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
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleEdit = () => {
    const projectData = {
      id,
      title,
      preview_html,
      created_on,
      onDelete,
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
    if (window.confirm("Are you sure you want to delete this project?")) {
      onDelete(id);
    }
  };

  return (
    <div className="border max-w-[402px] max-h-[302px] w-full border-[#E8E8E8] p-6 rounded-3xl bg-white space-y-6">
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
          }}
        />
      </div>
      <div className="flex items-start">
        <div className="w-full text-black xl:text-[14px] font-light">
          <h1 className="xl:text-[18px] font-bold sm:text-[14px]">{title}</h1>
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
    </div>
  );
};

export default ProjectCard;
