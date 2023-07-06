import React from 'react';
import Logo from '../../../assets/images/logo.svg'

function HeroIcon() {
  return (
    <>
      <div id="heroIconContainer" className='flex justify-center mb-6 md:mb-10 xl:mb-[127px]'>
        <img src={Logo} alt="Logo" className='w-10 h-10 xl:w-16 xl:h-16' />
      </div>
    </>
  )
}

export default HeroIcon