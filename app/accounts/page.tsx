import React from "react";
import Sidebar from "@/components/accountsPage/Sidebar";

const page = () => {
  return (
    <div className="container px-4 md:px-6 py-4 md:py-6 flex-1">
      <div className="flex gap-5">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <Sidebar />
        </div>

        {/* Right Hand Side */}
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default page;
