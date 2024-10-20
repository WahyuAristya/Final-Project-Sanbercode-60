import React, { useEffect, useState } from "react";
import filterIcon from "../../assets/icon/filter.png";
import axios from "axios";
import LowonganList from "../lowonganList/lowonganList";
import FilterOverlay from "./filterOverlay"; 

const LowonganSection = () => {
  const [lowonganData, setLowonganData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    const fetchLowongan = async () => {
      try {
        const response = await axios.get("https://final-project-api-alpha.vercel.app/api/jobs");
        setLowonganData(response.data);
        setFilteredData(response.data); 
      } catch (error) {
        console.error("Error fetching lowongan data:", error);
      }
    };

    fetchLowongan();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(lowonganData);
    } else {
      const filtered = lowonganData.filter((lowongan) =>
        lowongan.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, lowonganData]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className="mx-[80px] items-center text-center">
      <h1 className="font-sans font-bold text-[32px] text-black leading-[130%] mt-[80px] mb-[40px]">
        Bangun Karir di{" "}
        <span className="font-sans font-bold text-[32px] text-primary">KerjaYuk</span>
      </h1>
      <form className="max-w-[761px] mx-auto" onSubmit={handleSearch}>
        <label htmlFor="default-search" className="font-sans text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search jobs title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </div>
      </form>
      <div className="flex items-center justify-between mt-[120px]">
        <h1 className="font-sans font-bold text-[22px] text-black">
          Lowongan{" "}
          <span className="font-sans font-bold text-[22px] text-primary">Terbaru</span>
        </h1>
        <div 
          className="flex items-center gap-[5px] border-[2px] border-primary rounded-[10px] px-[30px] py-[17px] cursor-pointer"
          onClick={() => setIsOverlayVisible(true)} // Menampilkan overlay
        >
          <img src={filterIcon} className="w-[14px] h-[17px] object-cover" alt="filter" />
          <p className="font-sans font-semibold text-[16px] text-black">Filter</p>
        </div>
      </div>
      <LowonganList lowonganTerbaru={filteredData} />

      {/* Overlay untuk filter */}
      {isOverlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOverlayVisible(false)}>
          <FilterOverlay onClose={() => setIsOverlayVisible(false)} setFilteredData={setFilteredData} />
        </div>
      )}
    </section>
  );
};

export default LowonganSection;
