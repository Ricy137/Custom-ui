import {
  ComponentProps,
  MouseEvent,
  useCallback,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import cx from "clsx";
import ToolTip from "@/components/ToolTip";
// import { Tooltip } from 'antd';
import {
  CommentEllipseIcon,
  CommentEllipseFocusIcon,
} from "@/components/Icons";
import { periodToPersent, PersentToPeriod } from "@/utils/rateUtils";

const Rate: React.FC<
  ComponentProps<"div"> & {
    width?: number;
    disable?: boolean;
    initialValue?: number;
  }
> = ({ width, disable = false, initialValue, ...props }) => {
  const [origionX, setOrigionX] = useState<{ left: number; right: number }>({
    left: 0,
    right: 0,
  });
  const [pressing, setPressing] = useState(false);
  const [x, setX] = useState(width ?? 0 / 2);
  let containerRef = useRef<HTMLDivElement>(null);

  const handleDisable = useCallback((e: MouseEvent) => {
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      let leftX = Math.floor(e.clientX - origionX.left);
      if (
        pressing &&
        leftX >= 0 &&
        periodToPersent(leftX, origionX.right - origionX.left, 120) <= 120
      ) {
        setX(leftX);
      }
    },
    [pressing]
  );

  const handleMouseDone = useCallback((e: MouseEvent) => {
    setPressing(true);
  }, []);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    setPressing(false);
  }, []);

  const getClientX = useCallback(() => {
    const element = containerRef.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      const leftX = rect.left;
      const rightX = rect.right;
      setOrigionX({ left: leftX, right: rightX });
    }
  }, [containerRef]);

  useEffect(() => {
    setTimeout(() => getClientX(), 200);
  }, [containerRef]);

  const handleResize = useCallback(() => {
    getClientX();
    if (containerRef.current) {
      const testedWidth = containerRef.current.offsetWidth;
      setX(PersentToPeriod(initialValue!, testedWidth, 120) + 1);
    }
  }, [containerRef]);

  useLayoutEffect(() => {
    if (!initialValue) return;
    if (width) {
      setX(PersentToPeriod(initialValue, width, 120));
      return;
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [containerRef]);

  return (
    <div
      {...props}
      onMouseMove={disable ? handleDisable : handleMouseMove}
      ref={containerRef}
      className="relative w-full h-8px bg-#DCDEE0 rounded-41px"
      onMouseLeave={disable ? handleDisable : handleMouseUp}
      aria-disabled
    >
      <div
        className={cx(
          "h-full rounded-l-41px",
          pressing ? "bg-#F48A28" : "bg-#FFA14A"
        )}
        style={{ width: `${x + 1}px` }}
      />
      <ToolTip
        text={`${periodToPersent(x, origionX.right - origionX.left, 120)}`}
      >
        <CommentEllipseIcon
          onMouseDown={disable ? handleDisable : handleMouseDone}
          onMouseUp={disable ? handleDisable : handleMouseUp}
          className={cx(
            "absolute top-50% -translate-y-50% cursor-pointer z-20"
          )}
          style={{ left: `${x - 14}px` }}
          iconClassName="hover:stroke-#F48A28"
        />
      </ToolTip>
      {pressing && (
        <CommentEllipseFocusIcon
          className={cx(
            "absolute top-50% -translate-y-50% cursor-pointer z-10"
          )}
          style={{ left: `${x - 20}px` }}
        />
      )}
    </div>
  );
};

export default Rate;
