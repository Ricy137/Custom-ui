import type { JSX } from "react";
interface TabContentProps {
  id: number;
  activeId: number;
  content: JSX.Element;
}

const TabContent: React.FC<TabContentProps> = ({ id, activeId, content }) => {
  return activeId === id ? <>{content}</> : null;
};

export default TabContent;
