import React from 'react'

function Weight({register, recordKg}) {
  return (
    <>
        <div id='weigthMetric' className='mb-4'>
                  <div id="weightMetricInputWrapper" className='flex flex-wrap'>
                    <div id="weightMetricInputLabel" className='mb-2 font-["Inter"] font-normal text-sm leading-[150%] text-darkElectricBlue w-full'>
                      <label htmlFor="userMetricWeight">Weight</label>
                    </div>
                    <div id="weightMetricInput" className='flex rounded-xl border border-solid border-borders w-full pr-6 pl-[20px] py-[20px] justify-between'>
                      <div id="weightInput" className='w-[75%]'>
                        <input type="number" id='userMetricWeight' name='userMetricWeight' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'
                          {...register('userMetricWeight', {
                            onChange: (e) => {
                              recordKg(e.target.value)
                            }
                          })}
                        />
                      </div>
                      <div id="weightMetricUnit" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                        <p>kg</p>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Weight