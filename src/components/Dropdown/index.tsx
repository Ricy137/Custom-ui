import React from "react";
import { safePolygon } from "@floating-ui/react";
import Popover, { PopoverProps, InteractionProps } from "@/components/Popover";

type DropdownProps = OverWrite<
  PopoverProps,
  { trigger?: "hover" | "focus" | "click"; interactionProps?: InteractionProps }
>;

const Dropdown: React.FC<DropdownProps> = ({
  Content,
  trigger = "hover",
  children,
  options = {
    placement: "bottom-end",
  },
  interactionProps = {
    handleClose: safePolygon(),
  },
  ...props
}) => {
  return (
    <Popover
      Content={Content}
      trigger={trigger}
      options={options}
      {...props}
      interactionProps={interactionProps}
      transitionStylesProps={{
        duration: 200,
        initial: { maxHeight: "0px" },
        open: { maxHeight: "500px" },
        common: { overflow: "hidden" },
      }}
    >
      {children}
    </Popover>
  );
};

export default Dropdown;
