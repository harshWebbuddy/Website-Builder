
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { API_URL } from "@/lib/api";
import Cookies from 'js-cookie'; 
export function ProfileButton() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleSignOut = async () => {
    setIsPending(true);
    try {
      const token = Cookies.get('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.get(`${API_URL}/users/api/v1/auth/logout`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      Cookies.remove('token');
console.log("sign out",response);
      router.push('/auth');
      toast.success('Successfully signed out!');
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.error || error.response.data);
      } else {
        toast.error(error.message);
      }
      console.error("Couldn't sign out!", error);
    } finally {
      setIsPending(false);
    }
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Image
            src="/dummy.png"
            alt=""
            width={50}
            height={50}
            className="w-[52px] h-[52px] object-cover rounded-xl"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[230px] bg-white relative -left-20 top-6 text-[15px]">
        <div className="relative p-4 flex items-center gap-3">
          <div className="relative">
            <Image
              src="/dummy.png"
              alt=""
              width={100}
              height={100}
              className="w-[38px] h-[38px] object-cover rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Marian Jhon</h1>
            <p className="text-primary-black text-opacity-50">marian@email.com</p>
          </div>
        </div>
        <DropdownMenuSeparator className="border-1.5 border-b border-[#DBDADE]" />
        <DropdownMenuGroup>
          <Link href="/settings">
            <DropdownMenuItem className="flex gap-3 px-4">
              <Settings size={22} />
              Setting
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="border-1.5 border-b border-[#DBDADE]" />
        <DropdownMenuSeparator />
        <button
          onClick={handleSignOut}
          disabled={isPending}
          className={`relative flex select-none items-center rounded-lg h-12 p-4 outline-none w-full gap-3 text-[#D9000B] hover:bg-[#D9000B]/10 cursor-pointer ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <LogOut size={20} />
          {isPending ? 'Signing out...' : 'Sign out'}
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
