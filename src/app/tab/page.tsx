'use client';
import Tabs from '@/components/Tabs';

const items = [
  {
    id: 1,
    title: 'Tab 1',
    children: <div>Tab 1 Content</div>,
  },
  {
    id: 2,
    title: 'Tab 2',
    children: <div>Tab 2 Content</div>,
  },
  {
    id: 3,
    title: 'Tab 3',
    children: <div>Tab 3 Content</div>,
  },
];

const TabsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-16px h-100vh">
      <Tabs items={items} defaultActiveId={1} />
    </div>
  );
};
export default TabsPage;
