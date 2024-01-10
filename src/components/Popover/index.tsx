'use client';
import { useRef, useState, PropsWithChildren, SVGAttributes } from 'react';
import {
  useFloating,
  UseFloatingOptions,
  autoUpdate,
  useFocus,
  useClick,
  useInteractions,
  useHover,
  useDismiss,
  FloatingArrow,
  arrow,
  offset,
  OffsetOptions,
  useTransitionStyles,
  UseTransitionStylesProps,
} from '@floating-ui/react';
import {
  UseHoverProps,
  UseClickProps,
  UseFocusProps,
  UseDismissProps,
  FloatingArrowProps,
} from '@floating-ui/react';

//Only to be used for interaction Popover
interface ArrowProps
  extends Omit<FloatingArrowProps, 'context'>,
    SVGAttributes<SVGSVGElement> {
  height?: number;
  width?: number;
  strokeWidth?: number;
}

export type InteractionProps = UseHoverProps | UseClickProps | UseFocusProps;

export interface PopoverProps extends PropsWithChildren {
  Content: React.ReactNode;
  options?: Partial<UseFloatingOptions>;
  trigger?: 'click' | 'hover' | 'focus';
  controledOpen?: boolean;
  hasArrow?: boolean;
  offsetOptions?: OffsetOptions;
  transitionStylesProps?: UseTransitionStylesProps;
  arrowProps?: ArrowProps;
  interactionProps?: UseHoverProps | UseClickProps | UseFocusProps;
  dismissProps?: UseDismissProps;
}

const Popover: React.FC<PopoverProps> = ({
  Content,
  options,
  trigger,
  controledOpen = true,
  hasArrow,
  arrowProps,
  offsetOptions,
  transitionStylesProps,
  interactionProps,
  dismissProps,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(offsetOptions),
    ],
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    ...options,
  });

  const triggerOption = () => {
    switch (trigger) {
      case 'click':
        return useClick(context, interactionProps);
      case 'focus':
        return useFocus(context, interactionProps);
      case 'hover':
        return useHover(context, interactionProps);
    }
  };

  const dismiss = useDismiss(context, dismissProps);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    triggerOption(),
    dismiss,
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    ...transitionStylesProps,
  });

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {controledOpen && isOpen && isMounted && (
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}
        >
          {hasArrow && (
            <FloatingArrow ref={arrowRef} context={context} {...arrowProps} />
          )}
          <>{Content}</>
        </div>
      )}
    </>
  );
};

export default Popover;
