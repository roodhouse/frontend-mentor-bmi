import React from 'react'

function Weight() {
  return (
    <>
      <div id='weightImperial'>
                  <div id="weightImperialInputWrapper">
                    <div id="weightImperialInputLabel" className='mb-2 font-["Inter"] font-normal text-sm leading-[150%] text-darkElectricBlue'>
                      <label htmlFor="userImperialWeight">Weight</label>
                    </div>

                    <div id="weightImperialInputFoot" className='flex rounded-xl border border-solid border-borders w-full px-6 py-[20px] justify-between'>
                      <div id="weightImperialInputFoot" className='w-[75%]'>
                        <input type="text" id='userImperialWeightPound' name='userImperialWeight' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'/>
                      </div>
                      <div id="weightImperialUnitFoot" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                        <p>lbs</p>
                      </div>
                    </div>
{/* something off here */}
                    <div id="weightImperialInputOunces" className='flex rounded-xl border border-solid border-borders w-full px-6 py-[20px] justify-between'>
                      <div id="weightImperialInputOunces" className='w-[75%]'>
                        <input type="text" id='userImperialWeightOunces' name='userImperialWeighttOunces' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'/>
                      </div>
                      <div id="weightImperialUnitOunces" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                        <p>oz</p>
                      </div>
                    </div>

                  </div>
                </div>
    </>
  )
}

export default Weight