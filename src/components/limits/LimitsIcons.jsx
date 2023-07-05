import React from 'react'
import Gender from './attributes/Gender'
import Age from './attributes/Age'
import Muscle from './attributes/Muscle'
import Pregnancy from './attributes/Pregnancy'
import Race from './attributes/Race'

function LimitsIcons() {
  return (
    <>
        <div id="limitsIconsContanier" className='md:flex md:flex-wrap md:justify-between'>
            <div id="genderWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4 md:w-[336px] md:p-8'>
                <Gender />
            </div>
            <div id="ageWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4 md:w-[336px] md:p-8'>
                <Age />
            </div>
            <div id="muscleWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4 md:w-[336px] md:p-8'>
                <Muscle />
            </div>
            <div id="pregnancyWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4 md:w-[336px] md:p-8'>
                <Pregnancy />
            </div>
            <div id='finalWrapper' className='md:flex md:justify-center md:w-full'>
                <div id="raceWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white md:w-[336px] md:p-8'>
                    <Race />
                </div>
            </div>
        </div>
    </>
  )
}

export default LimitsIcons