import React from 'react';
import HeroIcon from './top/HeroIcon'
import HeroHeading from './top/HeroHeading'
import HeroCopy from './top/HeroCopy'

function Top() {
  return (
    <>
      <div id="topHeroContainer" className='pb-[217px] mb-[217px] md:flex md:flex-col md:justify-center md:items-center md:mb-0 md:pb-[424px]'>
        <div id="heroIconWrapper">
          <HeroIcon />
        </div>
        <div id="heroHeadingWrapper" className='mb-6 md:w-[346px]'>
          <HeroHeading />
        </div>
        <div id="heroCopyWrapper">
          <HeroCopy />
        </div>
      </div>
    </>
  )
}

export default Top