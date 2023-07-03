import React from 'react'
import Gender from './attributes/Gender'
import Age from './attributes/Age'
import Muscle from './attributes/Muscle'
import Pregnancy from './attributes/Pregnancy'
import Race from './attributes/Race'

function LimitsIcons() {
  return (
    <>
        <div id="limitsIconsContanier">
            <div id="genderWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4'>
                <Gender />
            </div>
            <div id="ageWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4'>
                <Age />
            </div>
            <div id="muscleWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4'>
                <Muscle />
            </div>
            <div id="pregnancyWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white mb-4'>
                <Pregnancy />
            </div>
            <div id="raceWrapper" className='p-6 rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] bg-white'>
                <Race />
            </div>
        </div>
    </>
  )
}

export default LimitsIcons