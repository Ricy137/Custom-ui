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
    <div className="flex flex-col items-center justify-center gap-y-40px min-h-100vh">
      <div className="py-16px px-24px flex flex-col gap-y-24px bg-#ffffff rounded-16px border border-[rgba(235,237,240,1)] border-dashed">
        <div>Default style</div>
        <Tabs items={items} defaultActiveId={1} />
      </div>
      <div className="py-16px px-24px flex flex-col gap-y-24px bg-#ffffff rounded-16px border border-[rgba(235,237,240,1)] border-dashed">
        <div>Customized style</div>
        <Tabs
          navClassName="!border-0px"
          navItemClassName="!mr-0px px-16px"
          activeNavItemClassName="!text-#ffffff bg-[rgba(4,90,254,1)] rounded-20px"
          items={items}
          defaultActiveId={1}
        />
      </div>
    </div>
  );
};
export default TabsPage;
