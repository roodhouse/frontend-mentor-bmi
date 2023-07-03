import React from 'react'
import HealthyIcon from '../assets/images/icon-eating.svg'
import ExerciseIcon from '../assets/images/icon-exercise.svg'
import SleepIcon from '../assets/images/icon-sleep.svg'

function Tips() {
  return (
    <>
      <div id="tipsContainer" className='pl-[20px] pr-[29px] py-[56px]'>

        <div id="healthyWrapper" className='mb-10'>
          <div id="healthyIcon" className='mb-8'>
            <img src={HealthyIcon} alt="Eating" />
          </div>
          <div id="healthyHeading" className='mb-6 font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal'>
            <h3>Healthy eating</h3>
          </div>
          <div id="healthyCopy" className='font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
            <p>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
          </div>
        </div>

        <div id="exerciseWrapper" className='mb-10'>
          <div id="exerciseIcon" className='mb-8'>
            <img src={ExerciseIcon} alt="Exercise" />
          </div>
          <div id="exerciseHeading" className='mb-6 font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal'>
            <h3>Regular exercise</h3>
          </div>
          <div id="exerciseCopy" className='font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
            <p>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
          </div>
        </div>

        <div id="sleepWrapper" className=''>
          <div id="sleepIcon" className='mb-8'>
            <img src={SleepIcon} alt="Sleep" />
          </div>
          <div id="sleepHeading" className='mb-6 font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal'>
            <h3>Adequate sleep</h3>
          </div>
          <div id="sleepCopy" className='font-["Inter"] text-base font-normal leading-[150%] text-darkElectricBlue'>
            <p>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tips