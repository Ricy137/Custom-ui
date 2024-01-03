import React, { useState, useCallback } from 'react';
import cx from 'clsx';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';

export interface Item {
  id: number;
  title: string;
  children: JSX.Element;
}

interface TabsProps {
  items: Item[];
  defaultActiveId: number;
  wrapperClassName?: string;
  navClassName?: string;
  navItemClassName?: string;
  activeNavItemClassName?: string;
  bodyClassName?: string;
  onTabChange?: (id: number) => void;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveId,
  navClassName,
  navItemClassName,
  activeNavItemClassName,
  bodyClassName,
  wrapperClassName,
  onTabChange,
}) => {
  const [activeId, setActiveId] = useState(defaultActiveId);
  const handleTabChange = useCallback((id: number) => {
    setActiveId(id);
    onTabChange?.(id);
  }, []);
  return (
    <div className={cx('flex flex-col', wrapperClassName)}>
      <div
        className={cx(
          'flex flex-row h-36px border-b-1px border-b-solid border-#EBEDF0',
          navClassName
        )}
      >
        {items.map((item) => (
          <TabNavItem
            title={item.title}
            setActiveId={handleTabChange}
            id={item.id}
            activeId={activeId}
            key={`${item.id}-tab`}
            navItemClassName={navItemClassName}
            activeNavItemClassName={activeNavItemClassName}
          />
        ))}
      </div>
      <div className={cx('py-12px w-full', bodyClassName)}>
        {items.map((item) => (
          <TabContent
            activeId={activeId}
            id={item.id}
            children={item.children}
            key={`${item.id}-content`}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
