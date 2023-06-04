"use client";
import { type PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import { ModalRender } from "@/components/Modal";
import { ToastRender } from "@/components/Toast";

const RecoilRootWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <RecoilRoot>
      <ModalRender />
      <ToastRender />
      {children}
    </RecoilRoot>
  );
};

export default RecoilRootWrapper;
