"use client";
import {
  useEffect,
  useCallback,
  MouseEvent,
  Dispatch,
  useReducer,
} from "react";
import { useMainScrollerDistance } from "@/hooks/useMainScroller";
import cx from "clsx";

export interface AnchorItem {
  title: string;
  href: string;
}

interface AnchorState {
  isActive: string;
  isUserNaved: boolean;
  defaultActive: string;
}

const AnchorReducer = (
  state: AnchorState,
  action: { type: string; value: string | boolean }
) => {
  switch (action.type) {
    case "setIsActive":
      return { ...state, isActive: action.value as string };
    case "setIsUserNaved":
      return { ...state, isUserNaved: action.value as boolean };
    case "setDefaultActive":
      return { ...state, defaultActive: action.value as string };
    default:
      return state;
  }
};

const Anchor: React.FC<{ items: AnchorItem[] }> = ({ items }) => {
  const [state, dispatch] = useReducer(AnchorReducer, {
    isActive: items[0].href,
    isUserNaved: false,
    defaultActive: items[0].href,
  });
  //   const [isActive, setIsActive] = useState(items[0].href);
  //   const [isUserNaved, setIsUserNaved] = useState(false);
  //   const [defaultActive, setDefaultActive] = useState(items[0].href);

  return (
    <>
      {items.map((item) => (
        <NavItem
          key={item.href}
          {...item}
          anchorState={state}
          anchorDispatch={dispatch}
        />
      ))}
    </>
  );
};

const NavItem: React.FC<{
  title: string;
  href: string;
  anchorState: AnchorState;
  anchorDispatch: Dispatch<{
    type: string;
    value: string | boolean;
  }>;
}> = ({ title, href, anchorState, anchorDispatch }) => {
  const mainScrollerDistance = useMainScrollerDistance();
  const { isActive, isUserNaved, defaultActive } = anchorState;

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      const targetElement = document.getElementById(href);
      if (targetElement) {
        anchorDispatch({ type: "setIsUserNaved", value: true });
        anchorDispatch({ type: "setIsActive", value: href });
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(
        () =>
          anchorDispatch({
            type: "setIsUserNaved",
            value: false,
          }),
        1000
      );
    },
    [href]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (isUserNaved) return;
      const targetElement = document.getElementById(href);
      if (!targetElement) return;
      const rect = targetElement.getBoundingClientRect();
      if (href === defaultActive) {
        if (rect.bottom >= 2)
          anchorDispatch({ type: "setIsActive", value: "aboutUs" });
        return;
      }
      if (rect.top <= 2 && rect.bottom >= 2)
        anchorDispatch({ type: "setIsActive", value: href });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [href, isUserNaved]);

  return (
    <div
      className={cx(
        "flex items-center mx-24px h-full no-underline cursor-pointer",
        mainScrollerDistance > 1
          ? "text-#323233 hover:text-#FFA14A"
          : "text-#FFFFFF",
        isActive === href && "border-b-3px font-semibold",
        isActive === href && mainScrollerDistance > 1 && "!text-#FFA14A"
      )}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default Anchor;
