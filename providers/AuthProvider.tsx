"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import { getCookie } from "cookies-next";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    setIsLoggedIn(!!token);
  }, []);

  return isLoggedIn;
};

const useRouteProtection = (isLoggedIn: boolean, defaultRedirect: string) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/auth/redirect" && !isLoggedIn) {
      toast.error("Login to view this page!");
      router.push(defaultRedirect); // Redirect to the default link
    }
  }, [isLoggedIn, pathname, router, defaultRedirect]);
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useAuth();
  const defaultRedirect = "/"; // Set your default link here
  
  useRouteProtection(isLoggedIn, defaultRedirect);

  if (!isLoggedIn) {
    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;


