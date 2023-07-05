import React from 'react'
import ResultsImage from './results/ResultsImage'
import ResultsHeading from './results/ResultsHeading'
import ResultsCopy from './results/ResultsCopy'

function Results() {
  return (
    <>
      <div id="resultsContainer" className='md:flex'>
        <div id="resultsImgWrapper" className='mb-12 md:mb-0 md:relative md:left-[-42px] md:mr-[9px] xl:static xl:left-0 xl:mr-[131px]'>
          <ResultsImage />
        </div>
        <div id='resultsCopyContainer' className='md:pr-[43px] md:mt-[35px] xl:mt-[184px] xl:pr-0'>
          <div id="resultsHeadingWrapper" className='px-6 mb-8 xl:pr-0 xl:mb-[35px]'>
            <ResultsHeading />
          </div>
          <div id="resultsCopyWrapper" className='px-6 md:pr-0'>
            <ResultsCopy />
          </div>
        </div>
      </div>
    </>
  )
}

export default Results