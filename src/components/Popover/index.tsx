import { useRef, useState, PropsWithChildren, SVGAttributes } from "react";
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
} from "@floating-ui/react";
import { Props as HoverProps } from "@floating-ui/react/src/hooks/useHover";
import { Props as ClickProps } from "@floating-ui/react/src/hooks/useClick";
import { Props as FocusProps } from "@floating-ui/react/src/hooks/useFocus";
import { Props as DismissProps } from "@floating-ui/react/src/hooks/useDismiss";
import { Props } from "@floating-ui/react/src/components/FloatingArrow";

interface ArrowProps
  extends Omit<Props, "context">,
    SVGAttributes<SVGSVGElement> {
  height?: number;
  width?: number;
  strokeWidth?: number;
}

export type InteractionProps = HoverProps | ClickProps | FocusProps;

export interface PopoverProps extends PropsWithChildren {
  Content: React.ReactNode | Function;
  options?: Partial<UseFloatingOptions>;
  trigger: "click" | "hover" | "focus";
  hasArrow?: boolean;
  offsetOptions?: OffsetOptions;
  transitionStylesProps?: UseTransitionStylesProps;
  arrowProps?: ArrowProps;
  interactionProps?: HoverProps | ClickProps | FocusProps;
  dismissProps?: DismissProps;
}

const Popper: React.FC<PopoverProps> = ({
  Content,
  options,
  trigger,
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
      case "click":
        return useClick(context, interactionProps);
      case "focus":
        return useFocus(context, interactionProps);
      case "hover":
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
      {isOpen && isMounted && (
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

export default Popper;
