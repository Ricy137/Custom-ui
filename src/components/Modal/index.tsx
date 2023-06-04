"use client";
import React, { type ReactNode } from "react";
import cx from "clsx";
import { uniqueId } from "lodash-es";
import { create } from "zustand";
import { CloseIcon } from "../Icons";
import renderReactNode from "@/utils/renderReactNode";

interface Modal {
  content: ReactNode;
  className?: string;
  iconClass?: string;
  id: string;
}

interface ModalStore {
  modal: Modal | null;
  showModal: (newModal: Modal) => void;
  hideModal: () => void;
}

const modalStore = create<ModalStore>((set) => ({
  modal: null,
  showModal: (newModal: Modal) => set({ modal: newModal }),
  hideModal: () => set({ modal: null }),
}));

export const showModal = (param: Omit<Modal, "id">) => {
  modalStore.setState({
    modal: {
      content: param.content,
      className: param.className ?? "",
      id: uniqueId(),
    },
  });
};

export const hideModal = () => {
  modalStore.setState({ modal: null });
};

export const ModalRender: React.FC = () => {
  const modal = modalStore((state) => state.modal);

  if (!modal) return <></>;
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center md:justify-center bg-[rgba(0,0,0,0.6)] z-40">
      <div
        className={cx(
          "relative flex flex-col jusity-center w-[90vw] max-w-[560px] p-[28px] md:p-[16px] rounded-[8px] md:rounded-[2px] bg-white overflow-hidden dropdown-shadow z-50",
          modal.className
        )}
      >
        <div className="flex flex-row justify-end items-center w-full text-[22px] md:text-[20px] md:leading-[28px] text-[#303549] font-semibold z-50">
          <button onClick={hideModal}>
            <CloseIcon
              className={cx(
                "w-[16px] md:w-[8px] h-[16px] md:h-[8px]",
                modal.iconClass
              )}
            />
          </button>
        </div>
        {renderReactNode(modal.content)}
      </div>
    </div>
  );
};
