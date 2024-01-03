import { type PropsWithChildren } from 'react';

interface TabContentProps extends PropsWithChildren {
  id: number;
  activeId: number;
}

const TabContent: React.FC<TabContentProps> = ({ id, activeId, children }) => {
  return activeId === id ? <>{children}</> : null;
};

export default TabContent;
