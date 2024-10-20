import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../button";
import Cookies from "js-cookie"; // Impor Cookies untuk mengakses token

const EditDataForm = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();
  const [job, setJob] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    salary_min: "",
    salary_max: "",
    company_name: "",
    company_city: "",
    company_image_url: "",
    job_status: 1, // Default status
  });

  useEffect(() => {
    axios
      .get(`https://final-project-api-alpha.vercel.app/api/jobs/${id}`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const token = Cookies.get('token'); // Ambil token dari cookies

    axios
      .put(`https://final-project-api-alpha.vercel.app/api/jobs/${id}`, job, {
        headers: {
          Authorization: `Bearer ${token}`, // Sertakan token dalam header
        },
      })
      .then((res) => {
        console.log("Job updated successfully:", res.data);
        navigate("/dashboard/list-data-table"); // Kembali ke halaman sebelumnya setelah berhasil update
      })
      .catch((error) => {
        console.error("Error updating job data:", error);
      });
  };

  return (
    <div className="px-[80px] mt-[65px] mb-[35px]">
      <h1 className="font-sans font-bold text-[32px] text-black leading-[130%]">
        Edit{" "}
        <span className="font-sans font-bold text-[32px] text-primary">
          Data
        </span>
      </h1>

      <form onSubmit={handleUpdate}>
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

        {/* Tambahkan input untuk job status */}
        <label className="block mb-2">
          Job Status:
          <select
            name="job_status"
            value={job.job_status}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          >
            <option value={1}>TERSEDIA</option>
            <option value={0}>DITUTUP</option>
          </select>
        </label>

        <Button type="submit">Update</Button>
      </form>
    </div>
  );
};

export default EditDataForm;
