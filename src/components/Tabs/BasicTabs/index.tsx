'use client';
import React, { useState, useCallback } from 'react';
import cx from 'clsx';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';

export interface Item {
  id: number;
  title: string;
  content: JSX.Element;
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

const BasicTabs: React.FC<TabsProps> = ({
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
    <div
      className={cx(
        'pt-[26px] pb-[11px] px-[14px] flex flex-col rounded-[15px] bg-[#ffffff]',
        wrapperClassName
      )}
    >
      <div
        className={cx(
          'flex flex-row h-[36px] border-b border-b-solid border-[#EBEDF0] overflow-hidden',
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
      <div className={cx('py-[12px] w-full', bodyClassName)}>
        {items.map((item) => (
          <TabContent
            activeId={activeId}
            id={item.id}
            content={item.content}
            key={`${item.id}-content`}
          />
        ))}
      </div>
    </div>
  );
};

export default BasicTabs;
