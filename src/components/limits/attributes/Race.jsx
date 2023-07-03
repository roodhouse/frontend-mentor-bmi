import React from 'react'
import RaceIcon from '../../../assets/images/icon-race.svg'

function Race() {
  return (
    <>
      <div id="raceContainer" className='flex flex-wrap'>
        <div id="raceIcon" className='mr-4'>
          <img src={RaceIcon} alt="Race" />
        </div>
        <div id="raceHeading" className='font-["Inter"] text-[20px] font-semibold tracking-[-1px] text-gunMetal'>
          <h3>Race</h3>
        </div>
        <div id="raceCopy" className='mt-4 font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
          <p>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
        </div>
      </div>
    </>
  )
}

export default Race