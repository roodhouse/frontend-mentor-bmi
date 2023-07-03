import React from 'react';
import MetricHeight from './metric/Height'
import MetricWeight from './metric/Weight';
import ImperialHeight from './imperial/Height'
import ImperialWeight from './imperial/Weight'

function BottomForm() {
  return (
    <>
      <div id="bottomFormContainer">
        <form>
          <div id="unitWrapper" className='mb-6 flex'>
            <div id="metricContainer" className='font-["Inter"] text-base font-semibold leading-[150%] text-gunMetal mr-6 flex items-center'>
              <input name='selection' type="radio" id='metric' value='metric' className='mr-[18px] w-[31px] h-[31px] appearance-none rounded-[50%] border border-solid border-borders checked:bg-blue checked:border-[8px] checked:border-solid checked:border-[#d8e2e7] hover:border-blue checked:hover:bg-blue checked:hover:border-[#d8e2e7]'/>
              <label htmlFor="metric" className='mr-6'>Metric</label>
            </div>
            <div id="imperialContainer" className='font-["Inter"] text-base font-semibold leading-[150%] text-gunMetal flex items-center'>
              <input name='selection' type="radio" id='imperial' value='imperial' className='mr-[18px] w-[31px] h-[31px] appearance-none rounded-[50%] border border-solid border-borders checked:bg-blue checked:border-[8px] checked:border-solid checked:border-[#d8e2e7] hover:border-blue checked:hover:bg-blue checked:hover:border-[#d8e2e7]'/>
              <label htmlFor="metric">Imperial</label>
            </div>
          </div>
          <div id="measurementWrapper">

            <div id="measurementMetricWrapper">
              <div id="mearsurementMetricContainer">
                <MetricHeight />
                <MetricWeight />
              </div>
            </div>

            <div id="measurementImperialWrapper" className='hidden'>
            <div id="mearsurementImperialContainer">
              
                <ImperialHeight />
                <ImperialWeight />
              </div>

            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default BottomForm