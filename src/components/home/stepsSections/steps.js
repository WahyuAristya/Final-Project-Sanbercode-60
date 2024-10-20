import React from 'react'
import Step from './step'


const Steps = ({steps}) => {
  return (
    <div>
      {steps.map((step, index) => (
        <Step 
          key={index} 
          number={step.number}
          title={step.title} 
          description={step.description} 
        />
      ))}
    </div>
  )
}

export default Steps
