import React from 'react';
import HeroIcon from './top/HeroIcon'
import HeroHeading from './top/HeroHeading'
import HeroCopy from './top/HeroCopy'

function Top() {
  return (
    <>
      <div id="topHeroContainer">
        <div id="heroIconWrapper">
          <HeroIcon />
        </div>
        <div id="heroHeadingWrapper">
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