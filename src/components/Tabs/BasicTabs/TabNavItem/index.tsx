import { useCallback } from 'react';
import cx from 'clsx';

interface TabNavItemProps {
  id: number;
  title: string;
  activeId: number;
  navItemClassName?: string;
  activeNavItemClassName?: string;
  setActiveId: (id: number) => void;
}

const TabNavItem: React.FC<TabNavItemProps> = ({
  id,
  title,
  activeId,
  navItemClassName,
  activeNavItemClassName,
  setActiveId,
}) => {
  const handleClick = useCallback(() => {
    setActiveId(id);
  }, []);

  return (
    <div
      className={cx(
        'mr-[32px] flex items-center h-full text-[14px] leading-[22px] cursor-pointer box-border text-[#595A5B]',
        navItemClassName,
        id === activeId &&
          '!text-[#FFA14A] border-b border-b-solid border-[#FFA14A]',
        id === activeId && activeNavItemClassName
      )}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default TabNavItem;
