import React from 'react'
import Gender from './attributes/Gender'
import Age from './attributes/Age'
import Muscle from './attributes/Muscle'
import Pregnancy from './attributes/Pregnancy'
import Race from './attributes/Race'
import LimitsCopy from './LimitsCopy'
import PatternedBottom from '../../assets/images/pattern-curved-line-right.svg'

function LimitsIcons() {
  return (
    <>
        <div id="limitsIconsContanier" className='md:flex md:flex-wrap md:justify-between xl:items-start xl:justify-normal'>
            <div id="limitsCopyWrapper" className='hidden xl:block xl:mb-0 xl:mr-0 xl:h-[200px]'>
                <LimitsCopy />
            </div>
            <div id="genderWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4 md:w-[336px] md:p-8  xl:w-[365px] xl:mr-0 xl:ml-[132px] xl:mb-8'>
                <Gender />
            </div>
            <div id="ageWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4 md:w-[336px] md:p-8 xl:w-[365px] xl:mr-8 xl:mb-6 xl:ml-[397px]'>
                <Age />
            </div>
            <div id="muscleWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4 md:w-[336px] md:p-8 xl:w-[365px] xl:mb-6 xl:mr-0'>
                <Muscle />
            </div>
            <div id="pregnancyWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4 md:w-[336px] md:p-8 xl:w-[365px] xl:mr-8 xl:ml-[200px]'>
                <Pregnancy />
            </div>
            <div id='finalWrapper' className='md:flex md:justify-center md:w-full xl:w-[365px] xl:mr-0'>
                <div id="raceWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white md:w-[336px] md:p-8 xl:w-[365px]'>
                    <Race />
                </div>
            </div>
        </div>
        <div id="imageBottom" className='hidden xl:block xl:relative'>
            <img src={PatternedBottom} alt="Patterned Line Bottom" className='absolute left-[165px] bottom-[340px]'/>
        </div>
    </>
  )
}

export default LimitsIcons