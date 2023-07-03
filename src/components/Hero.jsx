import React from 'react';
import Top from './hero/Top'
import Bottom from './hero/Bottom'

function Hero() {
  return (
    <>
      <div id="heroContainer">
        <div id="heroTopWrapper" className='bg-gradient-315 pt-8 px-6 rounded-[0px_0px_35px_35px]'>
          <Top />
        </div>
        <div id="heroBottomWrapper" className='mt-[-387px] px-6 '>
          <Bottom />
        </div>
      </div>
    </>
  )
}

export default Hero