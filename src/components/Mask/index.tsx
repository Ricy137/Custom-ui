import { useEffect, type HTMLAttributes } from "react";
import { a, useTransition } from "@react-spring/web";
import cx from "clsx";
import { AnimatedDiv } from '@/components/Animation';

export type MaskProps = OverWrite<
  HTMLAttributes<HTMLDivElement>,
  {
    open: boolean;
  }
> & {
  transitionConfig?: object;
};

const Mask = ({
  className,
  open,
  transitionConfig,
  style,
  ...props
}: MaskProps) => {
  const transitions = useTransition(
    open,
    transitionConfig
      ? { ...transitionConfig }
      : {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: open,
      }
  );

  return transitions(
    (styles, item) =>
      item && (
        <AnimatedDiv
          className={cx(
            "fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-[200] contain-strict",
            className
          )}
          style={{ ...style, ...styles }}
          {...props}
        />
      )
  );
};

export default Mask;
