"use client";
import { useCallback } from "react";
import { showToast } from "@/components/Toast";
import { showModal, hideModal } from "@/components/Modal";

const SampleModal: React.FC = () => {
  return <div className="h-300px w-300px">This is a Modal</div>;
};
const ToastPage: React.FC = () => {
  const handleShowToast = useCallback(() => {
    showToast({
      type: "success",
      content: "This is a toast",
      className: "border-1px border-#1E8E3E border-solid",
    });
  }, []);

  const handleShowModal = useCallback(() => {
    showModal({ title:'',content: <SampleModal /> });
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-y-24px">
      <div className="w-4/5">
        <button onClick={handleShowToast}>Show Toast</button>
      </div>
      <div className="w-4/5">
        <button onClick={handleShowModal}>Show Modal</button>
      </div>
    </div>
  );
};
export default ToastPage;
