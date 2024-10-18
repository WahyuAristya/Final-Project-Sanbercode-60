import React from "react";
import logo2 from "../assets/logo/logo2.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-primary mt-[164px]">
      <div className="grid grid-cols-2 mx-[80px] gap-x-[119px] h-[440px]">
        {/* Kolom Kiri: Logo dan Deskripsi */}
        <div className="col-span-1 mt-[60px] max-w-[523px]">
          <img src={logo2} alt="Logo" className="mb-[15px]" />
          <p className="text-white font-sans font-light leading-[150%] text-[16px]">
            Secara resmi diluncurkan pada tahun 2024 di Indonesia, KerjaYuk
            telah memberdayakan lebih dari 5 juta bakat dan 60.000 organisasi
            untuk mewujudkan potensi manusia mereka.
          </p>
        </div>

        {/* Kolom Kanan: Section Perusahaan, Kebijakan, dan Pusat Bantuan */}
        <div className="col-span-1 mt-[88px] flex flex-col-3 gap-x-[119px]">
          <div className="mb-[30px]">
            <p className="text-white font-sans font-bold text-[18px] mb-[20px]">
              Perusahaan
            </p>
            <ul className="text-white font-sans font-light leading-[150%] text-[16px] space-y-[15px]">
              <li>Tentang Kami</li>
              <li>Tim Kami</li>
              <li>Blog</li>
              <li>HR Tips</li>
            </ul>
          </div>

          <div className="mb-[30px]">
            <p className="text-white font-sans font-bold text-[18px] mb-[20px]">
              Kebijakan
            </p>
            <ul className="text-white font-sans font-light leading-[150%] text-[16px] space-y-[15px]">
              <li>Kebijakan Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-sans font-bold text-[18px] mb-[20px]">
              Pusat Bantuan
            </p>
            <ul className="text-white font-sans font-light leading-[150%] text-[16px] space-y-[15px]">
              <li>Pusat Bantuan</li>
              <li>Call center</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bagian Copyright */}
      <div className="flex justify-between border-t border-b border-white mx-[80px] py-[20px] mb-[30px] text-white text-[14px]">
        <p>Illustration by Icons 8 from Ouch!</p>
        <p>Image by Unsplash</p>
      </div>
    </div>
  );
};

export default Footer;
