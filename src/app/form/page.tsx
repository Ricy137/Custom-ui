import CheckBox from "@/components/CheckBox";
import Radio from "@/components/Radio";
import Input from "@/components/Input";
import { StarIcon } from "@/components/Icons";
const FormPage: React.FC = () => {
  return (
    <div className="pt-40px flex flex-col items-center gap-16px w-screen h-screen">
      <Input wrapperClassName="w-2/5" />
      <div className="flex gap-x-16px">
        <Radio />
        <Radio />
      </div>
      <div className="flex gap-x-16px">
        <CheckBox />
      </div>
    </div>
  );
};

export default FormPage;
