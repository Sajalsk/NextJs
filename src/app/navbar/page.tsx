"use client";

import { CustomInput } from "../../components/CustomInput";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserNav } from "../../components/UserNav";

type NavItemProps = {
  iconSrc?: string;
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({
  iconSrc,
  label,
  onClick,
  children,
}) => (
  <div
    className="flex items-center gap-2 cursor-pointer hover:opacity-80"
    onClick={onClick}
  >
    {iconSrc && (
      <Image
        src={iconSrc}
        height={20}
        width={20}
        alt={label || "Icon"}
        priority
      />
    )}
    {label && <p className="text-sm font-medium">{label}</p>}
    {children}
  </div>
);

const Navbar: React.FC = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState<string>("");

  const router = useRouter();
  const pathName = usePathname();


  const toggleSearch = () => setSearchVisible((prev) => !prev);

  const navigateToCreate = () => {
    router.replace("/tour");
  };

  const handleLogo = () => {
    router.push("/register");
  };

 const handleLogOut = ()=>{

    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLoggedIn");

   
    router.replace("/login");

  }

  useEffect(() => {
    handleLogOut()
  
   
  }, [router]);

  return (
    <div className="navbar flex items-center justify-around h-20 px-8 bg-blue-200 shadow-md">
      <div className="logo hover:cursor-pointer">
        <Image
          onClick={handleLogo}
          src="/images/Trackway.png"
          className="mix-blend-multiply"
          height={40}
          width={160}
          alt="Logo"
          priority
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          {isSearchVisible && (
            <CustomInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Here"
              className="w-60"
            />
          )}
          <NavItem
            iconSrc="/images/svgs/search.svg"
            label="Search"
            onClick={toggleSearch}
          />
        </div>

        <NavItem
          iconSrc="/images/svgs/plus.svg"
          label="Publish a Ride"
          onClick={navigateToCreate} 
        />

        <div className="flex items-center gap-2">
        <UserNav/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
