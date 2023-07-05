import React from 'react'

function BottomResults({ userBMI, unit}) {

  // if userBMI is NaN on load then make it a number by returning 0
  function isNumber() {
    if (isNaN(userBMI)) {
      return 0
    } else {
      return userBMI
    }
  }

  function bmiOutput() {
    if (isNaN(userBMI)) {
      return 'Please fill in data to see your results'
    } else if (userBMI <= 18.5) {
      return `A BMI of less than 18.5 indicates that you are underweight. Your ideal weight is between `

    } else if (userBMI > 18.5 && userBMI <= 24.9) {
      return `A BMI between 18.5 & 24.9 indicates that your weight is normal. Your ideal weight is between `
    } else if (userBMI > 24.9 && userBMI <= 29.9) {
      return `A BMI between 25 & 29.9 indicates that you are overwweight. Your ideal weight is between `
    }  else if (userBMI >= 30) {
      return `A BMI over 30 indicates that you are obese. Your ideal weight is between `
    }  
    else  {
      return 'Please fill in data to see your results'
    }
  }

  function idealWeight() {
    if (unit === 'imperial') {
        if (isNaN(userBMI)) {
          return;
        } else if (userBMI <= 18.5) {
          return '100lb 2oz - 150lb 6oz.'
        } else if (userBMI > 18.5 && userBMI <= 24.9) {
          return '125lbs - 175lbs'
        } else if (userBMI > 24.9 && userBMI <= 29.9) {
          return '150lbs - 200lbs'
        } else if (userBMI >= 30) {
          return '175lbs - 225lbs'
        }
    } else if (unit === 'metric') {
      if (isNaN(userBMI)) {
        return;
      } else if (userBMI <= 18.5) {
        return '63.5kgs - 85.2kgs'
      } else if (userBMI > 18.5 && userBMI <= 24.9) {
        return '85kgs - 100kgs'
      } else if (userBMI > 24.9 && userBMI <= 29.9) {
        return '100kgs - 125kgs'
      } else if (userBMI >= 30) {
        return '125kgs - 150kgs'
      }
    }
  }
  
  return (
    <>
      <div id="bottomResultsContainer" className='p-8 bg-blue rounded-2xl flex flex-col md:rounded-[16px_999px_999px_16px] md:h-[185px] md:flex-wrap md:justify-center'>
        <div id='resultsHeading' className='font-["Inter"] font-semibold leading-[150%] text-white md:w-[50%] md:pb-2'>
          <p>Your BMI is...</p>
        </div>
        <div id='resultsNumber' className='font-["Inter"] mb-6 text-5xl font-semibold leading-[110%] tracking-[-2.4px] text-white md:w-[50%] md:mb-0 md:pb-4'>
          <p>{isNumber()}</p>
        </div>
        <div id='resultsInfo' className='font-["Inter"] text-sm font-normal leading-[150%] text-white md:w-[50%]'>
          <p>{bmiOutput()}<span className='font-semibold'>{idealWeight()}</span></p>
        </div>
        
      </div>
    </>
  )
}

export default BottomResults