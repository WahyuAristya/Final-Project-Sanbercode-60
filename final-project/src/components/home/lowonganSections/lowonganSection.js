import React from "react";
import LowonganCard from "./lowonganCard";
import cardImage1 from "../../../assets/img/card-1.png";
import Button from "../../button";

const LowonganSection = () => {
  return (
    <section className="mx-[80px] items-center text-center">
      <h1 className="font-sans font-bold text-[32px] text-black leading-[130%] mt-[120px]">
        Lowongan{" "}
        <span className="font-sans font-bold text-[32px] text-primary">
          Terkini
        </span>
      </h1>
      <p className="font-sans font-light text-[18px] text-blackSecondary leading-[150%] mt-[20px] mx-[188px]">
        Jangan lewatkan kesempatan! Temukan daftar lowongan terbaru yang telah
        terverifikasi dari berbagai perusahaan terkemuka. Update setiap hari
        untuk raih kesempatan karir impianmu!
      </p>
      <div className="grid grid-cols-3 gap-[23px] mb-[40px]">
        <LowonganCard
          image={cardImage1}
          title="Lowongan Terkini"
          company="PT. KerjaYuk"
          location="bali"
          status="terbuka"
          type="On Site"
          tenure="Fulltime"
          qualification="reactJS"
          description="Temukan lowongan pekerjaan terkini dan selalu diperbarui dengan peluang terbaru dari berbagai industri. Temukan lowongan pekerjaan terkini dan selalu diperbarui dengan peluang terbaru dari berbagai industri."
          salary="Rp. 100rb - Rp. 20jt"
        />
        <LowonganCard
          image={cardImage1}
          title="Lowongan Terkini"
          company="PT. KerjaYuk"
          location="bali"
          status="terbuka"
          type="On Site"
          tenure="Fulltime"
          qualification="reactJS"
          description="Temukan lowongan pekerjaan terkini dan selalu diperbarui dengan peluang terbaru dari berbagai industri. Temukan lowongan pekerjaan terkini dan selalu diperbarui dengan peluang terbaru dari berbagai industri."
          salary="Rp. 100rb - Rp. 20jt"
        />
        <LowonganCard
          image={cardImage1}
          title="Lowongan Terkini"
          company="PT. KerjaYuk"
          location="bali"
          status="terbuka"
          type="On Site"
          tenure="Fulltime"
          qualification="reactJS"
          description="Temukan lowongan pekerjaan terkini dan selalu diperbarui dengan peluang terbaru dari berbagai industri. Temukan lowongan pekerjaan terkini dan selalu diperbarui dengan peluang terbaru dari berbagai industri."
          salary="Rp. 100rb - Rp. 20jt"
        />
      </div>
      <Button variant="secondary">Mulai Karirmu</Button>
    </section>
  );
};

export default LowonganSection;
