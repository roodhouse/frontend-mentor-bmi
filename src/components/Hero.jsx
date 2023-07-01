import React from 'react';
import Top from './hero/Top'
import Bottom from './hero/Bottom'

function Hero() {
  return (
    <>
      <div id="heroContainer">
        <div id="heroTopWrapper">
          <Top />
        </div>
        <div id="heroBottomWrapper">
          <Bottom />
        </div>
      </div>
    </>
  )
}

export default Hero