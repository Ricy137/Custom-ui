'use client';
import React, { type ReactNode, useState, useCallback } from 'react';
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react';
import cx from 'clsx';
import { uniqueId } from 'lodash-es';
import { useTransition, animated as anm } from '@react-spring/web';
import { create } from 'zustand';
import { transitionAnimation, AnimatedDiv } from '@/components/Animation';
import { CloseIcon } from '../Icons';
import renderReactNode from '@/utils/renderReactNode';

interface Modal {
  title?: string;
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
  //modal display animation
  const transitions = useTransition(modal, {
    ...transitionAnimation.zoom,
  });

  const handleDismiss = useCallback(
    (open: boolean, event?: Event) => {
      if (!open) {
        hideModal();
      }
    },
    [hideModal]
  );

  const { refs, context } = useFloating({
    open: !!modal,
    onOpenChange: handleDismiss,
  });

  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
  });

  const { getFloatingProps } = useInteractions([dismiss]);

  if (!modal) return <></>;
  return transitions((style, item) => (
    <>
      {item && (
        (<FloatingOverlay
          lockScroll
          style={{ background: 'rgba(0, 0, 0, 0.6)' }}
          className="flex flex-col items-center justify-center"
        >
          <FloatingFocusManager context={context}>
            <div ref={refs.setFloating} {...getFloatingProps()}>
              <AnimatedDiv
                style={{ ...style }}
                className={cx(
                  'relative flex flex-col jusity-center rounded-[8px] bg-[#FFFFFF] overflow-hidden dropdown-shadow z-[200]',
                  item.className
                )}
              >
                <div
                  className={cx(
                    'px-[24px] flex justify-between items-center h-[40px] text-[14px] leading-[22px] text-[#111111] font-medium',
                    item.headClass
                  )}
                >
                  {item.title}
                  <div
                    className="text-[14px] text-[#606266] cursor-pointer"
                    onClick={hideModal}
                  >
                    <CloseIcon />
                  </div>
                </div>
                {/* Divider between header and body */}
                <div className="h-[1px] bg-[#EBEDF0] pointer-events-none" />
                <div className="pt-[24px] px-[24px]">
                  {renderReactNode(item.content)}
                </div>
              </AnimatedDiv>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>)
      )}
    </>
  ));
};
