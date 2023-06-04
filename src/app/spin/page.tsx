import { zoomNRotate } from "@/components/Animation";
import Spin from "@/components/Spin";
import { StarIcon } from "@/components/Icons";

const SpinPage: React.FC = () => {
  return (
    <div className="w-64px h-64px">
      <Spin svg={<StarIcon />} springConf={zoomNRotate} />
      <Spin />
    </div>
  );
};

export default SpinPage;
