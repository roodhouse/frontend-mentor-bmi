import React from 'react'
import HealthyIcon from '../assets/images/icon-eating.svg'
import ExerciseIcon from '../assets/images/icon-exercise.svg'
import SleepIcon from '../assets/images/icon-sleep.svg'

function Tips() {
  return (
    <>
      <div id="tipsContainer" className='pl-[20px] pr-[29px] py-[56px] md:py-[60px] md:pl-[39px] md:pr-[43px] xl:pl-[116px] xl:flex xl:justify-center xl:pb-[96px]'>

        <div id="healthyWrapper" className='mb-10 md:flex md:items-center xl:flex-col xl:items-start xl:w-[365px] xl:mb-0 xl:mr-8'>
          <div id="healthyIcon" className='mb-8 md:w-[64px] md:h-[64px] md:mr-10 md:mb-0 xl:mb-[45px]'>
            <img src={HealthyIcon} alt="Eating" />
          </div>
          <div id="healthyCopyContainer" className='md:w-[582px] xl:w-[365px]'>
            <div id="healthyHeading" className='mb-6 font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal'>
              <h3>Healthy eating</h3>
            </div>
            <div id="healthyCopy" className='font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
              <p>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
            </div>
          </div>
        </div>

        <div id="exerciseWrapper" className='mb-10 md:flex md:items-center xl:flex-col xl:items-start xl:w-[365px] xl:mb-0 xl:mr-8'>
          <div id="exerciseIcon" className='mb-8 md:w-[64px] md:h-[64px] md:mr-10 md:mb-0 xl:mb-[45px]'>
            <img src={ExerciseIcon} alt="Exercise" />
          </div>
          <div id="exerciseCopyContainer" className='md:w-[582px] xl:w-[365px]'>
            <div id="exerciseHeading" className='mb-6 font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal'>
              <h3>Regular exercise</h3>
            </div>
            <div id="exerciseCopy" className='font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
              <p>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
            </div>
          </div>
        </div>

        <div id="sleepWrapper" className='md:flex md:items-center xl:flex-col xl:items-start xl:w-[365px] xl:mb-0'>
          <div id="sleepIcon" className='mb-8 md:w-[64px] md:h-[64px] md:mr-10 md:mb-0 xl:mb-[45px]'>
            <img src={SleepIcon} alt="Sleep" />
          </div>
          <div id="sleepCopyContainer" className='md:w-[582px] xl:w-[365px]'>
            <div id="sleepHeading" className='mb-6 font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal'>
              <h3>Adequate sleep</h3>
            </div>
            <div id="sleepCopy" className='font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
              <p>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tips