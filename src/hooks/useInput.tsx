import { ChangeEvent, useState } from "react";

const useInput = (inputValue: string) => {
  const [value, setValue] = useState<string>(inputValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
export default useInput;
