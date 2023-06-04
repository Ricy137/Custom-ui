"use client";
import { useCallback } from "react";
import { showToast } from "@/components/Toast";
import { showModal, hideModal } from "@/components/Modal";

const SampleModal: React.FC = () => {
  return <div className="h-300px w-300px">这是一个模态</div>;
};
const ToastPage: React.FC = () => {
  const handleShowToast = useCallback(() => {
    showToast({
      type: "success",
      content: "这是一个土司条",
      className: "border-1px border-#1E8E3E border-solid",
    });
  }, []);

  const handleShowModal = useCallback(() => {
    showModal({ content: <SampleModal /> });
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-y-24px">
      <div className="w-4/5">
        <button onClick={handleShowToast}>展示吐司条</button>
      </div>
      <div className="w-4/5">
        <button onClick={handleShowModal}>展示模态</button>
      </div>
    </div>
  );
};
export default ToastPage;
