import React from 'react'
import LimitsCopy from './limits/LimitsCopy'
import LimitsIcons from './limits/LimitsIcons'

function Limits() {
  return (
    <>
      <div id="limitsContainer">
        <div id="limitsCopyWrapper" className='mb-14'>
          <LimitsCopy />
        </div>
        <div id="limitsIconWrapper">
          <LimitsIcons />
        </div>
      </div>
    </>
  )
}

export default Limits