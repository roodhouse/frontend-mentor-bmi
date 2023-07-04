import React, { useState } from 'react'
import BottomHeading from './bottom/BottomHeading'
import BottomForm from './bottom/BottomForm'
import BottomResults from './bottom/BottomResults'

function Bottom() {
  
  const [userBMI, setUserBMI] = useState(0)

  const theUserBmi = (newbmi) => {
    setUserBMI(newbmi)
  }

  return (
    <>
      <div id="bottomContainer" className='bg-white rounded-2xl p-6 shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)]'>
        <div id="bottomHeadingWrapper" className='mb-6'>
          <BottomHeading />
        </div>
        <div id="bottomFormWrapper" className='mb-6'>
          <BottomForm theUserBmi={theUserBmi} />
        </div>
        <div id="bottomResultsWrapper" className=''>
          <BottomResults userBMI={userBMI} />
        </div>
      </div>
    </>
  )
}

export default Bottom