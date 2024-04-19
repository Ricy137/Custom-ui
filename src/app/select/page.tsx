'use client';
import { useCallback } from 'react';
import Select from '@/components/Select';
import { useForm } from 'react-hook-form';

const DummyOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

interface FakeSelectForm {
  selectData: string;
}
const SelectPage: React.FC = () => {
  const { register, handleSubmit: withSubmit } = useForm<FakeSelectForm>();

  const handleSubmit = useCallback((data: FakeSelectForm) => {
    console.log(data);
  }, []);

  const handleOnChange = useCallback((e: any) => {
    console.log(e.target.value);
  }, []);

  return (
    <div>
      <form onSubmit={withSubmit(handleSubmit)}>
        <Select
          options={DummyOptions}
          //react-hook-form
          // {...register('selectData', { required: true })}
          //general use
          onChange={handleOnChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SelectPage;
