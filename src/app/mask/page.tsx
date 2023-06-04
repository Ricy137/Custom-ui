"use client";
import { useState } from "react";
import Mask from "@/components/Mask";

const MaskPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen bg-#fffffff">
      <button onClick={() => setOpen((pre) => !pre)}>toggle Open</button>
      <h1 className="text-black">Mask</h1>
      <Mask open={open} />
    </div>
  );
};

export default MaskPage;
