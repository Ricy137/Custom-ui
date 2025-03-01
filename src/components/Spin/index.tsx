"use client";
import React, { type HTMLAttributes, type ReactNode } from "react";
import cx from "clsx";
import { animated, useSpring } from "@react-spring/web";
import { rotate, AnimatedDiv } from "@/components/Animation";
import "./index.css";

interface SpinProps extends HTMLAttributes<HTMLDivElement> {
  svg?: ReactNode;
  // type?: "ring" | "bounce" | "flip";
  springConf?: object;
}

const Spin: React.FC<SpinProps> = ({
  className,
  // type = "ring",
  springConf,
  svg,
  ...props
}) => {
  const springs = useSpring(springConf ? { ...springConf } : { ...rotate });
  return (
    <AnimatedDiv
      style={{ ...springs }}
      className={cx("relative flex justify-center items-center", className)}
      {...props}
    >
      {svg ? (
        <>{svg}</>
      ) : (
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none" className="path" />
        </svg>
      )}
    </AnimatedDiv>
  );
};

export default Spin;
