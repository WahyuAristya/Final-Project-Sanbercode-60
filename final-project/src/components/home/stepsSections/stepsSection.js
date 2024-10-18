import React from "react";
import stepsImage from "../../../assets/img/steps-image.png";
import Steps from "./steps";

const StepsSection = () => {

  const stepsData = [
    { number: 1, title: 'Temukan Pekerjaan Impian', description: 'Jelajahi ribuan lowongan dari berbagai industri yang sesuai dengan minat dan keahlianmu. Peluang terbaik menunggumu!' },
    { number: 2, title: 'Lengkapi Profil', description: 'Buat profil yang menarik perhatian perusahaan dalam hitungan menit. Unggah CV dan tunjukkan siapa dirimu.' },
    { number: 3, title: 'Lamar Pekerjaan', description: 'Temukan lowongan yang cocok, klik "Lamar," dan proses selesai! Tanpa ribet, langsung menuju peluang karirmu.' },
    { number: 4, title: 'Cek Status Lamaran', description: 'Pantau setiap lamaranmu dengan mudah. Lihat status terkini dan selalu tahu perkembangan proses rekrutmenmu.' },
  ];


  return (
    <section className="flex mx-[80px] mt[120px]">
      <div className="text-center">
        <h1 className="font-sans font-bold text-[32px] text-black leading-[130%] mt-[80px]">
          Langkah Mudah Menuju{" "}
          <span className="font-sans font-bold text-[32px] text-primary">
            Pekerjaan Impian
          </span>
        </h1>
        <p className="font-sans font-light text-[18px] text-blackSecondary leading-[150%] mt-[20px] mx-[188px]">
          Temukan karir yang sesuai dengan keahlian dan passionmu dalam beberapa
          langkah sederhana. Buat profil, jelajahi lowongan, dan lamar pekerjaan
          dengan cepat. semua ada di ujung jarimu!
        </p>
        <div className="grid grid-cols-2 gap-[64px] mt-[73px] items-center">
          <Steps steps={stepsData} />
          <img src={stepsImage} className="w-[593px] h-[506px] object-cover justify-self-end" />
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
