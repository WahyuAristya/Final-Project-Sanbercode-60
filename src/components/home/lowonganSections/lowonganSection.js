import React, { useEffect, useState } from "react";
import Button from "../../button";
import axios from "axios";
import LowonganList from "../../lowonganList/lowonganList";
import { Link } from "react-router-dom";

const LowonganSection = () => {
  const [lowonganTerbaru, setLowonganTerbaru] = useState([]);

  useEffect(() => {
    const fetchLowongan = async () => {
      try {
        const response = await axios.get("https://final-project-api-alpha.vercel.app/api/jobs");
        setLowonganTerbaru(response.data); // Simpan data dari API ke state
      } catch (error) {
        console.error("Error fetching lowongan data:", error);
      }
    };

    fetchLowongan();
  }, []);

  return (
    <section className="mx-[80px] items-center text-center">
      <h1 className="font-sans font-bold text-[32px] text-black leading-[130%] mt-[120px]">
        Lowongan{" "}
        <span className="font-sans font-bold text-[32px] text-primary">Terkini</span>
      </h1>
      <p className="font-sans font-light text-[18px] text-blackSecondary leading-[150%] mt-[20px] mx-[188px]">
        Jangan lewatkan kesempatan! Temukan daftar lowongan terbaru yang telah
        terverifikasi dari berbagai perusahaan terkemuka. Update setiap hari
        untuk raih kesempatan karir impianmu!
      </p>
      {/* Kirim data ke LowonganList */}
      <LowonganList lowonganTerbaru={lowonganTerbaru} />
      <Link to="/lowongan">
      <Button variant="secondary">Lihat selengkapnya</Button>
      </Link>
    </section>
  );
};

export default LowonganSection;
