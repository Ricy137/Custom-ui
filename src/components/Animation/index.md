## Overview
Configurations for common animations of react-spring.

## How to use
Import and just pass it to react-spring.

```tsx
import { useTransition, a } from '@react-spring/web';
import { TransitionAnimationType, transitionAnimation } from './index';

interface MyComponentProps {
  animationType?: TransitionAnimationType;
}

const MyComponent:React.FC<MyComponentProps> = ({animationType='zoom'}) => {
  const mainSizeType = mainDirection === 'x' ? 'width' : 'height';
  const mainSizeMap = useRef(new WeakMap());

  const render = useTransition(list, {
    keys: (item: T) => item.key ?? ((item as any)[itemKey as string] as string),
    initial: () => ({
      [mainSizeType]: undefined,
    }),
    from: (item: T) => ({
      ...transitionAnimation[item?.animationType ?? animationType].from,
      [mainSizeType]: animatedSize ? 0 : undefined,
    }),
    enter: (item: T) => async (next) =>
      await next({
        ...transitionAnimation[item?.animationType ?? animationType].enter,
        [mainSizeType]: animatedSize ? mainSizeMap.current.get(item) : undefined,
        config: {
          ...transitionAnimation[item?.animationType ?? animationType].enter?.config,
          duration:
            typeof (item?.animationDuration ?? animationDuration) === 'object'
              ? (
                  (item?.animationDuration ?? animationDuration) as {
                    enter: number;
                    leave: number;
                  }
                )?.enter
              : item?.animationDuration ?? animationDuration,
        },
      }),
    leave: (item: T) => ({
      ...transitionAnimation[item?.animationType ?? animationType].leave,
      [mainSizeType]: animatedSize ? 0 : undefined,
      margin: 0,
      overflow: 'hidden',
      config: {
        ...transitionAnimation[item?.animationType ?? animationType].leave?.config,
        duration:
          typeof (item?.animationDuration ?? animationDuration) === 'object'
            ? (
                (item?.animationDuration ?? animationDuration) as {
                  enter: number;
                  leave: number;
                }
              )?.leave
            : item?.animationDuration ?? animationDuration,
      },
    }),
  });

  return (
    <div {...props}>
      {render((style, item, _, index) => (
        <a.div
          className={cx(
            'bg-transparent origin-center overflow-visible backface-visible',
            mainSizeType === 'width' ? 'h-fit will-change-[width]' : 'w-fit will-change-[height]',
          )}
          style={{ ...(item?.ItemWrapperStyle ?? ItemWrapperStyle), ...style }}
        >
          {animatedSize ? (
            <a.div
              className={cx('w-fit h-fit', mainSizeType === 'width' ? 'will-change-[width]' : 'will-change-[height]')}
              ref={(r: HTMLDivElement) => mainSizeMap.current?.set(item, r?.[mainDirection === 'x' ? 'clientWidth' : 'offsetHeight'])}
            >
              {cloneElement(children(item, index))}
            </a.div>
          ) : (
            cloneElement(children(item, index))
          )}
        </a.div>
      ))}
    </div>
  );
};

```