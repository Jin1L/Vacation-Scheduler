import { FormEvent, ChangeEvent, useState } from "react";
import useFetch from "./useFetch";
const useInput = (inputValue: any) => {
  const [data, setData] = useState<any>(inputValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  // useFetch(url, data);
  return {
    data,
    onChange: handleChange,
    onSubmit: handleSubmit,
  };
};

export default useInput;
