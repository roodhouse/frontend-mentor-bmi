import React from 'react'

function Weight({register, recordLb, recordOz}) {
  return (
    <>
              <div id='weightImperial' className='mb-4 xl:mb-0'>
                  <div id="weightImperialInputWrapper">
                    <div id="weightImperialInputLabel" className='mb-2 font-["Inter"] font-normal text-sm leading-[150%] text-darkElectricBlue'>
                      <label htmlFor="userImperialWeight">Weight</label>
                    </div>
                  <div id="weightInputsContainer" className='flex justify-start'>
                      <div id="weightImperialInputPoundWrapper" className='flex rounded-xl border border-solid border-borders w-[131px] mr-4 pr-6 pl-[20px] py-[20px] justify-between md:w-[299px]'>
                        <div id="weightImperialInputPoundContainer" className='w-[75%]'>
                          <input type="number" id='userImperialWeightPound' name='userImperialWeightPound' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'
                            {...register('userImperialWeightPound', {
                              onChange: (e) => {
                                recordLb(e.target.value)
                              }
                            })}
                          />
                        </div>
                        <div id="weightImperialUnitPound" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                          <p>lbs</p>
                        </div>
                      </div>

                      <div id="weightImperialInputOunceWrapper" className='flex rounded-xl border border-solid border-borders w-[131px] pr-6 pl-[20px] py-[20px] justify-between md:w-[299px]'>
                        <div id="weightImperialInputOunceConatiner" className='w-[75%]'>
                          <input type="number" id='userImperialWeightOunce' name='userImperialWeightOunce' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'
                            {...register('userImperialWeightOunce', {
                              onChange: (e) => {
                                recordOz(e.target.value)
                              }
                            })}
                          />
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