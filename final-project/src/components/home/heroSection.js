import React from 'react';
import heroImage from '../../assets/img/hero.jpg';
import Button from '../button';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full h-screen flex items-center text-white"
      style={{
        height: `calc(100vh - 90px)`,
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent), url(${heroImage})`
      }}
    >
      <div className="mx-[80px] max-w-[740px]">
        <h1 className="font-sans font-bold text-[48px] text-whiteSecondary leading-[130%]">Temukan Pekerjaan Impianmu Bersama <span className="font-sans font-bold text-[48px] text-primary">KerjaYuk</span></h1> 
        <p className="font-sans font-light text-[18px] text-whiteSecondary leading-[150%] mt-[20px] mb-[40px]">Jelajahi ribuan lowongan pekerjaan dari berbagai industri, dan ambil langkah pertama menuju masa depan cerahmu. Temukan dan mulai karir impianmu sekarang !</p>
        <Button variant="primary" size="lg">Mulai Karirmu</Button>
      </div>
    </section>
  );
};

export default HeroSection;
