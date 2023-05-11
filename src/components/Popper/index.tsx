"use client";
import { useRef, useState } from "react";
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

interface PopoverContentProps {
  Anchor: React.ReactNode | Function;
  Content: React.ReactNode | Function;
  options?: Partial<UseFloatingOptions>;
  trigger: "click" | "hover" | "focus";
  hasArrow?: boolean;
  offsetOptions?: OffsetOptions;
  transitionStylesProps?: UseTransitionStylesProps;
}

const PopoverContent: React.FC<PopoverContentProps> = ({
  Anchor,
  Content,
  options,
  trigger,
  hasArrow,
  offsetOptions,
  transitionStylesProps,
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

  const { isMounted, styles } = useTransitionStyles(context);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {typeof Anchor === "function" ? <Anchor /> : Anchor}
      </div>
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}
        >
          {hasArrow && <FloatingArrow ref={arrowRef} context={context} />}
          {typeof Content === "function" ? <Content /> : Content}
        </div>
      )}
    </>
  );
};

export default PopoverContent;
