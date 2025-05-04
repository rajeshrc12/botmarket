import Sidebar from "@/components/sidebar";
import React from "react";

const MarkeplaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default MarkeplaceLayout;
