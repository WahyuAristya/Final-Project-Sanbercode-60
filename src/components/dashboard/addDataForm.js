import React, { useState } from "react";
import axios from "axios";
import Button from "../button";
import Cookies from "js-cookie"; // Import Cookies untuk mengambil token

const AddDataForm = () => {
  const [job, setJob] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 1, // Atur default sesuai dengan kebutuhan
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();

    // Ambil token dari cookies
    const token = Cookies.get('token'); // Pastikan token tersimpan di cookies dengan nama 'token'

    axios
      .post("https://final-project-api-alpha.vercel.app/api/jobs", job, {
        headers: {
          Authorization: `Bearer ${token}`, // Sertakan token di header
        },
      })
      .then((response) => {
        console.log("Job added successfully:", response.data);
        setJob({
          title: "",
          job_description: "",
          job_qualification: "",
          job_type: "",
          job_tenure: "",
          job_status: 1,
          company_name: "",
          company_image_url: "",
          company_city: "",
          salary_min: "",
          salary_max: "",
        });
        setIsModalOpen(true); // Tampilkan modal setelah berhasil menambah data
      })
      .catch((error) => {
        console.error("Error adding job data:", error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-[80px] mt-[65px] mb-[35px]">
      <h1 className="font-sans font-bold text-[32px] text-black leading-[130%]">
        Tambah{" "}
        <span className="font-sans font-bold text-[32px] text-primary">
          Data
        </span>
      </h1>

      <form onSubmit={handleAdd}>
        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={job.title || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            name="job_description"
            value={job.job_description || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Qualification:
          <input
            type="text"
            name="job_qualification"
            value={job.job_qualification || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Type:
          <input
            type="text"
            name="job_type"
            value={job.job_type || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Tenure:
          <input
            type="text"
            name="job_tenure"
            value={job.job_tenure || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Salary Min:
          <input
            type="number"
            name="salary_min"
            value={job.salary_min || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Salary Max:
          <input
            type="number"
            name="salary_max"
            value={job.salary_max || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Company Name:
          <input
            type="text"
            name="company_name"
            value={job.company_name || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Company City:
          <input
            type="text"
            name="company_city"
            value={job.company_city || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Company Image URL:
          <input
            type="text"
            name="company_image_url"
            value={job.company_image_url || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </label>
        <Button variant="primary" type="submit">
          Tambah
        </Button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold">Data Berhasil Ditambahkan!</h2>
            <p className="mt-2">Lowongan pekerjaan telah berhasil ditambahkan.</p>
            <button onClick={closeModal} className="mt-4 bg-primary text-white p-2 rounded">
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDataForm;
