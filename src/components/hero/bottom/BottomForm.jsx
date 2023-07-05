import React, { useState, useEffect } from 'react';
import MetricHeight from './metric/Height'
import MetricWeight from './metric/Weight';
import ImperialHeight from './imperial/Height'
import ImperialWeight from './imperial/Weight'
import { useForm } from 'react-hook-form'

function BottomForm({ theUserBmi, theUnit }) {

  const [unit, setUnit] = useState('metric')
  const [cm, setCm] = useState(0)
  const [kg, setKg] = useState(0)
  const [ft, setFt] = useState(0)
  const [inch, setInch] = useState(0)
  const [pound, setPound] = useState(0)
  const [ounce, setOunce] = useState(0)

  function recordCm(cm) {
      const centimeters = parseInt(cm)
      setCm(centimeters)
  }

  function recordKg(kg) {
    const kilograms = parseInt(kg)
    setKg(kilograms)
}

function recordFt(ft) {
  const feet = parseInt(ft)
  setFt(feet)
}

function recordIn(allInches) {
  const inches = parseInt(allInches)
  setInch(inches)
}

function recordLb(lb) {
  const lbs = parseInt(lb)
  setPound(lbs)
}

function recordOz(allOunces) {
  const ounces = parseInt(allOunces)
  setOunce(ounces)
}

  const { register, resetField, handleSubmit, formState: {errors} } = useForm({defaultValues: {
    userMetricHeight: '',
    userMetricWeight: '',
    userImperialHeightFoot: '',
    userImperialHeightInch: '',
    userImperialWeightPound: '',
    userImperialWeightOunce: ''

}})

useEffect(() => {

  if (unit === 'metric') {
    theUnit('metric')
    // convert the cm into m
    let meters = cm * .01
    // get meters squared
    meters = meters*meters
    let bmi = 0;
    bmi = kg/meters
    bmi = bmi.toFixed(1)
    theUserBmi(bmi)
  } else if (unit === 'imperial') { 
    theUnit('imperial')
    // convert feet to inches
    let feet = ft*12
    // find all the inches
    let totalInches = feet + inch
    // inches to meters
    let inchesToMeters = totalInches*0.0254
    inchesToMeters = inchesToMeters*inchesToMeters
    // lb to kg
    let lbToKg = pound * 0.45392
    // oz to kg
    let ozToKg = ounce * 0.0283495
    let imperialKg = lbToKg + ozToKg
    let bmi = 0;
    bmi = imperialKg/inchesToMeters
    bmi = bmi.toFixed(1)
    theUserBmi(bmi)
  }
},[cm, ft, kg, inch, pound, ounce])


// toggle metric and imperial
function handleClick(e) {
  setUnit(e.target.id)
  const measurementMetricWrapper = document.getElementById('measurementMetricWrapper')
  const measurementImperialWrapper = document.getElementById('measurementImperialWrapper');
  resetField("userMetricHeight")
  resetField("userMetricWeight")
  resetField("userImperialHeightFoot")
  resetField("userImperialHeightInch")
  resetField("userImperialWeightPound")
  resetField("userImperialWeightOunce")
  setCm(0)
  setKg(0)
  setFt(0)
  setInch(0)
  setPound(0)
  setOunce(0)
  
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
          <div id="unitWrapper" className='mb-6 flex md:mb-8 xl:mb-8'>
            <div id="metricContainer" className='font-["Inter"] text-base font-semibold leading-[150%] text-gunMetal mr-6 flex items-center md:w-[299px]'>
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
              <div id="mearsurementMetricContainer" className='flex'>
                <MetricHeight register={register} recordCm={recordCm} />
                <MetricWeight register={register} recordKg={recordKg}/>
              </div>
            </div>

            <div id="measurementImperialWrapper" className='hidden'>
            <div id="mearsurementImperialContainer" className='md:flex md:flex-col'>
              
                <ImperialHeight register={register} recordFt={recordFt} recordIn={recordIn} />
                <ImperialWeight register={register} recordLb={recordLb} recordOz={recordOz}/>
              </div>

            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default BottomForm