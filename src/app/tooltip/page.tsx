"use client";
import PopoverContent from "@/components/Popper";

const TooltipPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-100vh">
      <PopoverContent
        Content={() => "THis is tooltip"}
        trigger="hover"
        options={{
          placement: "right",
        }}
        hasArrow={true}
        offsetOptions={20}
        transitionStylesProps={{
          duration: {
            open: 2000,
            close: 6000,
          },
        }}
        arrowProps={{
          d: "M0.845227 7.34442L0.155797 6.65499L2.81108 3.99971L0.155797 1.34442L0.845227 0.654992L4.18994 3.99971L0.845227 7.34442Z",
          fill: "#70856E",
        }}
      >
        <button> Tooltip</button>
      </PopoverContent>
    </div>
  );
};

export default TooltipPage;
