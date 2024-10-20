import React from "react";
import KarirCard from "./karirCard";
import cardImage1 from "../../../assets/img/card-1.png";
import cardImage2 from "../../../assets/img/card-2.png";
import cardImage3 from "../../../assets/img/card-3.png";

const KarirSection = () => {
  return (
    <section className="mx-[80px] items-center text-center">
      <h1 className="font-sans font-bold text-[32px] text-black leading-[130%] mt-[80px]">
        Bangun Karir di{" "}
        <span className="font-sans font-bold text-[32px] text-primary">
          KerjaYuk
        </span>
      </h1>
      <p className="font-sans font-light text-[18px] text-blackSecondary leading-[150%] mt-[20px] mx-[188px]">
        Jelajahi ribuan lowongan pekerjaan dari berbagai industri, dan ambil
        langkah pertama menuju masa depan cerahmu. Temukan dan mulai karir
        impianmu sekarang !
      </p>
      <div className="grid grid-cols-3 gap-[24px]">
        <KarirCard
          image={cardImage1}
          title="Lowongan Terkini"
          description="Temukan lowongan pekerjaan terkini dan selalu diperbarui dengan peluang terbaru dari berbagai industri."
        />
        <KarirCard
          image={cardImage2}
          title="Pencarian Mudah"
          description="Temukan pekerjaan impianmu dengan cepat dan mudah. Temukan pekerjaan yang sesuai dengan preferensimu."
        />
        <KarirCard
          image={cardImage3}
          title="Lamar Cepat & Praktis"
          description="Lamar pekerjaan dengan sekali klik. Dapatkan peluang karir dengan proses yang cepat dan efisien."
        />
      </div>
    </section>
  );
};

export default KarirSection;
