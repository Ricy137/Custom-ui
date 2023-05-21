"use client";
import { useRef, useCallback, FormEvent } from "react";
import CheckBox from "@/components/CheckBox";
import Radio from "@/components/Radio";

const CheckboxPage: React.FC = () => {
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="test1">Test</label>
      <CheckBox
        customCheckBox={true}
        id="test1"
        value={"test1"}
        name="text"
        className="flex flex-row justify-center items-center w-40px h-40px checked:bg-#FFA14A checked:border-##FFA14A"
      />
      <label htmlFor="test2">Test2</label>
      <Radio
        customCheckBox={true}
        className="checked:bg-#ffa14a"
        id="test2"
        name="radio"
      />
      <input type="submit" />
    </form>
  );
};

export default CheckboxPage;
