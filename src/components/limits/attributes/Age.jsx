import React from 'react'
import AgeIcon from '../../../assets/images/icon-age.svg'

function Age() {
  return (
    <>
      <div id="ageContainer" className='flex flex-wrap'>
        <div id="ageIcon" className='mr-4'>
          <img src={AgeIcon} alt="Age" />
        </div>
        <div id="ageHeading" className='font-["Inter"] text-[20px] font-semibold tracking-[-1px] text-gunMetal'>
          <h3>Age</h3>
        </div>
        <div id="ageCopy" className='mt-4 font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
          <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
        </div>
      </div>
    </>
  )
}

export default Age