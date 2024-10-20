import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../button";
import closeIcon from "../../assets/icon/close.png";

const FilterOverlay = ({ onClose, setFilteredData }) => {
  const [lowonganData, setLowonganData] = useState([]);
  const [city, setCity] = useState("");
  const [jobType, setJobType] = useState({
    onsite: false,
    wfh: false,
    hybrid: false,
  });

  // Fetch lowongan data when the component mounts
  useEffect(() => {
    fetchLowongan();
  }, []);

  // Fetch lowongan data from API
  const fetchLowongan = async () => {
    try {
      const response = await axios.get("https://final-project-api-alpha.vercel.app/api/jobs");
      setLowonganData(response.data);
    } catch (error) {
      console.error("Error fetching lowongan data:", error);
    }
  };

  // Filter lowongan based on criteria
  const handleFilter = (e) => {
    e.stopPropagation();

    console.log("Lowongan Data:", lowonganData);

    const filtered = lowonganData.filter((lowongan) => {
      const matchesCity = city 
        ? lowongan.company_city?.toLowerCase().includes(city.toLowerCase()) 
        : true;

      const matchesJobType = 
        (jobType.onsite && lowongan.job_type.toLowerCase() === "onsite") ||
        (jobType.wfh && lowongan.job_type.toLowerCase() === "wfh") ||
        (jobType.hybrid && lowongan.job_type.toLowerCase() === "hybrid") ||
        (!jobType.onsite && !jobType.wfh && !jobType.hybrid);

      return matchesCity && matchesJobType;
    });

    console.log("Filtered results:", filtered);

    if (filtered.length === 0) {
      alert("Tidak ada lowongan yang sesuai dengan filter yang diterapkan.");
    }

    setFilteredData(filtered); // Atur state dengan data terfilter
    onClose(); // Tutup overlay setelah menerapkan filter
  };

  // Reset filter to initial state
  const handleReset = () => {
    setCity("");
    setJobType({
      onsite: false,
      wfh: false,
      hybrid: false,
    });
    setFilteredData(lowonganData); // Kembalikan data ke semua lowongan
  };

  return (
    <div className="fixed top-[90px] right-0 w-1/3 h-full bg-white shadow-lg p-4 z-50" onClick={e => e.stopPropagation()}>
      <div className="flex justify-between mt-[20px] mb-[40px]">
        <h2 className="font-sans font-bold text-[22px]">Filter</h2>
        <img src={closeIcon} alt="Close" className="cursor-pointer" onClick={onClose} />
      </div>
      {/* Input Kota */}
      <div className="mb-4">
        <label className="block mb-[15px] text-start font-sans font-bold text-[16px]">Kota</label>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            e.stopPropagation(); // Mencegah penutupan overlay saat mengetik
          }}
          placeholder="Masukkan nama kota"
          className="border rounded-[10px] p-2 w-full border-primary"
        />
      </div>

      {/* Checkbox Job Type */}
      <div className="mt-[40px] mb-[40px]">
        <h3 className="text-start font-sans font-bold text-[16px] mb-[15px]">Jenis Lokasi Kerja:</h3>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={jobType.onsite}
              onChange={() => {
                setJobType((prev) => ({ ...prev, onsite: !prev.onsite }));
              }}
              className="border rounded-[5px] p-3 border-primary mr-[15px]"
              onClick={(e) => e.stopPropagation()} // Mencegah penutupan overlay
            />
            Onsite
          </label>
          <label className="flex items-center mt-[10px]">
            <input
              type="checkbox"
              checked={jobType.wfh}
              onChange={() => {
                setJobType((prev) => ({ ...prev, wfh: !prev.wfh }));
              }}
              className="border rounded-[5px] p-3 border-primary mr-[15px]"
              onClick={(e) => e.stopPropagation()} // Mencegah penutupan overlay
            />
            WFH
          </label>
          <label className="flex items-center mt-[10px]">
            <input
              type="checkbox"
              checked={jobType.hybrid}
              onChange={() => {
                setJobType((prev) => ({ ...prev, hybrid: !prev.hybrid }));
              }}
              className="border rounded-[5px] p-3 border-primary mr-[15px]"
              onClick={(e) => e.stopPropagation()} // Mencegah penutupan overlay
            />
            Hybrid
          </label>
        </div>
      </div>

      <div className="flex justify-between mt-[20px]">
        <Button variant="primary" onClick={handleFilter}>Terapkan</Button>
        <Button variant="secondary" onClick={handleReset}>Reset Filter</Button>
      </div>
    </div>
  );
};

export default FilterOverlay;
