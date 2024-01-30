'use client';
import React, { type ReactNode } from 'react';
import cx from 'clsx';
import { uniqueId } from 'lodash-es';
import { useTransition, animated as anm } from '@react-spring/web';
import { create } from 'zustand';
import { transitionAnimation } from '@/components/Animation';
import renderReactNode from '@/utils/renderReactNode';

interface Modal {
  title: string;
  headClass?: string;
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

export const showModal = (param: Omit<Modal, 'id'>) => {
  modalStore.setState({
    modal: {
      title: param.title,
      content: param.content,
      className: param.className ?? '',
      headClass: param.headClass ?? '',
      id: uniqueId(),
    },
  });
};

export const hideModal = () => {
  modalStore.setState({ modal: null });
};

export const ModalRender: React.FC = () => {
  const modal = modalStore((state) => state.modal);
  const transitions = useTransition(modal, {
    ...transitionAnimation.zoom,
  });

  if (!modal) return <></>;
  return transitions((style, item) => (
    <>
      {item && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.6)] z-100">
          <anm.div
            style={style}
            className={cx('relative flex flex-col jusity-center rounded-8px bg-#FFFFFF overflow-hidden dropdown-shadow z-200', item.className)}
          >
            <div className={cx('px-24px flex justify-between items-center h-40px text-14px leading-22px text-#111111 font-medium', item.headClass)}>
              {item.title}
              <span className="i-ep:close-bold text-14px text-#606266 cursor-pointer" onClick={hideModal} />
            </div>
            <div className="h-1px bg-#EBEDF0 pointer-events-none" />
            <div className="pt-24px px-24px">{renderReactNode(item.content)}</div>
          </anm.div>
        </div>
      )}
    </>
  ));
};
