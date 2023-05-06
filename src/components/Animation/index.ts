export const rotate = {
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
  loop: true,
  config: {
    duration: 2000,
  },
};

export const zoomNRotate = {
  from: {
    transform: "rotate(0deg) scale(1)",
  },
  to: {
    transform: "rotate(360deg) scale(0)",
  },
  loop: { reverse: true },
  config: {
    duration: 2000,
  },
};
