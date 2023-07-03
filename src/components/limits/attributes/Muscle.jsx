import React from 'react'
import MuscleIcon from '../../../assets/images/icon-muscle.svg'

function Muscle() {
  return (
    <>
      <div id="muscleContainer" className='flex flex-wrap'>
        <div id="muscleIcon" className='mr-4'>
          <img src={MuscleIcon} alt="Muscle" />
        </div>
        <div id="muscleHeading" className='font-["Inter"] text-[20px] font-semibold tracking-[-1px] text-gunMetal'>
          <h3>Muscle</h3>
        </div>
        <div id="muscleCopy" className='mt-4 font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
          <p>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
        </div>
      </div>
    </>
  )
}

export default Muscle