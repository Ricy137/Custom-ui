"use client";
import { useRef, useState, PropsWithChildren, SVGAttributes } from "react";
import {
  useFloating,
  UseFloatingOptions,
  autoUpdate,
  useFocus,
  useClick,
  useInteractions,
  useHover,
  FloatingArrow,
  arrow,
  offset,
  OffsetOptions,
  useTransitionStyles,
  UseTransitionStylesProps,
} from "@floating-ui/react";

import { Props } from "@floating-ui/react/src/components/FloatingArrow";

interface ArrowProps
  extends Omit<Props, "context">,
    SVGAttributes<SVGSVGElement> {
  height?: number;
  width?: number;
  strokeWidth?: number;
}

interface PopoverContentProps extends PropsWithChildren {
  Content: React.ReactNode | Function;
  options?: Partial<UseFloatingOptions>;
  trigger: "click" | "hover" | "focus";
  hasArrow?: boolean;
  offsetOptions?: OffsetOptions;
  transitionStylesProps?: UseTransitionStylesProps;
  arrowProps?: ArrowProps;
}

const PopoverContent: React.FC<PopoverContentProps> = ({
  Content,
  options,
  trigger,
  hasArrow,
  arrowProps,
  offsetOptions,
  transitionStylesProps,
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
      case "click":
        return useClick(context);
      case "focus":
        return useFocus(context);
      case "hover":
        return useHover(context);
    }
  };

  const { getReferenceProps, getFloatingProps } = useInteractions([
    triggerOption(),
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    ...transitionStylesProps,
  });

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}
        >
          {hasArrow && (
            <FloatingArrow ref={arrowRef} context={context} {...arrowProps} />
          )}
          {typeof Content === "function" ? <Content /> : Content}
        </div>
      )}
    </>
  );
};

export default PopoverContent;
