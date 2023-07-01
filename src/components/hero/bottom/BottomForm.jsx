import React from 'react'

function BottomForm() {
  return (
    <>
      <div id="bottomFormContainer">
        <form>
          <div id="unitWrapper">
            <div id="metricContainer">
              <input type="radio" id='metric' value='metric'/>
              <label htmlFor="metric">Metric</label>
            </div>
            <div id="imperialContainer">
              <input type="radio" id='imperial' value='imperial'/>
              <label htmlFor="metric">Imperial</label>
            </div>
          </div>
          <div id="measurementWrapper">
            <div id="measurementMetricWrapper">
              <div id="mearsurementMetricContainer">
                <div id='heightMetric'>
                  <div id="heightMetricInputWrapper">
                    <div id="heightMetricInputLabel">
                      <label htmlFor="userMetricHeight">Height</label>
                    </div>
                    <div id="heightMetricInput">
                      <input type="text" id='userMetricHeight' name='userMetricHeight' placeholder='0'/>
                    </div>
                  </div>
                  <div id="heightMetricUnit">
                    <p>cm</p>
                  </div>
                </div>
                <div id='weightMetric'>
                  <div id="weightMetricInputWrapper">
                    <div id="weightMetricInputLabel">
                      <label htmlFor="userMetricWeight">Weight</label>
                    </div>
                    <div id="weightMetricInput">
                      <input type="text" id='userMetricWeight' name='userMetricWeight' placeholder='0'/>
                    </div>
                  </div>
                  <div id="weightMetricUnit">
                    <p>kg</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="measurementImperialWrapper">
            <div id="mearsurementImperialContainer">
                <div id='heightImperial'>
                  <div id="heightImperialInputWrapper">
                    <div id="heightImperialInputLabel">
                      <label htmlFor="userImperialHeight">Height</label>
                    </div>
                    <div id="heightImperialInput">
                      <div id="heightMeasurementFoot">
                        <input type="text" id='userImperialHeightFoot' name='userMetricHeightFoot' placeholder='0'/>
                      </div>
                      <div id="heightFootUnit">
                        <p>ft</p>
                      </div>
                      <div id="heightMeasurementInch">
                        <input type="text" id='userImperialHeightInch' name='userMetricHeightInch' placeholder='0'/>
                      </div>
                      <div id="heightInchUnit">
                        <p>in</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id='weightImperial'>
                  <div id="weightImperialInputWrapper">
                    <div id="weightImperialInputLabel">
                      <label htmlFor="userImperialWeight">Weight</label>
                    </div>
                    <div id="weightImperialInput">
                      <div id="weightMeasurementPounds">
                        <input type="text" id='userImperialWeightPounds' name='userImperialWeightPounds' placeholder='0'/>
                      </div>
                      <div id="weghitMeasurementOunce">
                        <div id="weightImperialUnit">
                          <p>oz</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default BottomForm