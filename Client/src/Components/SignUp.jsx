import React from 'react'
import signup from '../assets/images/webp/sign-up-bg.png'
import screenman from '../assets/images/webp/man-livescreen.png'

function SignUp() {
  return (

    <div style={{ backgroundImage: `url(${signup})` }} className="bg-cover bg-center h-screen max-w-[1920px] mx-auto min-h-[1024px]">
        <div className='max-w-[1236px] min-h-[767px] bg-white max-auto '>
        <div className='flex items-center gap-[50px]'>
          <div>
            <img src={screenman} alt="" className='max-w-[433px] min-h-[652px]' />
          </div>
          <div className='flex items-center flex-col'>
            <input className='mt-[52px]' type="name" placeholder='First Name' />
            <input className='mt-[52px]' type="lastname" placeholder='Last Name' />
            <input className='mt-[52px]' type="mail" placeholder='Mail' />
            <input className='mt-[52px]' type="password" placeholder='Pasword' />
          </div>
          </div>

        </div>
   </div>
  )
}

export default SignUp
