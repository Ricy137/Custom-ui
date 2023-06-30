import cx from "clsx";
import { ComponentProps } from "react";

interface IconProps extends ComponentProps<"svg"> {
  iconClassName?: string;
  className?: string;
}

export const StarIcon: React.FC = () => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3124 7.5703L11.0022 2.88933L8.69199 7.5703L3.52624 8.32092L7.26421 11.9645L6.38179 17.1094L11.0022 14.6803L15.6226 17.1094L14.7402 11.9645L18.4781 8.32092L13.3124 7.5703ZM20.7992 7.14245C21.1683 7.19608 21.3157 7.64967 21.0486 7.91001L16.3519 12.4882L17.4606 18.9528C17.5237 19.3204 17.1378 19.6007 16.8077 19.4271L11.0022 16.375L5.19666 19.4271C4.86653 19.6007 4.48068 19.3204 4.54373 18.9528L5.65249 12.4882L0.955723 7.91001C0.68864 7.64967 0.836019 7.19608 1.20512 7.14245L7.69589 6.19929L10.5986 0.317648C10.7637 -0.0168128 11.2406 -0.0168115 11.4057 0.317649L14.3085 6.19929L20.7992 7.14245Z"
        className="fill-#595A5B"
      />
    </svg>
  );
};

export const CloseIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cx("w-6 h-6", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const CheckedIcon: React.FC<IconProps> = ({
  className,
  iconClassName,
}) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 7.7065L6 10.207L10.5 5.7075L9.7925 5L6 8.793L4.2065 7L3.5 7.7065Z"
        fill="#1E8E3E"
      />
      <path
        d="M3.11101 1.67971C4.26216 0.910543 5.61553 0.5 7 0.5C8.85652 0.5 10.637 1.2375 11.9497 2.55025C13.2625 3.86301 14 5.64348 14 7.5C14 8.88447 13.5895 10.2378 12.8203 11.389C12.0511 12.5401 10.9579 13.4373 9.67879 13.9672C8.3997 14.497 6.99224 14.6356 5.63437 14.3655C4.2765 14.0954 3.02922 13.4287 2.05026 12.4497C1.07129 11.4708 0.404603 10.2235 0.134506 8.86563C-0.13559 7.50776 0.00303298 6.1003 0.532846 4.82122C1.06266 3.54213 1.95987 2.44888 3.11101 1.67971ZM3.66658 12.4888C4.65328 13.1481 5.81332 13.5 7 13.5C8.5913 13.5 10.1174 12.8679 11.2426 11.7426C12.3679 10.6174 13 9.0913 13 7.5C13 6.31331 12.6481 5.15327 11.9888 4.16658C11.3295 3.17988 10.3925 2.41085 9.2961 1.95672C8.19975 1.5026 6.99335 1.38378 5.82946 1.61529C4.66558 1.8468 3.59648 2.41824 2.75736 3.25736C1.91825 4.09647 1.3468 5.16557 1.11529 6.32946C0.88378 7.49334 1.0026 8.69974 1.45673 9.7961C1.91085 10.8925 2.67989 11.8295 3.66658 12.4888Z"
        className={cx("fill-#1E8E3E", iconClassName)}
      />
    </svg>
  );
};

export const FailedIcon: React.FC<IconProps> = ({
  className,
  iconClassName,
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 7C14 3.13401 10.866 1.18292e-06 7 0C3.13401 -2.14186e-06 1.18292e-06 3.134 0 7C-2.14186e-06 10.866 3.134 14 7 14C10.866 14 14 10.866 14 7ZM4.67091 3.94754L7.00001 6.29075L9.32912 3.94754L10.0384 4.65251L7.70499 7L10.0383 9.34749L9.32911 10.0525L7.00001 7.70925L4.67092 10.0525L3.96168 9.34749L6.29503 7L3.96167 4.65251L4.67091 3.94754Z"
        fill="#D93026"
      />
    </svg>
  );
};

export const CommentEllipseIcon: React.FC<IconProps> = ({
  className,
  iconClassName,
  ...props
}) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="14"
        cy="14"
        r="12"
        strokeWidth="4"
        className={cx("stroke-#FFA14A fill-white", iconClassName)}
      />
    </svg>
  );
};

export const CommentEllipseFocusIcon: React.FC<IconProps> = ({
  className,
  iconClassName,
  ...props
}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        opacity="0.22"
        cx="20"
        cy="20"
        r="16"
        strokeWidth="8"
        className={cx("stroke-#F48A28 fill-white", iconClassName)}
      />
    </svg>
  );
};
