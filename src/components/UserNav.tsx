"use client";

import React, { useState } from "react";
import { ChevronDown, LogOut, Loader2, X, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import userImage from "../../public/images/pngs/user.png";
import { UserAvatar } from "./UserAvatar";
import { userLogout } from "../utils/request/auth";
import { getEmail, getFirstName, getLastName } from "../utils/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

export function UserNav() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [logoutError, setLogoutError] = useState("");


  const handleSignOut = async () => {
    setIsLoading(true);
    setIsLoading(true);
    setLogoutError("");
    try {
    
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("email");
      localStorage.removeItem("firstName");
      localStorage.removeItem("user");
      localStorage.removeItem("lastName");
      router.push("/login");
    } catch (err: any) {
      console.error("Logout failed:", err);
      setLogoutError(
        err.response?.data?.message || "Failed to logout. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const user = {
    name: `${getFirstName()} ${getLastName()}`,
    email: getEmail(),
    image: userImage.src,
    firstName: getFirstName(),
    lastName: getLastName(),
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center justify-center space-x-2 border-none"
        >
          <UserAvatar
            user={{ name: user.name, image: user.image }}
            className="h-6 w-6  bg-black"
          />
          <span className="text-sm font-medium text-gray-900">
           <p>Sajal Khandelwal</p>
          </span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="p-0 mt-2">
        <div className="flex items-center justify-start gap-4p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user.email}
              </p>
            )}
          </div>
        </div>

        {/* Display Logout Error if any */}
        {logoutError && (
          <div className="flex items-center justify-center gap-2 rounded bg-red-100 p-2 text-red-500">
            <X className="h-4 w-4" />
            <span>{logoutError}</span>
          </div>
        )}

        <Button
          variant="outline"
          className="flex w-full items-center justify-center gap-2"
          onClick={handleSignOut}
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging out...
            </>
          ) : (
            <>
              <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
              Log Out
            </>
          )}
        </Button>
      </PopoverContent>
    </Popover>
  );
}
