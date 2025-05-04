import { auth } from "@/auth";
import Image from "next/image";
import React from "react";
import { ShoppingBag, User } from "lucide-react";
import ActiveLink from "./active-link";
import SignOut from "./sign-out";

const Sidebar = async () => {
  const session = await auth();
  const navItems = [
    {
      name: "Marketplace",
      path: "/marketplace",
      icon: <ShoppingBag className="h-4 w-4" />,
    },
    {
      name: "Credentials",
      path: "/marketplace/credential",
      icon: <User className="h-4 w-4" />,
    },
  ];
  if (!session?.user?.image) return;
  return (
    <div className="w-[250px] h-full flex flex-col justify-between border-r px-2">
      <div className="flex flex-col gap-10">
        <div>Logo</div>
        <div className="flex flex-col gap-5">
          {navItems.map((item) => (
            <ActiveLink key={item.path} href={item.path} icon={item.icon} name={item.name} />
          ))}
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center ">
          <Image height={30} width={30} className="rounded-full" alt="log" src={session?.user?.image} />
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
