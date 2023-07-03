import React from 'react'
import GenderIcon from '../../../assets/images/icon-gender.svg'

function Gender() {
  return (
    <>
      <div id="genderContainer" className='flex flex-wrap'>
        <div id="genderIcon" className='mr-4'>
          <img src={GenderIcon} alt="Gender" />
        </div>
        <div id="genderHeading" className='font-["Inter"] text-[20px] font-semibold tracking-[-1px] text-gunMetal'>
          <h3>Gender</h3>
        </div>
        <div id="genderCopy" className='mt-4 font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
          <p>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
        </div>
      </div>
    </>
  )
}

export default Gender