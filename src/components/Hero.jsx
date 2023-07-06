import React from 'react';
import Top from './hero/Top'
import Bottom from './hero/Bottom'

function Hero() {
  return (
    <>
      <div id="heroContainer" className='xl:flex'>
        <div id="heroTopWrapper" className='bg-gradient-315 pt-8 px-6 rounded-[0px_0px_35px_35px] xl:pt-[74px] xl:pl-[140px] xl:pr-[298px] xl:mr-[-298px] xl:max-h-[737px]'>
          <Top />
        </div>
        <div id="heroBottomWrapper" className='mt-[-387px] px-6 xl:mt-0 xl:pt-[166px] xl:pl-0 xl:w-[564px] xl:pr-0 xl:ml-[131px]'>
          <Bottom />
        </div>
      </div>
    </>
  )
}

export default Hero