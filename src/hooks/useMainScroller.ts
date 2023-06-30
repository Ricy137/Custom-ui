import { useEffect } from "react";
import { create } from "zustand";
import { throttle } from "lodash-es";

interface MainScrollerStore {
  mainScrollerDistance: number;
  setMainScrollerDistance: (distance: number) => void;
}

const mainScrollerStore = create<MainScrollerStore>((set) => ({
  mainScrollerDistance: 0,
  setMainScrollerDistance: (distance) =>
    set({ mainScrollerDistance: distance }),
}));

export const useSetMainScroller = () => {
  const setMainScrollerDistance = mainScrollerStore(
    (state) => state.setMainScrollerDistance
  );

  useEffect(() => {
    setMainScrollerDistance(window.pageYOffset);
    const handleScroll = throttle((evt: Event) => {
      setMainScrollerDistance(window.pageYOffset);
    }, 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export const useMainScrollerDistance = () =>
  mainScrollerStore((state) => state.mainScrollerDistance);
