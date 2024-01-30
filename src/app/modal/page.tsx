'use client';
import { showModal } from '@/components/Modal';

const ModalPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-40px min-h-100vh">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md"
        onClick={() => {
          showModal({
            title: 'Modal Title',
            content: <div>Modal Content</div>,
          });
        }}
      >
        Show Modal
      </button>
    </div>
  );
};

export default ModalPage;
