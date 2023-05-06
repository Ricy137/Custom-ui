import React, {
  createElement,
  forwardRef,
  type ReactNode,
  type PropsWithChildren,
  type ComponentProps,
} from "react";
import cx from "clsx";
import Spin from "@/components/Spin";
import renderReactNode from "@/utils/renderReactNode";
import "./index.css";

export interface Props extends ComponentProps<"button"> {
  variant?: "contained" | "text" | "outlined" | "simpleOutlined";
  color?: "gray" | "gradient" | "white" | "orange" | "black" | "red";
  size?: "mini" | "small" | "normal" | "medium";
  fullWidth?: boolean;
  loading?: boolean | "start" | "end";
  icon?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      children,
      className,
      variant = "contained",
      color = "default",
      size = "normal",
      disabled = false,
      fullWidth = false,
      loading = false,
      icon,
      startIcon,
      endIcon,
      ...props
    },
    _forwardRef
  ) => {
    return createElement(
      props.href ? "a" : "button",
      {
        className: cx(
          `button button--${variant} button--${color} button--${size}`,
          fullWidth && "button--fullWidth",
          loading === true && "is-loading",
          disabled && "is-disabled",
          className
        ),
        ref: _forwardRef,
        rel: props.href ? "noopener noreferrer" : undefined,
        ...props,
      },
      <>
        {startIcon && (
          <span className="button__icon">{renderReactNode(startIcon)}</span>
        )}
        {children && (
          <span className="button__content">
            {loading === "start" && (
              <Spin className="mr-8px text-1.4em translate-y-[-.3em]" />
            )}
            {children}
          </span>
        )}
        {!children && icon && (
          <span className="button__icon">{renderReactNode(icon)}</span>
        )}
        {endIcon && (
          <span className="button__icon">{renderReactNode(endIcon)}</span>
        )}
        {loading === true && <Spin className="button__loading" />}
      </>
    );
  }
);

export default Button;
