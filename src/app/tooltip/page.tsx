"use client";
import PopoverContent from "@/components/Popper";

const TooltipPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-x-16px h-100vh">
       <PopoverContent
        Content={
          <div className="p-8px flex items-center h-32px border-1px border-solid border-#000000 rounded-32px bg-purple-500">
            Left suctomized Popover 
          </div>
        }
        trigger="click"
        options={{
          placement: "left",
        }}
        hasArrow={true}
        offsetOptions={20}
        transitionStylesProps={{
          duration: {
            open: 1000,
            close: 2000,
          },
        }}
        // arrowProps={{
        //   d: "M0.845227 7.34442L0.155797 6.65499L2.81108 3.99971L0.155797 1.34442L0.845227 0.654992L4.18994 3.99971L0.845227 7.34442Z",
        //   fill: "#70856E",
        // }}
      >
        <button> Popover</button>
      </PopoverContent>
      <PopoverContent
        Content={
          <div className="p-8px border-1px border-solid border-#000000">
            Top Popover with arrow
          </div>
        }
        trigger="click"
        options={{
          placement: "top",
        }}
        hasArrow={true}
        offsetOptions={20}
        transitionStylesProps={{
          duration: {
            open: 1000,
            close: 2000,
          },
        }}
        // arrowProps={{
        //   d: "M0.845227 7.34442L0.155797 6.65499L2.81108 3.99971L0.155797 1.34442L0.845227 0.654992L4.18994 3.99971L0.845227 7.34442Z",
        //   fill: "#70856E",
        // }}
      >
        <button> Popover</button>
      </PopoverContent>
      <PopoverContent
        Content={
          <div className="p-8px border-1px border-solid border-#000000">
            Bottom Popover without arrow
          </div>
        }
        trigger="click"
        options={{
          placement: "bottom",
        }}
        hasArrow={false}
        offsetOptions={20}
        transitionStylesProps={{
          duration: {
            open: 1000,
            close: 2000,
          },
        }}
        // arrowProps={{
        //   d: "M0.845227 7.34442L0.155797 6.65499L2.81108 3.99971L0.155797 1.34442L0.845227 0.654992L4.18994 3.99971L0.845227 7.34442Z",
        //   fill: "#70856E",
        // }}
      >
        <button> Popover</button>
      </PopoverContent>
      <PopoverContent
        Content={
          <div className="p-8px border-1px border-solid border-#000000">
            Right Popover with custom arrow
          </div>
        }
        trigger="click"
        options={{
          placement: "right",
        }}
        hasArrow={true}
        offsetOptions={20}
        transitionStylesProps={{
          duration: {
            open: 1000,
            close: 2000,
          },
        }}
        arrowProps={{
          d: "M13.3124 7.5703L11.0022 2.88933L8.69199 7.5703L3.52624 8.32092L7.26421 11.9645L6.38179 17.1094L11.0022 14.6803L15.6226 17.1094L14.7402 11.9645L18.4781 8.32092L13.3124 7.5703ZM20.7992 7.14245C21.1683 7.19608 21.3157 7.64967 21.0486 7.91001L16.3519 12.4882L17.4606 18.9528C17.5237 19.3204 17.1378 19.6007 16.8077 19.4271L11.0022 16.375L5.19666 19.4271C4.86653 19.6007 4.48068 19.3204 4.54373 18.9528L5.65249 12.4882L0.955723 7.91001C0.68864 7.64967 0.836019 7.19608 1.20512 7.14245L7.69589 6.19929L10.5986 0.317648C10.7637 -0.0168128 11.2406 -0.0168115 11.4057 0.317649L14.3085 6.19929L20.7992 7.14245Z",
          fill: "#70856E",
        }}
      >
        <button> Popover</button>
      </PopoverContent>
    </div>
  );
};

export default TooltipPage;
