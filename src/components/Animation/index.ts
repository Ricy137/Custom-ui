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

export const fade = {
  from: { opacity: 0 },
  enter: { opacity: 1, config: { mass: 1, tension: 170, friction: 26 } },
  leave: {
    opacity: 0,
    config: { mass: 1, tension: 170, friction: 26, clamp: true },
  },
};

export const slideUp = {
  from: { opacity: 0, transform: 'translate3d(0, 200%, 0)' },
  enter: {
    opacity: 1,
    transform: 'translate3d(0, 0%, 0)',
    config: { mass: 1, tension: 260, friction: 19 },
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(0, 200%, 0)',
    config: { mass: 1, tension: 170, friction: 23, clamp: true },
  },
};

export const slideDown = {
  from: { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
  enter: {
    opacity: 1,
    transform: 'translate3d(0, 0%, 0)',
    config: { mass: 1, tension: 260, friction: 19 },
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(0, -100%, 0)',
    config: { mass: 1, tension: 170, friction: 23, clamp: true },
  },
};

export const slideLeft = {
  from: { opacity: 0, transform: 'translate3d(-175%, 0, 0)' },
  enter: {
    opacity: 1,
    transform: 'translate3d(0%, 0, 0)',
    config: { mass: 1, tension: 260, friction: 19 },
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(-175%, 0, 0)',
    config: { mass: 1, tension: 170, friction: 23, clamp: true },
  },
};

export const slideRight = {
  from: { opacity: 0, transform: 'translate3d(175%, 0, 0)' },
  enter: {
    opacity: 1,
    transform: 'translate3d(0%, 0, 0)',
    config: { mass: 1, tension: 440, friction: 31 },
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(175%, 0, 0)',
    config: { mass: 1, tension: 320, friction: 26, clamp: true },
  },
};


export const zoom = {
  from: { transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0.3 },
  enter: {
    transform: 'scale3d(1, 1, 1)',
    opacity: 1,
    config: { mass: 1, tension: 210, friction: 26 },
  },
  leave: {
    transform: 'scale3d(0, 0, 0)',
    opacity: 0,
    config: { mass: 1, tension: 240, friction: 26, clamp: true },
  },
};

export const door = {
  from: { transform: 'scale3d(0, 1, 1)', opacity: 0.2 },
  enter: {
    transform: 'scale3d(1, 1, 1)',
    opacity: 1,
    config: { mass: 1, tension: 420, friction: 26 },
  },
  leave: {
    transform: 'scale3d(0.3, 1, 1)',
    opacity: 0,
    config: { mass: 1, tension: 440, friction: 26, clamp: true },
  },
};

export const doorY = {
  from: { transform: 'scale3d(1, 0, 1)', opacity: 0 },
  enter: {
    transform: 'scale3d(1, 1, 1)',
    opacity: 1,
    config: { mass: 1, tension: 420, friction: 26 },
  },
  leave: {
    transform: 'scale3d(1, 0, 0.1)',
    opacity: 0,
    config: { mass: 1, tension: 480, friction: 26, clamp: true },
  },
};

const transitions = {
  fade,
  door,
  doorY,
  zoom,
  slideUp,
  slideDown,
  slideRight,
  slideLeft,
};

export type TransitionAnimationType = keyof typeof transitions;

type AnimationProps = Record<
  TransitionAnimationType,
  {
    from?: any;
    enter?: any;
    leave?: any;
    to?: any;
    config?: any;
  }
>;

export const transitionAnimation = transitions as AnimationProps;
