"use client";
import React, { type HTMLAttributes, type ReactNode } from "react";
import cx from "clsx";
import { animated, useSpring } from "@react-spring/web";
import { rotate } from "../Animation";
import "./index.css";

interface SpinProps extends HTMLAttributes<HTMLDivElement> {
  svg?: ReactNode;
  type?: "ring" | "bounce" | "flip";
  springConf?: object;
}

const Spin: React.FC<SpinProps> = ({
  className,
  type = "ring",
  springConf,
  svg,
}) => {
  const springs = useSpring(springConf ? { ...springConf } : { ...rotate });
  return (
    <animated.span
      style={{ ...springs }}
      className={cx("relative flex justify-center items-center", className)}
    >
      {svg ? (
        <>{svg}</>
      ) : (
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none" className="path" />
        </svg>
      )}
    </animated.span>
  );
};

export default Spin;
