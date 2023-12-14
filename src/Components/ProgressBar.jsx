import React, { useEffect, useState } from "react";

const ProgressBar = ({ percentage1, percentage2, secColor }) => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  // let intervalId;

  useEffect(() => {
    let intervalId1 = setInterval(() => {
      if (progress1 < percentage1) {
        setProgress1(progress1 + 1);
      } else {
        clearInterval(intervalId1);
      }
    });
    let intervalId2 = setInterval(() => {
      if (progress2 < percentage2) {
        setProgress2(progress2 + 1);
      } else {
        clearInterval(intervalId2);
      }
    });

    return () => {
      if (intervalId1) {
        clearInterval(intervalId1);
      }
      if (intervalId2) {
        clearInterval(intervalId2);
      }
    };
  }, [progress1, progress2]);

  const secondProgressColor = secColor ? "#FEAC00" : "#145499";

  return (
    <div>
      <div className="w-4 h-[80px] rotate-180 flex">
        <div
          className={`w-2 ${secColor ? "bg-[#FCD37E]" : "bg-[#072060]"} border`}
          style={{
            height: `${progress2}%`,
            transition: "height 0.5s ease-in-out",
          }}
        ></div>
        <div
          className={`w-2 ${secColor ? "bg-[#FEAC00]" : "bg-[#145499]"} border`}
          style={{
            height: `${progress1}%`,
            transition: "height 0.5s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
