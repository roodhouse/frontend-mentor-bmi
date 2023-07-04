import React from 'react'

function BottomResults({userBMI}) {

  // if userBMI is NaN on load then make it a number by returning 0
  function isNumber() {
    if (isNaN(userBMI)) {
      return 0
    } else {
      return userBMI
    }
  }
  return (
    <>
      <div id="bottomResultsContainer" className='p-8 bg-blue rounded-2xl flex flex-col'>
        <div id='resultsHeading' className='font-["Inter"] font-semibold leading-[150%] text-white'>
          <p>Your BMI is...</p>
        </div>
        <div id='resultsNumber' className='font-["Inter"] mb-6 text-5xl font-semibold leading-[110%] tracking-[-2.4px] text-white'>
          <p>{isNumber()}</p>
        </div>
        <div id='resultsInfo' className='font-["Inter"] text-sm font-normal leading-[150%] text-white'>
          <p>Your BMI suggests you’re a healthy weight. Your ideal weight is between <span className='font-semibold'>9lb 6oz - 12lb 10oz.</span></p>
        </div>
        
      </div>
    </>
  )
}

export default BottomResults