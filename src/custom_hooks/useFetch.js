import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setStatus("fetching");
        const response = await fetch(url);
        const data = await response.json();
        setData({ ...data });
        setStatus("fetched");
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url]);
  console.log("return");
  return [data, status, error];
};
