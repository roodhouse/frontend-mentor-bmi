import React, { useState, useEffect } from 'react';
import MetricHeight from './metric/Height'
import MetricWeight from './metric/Weight';
import ImperialHeight from './imperial/Height'
import ImperialWeight from './imperial/Weight'
import { useForm } from 'react-hook-form'

function BottomForm() {

  const [unit, setUnit] = useState('metric')
  const [cm, setCm] = useState(0)
  const [kg, setKg] = useState(0)

  function recordCm(cm) {
      const centimeters = parseInt(cm)
      setCm(centimeters)
  }

  function recordKg(kg) {
    const kilograms = parseInt(kg)
    setKg(kilograms)
}

// convert the cm into m
let meters = cm * .01
// get meters squared
meters = meters*meters
console.log(`after the calc ${meters}`)

let BMI = kg/meters
console.log(kg)
console.log(meters)
console.log(BMI)

  const { register, resetField, handleSubmit, formState: {errors} } = useForm({defaultValues: {
    userMetricHeight: '',
    userMetricWeight: '',
    userImperialHeightFoot: '',
    userImperialHeightInch: '',
    userImperialWeightPound: '',
    userImperialWeightOunce: ''

}})

// toggle metric and imperial
function handleClick(e) {
  const measurementMetricWrapper = document.getElementById('measurementMetricWrapper')
  const measurementImperialWrapper = document.getElementById('measurementImperialWrapper');

  if (e.target.value === 'metric') {
        measurementMetricWrapper.style.display = 'block'
        measurementImperialWrapper.style.display = 'none'
  } else if (e.target.value === 'imperial') {
        measurementMetricWrapper.style.display = 'none'
        measurementImperialWrapper.style.display = 'block'
  } 
}

  return (
    <>
      <div id="bottomFormContainer">
        <form>
          <div id="unitWrapper" className='mb-6 flex'>
            <div id="metricContainer" className='font-["Inter"] text-base font-semibold leading-[150%] text-gunMetal mr-6 flex items-center'>
              <input defaultChecked name='selection' type="radio" id='metric' value='metric' className='mr-[18px] w-[31px] h-[31px] appearance-none rounded-[50%] border border-solid border-borders checked:bg-blue checked:border-[8px] checked:border-solid checked:border-[#d8e2e7] hover:border-blue checked:hover:bg-blue checked:hover:border-[#d8e2e7]'
                onClick={handleClick}
              />
              <label htmlFor="metric" className='mr-6'>Metric</label>
            </div>
            <div id="imperialContainer" className='font-["Inter"] text-base font-semibold leading-[150%] text-gunMetal flex items-center'>
              <input name='selection' type="radio" id='imperial' value='imperial' className='mr-[18px] w-[31px] h-[31px] appearance-none rounded-[50%] border border-solid border-borders checked:bg-blue checked:border-[8px] checked:border-solid checked:border-[#d8e2e7] hover:border-blue checked:hover:bg-blue checked:hover:border-[#d8e2e7]'
                onClick={handleClick}
              />
              <label htmlFor="metric">Imperial</label>
            </div>
          </div>
          <div id="measurementWrapper">

            <div id="measurementMetricWrapper">
              <div id="mearsurementMetricContainer">
                <MetricHeight register={register} recordCm={recordCm} />
                <MetricWeight register={register} recordKg={recordKg}/>
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