import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import locationIcon from "../../assets/icon/location.png";
import salaryIcon from "../../assets/icon/salary.png";
import contractIcon from "../../assets/icon/contract.png";
import typeIcon from "../../assets/icon/type.png";
import shareIcon from "../../assets/icon/share.png";
import clockIcon from "../../assets/icon/clock.png";
import Button from "../button";
import LowonganCard from "../home/lowonganSections/lowonganCard";
import Footer from "../footer";
import Skeleton from "../home/lowonganSections/skeleton";

const JobDetailPage = () => {
  const { jobId } = useParams(); // Ambil jobId dari URL
  const [jobData, setJobData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lowonganTerbaru, setLowonganTerbaru] = useState([]);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await axios.get(
          `https://final-project-api-alpha.vercel.app/api/jobs/${jobId}`
        );
        setJobData(response.data); // Simpan data pekerjaan dari API
      } catch (error) {
        console.error("Error fetching job detail:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchLowonganTerbaru = async () => {
      try {
        const response = await axios.get(
          "https://final-project-api-alpha.vercel.app/api/jobs"
        );
        setLowonganTerbaru(response.data.slice(0, 2)); // Ambil dua lowongan terbaru
      } catch (error) {
        console.error("Error fetching lowongan data:", error);
      }
    };

    fetchJobDetail();
    fetchLowonganTerbaru();
  }, [jobId]);

  if (isLoading) {
    return (
      <>
        <div className="mx-[80px] px-4 py-8">
          <nav className="mb-[30px]">
            <ul className="flex space-x-2 text-sm text-gray-600">
              <li>
                <Skeleton width="80px" />
              </li>
              <li>/</li>
              <li>
                <Skeleton width="80px" />
              </li>
              <li>/</li>
              <li>
                <Skeleton width="200px" />
              </li>
            </ul>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white shadow-custom rounded-[10px] p-[30px] mb-[40px]">
                <div className="flex items-center">
                  <Skeleton
                    height="110px"
                    width="110px"
                    className="rounded-full mr-4"
                  />
                  <div className="flex flex-col">
                    <Skeleton height="22px" width="200px" />
                    <Skeleton height="16px" width="150px" />
                  </div>
                  <div className="ml-auto">
                    <Skeleton height="18px" width="80px" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 mb-[20px]">
                  <div className="flex flex-col gap-2 ml-[125px] w-full">
                    <Skeleton height="16px" width="100%" />
                    <Skeleton height="16px" width="100%" />
                    <Skeleton height="16px" width="100%" />
                    <Skeleton height="16px" width="100%" />
                    <Skeleton
                      height="12px"
                      width="100px"
                      className="mt-[30px]"
                    />
                  </div>
                </div>

                <div className="flex gap-[15px] ml-[125px] mb-[40px]">
                  <Skeleton height="40px" width="100px" className="rounded" />
                  <Skeleton height="40px" width="100px" className="rounded" />
                </div>
                <div>
                  <hr className="border-[#E9E9E9] my-[10px] mb-[40px]" />
                  <Skeleton height="18px" width="100px" />
                  <Skeleton height="16px" width="100%" className="mb-[20px]" />
                  <Skeleton height="16px" width="100%" className="mb-[40px]" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-sans font-bold text-[22px] text-black mb-[30px]">
                Lowongan{" "}
                <span className="font-sans font-bold text-[22px] text-primary">
                  Terbaru
                </span>
              </h2>
              <div className="space-y-4">
                {Array.from({ length: 2 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    height="120px"
                    width="100%"
                    className="rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!jobData) {
    return <div>Job not found.</div>;
  }

  const calculateDaysAgo = (dateString) => {
    const createdDate = new Date(dateString);
    const today = new Date();
    const timeDifference = today - createdDate; // Selisih waktu dalam milidetik
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Konversi ke hari
    return daysDifference > 0 ? `${daysDifference} hari yang lalu` : "Hari ini"; // Jika lebih dari 0 hari
  };

  return (
    <>
      <div className="mx-[80px] px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-[30px]">
          <ul className="flex space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-blue-500">
                Beranda
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/lowongan" className="hover:text-blue-500">
                Lowongan
              </a>
            </li>
            <li>/</li>
            <li>{jobData.title}</li>
          </ul>
        </nav>

        {/* Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom Detail Pekerjaan */}
          <div className="md:col-span-2">
            <div className="bg-white shadow-custom rounded-[10px] p-[30px] mb-[40px]">
              <div className="flex items-center">
                <img
                  src={jobData.company_image_url}
                  alt="Job Image"
                  className="w-[110px] h-[110px] object-contain rounded-full mr-4"
                />
                <div>
                  <h1 className="text-[22px] font-sans font-bold">
                    {jobData.title}
                  </h1>
                  <p className="text-[16px] font-sans font-regular text-black">
                    {jobData.company_name}
                  </p>
                </div>
                <div className="ml-auto">
                  <p
                    className={`text-[18px] font-sans font-bold uppercase ${
                      jobData.job_status === 1 ? "text-green" : "text-red"
                    }`}
                  >
                    {jobData.job_status === 1 ? "Tersedia" : "Ditutup"}
                  </p>
                </div>
              </div>

              {/* Info Detail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 mb-[20px]">
                <div className="flex flex-col gap-2 ml-[125px] w-full">
                  <div className="flex items-center gap-[15px]">
                    <img
                      src={locationIcon}
                      className="w-[14px] h-[17px] object-cover"
                      alt="Location"
                    />
                    <p className="text-[16px] font-sans font-regular text-black leading-[150%]">
                      {jobData.company_city}
                    </p>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <img
                      src={salaryIcon}
                      className="w-[14px] h-[17px] object-cover"
                      alt="Salary"
                    />
                    <p className="text-[16px] font-sans font-regular text-black leading-[150%]">
                      Rp.{" "}
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(jobData.salary_min)}{" "}
                      -{" "}
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(jobData.salary_max)}
                    </p>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <img
                      src={contractIcon}
                      className="w-[14px] h-[17px] object-cover"
                      alt="Contract"
                    />
                    <p className="text-[16px] font-sans font-regular text-black leading-[150%]">
                      {jobData.job_type}
                    </p>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <img
                      src={typeIcon}
                      className="w-[14px] h-[17px] object-cover"
                      alt="Type"
                    />
                    <p className="text-[16px] font-sans font-regular text-black leading-[150%]">
                      {jobData.job_tenure}
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px] mt-[30px]">
                    <img
                      src={clockIcon}
                      className="w-[14px] h-[17px] object-cover"
                      alt="Clock"
                    />
                    <p className="text-[12px] font-sans font-light text-[#717171] leading-[150%]">
                      Diunggah {calculateDaysAgo(jobData.createdAt)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deskripsi Pekerjaan */}
              <div className="flex gap-[15px] ml-[125px] mb-[40px]">
                <Button variant="primary">Lamar Sekarang</Button>
                <Button variant="secondary">
                  <div className="flex items-center gap-[10px]">
                    <img
                      src={shareIcon}
                      alt="Share"
                      className="w-[16px] h-[16px]"
                    />{" "}
                    <span>Bagikan</span>
                  </div>
                </Button>
              </div>
              <div>
                <hr className="border-[#E9E9E9] my-[10px] mb-[40px]" />
                {/* Keahlian */}
                <div className="mt-[20px]">
                  <h2 className="text-[18px] font-sans font-bold mb-[20px]">
                    Keahlian
                  </h2>
                  <div className="flex flex-wrap gap-[10px]">
                    {jobData.job_qualification
                      .split(",")
                      .map((skill, index) => (
                        <span
                          key={index}
                          className="px-[10px] py-[5px] bg-whiteSecondary text-black rounded-[10px] text-[16px] font-sans font-regular leading-[150%]"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>

                <h2 className="text-[18px] font-sans font-bold mb-[20px] mt-[40px]">
                  Deskripsi
                </h2>
                <p className="text-black text-[16px] font-sans font-regular leading-[150%] mb-[40px]">
                  {jobData.job_description}
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Lowongan Terbaru */}
          <div>
            <h2 className="font-sans font-bold text-[22px] text-black mb-[30px]">
              Lowongan{" "}
              <span className="font-sans font-bold text-[22px] text-primary">
                Terbaru
              </span>
            </h2>
            <div className="space-y-4">
              {/* Lowongan Card */}
              {lowonganTerbaru.map((lowongan) => (
                <LowonganCard
                  key={lowongan._id} // Pastikan setiap card memiliki key yang unik
                  jobId={lowongan._id} // ID pekerjaan
                  image={lowongan.company_image_url} // Gambar perusahaan
                  title={lowongan.title}
                  company={lowongan.company_name}
                  location={lowongan.company_city}
                  status={lowongan.job_status === 1 ? "Tersedia" : "Ditutup"}
                  type={lowongan.job_type}
                  tenure={lowongan.job_tenure}
                  qualification={lowongan.job_qualification}
                  description={lowongan.job_description}
                  salary_min={lowongan.salary_min} // Pastikan ini adalah property yang benar
                  salary_max={lowongan.salary_max} // Pastikan ini adalah property yang benar
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetailPage;
