// src/components/LowonganList.js
import React, { useEffect, useState } from "react";
import LowonganCard from "../home/lowonganSections/lowonganCard";
import Skeleton from "../home/lowonganSections/skeleton";

const LowonganList = ({ lowonganTerbaru }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (lowonganTerbaru.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [lowonganTerbaru]);

  console.log(lowonganTerbaru);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px] mb-[40px] mt-[60px]">
      {isLoading ? (
        // Menampilkan skeleton saat loading
        <>
          <Skeleton height="250px" />
          <Skeleton height="250px" />
          <Skeleton height="250px" />
        </>
      ) : lowonganTerbaru.length > 0 ? (
        lowonganTerbaru.map((lowongan) => (
          <LowonganCard
            key={lowongan._id} // Pastikan setiap card memiliki key yang unik
            jobId={lowongan._id} // ID lowongan
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
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">Tidak ada lowongan yang tersedia.</p> // Pesan jika tidak ada data
      )}
    </div>
  );
};

export default LowonganList;
