import React, {
  createElement,
  forwardRef,
  type ReactNode,
  type PropsWithChildren,
} from 'react';
import cx from 'clsx';
import Spin from '@/components/Spin';
import renderReactNode from '@/utils/renderReactNode';
import './index.css';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text' | 'link';
  color?: 'primary' | 'green' | 'white';
  size?: 'mini' | 'small' | 'medium' | 'large';
  shape?: 'rect' | 'circle' | 'round';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      children,
      className,
      variant = 'contained',
      color = 'primary',
      size = 'medium',
      shape = 'rect',
      disabled = false,
      fullWidth = false,
      loading = false,
      icon,
      startIcon,
      endIcon,
      ...props
    },
    _forwardRef
  ) => {
    return createElement(
      props.href ? 'a' : 'button',
      {
        className: cx(
          `fui-button fui-button--${variant} fui-button--${color} fui-button--${size} fui-button--${shape}`,
          fullWidth && 'fui-button--fullWidth',
          loading && 'is-loading',
          disabled && 'is-disabled',
          className
        ),
        ref: _forwardRef,
        ...props,
      },
      <>
        {startIcon && (
          <span className="fui-button__icon">{renderReactNode(startIcon)}</span>
        )}
        {children && (
          <div
            className={cx(
              'flex flex-row h-full',
              loading && 'cursor-not-allowed'
            )}
          >
            <div className="w-24px h-24px">
              {loading && <Spin className="mr-8px text-1.4em " />}
            </div>
            {children}
          </div>
        )}
        {!children && icon && (
          <span className="fui-button__icon">{renderReactNode(icon)}</span>
        )}
        {endIcon && (
          <span className="fui-button__icon">{renderReactNode(endIcon)}</span>
        )}
        {loading && <Spin className="fui-button__loading" />}
      </>
    );
  }
);

export default Button;
