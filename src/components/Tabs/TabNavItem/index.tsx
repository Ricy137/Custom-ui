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
  activeNavItemClassName = '!text-#FFA14A border-b-2px border-#FFA14A border-b-solid',
  setActiveId,
}) => {
  const handleClick = useCallback(() => {
    setActiveId(id);
  }, []);

  return (
    <div
      className={cx(
        'mr-32px h-full flex items-center text-14px leading-22px text-#595A5B cursor-pointer box-border',
        navItemClassName,
        id === activeId && activeNavItemClassName
      )}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default TabNavItem;
