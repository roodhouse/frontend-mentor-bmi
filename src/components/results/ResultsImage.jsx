import React from 'react'
import ManEating from '../../assets/images/image-man-eating.webp'

function ResultsImage() {
  return (
    <>
        <div id="resultsImageContainer">
            <div id="resultsImage" className='md:w-[360px] md:h-[411px] xl:w-[564px] xl:h-[533px]'>
                <img src={ManEating} alt="Man Eating" className='md:h-full object-cover' />
            </div>
        </div>
    </>
  )
}

export default ResultsImage