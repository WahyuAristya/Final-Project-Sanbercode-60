import React from "react";

const CircleNumber = ({ number }) => {
  return (
    <>
      <div className="w-[60px] h-[60px] rounded-full bg-primary text-white flex items-center justify-center font-sans text-[32px] font-bold">
        {number}
      </div>
    </>
  );
};

export default CircleNumber;
