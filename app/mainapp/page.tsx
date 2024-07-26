"use client";
import { useState, useEffect } from "react";
import { Plus, Search } from "lucide-react";
import RootLayout from "../layout";
import { useRouter } from "next/navigation";
import ProjectCard from "./components/project";
import axios from "axios";
import { API_URL } from "@/lib/api";
import Cookie from "js-cookie";

type Project = {
  id: string;
  title: string;
  description: string;
  preview_html: string;
  created_on: {
    date: string;
    time: string;
  };
};

const WebsiteBuilder = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleCreateNewClick = () => {
    router.push("/websitebuilding");
  };

  const fetchProjects = async () => {
    try {
      const token = Cookie.get("token");
      const response = await axios.get(
        `${API_URL}/users/api/v1/docs?page=1&limit=10&category=website`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProjects(
        response.data.data.docs.map((project: any) => {
          const createdAt = new Date(project.createdAt);
          const createdOn = {
            date: createdAt.toLocaleDateString(),
            time: createdAt.toLocaleTimeString(),
          };

          return {
            id: project._id,
            title: project.doc_name,
            preview_html: project.doc_content,
            created_on: createdOn,
          };
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = Cookie.get("token");
      await axios.delete(`${API_URL}/users/api/v1/docs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 flex flex-col xl:flex-col 2xl:flex-col gap-8 mx-auto max-w-[1640px]">
      <div className="xl:mt-28 mt-20 2xl:mt-40 flex flex-col xl:flex-row 2xl:flex-row md:flex-row lg:flex-row sm:flex-row justify-between w-full mx-auto">
        <div className="space-y-2 flex flex-col">
          <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold">
            AI Website Builder
          </h1>
          <p className="text-gray-600 text-sm xl:text-base">
            Manage your projects.
          </p>
        </div>
        <div className="flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row sm:flex-row flex-col gap-6 mt-4 xl:mt-0">
          <div className="bg-gray-100 border border-gray-300 px-3 py-2 rounded-xl flex items-center w-full">
            <Search className="text-gray-500" size={16} />
            <input
              type="search"
              className="outline-none h-[24px] xl:w-[461px] 2xl:w-[461px] max-w-[461px] xl:h-[34px] 2xl:h-[52px] w-full bg-gray-100 text-sm px-2"
              placeholder="Search websites"
            />
          </div>
          <button
            onClick={handleCreateNewClick}
            className="bg-teal-600 whitespace-nowrap text-white text-sm xl:text-base py-2 px-4 xl:px-6 rounded-xl flex items-center gap-2"
          >
            <Plus size={20} />
            Create new AI website
          </button>
        </div>
      </div>
      <div className="p-4 grid gap-4 mt-2 w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            preview_html={project.preview_html}
            created_on={project.created_on}
            title={project.title}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

const WebApp = () => {
  return (
    <RootLayout shoWebar={true}>
      <main className="max-w-[1640px] mx-auto">
        <WebsiteBuilder />
      </main>
    </RootLayout>
  );
};

export default WebApp;
