import { ComponentProps, forwardRef } from "react";
import cx from "clsx";
import "./index.css";

interface RadioProps extends ComponentProps<"input"> {
  customCheckBox?: boolean;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ customCheckBox, className, id, value, name, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        name={name}
        id={id}
        type="radio"
        className={cx(
          customCheckBox &&
            "appearance-none radio-custom",
          className
        )}
      />
    );
  }
);

export default Radio;
