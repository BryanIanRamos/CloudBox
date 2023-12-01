import React, { useEffect, useState } from "react";
import "./Assets/CircularProgressBar.css"; // CSS file for styling

const CircularProgressBar = ({
  percentage,
  setRadius,
  stroke,
  secColor,
  isLarge,
}) => {
  const radius = setRadius;
  const strokeWidth = stroke;
  const viewBoxSize = radius * 2;
  const [color, setColor] = useState(secColor);
  const [largeSize, setLargeSize] = useState(isLarge);

  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;
  // Calculate the dash offset based on the percentage
  const dashOffset = circumference - (percentage / 115) * circumference;
  const [value, setValue] = useState(0);

  useEffect(() => {
    let intervalNum = setInterval(() => {
      if (value < dashOffset) {
        setValue(value + 1);
      } else {
        clearInterval(intervalNum);
      }
    }, 2);

    return () => {
      if (intervalNum) {
        clearInterval(intervalNum);
      }
    };
  }, [value]);

  return (
    <svg
      width={viewBoxSize}
      height={viewBoxSize}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      className={`circular-progress ${largeSize ? "w-[150px]" : "w-[90px]"}`}
    >
      <circle
        // className="circular-progress-background"
        className="stroke-current text-gray-300 fill-none"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <circle
        className={`circular-progress-bar fill-none stroke-current ${
          !color ? "text-[#155699]" : "text-[#FEAC00]"
        }`}
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: value,
        }}
      />
      {/* text-[30px] */}
      <text
        x="50%"
        y="50%"
        className={`circular-progress-text ${
          largeSize ? "text-[38px]" : "text-[18px]"
        }`}
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
