import React from 'react'
import BottomHeading from './bottom/BottomHeading'
import BottomForm from './bottom/BottomForm'
import BottomResults from './bottom/BottomResults'

function Bottom() {
  return (
    <>
      <div id="bottomContainer" className='bg-white rounded-2xl p-6'>
        <div id="bottomHeadingWrapper" className='mb-6'>
          <BottomHeading />
        </div>
        <div id="bottomFormWrapper" className='mb-6'>
          <BottomForm />
        </div>
        <div id="bottomResultsWrapper" className=''>
          <BottomResults />
        </div>
      </div>
    </>
  )
}

export default Bottom