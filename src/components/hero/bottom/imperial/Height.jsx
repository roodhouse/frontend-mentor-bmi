import React from 'react'

function Height() {
  return (
    <>
        <div id='heightImperial'>
                  <div id="heightImperialInputWrapper">
                    <div id="heightImperialInputLabel" className='mb-2 font-["Inter"] font-normal text-sm leading-[150%] text-darkElectricBlue'>
                      <label htmlFor="userImperialHeight">Height</label>
                    </div>

                    <div id="heightImperialInputFoot" className='flex rounded-xl border border-solid border-borders w-full px-6 py-[20px] justify-between'>
                      <div id="heightImperialInputFoot" className='w-[75%]'>
                        <input type="text" id='userImperialHeightFoot' name='userImperialHeight' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'/>
                      </div>
                      <div id="heightImperialUnitFoot" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                        <p>ft</p>
                      </div>
                    </div>

                    <div id="heightImperialInputInch" className='flex rounded-xl border border-solid border-borders w-full px-6 py-[20px] justify-between'>
                      <div id="heightImperialInputInch" className='w-[75%]'>
                        <input type="text" id='userImperialHeightInch' name='userImperialHeightInch' placeholder='0' className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-gunMetal w-full'/>
                      </div>
                      <div id="heightImperialUnitInch" className='font-["Inter"] text-2xl font-semibold tracking-[-1.2px] text-blue'>
                        <p>in</p>
                      </div>
                    </div>

                  </div>
                </div>
    </>
  )
}

export default Height