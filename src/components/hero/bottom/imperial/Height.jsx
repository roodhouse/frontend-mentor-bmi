import React from 'react'

function Height({register, recordFt, recordIn}) {
  return (
    <>
        <div id='heightImperial' className='mb-4'>
                  <div id="heightImperialInputWrapper">
                    <div id="heightImperialInputLabel" className='mb-2 font-["Inter"] font-normal text-sm leading-[150%] text-darkElectricBlue'>
                      <label htmlFor="userImperialHeight">Height</label>
                    </div>
                  <div id="heightInputsContainer" className='flex justify-start'>
                      <div id="heightImperialInputFootWrapper" className='flex rounded-xl border border-solid border-borders hover:border-blue cursor-pointer w-[131px] mr-4 pr-6 pl-[20px] py-[20px] justify-between md:w-[299px]'>
                        <div id="heightImperialInputFootContainer" className='w-[75%]'>
                          <input type="number" id='userImperialHeightFoot' name='userImperialHeightFoot' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'
                            {...register('userImperialHeightFoot', {
                              onChange: (e) => {
                                recordFt(e.target.value)
                              }
                            })}
                          />
                        </div>
                        <div id="heightImperialUnitFoot" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                          <p>ft</p>
                        </div>
                      </div>

                      <div id="heightImperialInputInchWrapper" className='flex rounded-xl border border-solid border-borders hover:border-blue cursor-pointer w-[131px] pr-6 pl-[20px] py-[20px] justify-between md:w-[299px]'>
                        <div id="heightImperialInputInchConatiner" className='w-[75%]'>
                          <input type="number" id='userImperialHeightInch' name='userImperialHeightInch' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'
                            {...register('userImperialHeightInch', {
                              onChange: (e) => {
                                recordIn(e.target.value)
                              }
                            })}
                          />
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