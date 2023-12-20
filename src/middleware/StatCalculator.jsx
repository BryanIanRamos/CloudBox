import React, { useEffect, useState } from "react";

const StatCalculator = (whole, part) => {
  //   const [percentage, setPercentage] = useState(0);

  const result = (part / whole) * 100;

  const percentage = parseInt(result);

  console.log(percentage);
  return { percentage };
};

export default StatCalculator;
