import { useCallback } from 'react';
import cx from 'clsx';
interface TabNavItemProps {
  id: number;
  title: string;
  activeId: number;
  navItemClassName?: string;
  activeNavItemClassName?: string;
  setActiveId: (id: number) => void;
  type?: 'line' | 'card';
}

const TabNavItem: React.FC<TabNavItemProps> = ({
  id,
  title,
  activeId,
  navItemClassName,
  activeNavItemClassName,
  type = 'line',
  setActiveId,
}) => {
  const handleClick = useCallback(() => {
    setActiveId(id);
  }, []);

  return (
    <div
      className={cx(
        'text-[14px] leading-[22px]  cursor-pointer box-border',
        `cui-tab-navitem--${type}`,
        navItemClassName,
        id === activeId && activeNavItemClassName,
        id === activeId && `cui-tab-navitem--${type}-active`
      )}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default TabNavItem;
