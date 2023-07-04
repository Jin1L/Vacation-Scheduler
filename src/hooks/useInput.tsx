import { ChangeEvent, useState } from "react";
const useInput = (inputValue: any) => {
  const [data, setData] = useState<any>(inputValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  return {
    data,
    onChange: handleChange,
  };
};

export default useInput;
