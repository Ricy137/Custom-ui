import { ComponentProps, forwardRef } from "react";
import cx from "clsx";
import "./index.css";

interface CheckBoxProps extends ComponentProps<"input"> {
  customCheckBox?: boolean;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ customCheckBox, className, id, value, name, ...props }, ref) => {
    return (
      <input
        readOnly
        value={value}
        ref={ref}
        {...props}
        name={name}
        id={id}
        type="checkbox"
        className={cx(customCheckBox && "custom-input", className)}
      />
    );
  }
);

export default CheckBox;
