import React from 'react'

function Weight() {
  return (
    <>
              <div id='weightImperial' className='mb-4'>
                  <div id="weightImperialInputWrapper">
                    <div id="weightImperialInputLabel" className='mb-2 font-["Inter"] font-normal text-sm leading-[150%] text-darkElectricBlue'>
                      <label htmlFor="userImperialWeight">Weight</label>
                    </div>
                  <div id="weightInputsContainer" className='flex justify-start'>
                      <div id="weightImperialInputPoundWrapper" className='flex rounded-xl border border-solid border-borders w-[131px] mr-4 px-6 py-[20px] justify-between'>
                        <div id="weightImperialInputPoundContainer" className='w-[75%]'>
                          <input type="text" id='userImperialWeightPound' name='userImperialWeightPound' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'/>
                        </div>
                        <div id="weightImperialUnitPound" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                          <p>lbs</p>
                        </div>
                      </div>

                      <div id="weightImperialInputOunceWrapper" className='flex rounded-xl border border-solid border-borders w-[131px] px-6 py-[20px] justify-between'>
                        <div id="weightImperialInputOunceConatiner" className='w-[75%]'>
                          <input type="text" id='userImperialWeightOunce' name='userImperialWeightOunce' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'/>
                        </div>
                        <div id="weightImperialUnitOunce" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                          <p>oz</p>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>
    </>
  )
}

export default Weight