"use client";

import { usePathname, useRouter } from "next/navigation";
import MainLayout from "../components/MainLayout";
import { Toaster } from "react-hot-toast";
import { cn } from "../lib/utils";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
// import { ToastProvider } from "@radix-ui/react-toast";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-inter min-h-screen bg-background antialiased")}>
     <Toaster/>
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
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token);
    setLoading(false);

    if (!token && !["/login", "/register"].includes(pathname)) {
      router.replace("/login");
    }
  }, [pathname, router]);

  useEffect(() => {
    if (loading) return;

    if (isAuthenticated && ["/login"].includes(pathname)) {
      router.replace("/navbar");
    }
  }, [isAuthenticated, loading, pathname, router]);

  if (loading) {
    return <Loading />;
  }

  return isAuthenticated ? (
    <MainLayout>{children}</MainLayout>
  ) : (
    children
  );
}
