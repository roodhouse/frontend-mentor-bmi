import React from 'react';
import Logo from '../../../assets/images/logo.svg'

function HeroIcon() {
  return (
    <>
      <div id="heroIconContainer" className='flex justify-center mb-6'>
        <img src={Logo} alt="Logo" className='w-10 h-10' />
      </div>
    </>
  )
}

export default HeroIcon