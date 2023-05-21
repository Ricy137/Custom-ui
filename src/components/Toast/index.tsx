import React from "react";
import { atom, useRecoilValue } from "recoil";
import cx from "clsx";
import { setRecoil } from "recoil-nexus";
import { uniqueId } from "lodash-es";

interface Toast {
  content: string | React.ReactNode;
  type: "success" | "warning" | "failed";
  id: string;
}

const toastsState = atom<Array<Toast>>({
  key: "toastState",
  default: [],
});

export const showToast = (param: Omit<Toast, "id"> & { key?: string }) => {
  setRecoil(toastsState, (cur) => {
    if (
      param.key &&
      cur.find(
        (item: Toast & { key?: string }) => item.key && item.key === param.key
      )
    )
      return cur;
    const newArr = cur ? [...cur] : [];
    const id = uniqueId();
    newArr.push({ ...param, id });
    setTimeout(() => {
      setRecoil(toastsState, (curAfter) => {
        let newAfter = curAfter ? [...curAfter] : [];
        newAfter = newAfter.filter((toast) => toast.id !== id);
        return newAfter;
      });
    }, 1000);
    return newArr;
  });
};

export const ToastRender: React.FC = () => {
  const toasts = useRecoilValue(toastsState);
  return (
    <div className="fixed left-0 top-[65%] right-0 pointer-events-none flex flex-col justify-center items-center gap-[12px] z-40">
      {toasts.map(({ content, type, id }) => (
        <div
          key={id}
          className={cx(
            "px-[42px] md:px-[42px] h-[72px] md:h-[72px] flex justify-center items-center text-[28px] md:text-[16px] leading-[36px] md:leading-[22px] text-[#FFFFFF] rounded-[42px] z-40",
            {
              "bg-[#05001FB2]": type === "failed" || type === "warning",
              "bg-[#F15C5C] opacity-70": type === "success",
            }
          )}
        >
          {content}
        </div>
      ))}
    </div>
  );
};
