"use client";

import { usePathname, useRouter } from "next/navigation";
import MainLayout from "../components/MainLayout";
import { Toaster } from "../components/ui/toaster";
import { cn } from "../lib/utils";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { userLogout } from "../utils/request/auth";
import { Loading } from "../components/Loading";
import Login from "./login/page";
import Register from "./register/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-inter min-h-screen bg-background antialiased"
        )}
      >
        <Toaster />
        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      console.log('checkAuth');
      const token = localStorage.getItem("accessToken");
      setIsAuthenticated(!!token);
      setLoading(false);
    };

    const handleStorageChange = () => {
      console.log('handleStorageChange');
      const token = localStorage.getItem("accessToken");
      setIsAuthenticated(!!token);

      if (!token && pathname !== "/login") {
        router.replace("/login");
      }
    };

    checkAuth();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [pathname, router]);

  useEffect(() => {
    if (loading) return;

    if (isAuthenticated && (pathname === "/login" || pathname === "/")) {
      console.log('isAuthenticatedfromLogin');
      
      router.push("/navbar");
    } else if (!isAuthenticated && pathname !== "/login") {
      router.replace("/login");
    }
  }, [isAuthenticated, loading, pathname, router]);

  if (loading) {
    console.log('loading');
    return <Loading />;
  }

  if (!isAuthenticated) {
    console.log('NotisAuthenticated');
    return <Login />;
  }

  return <MainLayout>{children}</MainLayout>;
}
