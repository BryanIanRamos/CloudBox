import React, { useEffect, useState } from "react";

const useSelectFetch = (apiUrl, id) => {
  const [rData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!apiUrl || !id) return;

    // fetch(`${apiUrl}/api/${id}`)
    fetch(`${apiUrl}/api/1`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not fetched");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(true);
      });
    console.log("rData", rData);
  }, [apiUrl, id]);

  return { rData, loading, error };
};

export default useSelectFetch;
