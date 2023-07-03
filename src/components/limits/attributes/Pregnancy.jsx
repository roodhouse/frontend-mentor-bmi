import React from 'react'
import PregnancyIcon from '../../../assets/images/icon-pregnancy.svg'

function Pregnancy() {
  return (
    <>
      <div id="pregnancyContainer" className='flex flex-wrap'>
        <div id="pregnancyIcon" className='mr-4'>
          <img src={PregnancyIcon} alt="Pregnancy" />
        </div>
        <div id="pregnancyHeading" className='font-["Inter"] text-[20px] font-semibold tracking-[-1px] text-gunMetal'>
          <h3>Pregnancy</h3>
        </div>
        <div id="pregnancyCopy" className='mt-4 font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
          <p>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
        </div>
      </div>
    </>
  )
}

export default Pregnancy