import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronRight, Edit, MoreVertical, Trash2 } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({
  created_on,
  preview_image,
  title,
}: {
  preview_image: string;
  title: string;
  created_on: { date: string; time: string };
}) {
  return (
    <div className="border max-w-[402px] border-[#E8E8E8] p-6 rounded-3xl bg-white space-y-6">
  <div className="rounded-3xl overflow-hidden max-h-[200px]">
    <Image 
      src={preview_image} 
      alt="" 
      width={400} 
      height={400} 
      className="object-cover w-full h-full" 
    />
  </div>
  <div className="flex items-start">
    <div className="w-full">
      <h1 className="xl:text-md text-sm 2xl:text-xl font-semibold">{title}</h1>
      <p className="text-primary-black text-opacity-70 xl:text-[10px] text-[10px] 2xl:text-sm flex items-center gap-2 mt-2">
        {created_on.date} {created_on.time}
      </p>
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-2 hover:bg-gray-100 h-10 w-10 rounded-full">
          <MoreVertical size={20}/>
        </button>
      </DropdownMenuTrigger>
      {/* Uncomment and customize the menu items as needed */}
      {/* <DropdownMenuContent>
        <DropdownMenuItem inset className="min-w-[200px] flex justify-between gap-8 items-center my-1">
          <div className="flex gap-3">
            <Edit size={20}/>
            <h2>Edit</h2>
          </div>
          <ChevronRight size={20}/>
        </DropdownMenuItem>
        <DropdownMenuItem inset className="min-w-[200px] flex justify-between gap-8 items-center my-1">
          <div className="flex gap-3">
            <Trash2 size={20}/>
            <h2>Delete</h2>
          </div>
          <ChevronRight size={20}/>
        </DropdownMenuItem>
      </DropdownMenuContent> */}
    </DropdownMenu>
  </div>
</div>

  );
}
