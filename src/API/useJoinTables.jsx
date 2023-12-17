import { useState, useEffect } from "react";
import axios from "axios";

const useJoinTables = (leftAPI, rightAPI, joinAttribute) => {
  const [mergedData, setMergedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leftResponse = await axios.get(leftAPI);
        const rightResponse = await axios.get(rightAPI);

        if (!leftResponse.data || !rightResponse.data) {
          throw new Error("Data is not fetched");
        }

        const leftData = leftResponse.data;
        const rightData = rightResponse.data;

        const merged = leftData.map((leftItem) => {
          const relatedItems = rightData.filter(
            (rightItem) => rightItem[joinAttribute] === leftItem[joinAttribute]
          );
          return { ...leftItem, joinedData: relatedItems };
        });

        // Sort the merged data in reverse order (from bottom to top)
        const sortedMerged = merged.reverse();

        // Filter the sorted merged data for records matching the present date
        const today = new Date(); // Get today's date
        const presentDateData = sortedMerged.filter((item) => {
          const itemDate = new Date(item.created_at);
          return (
            itemDate.getFullYear() === today.getFullYear() &&
            itemDate.getMonth() === today.getMonth() &&
            itemDate.getDate() === today.getDate()
          );
        });

        setMergedData(presentDateData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
    console.log("Data Received");
  }, [leftAPI, rightAPI, joinAttribute]);

  return { mergedData, loading, error };
};

export default useJoinTables;
