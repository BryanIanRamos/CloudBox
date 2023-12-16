import { useState, useEffect } from "react";
import axios from "axios";

const useJoinTables = (leftAPI, rightAPI) => {
  const [mergedData, setMergedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get(leftAPI);
        const transactionsResponse = await axios.get(rightAPI);

        if (!usersResponse.data || !transactionsResponse.data) {
          throw new Error("Data is not fetched");
        }

        const usersData = usersResponse.data;
        const transactionsData = transactionsResponse.data;

        // Joining logic based on a common attribute, such as user ID
        const merged = usersData.map((user) => {
          const relatedTransactions = transactionsData.filter(
            (transaction) => transaction.userId === user.id
          );
          return { ...user, transactions: relatedTransactions };
        });

        setMergedData(merged);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [leftAPI, rightAPI]);

  return { mergedData, loading, error };
};

export default useJoinTables;
