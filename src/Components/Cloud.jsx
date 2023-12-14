import React from "react";

function Cloud({pos}) {
  return (
    <>
      <div className="z-0 ">
        <Circle top="-10%" val="20%" pos={pos}/>
        <Circle top="5%" val="20%" pos={pos}/>
        <Circle top="15%" val="20%" pos={pos}/>
        <Circle top="30%" val="20%" pos={pos}/>
        <Circle top="45%" val="20%" pos={pos}/>
        <Circle top="50%" val="20%" pos={pos}/>
        <Circle top="70%" val="20%" pos={pos}/>
        <Circle top="85%" val="20%" pos={pos}/>
        {/* cut */}
        <Circle top="85%" val="25%" pos={pos}/>
        <Circle top="70%" val="25%" pos={pos}/>
        <Circle top="60%" val="25%" pos={pos}/>
        <Circle top="50%" val="25%" pos={pos}/>
        <Circle top="45%" val="25%" pos={pos}/>
        <Circle top="30%" val="25%" pos={pos}/>
        <Circle top="15%" val="25%" pos={pos}/>
        <Circle top="5%" val="25%" pos={pos}/>
        <Circle top="-10%" val="25%" pos={pos}/>
        {/* cut opacity="0.5" */}
        <Circle top="-10%" val="30%" opacity="0.5" pos={pos}/>
        <Circle top="-8%" val="42%" opacity="0.5" pos={pos}/>
        <Circle top="5%" val="35%" opacity="0.5" pos={pos}/>
        <Circle top="15%" val="32%" opacity="0.5" pos={pos}/>
        <Circle top="30%" val="33%" opacity="0.5" pos={pos}/>
        <Circle top="45%" val="33%" opacity="0.5" pos={pos}/>
        <Circle top="50%" val="33%" opacity="0.5" pos={pos}/>
        <Circle top="70%" val="32%" opacity="0.5" pos={pos}/>
        <Circle top="82%" val="37%" opacity="0.5" pos={pos}/>
        {/* cut extra" */}
        <Circle top="-10%" val="33%" pos={pos}/>
        <Circle top="-8%" val="40%" pos={pos}/>
        <Circle top="-5%" val="36%" pos={pos}/>
        <Circle top="-5%" val="37%" pos={pos}/>
        <Circle top="4%" val="33%" pos={pos}/>
        <Circle top="15%" val="30%" pos={pos}/>
        <Circle top="30%" val="30%" pos={pos}/>
        <Circle top="45%" val="30%" pos={pos}/>
        <Circle top="50%" val="30%" pos={pos}/>
        <Circle top="70%" val="30%" pos={pos}/>
        <Circle top="85%" val="36%" pos={pos}/>
      </div>
    </>
  );
}

function Circle({ top, val, opacity, pos }) {
    const rightOrLeft = pos === 'right' ? { right: val } : { left: val };
  
    return (
      <div
        className="absolute w-[185px] h-[176.63px] bg-white rounded-full"
        style={{ top, ...rightOrLeft, opacity }}
      ></div>
    );
  }
  

export default Cloud;
