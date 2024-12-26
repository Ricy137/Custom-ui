"use client";
import {
  useRef,
  forwardRef,
  useCallback,
  type ReactElement,
  type ComponentProps,
} from "react";
import composeRef from "@/utils/composeRef";
import cx from "clsx";
import "./index.css";
type OverWrite<T, U> = Omit<T, keyof U> & U;

const setValue = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  "value"
)!?.set!;

export type Props = OverWrite<
  ComponentProps<"input">,
  {
    error?: string;
    wrapperClassName?: string;
    outerPlaceholder?: ReactElement<any>;
    prefixIcon?: string;
    size?: "normal" | "small" | "medium";
    clearIcon?: "close" | "garbage";
  }
>;

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      wrapperClassName,
      className,
      error,
      prefixIcon,
      id,
      size = "normal",
      disabled,
      defaultValue,
      clearIcon = "close",
      ...props
    },
    ref
  ) => {
    const domRef = useRef<HTMLInputElement>(null!);
    const handleClickClear = useCallback(() => {
      if (!domRef.current || disabled) return;
      setValue.call(domRef.current, String(""));
      domRef.current.dispatchEvent(new Event("input", { bubbles: true }));
      domRef.current.focus();
    }, [disabled]);
    const preventBlur = useCallback<React.MouseEventHandler<HTMLInputElement>>(
      (evt) => evt.preventDefault(),
      []
    );

    return (
      <div
        className={cx(
          "input-wrapper border-1px border-solid border-black",
          `input--${size}`,
          wrapperClassName
        )}
      >
        {prefixIcon && (
          <span
            className={cx(
              prefixIcon,
              "prefix-icon absolute left-0 top-[50%] -translate-y-[calc(50%+1px)] w-1.5em h-1.5em text-inner"
            )}
          />
        )}
        <input
          id={id}
          ref={composeRef(ref, domRef)}
          className={cx("input", className)}
          autoComplete="off"
          disabled={disabled}
          {...props}
        />
        {!!error && (
          <span id={id ? `${id}-error` : undefined} className="input-error">
            {error}
          </span>
        )}

        <span
          className={cx(
            "clear-icon display-none absolute top-1/2 -translate-y-1/2 justify-center items-center",
            clearIcon === "close"
              ? "right-.5em w-fit h-fit"
              : "right-1px w-1.3em h-1.3em rounded-full bg-purple-normal"
          )}
        >
          <span
            className={cx(
              "text-grey-normal-hover",
              disabled ? "cursor-default" : "cursor-pointer",
              {
                "i-carbon:close-filled text-1em": clearIcon === "close",
                "i-ri:delete-bin-5-fill text-.85em": clearIcon === "garbage",
              }
            )}
            onClick={handleClickClear}
            onMouseDown={preventBlur}
          />
        </span>
      </div>
    );
  }
);

export default Input;
