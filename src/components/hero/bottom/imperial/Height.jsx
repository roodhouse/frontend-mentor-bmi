import React from 'react'

function Height() {
  return (
    <>
        <div id='heightImperial' className='mb-4'>
                  <div id="heightImperialInputWrapper">
                    <div id="heightImperialInputLabel" className='mb-2 font-["Inter"] font-normal text-sm leading-[150%] text-darkElectricBlue'>
                      <label htmlFor="userImperialHeight">Height</label>
                    </div>
                  <div id="heightInputsContainer" className='flex justify-start'>
                      <div id="heightImperialInputFootWrapper" className='flex rounded-xl border border-solid border-borders w-[131px] mr-4 px-6 py-[20px] justify-between'>
                        <div id="heightImperialInputFootContainer" className='w-[75%]'>
                          <input type="text" id='userImperialHeightFoot' name='userImperialHeight' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'/>
                        </div>
                        <div id="heightImperialUnitFoot" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                          <p>ft</p>
                        </div>
                      </div>

                      <div id="heightImperialInputInchWrapper" className='flex rounded-xl border border-solid border-borders w-[131px] px-6 py-[20px] justify-between'>
                        <div id="heightImperialInputInchConatiner" className='w-[75%]'>
                          <input type="text" id='userImperialHeightInch' name='userImperialHeightInch' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'/>
                        </div>
                        <div id="heightImperialUnitInch" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                          <p>in</p>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>
    </>
  )
}

export default Height