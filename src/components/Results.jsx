import React from 'react'
import ResultsImage from './results/ResultsImage'
import ResultsHeading from './results/ResultsHeading'
import ResultsCopy from './results/ResultsCopy'

function Results() {
  return (
    <>
      <div id="resultsContainer">
        <div id="resultsImgWrapper" className='mb-12'>
          <ResultsImage />
        </div>
        <div id="resultsHeadingWrapper" className='px-6 mb-8'>
          <ResultsHeading />
        </div>
        <div id="resultsCopyWrapper" className='px-6'>
          <ResultsCopy />
        </div>
      </div>
    </>
  )
}

export default Results