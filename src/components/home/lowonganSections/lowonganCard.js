import React from "react";
import locationIcon from "../../../assets/icon/location.png";
import { Link } from "react-router-dom";
import Skeleton from "./skeleton"; // Impor komponen Skeleton

const formatSalary = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(0)}jt`; // Format untuk juta
  }
  return `${(value / 1000).toFixed(0)}rb`; // Format untuk ribu
};

const LowonganCard = ({
  jobId,
  image,
  title,
  company,
  location,
  status,
  type,
  tenure,
  qualification, // Menggunakan job_qualification sebagai prop
  description,
  salary_min, // menggunakan salary_min
  salary_max, // menggunakan salary_max
  isLoading // Menambahkan prop untuk status loading

}) => {
  // Memisahkan keterampilan
  const skills = qualification ? qualification.split(",").map(skill => skill.trim()) : [];

  if (isLoading) {
    return (
      <div className="flex flex-col shadow-custom p-[40px] rounded-[10px]">
        <div className="flex mb-[20px] items-center">
          <Skeleton width="76px" height="76px" className="rounded-full mr-[20px]" />
          <div className="flex flex-col items-start">
            <Skeleton width="200px" height="22px" className="mb-[5px]" />
            <Skeleton width="150px" height="16px" />
          </div>
        </div>
        <hr className="border-[#E9E9E9] my-[10px]" />
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-[15px]">
            <img src={locationIcon} className="w-[14px] h-[17px] object-cover" alt="Location" />
            <Skeleton width="100px" height="16px" />
          </div>
          <Skeleton width="80px" height="16px" className="text-green" />
        </div>
        <div className="flex flex-wrap mt-[20px] gap-2">
          <Skeleton width="50px" height="30px" />
          <Skeleton width="50px" height="30px" />
          <Skeleton width="70px" height="30px" />
        </div>
        <div className="flex flex-col text-start mt-[20px]">
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
        </div>
        <div className="flex flex-col text-end mt-[30px]">
          <Skeleton width="100px" height="22px" />
        </div>
      </div>
    );
  }

  return (
    <Link to={`/lowongan/${jobId}`} className="flex flex-col shadow-custom p-[40px] rounded-[10px]">
      <div className="flex mb-[20px] items-center">
        <img
          src={image}
          className="w-[76px] h-[76px] object-contain mr-[20px] rounded-full" // Circle image
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
        <div className="flex items-center gap-[15px]">
          <img
            src={locationIcon}
            className="w-[14px] h-[17px] object-cover"
            alt="Location"
          />
          <p className="text-[16px] font-sans font-regular text-black leading-[150%]">
            {location}
          </p>
        </div>
        <p className={`text-[16px] font-sans font-bold uppercase ${status === 'Tersedia' ? 'text-green' : 'text-red'}`}>
        {status === "Tersedia" ? "TERSEDIA" : "DITUTUP"}
      </p>
      </div>

      {/* Kontainer untuk Bubble */}
      <div className="flex flex-wrap mt-[20px] gap-2">
        {/* Bubble untuk jenis pekerjaan */}
        <div className="flex flex-col bg-whiteSecondary px-[10px] py-[5px] rounded-[10px] justify-center">
          <p className="text-[16px] font-sans font-regular text-black">{type}</p>
        </div>

        {/* Bubble untuk masa kerja */}
        <div className="flex flex-col bg-whiteSecondary px-[10px] py-[5px] rounded-[10px] justify-center">
          <p className="text-[16px] font-sans font-regular text-black">{tenure}</p>
        </div>

        {/* Bubble untuk keterampilan */}
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col text-[16px] font-sans font-regular text-black bg-whiteSecondary px-[10px] py-[5px] rounded-[10px] justify-center"
            >
              {skill}
            </div>
          ))
        ) : (
          <span className="text-gray-500">Tidak ada keterampilan yang ditentukan</span>
        )}
      </div>

      <div className="flex flex-col text-start mt-[20px]">
        <p className="text-[16px] font-sans font-light text-blackSecondary line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex flex-col text-end mt-[30px]">
        <p className="text-[22px] font-sans font-bold text-primary">
          {`${formatSalary(salary_min)} - ${formatSalary(salary_max)}`}
        </p>
      </div>
    </Link>
  );
};

export default LowonganCard;
