import React from 'react'

function Height({register, recordCm}) {
  return (
    <>
        <div id='heightMetric' className='mb-4 md:w-[50%] md:pr-6 md:mb-0'>
                  <div id="heightMetricInputWrapper" className='flex flex-wrap'>
                    <div id="heightMetricInputLabel" className='mb-2 font-["Inter"] font-normal text-sm leading-[150%] text-darkElectricBlue w-full'>
                      <label htmlFor="userMetricHeight">Height</label>
                    </div>
                    <div id="heightMetricInput" className='flex rounded-xl border border-solid border-borders hover:border-blue w-full pr-6 pl-[20px] py-[20px] justify-between cursor-pointer'>
                      <div id="heightInput" className='w-[75%]'>
                        <input type="number" id='userMetricHeight' name='userMetricHeight' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'
                          {...register('userMetricHeight',{
                            onChange: (e) => {
                              recordCm(e.target.value)
                            }
                          })}
                        />
                      </div>
                      <div id="heightMetricUnit" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                        <p>cm</p>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Height