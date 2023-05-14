"use client";
import { useState } from "react";
import Mask from "@/components/Mask";

const MaskPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen((pre) => !pre)}>toggle Open</button>
      <Mask open={open} />
    </div>
  );
};

export default MaskPage;
