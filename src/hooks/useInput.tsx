import { ChangeEvent, useState } from "react";
import useFetch from "./useFetch";
const useInput = (inputValue: any) => {
  const [data, setData] = useState<any>(inputValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  // useFetch(url, data);
  return {
    data,
    onChange: handleChange,
  };
};

export default useInput;
