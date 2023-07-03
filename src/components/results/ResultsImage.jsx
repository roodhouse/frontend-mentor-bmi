import React from 'react'
import ManEating from '../../assets/images/image-man-eating.webp'

function ResultsImage() {
  return (
    <>
        <div id="resultsImageContainer">
            <div id="resultsImage">
                <img src={ManEating} alt="Man Eating" />
            </div>
        </div>
    </>
  )
}

export default ResultsImage