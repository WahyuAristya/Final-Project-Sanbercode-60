import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import Skeleton from "../home/lowonganSections/skeleton"; // Import Skeleton
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Impor Cookies untuk mengakses token
import FilterOverlay from "../lowongan/filterOverlay"; // Import FilterOverlay

const ListDataTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk skeleton loading
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State untuk membuka filter
  const [filteredData, setFilteredData] = useState([]); // State untuk data yang sudah difilter
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://final-project-api-alpha.vercel.app/api/jobs")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data); // Inisialisasi filtered data dengan semua data
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // Hentikan loading setelah data diterima
      });
  }, []);

  const handleJobStatus = (job_status) => {
    return job_status === 1 ? "TERSEDIA" : "DITUTUP";
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus lowongan ini?");
    if (!confirmDelete) return; // Jika tidak dikonfirmasi, hentikan eksekusi

    const token = Cookies.get('token'); 
    axios
      .delete(`https://final-project-api-alpha.vercel.app/api/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Tambahkan token ke header
        },
      })
      .then((res) => {
        console.log("Job deleted successfully:", res.data);
        setFilteredData((prevData) => prevData.filter((item) => item._id !== id)); // Hapus item dari state
      })
      .catch((error) => {
        console.error("Error deleting job data:", error);
      });
  };

  // Function to open filter overlay
  const handleOpenFilter = () => {
    setIsFilterOpen(true);
  };

  // Function to close filter overlay
  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  return (
    <>
      <div className="px-[80px] mt-[65px] mb-[35px] flex justify-between">
        <h1 className="font-sans font-bold text-[32px] text-black leading-[130%]">
          Kelola{" "}
          <span className="font-sans font-bold text-[32px] text-primary">
            Data
          </span>
        </h1>
        <button
          onClick={handleOpenFilter}
          className="font-sans bg-primary text-white px-4 py-2 rounded-[10px]"
        >
          Filter
        </button>
      </div>
      
      {/* FilterOverlay */}
      {isFilterOpen && (
        <FilterOverlay
          onClose={handleCloseFilter}
          setFilteredData={setFilteredData} // Mengirim function untuk mengatur data setelah difilter
        />
      )}

      <div>
        <Table className="table-auto w-[90%] mx-[80px] mb-10" >
          <Table.Head className="bg-[#A149FA] text-white">
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              TITLE
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              DESCRIPTION
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              QUALIFICATION
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              TYPE
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              TENURE
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              STATUS
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              COMPANY
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              IMAGE
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              CITY
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              SALARY
            </Table.HeadCell>
            <Table.HeadCell className="font-sans text-[12px] px-4 py-4 text-left align-middle bg-transparent">
              ACTION
            </Table.HeadCell>
          </Table.Head>

          {/* Jika sedang loading, tampilkan Skeleton */}
          <Table.Body className="divide-y">
            {isLoading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <Table.Row key={index} className="bg-white">
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="50px" height="50px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton width="100%" height="20px" />
                    </Table.Cell>
                  </Table.Row>
                ))
              : filteredData.map((item) => ( // Gunakan filteredData untuk render tabel
                  <Table.Row key={item.id} className="bg-white">
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4 max-w-[150px]">
                      {item.title}
                    </Table.Cell>
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4 max-w-[150px]">
                      {item.job_description}
                    </Table.Cell>
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4 max-w-[150px]">
                      {item.job_qualification}
                    </Table.Cell>
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4">
                      {item.job_type}
                    </Table.Cell>
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4">
                      {item.job_tenure}
                    </Table.Cell>
                    <Table.Cell
                      className={`font-sans text-[12px] text-left px-4 py-4 ${
                        item.job_status === 1 ? "text-green" : "text-red"
                      }`}
                    >
                      {handleJobStatus(item.job_status)}
                    </Table.Cell>
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4">
                      {item.company_name}
                    </Table.Cell>
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4">
                      <img
                        src={item.company_image_url}
                        alt="Company Logo"
                        className="w-[50px] h-[50px]"
                      />
                    </Table.Cell>
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4">
                      {item.company_city}
                    </Table.Cell>
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4">
                      <CurrencyFormat
                        value={item.salary_min}
                        displayType="text"
                        thousandSeparator={true}
                        prefix="IDR "
                        renderText={(value) => <div>{value}</div>}
                      />
                      -
                      <CurrencyFormat
                        value={item.salary_max}
                        displayType="text"
                        thousandSeparator={true}
                        prefix="IDR "
                        renderText={(value) => <div>{value}</div>}
                      />
                    </Table.Cell>
                    <Table.Cell className="font-sans text-[12px] text-left px-4 py-4">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default ListDataTable;
