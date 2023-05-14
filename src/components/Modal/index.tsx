import React, { type ReactNode } from 'react';
import { atom, useRecoilValue } from 'recoil';
import cx from 'clsx';
// import Close from '@assets/delete.svg';
import renderReactNode from '@/utils/renderReactNode';
import { setRecoil } from 'recoil-nexus';

interface Modal {
  content: ReactNode;
  className?: string;
}

const modalState = atom<Modal | null>({
  key: 'modalState',
  default: null,
});

export const showModal = (param: Omit<Modal, 'id'>) => {
  setRecoil(modalState, () => {
    return {
      content: param.content,
      className: param.className ?? '',
    };
  });
};

export const hideModal = () => {
  setRecoil(modalState, () => {
    return null;
  });
};

export const ModalRender: React.FC = () => {
  const modal = useRecoilValue(modalState);
  console.log('modal', modal);
  if (!modal) return <></>;
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center md:justify-center bg-[rgba(0,0,0,0.6)] z-40">
      <div
        className={cx(
          'relative flex flex-col jusity-center w-[90vw] max-w-[560px] p-[28px] md:p-[16px] rounded-[8px] md:rounded-[2px] bg-white overflow-hidden dropdown-shadow z-50',
          modal.className
        )}
      >
        {/* <div className="flex flex-row justify-end items-center w-full text-[22px] md:text-[20px] md:leading-[28px] text-[#303549] font-semibold z-50">
          <button onClick={hideModal}>
            <img src={Close} alt="delete svg" className="w-[16px] md:w-[8px] h-[16px] md:h-[8px]" />
          </button>
        </div> */}
        {renderReactNode(modal.content)}
      </div>
    </div>
  );
};
