import { FormEvent, ChangeEvent, useState } from "react";
import { TripInfoProps } from "../types/TripInfoProps";

const useTripInfo = (inputValue: TripInfoProps) => {
  const [data, setData] = useState<TripInfoProps>(inputValue);

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

export default useTripInfo;
