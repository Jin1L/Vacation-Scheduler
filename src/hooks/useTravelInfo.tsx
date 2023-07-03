import { FormEvent, ChangeEvent, useState } from "react";
import { TravelInfoProps } from "../types/TravelInfo";
import useFetch from "./useFetch";
const useTravelInfo = (inputValue: TravelInfoProps) => {
  const [data, setData] = useState<TravelInfoProps>(inputValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    console.log(data);
    e.preventDefault();
  };
  // useFetch(url, data);
  return {
    data,
    onChange: handleChange,
    onSubmit: handleSubmit,
  };
};

export default useTravelInfo;
