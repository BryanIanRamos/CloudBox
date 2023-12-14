import React, { useEffect, useState } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not fetch");
        }
        return res.json();
      })
      .then((data) => {
        // console.log("Data::", data);
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(true);
      });
  }, []);

  return { data, loading, error };
};

export default useFetch;
