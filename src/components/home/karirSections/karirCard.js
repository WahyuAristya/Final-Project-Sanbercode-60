import React from 'react'

const KarirCard = ({ image, title, description}) => {
  return (
    <div className='flex flex-col shadow-custom p-[40px] mt-[60px] items-center text-center rounded-[10px]'>
        <img src={image} className='w-[126px] h-[126px] object-cover items-center mb-[22px]' />
        <h1 className='text-[22px] font-sans font-bold mb-[10px]'>{title}</h1>
        <p className='text-[16px] font-sans font-light leading-[150%] text-blackSecondary'>{description}</p>
    </div>
  )
}

export default KarirCard
