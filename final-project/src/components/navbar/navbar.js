import React from 'react'
import logo from '../../assets/logo/logo.png'
import Button from '../button'

const Navbar = () => {
  return (
    <div className='bg-whiteSecondary h-[90px] flex sticky top-0 z-50'>
      <div className='mx-[80px] flex items-center w-full'>
        <img src={logo} alt="Logo" />;
        <p className='font-sans font-semibold ml-[130px]'>Beranda</p>
        <p className='font-sans font-regular ml-[70px]'>Lowongan</p>
        <div className='ml-auto flex space-x-[14px]'>
          <Button variant='secondary'>MASUK</Button>
          <Button variant='primary'>DAFTAR</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
