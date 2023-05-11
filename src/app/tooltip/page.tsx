"use client";
import PopoverContent from "@/components/Popper";
import { useState } from "react";

const TooltipPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <PopoverContent
        Anchor={<button>Button</button>}
        Content={() => "THis is tooltip"}
        trigger="click"
        hasArrow={true}
        offsetOptions={10}
      />
    </div>
  );
};

export default TooltipPage;
