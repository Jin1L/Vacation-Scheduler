import { useEffect, useState } from "react";

const useFetch = (url: string, data: any) => {
  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw Error("could not fetch the data for that resource");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [url, data]);
};

export default useFetch;
