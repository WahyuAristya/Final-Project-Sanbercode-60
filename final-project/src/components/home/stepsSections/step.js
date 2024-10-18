import React from 'react'
import CircleNumber from './circleNumber'

const Step = ({ number, title, description }) => {
  return (
    <div className="flex items-center space-x-[30px] mb-[24px] shadow-custom px-[20px] py-[15px] rounded-[10px]">
      <div>
          <CircleNumber number={number}/>
      </div>
      <div>
        <h3 className="font-sans font-bold text-[22px] text-start mb-[10px]">{title}</h3>
        <p className="text-blackSecondary font-sans font-light leading-[150%] text-[16px] text-start">{description}</p>
      </div>
    </div>
  )
}

export default Step
