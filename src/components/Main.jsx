import React from 'react'

import logo from '../assets/logo.svg'
import img from '../assets/dashboard.png'

import { Form } from './Form'
import { Footer } from './Footer'

export const Main = () => {
  return (
    <main className='p-[2rem] bg-white md:px-[4rem] md:pt-[5.4rem]'>
      <a href='#' aria-label='Go to home' className='block w-max mx-auto'>
        <img src={logo} alt='Ping' className='' />
      </a>
      <h1 className='mt-[2.5rem] text-center font-Franklin text-[1.4rem] font-normal text-Gray md:text-[3rem]'>
        We are launching
        <span className='font-bold text-VeryDarkBlue'> soon!</span>
      </h1>
      <p className='text-center font-Franklin text-VeryDarkBlue mt-[1rem] md:mt-[.5rem] md:text-[1.25rem]'>
        Subscribe and get notified
      </p>
      <Form />
      <img src={img} alt='' width={640} className='mt-[4rem] mx-auto md:mt-[5.6rem]' />
      <Footer />
    </main>
  )
}
