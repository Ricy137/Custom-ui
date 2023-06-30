import React from "react";
import cx from "clsx";
import Popover, { PopoverProps } from "@/components/Popover";

interface TooltipProps
  extends OverWrite<
    Omit<PopoverProps, "Content">,
    { trigger?: "click" | "hover" | "focus" }
  > {}

const ToolTip: React.FC<
  TooltipProps & { text?: string; className?: string }
> = ({
  children,
  text,
  className,
  options = {
    placement: "top",
  },
  hasArrow = true,
  // delay = 180,
  trigger = "hover",
  ...props
}) => {
  return (
    <Popover
      hasArrow={hasArrow}
      options={options}
      Content={
        <div
          className={cx(
            "px-8px flex items-center h-32px text-14px leading-22px text-#FFFFFF bg-#323233 rounded-2px no-wrap",
            className
          )}
        >
          {text}
        </div>
      }
      // TODO: expand features
      // delay={delay}
      offsetOptions={7}
      trigger={trigger}
      {...props}
    >
      {children}
    </Popover>
  );
};

export default ToolTip;
