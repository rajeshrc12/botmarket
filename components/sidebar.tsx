import { auth } from "@/auth";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Sidebar = async () => {
  const session = await auth();
  if (!session?.user?.image) return;
  return (
    <div className="w-[250px] h-full flex flex-col justify-between border-r px-2">
      <div className="flex flex-col gap-10">
        <div>Logo</div>
        <div className="flex flex-col gap-5">
          <Button variant={"ghost"}>Marketplace</Button>
          <Button variant={"ghost"}>Credential</Button>
        </div>
      </div>
      <div className="p-2">
        <div className="flex items-center ">
          <Image height={30} width={30} className="rounded-full" alt="log" src={session?.user?.image} />
          <Button variant={"ghost"}>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
