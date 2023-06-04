import { useEffect, type HTMLAttributes } from "react";
import { a, useTransition } from "@react-spring/web";
import classNames from "clsx";

type OverWrite<T, U> = Omit<T, keyof U> & U;

export type Props = OverWrite<
  HTMLAttributes<HTMLDivElement>,
  {
    open: boolean;
  }
> & {
  transitionConfig?: object;
};

const Mask = ({
  open,
  className,
  transitionConfig,
  style,
  ...props
}: Props) => {
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
        <a.div
          className={classNames(
            "fixed left-0 top-0 w-full h-full bg-black bg-opacity-40 z-[200] contain-strict",
            className
          )}
          style={{ ...style, ...styles }}
          {...props}
        />
      )
  );
};

export default Mask;
