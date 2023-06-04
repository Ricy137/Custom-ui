"use client";
import React, { useCallback } from "react";
import { create } from "zustand";
import cx from "clsx";
import { uniqueId } from "lodash-es";
import { CheckedIcon, FailedIcon } from "@/components/Icons";

interface Toast {
  content: string | React.ReactNode;
  type: "success" | "warning" | "failed";
  className?: string;
  id: string;
}

interface ToastStore {
  toasts: Toast[];
  setToast: (newToasts: Toast[]) => void;
}

const toastsStore = create<ToastStore>((set) => ({
  toasts: [],
  setToast: (newToasts) => set({ toasts: newToasts }),
}));

export const showToast = (
  param: Omit<Toast, "id"> & { key?: string; duration?: number }
) => {
  let cur = toastsStore.getState().toasts;
  if (
    param.key &&
    cur.find(
      (item: Toast & { key?: string }) => item.key && item.key === param.key
    )
  )
    return;
  const newArr = cur ? [...cur] : [];
  const id = uniqueId();
  newArr.push({ ...param, id });
  toastsStore.setState({ toasts: [...newArr] });
  setTimeout(() => {
    let curAfter = toastsStore.getState().toasts;
    let newAfter = curAfter ? [...curAfter] : [];
    newAfter = newAfter.filter((toast) => toast.id !== id);
    toastsStore.setState({ toasts: [...newAfter] });
  }, param.duration ?? 3000);
};

export const ToastRender: React.FC = () => {
  const toasts = toastsStore((state) => state.toasts);
  const hide = useCallback((id: string) => {
    let cur = toastsStore.getState().toasts;
    let index = cur.findIndex((e) => e.id === id);
    if (index === -1) return cur;
    cur.splice(index, 1);
    toastsStore.setState({ toasts: [...cur] });
  }, []);

  return (
    <div className="fixed left-0 top-[5%] right-0 flex flex-col justify-center items-center gap-[12px] z-40">
      {toasts.map(({ content, type, id, className }) => (
        <div
          key={id}
          className={cx(
            "px-[24px] h-48px flex justify-between items-center gap-x-16px bg-#ffffff rounded-2px z-40 task-card-shadow",
            type === "success" && "text-#1E8E3E",
            type === "warning" || (type === "failed" && "text-#D93026"),
            className
          )}
        >
          {type === "success" ? <CheckedIcon /> : <FailedIcon />}
          {content}
          {/* <div
            className="i-ep:close-bold cursor-pointer"
            onClick={(e) => {
              hide(id);
            }}
          ></div> */}
        </div>
      ))}
    </div>
  );
};
