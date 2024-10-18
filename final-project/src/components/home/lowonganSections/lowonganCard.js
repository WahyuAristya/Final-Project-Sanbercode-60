import React from "react";

const LowonganCard = ({
  image,
  title,
  company,
  location,
  status,
  type,
  tenure,
  qualification,
  description,
  salary,
}) => {
  return (
    <div className="flex flex-col shadow-custom p-[40px] mt-[60px] rounded-[10px]">
      <div className="flex mb-[20px] items-center">
        <img
          src={image}
          className="w-[76px] h-[76px] object-cover mr-[20px]"
          alt="Job"
        />
        <div className="flex flex-col items-start">
          <h1 className="text-[22px] font-sans font-bold mb-[5px]">{title}</h1>
          <p className="text-[16px] font-sans font-regular text-black">
            {company}
          </p>
        </div>
      </div>
      <hr className="border-[#E9E9E9] my-[10px]" />
      <div className="flex items-center justify-between mt-2">
        <p className="text-[16px] font-sans font-regular text-black leading-[150%]">
          {location}
        </p>
        <p className="text-[16px] font-sans font-bold text-green uppercase">
          {status}
        </p>
      </div>
      <div className="flex space-x-[10px]">
        <div className="flex flex-col bg-whiteSecondary px-[10px] py-[5px] rounded-[10px] justify-center mt-[20px]">
          <p className="text-[16px] font-sans font-regular text-black">
            {type}
          </p>
        </div>

        <div className="flex flex-col bg-whiteSecondary px-[10px] py-[5px] rounded-[10px] justify-center mt-[20px]">
          <p className="text-[16px] font-sans font-regular text-black">
            {tenure}
          </p>
        </div>

        <div className="flex flex-col bg-whiteSecondary px-[10px] py-[5px] rounded-[10px] justify-center mt-[20px]">
          <p className="text-[16px] font-sans font-regular text-black">
            {qualification}
          </p>
        </div>
      </div>
      <div className="flex flex-col text-start mt-[20px]">
        <p className="text-[16px] font-sans font-light text-blackSecondary line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex flex-col text-end mt-[30px]">
      <p className="text-[22px] font-sans font-bold text-primary">
        {salary}
      </p>
      </div>
    </div>
  );
};

export default LowonganCard;
