'use client';
import BasicTabs from '@/components/Tabs/BasicTabs';
import Tabs from '@/components/Tabs';

const items = [
  {
    id: 1,
    title: 'Tab 1',
    content: <div>Tab 1 Content</div>,
  },
  {
    id: 2,
    title: 'Tab 2',
    content: <div>Tab 2 Content</div>,
  },
  {
    id: 3,
    title: 'Tab 3',
    content: <div>Tab 3 Content</div>,
  },
];

const cardItems = [
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

const TabsPage: React.FC = () => 
  (
    <div className="flex flex-col items-center justify-center gap-y-40px min-h-100vh">
      <div className="flex flex-col gap-y-[24px]">
        <div className="text-[20px] font-medium">Default style</div>
        {/* <div className="flex flex-col gap-y-24px bg-[#ffffff] rounded-16px border border-[rgba(235,237,240,1)] border-dashed"> */}
        <BasicTabs
          items={items}
          defaultActiveId={1}
          bodyClassName="min-w-[300px] h-[128px]"
        />
        {/* </div> */}
      </div>
      <div className="flex flex-col gap-y-[24px]">
        <div className="text-[20px] font-medium">Customized style</div>
        {/* <div className="flex flex-col gap-y-24px bg-#ffffff rounded-16px border border-[rgba(235,237,240,1)] border-dashed"> */}
        <Tabs
          items={cardItems}
          defaultActiveId={1}
          type="card"
          bodyClassName="py-[25px] px-[23px] min-w-[300px] h-[128px] bg-[#bcb4c8] rounded-tr-[15px] rounded-b-[15px] box-border"
        />
        {/* </div> */}
      </div>
    </div>
  )
export default TabsPage;
