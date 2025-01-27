'use client';
import { useState, ComponentProps, useCallback, forwardRef } from 'react';
import cx from 'clsx';
import {
  useFloating,
  autoUpdate,
  useClick,
  useInteractions,
  useDismiss,
  offset,
  type Placement,
} from '@floating-ui/react';

interface Option {
  label: string;
  value: string | number;
}

type SelectProps = OverWrite<
  ComponentProps<'select'>,
  {
    placeholder?: string;
    placement?: Placement;
    options: Option[];
    defaultValue?: Option[];
    mode?: 'single' | 'multiple';
    optionClassName?: string;
  }
>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      className,
      optionClassName,
      defaultValue,
      placeholder = 'Select',
      placement = 'bottom',
      mode = 'single',
      onChange,
      name,
      ...props
    },
    ref
  ) => {
    const [selectedOptions, setSelectedOptions] = useState<Option[] | undefined>(
      defaultValue
    );
    const [isOpen, setIsOpen] = useState(false);
    // const [isHover, setIsHover] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
      middleware: [offset(4)],
      placement: placement,
      whileElementsMounted: autoUpdate,
      open: isOpen,
      onOpenChange: setIsOpen,
    });

    const click = useClick(context, { event: 'mousedown' });
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });

    // const handleMouseEnter = useCallback(() => {
    //   setIsHover(true);
    // }, []);

    // const handleMouseLeave = useCallback(() => {
    //   setIsHover(false);
    // }, []);

    const { getReferenceProps, getFloatingProps } = useInteractions([
      click,
      dismiss,
    ]);

    const handleSelect = useCallback(
      (option: Option) => {
        let newVal;
        if (selectedOptions?.some((ele) => ele.value === option.value)) {
          newVal = selectedOptions?.filter(
            (ele) => ele.value !== option.value
          )
        } else {
          newVal = mode === 'single' ? [option] : [...(selectedOptions || []), option];
        }
        setSelectedOptions(newVal);
        setIsOpen(false);
        onChange?.({ target: { value: newVal, name } } as any);
      },
      [onChange, selectedOptions]
    );

    // const handleClear = useCallback((e: MouseEvent) => {
    //   e.preventDefault();
    //   setSelectedOption(undefined);
    // }, []);

    return (
      <div className="relative" suppressHydrationWarning>
        <div
          ref={refs.setReference}
          {...getReferenceProps()}
          className={cx(
            'pl-[12px] pr-[7px] flex items-center justify-between w-[240px] h-[32px] text-[14px] leading-[22px] rounded-[8px] border-[#DCDEE0] border-[1px] border-solid focus:border-[#FFA14A] hover:border-[#FFA14A] cursor-pointer',
            isOpen && 'border-[#FFA14A]',
            className
          )}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
          {selectedOptions ? (
            <span className="text-[#323233]">{selectedOptions.map((opts) => opts.label).join(', ')}</span>
          ) : (
            <span className="text-[#C1C2C5]">{placeholder}</span>
          )}
          {/* <div className="flex items-center justify-center w-18px h-18px"> */}
          {/* TODO: clear selected */}
          {/* {!isOpen && isHover && selectedOption && (
            <div
              className="i-ic:sharp-cancel text-#595A5B cursor-pointer z-200"
              onClick={(e) => {
                handleClear(e);
              }}
            />
          )} */}
          {/* {!isOpen && (!isHover || !selectedOption) && (
            <span className="i-octicon:triangle-down-16 text-#595A5B" />
          )}
          {isOpen && <span className="i-octicon:triangle-up-16 text-[#595A5B]" />} */}
          {/* </div> */}
        </div>
        {isOpen && (
          <div
            className="w-[240px] rounded-[2px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] z-100"
            ref={refs.setFloating}
            style={{ ...floatingStyles }}
            {...getFloatingProps()}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={cx("pl-[12px] flex items-center w-full h-[32px] text-[14px] leading-[22px] text-[#323233] hover:bg-[#FFF6ED] cursor-pointer",
                  selectedOptions?.some((ele) => ele.value === option.value)
                    ? 'bg-[#FFF6ED]'
                    : 'bg-[#FFFFFF]',
                  optionClassName
                )}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default Select;
