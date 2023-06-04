import Button from "@/components/Button";
import { StarIcon } from "@/components/Icons";

const ButtonPage: React.FC = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center gap-24px">
      <div className="flex flex-row gap-x-16px">
        <Button variant="contained">contained</Button>
        <Button variant="text">text</Button>
        <Button variant="outlined">outlined</Button>
      </div>
      <div className="flex flex-row gap-x-16px">
        <Button color="primary">primary</Button>
        <Button color="green">green</Button>
        <Button color="white">white</Button>
      </div>
      <div className="flex flex-row gap-x-16px">
        <Button size="mini">mini</Button>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </div>
      <div className="w-2/5">
        <Button fullWidth>fullWidth</Button>
      </div>
      <div>
        <Button color="white" loading="start">
          loading
        </Button>
      </div>
      <div className="flex flex-row gap-x-16px">
        <Button startIcon={<StarIcon />}>startIcon</Button>
        <Button endIcon={<StarIcon />}>endIcon</Button>
      </div>
    </main>
  );
};

export default ButtonPage;
