import React from 'react'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <footer className='mt-[6rem] md:mt-[4.5rem]'>
      <ul className='flex flex-row justify-center gap-[1rem] md:gap-[.5rem]'>
        <li className='border-2 border-gray-100 p-[.5rem] rounded-full'>
          <a href='/' aria-label='Go to Facebook'>
            <FaFacebookF className='text-Blue hover:text-LightRed transition-colors' />
          </a>
        </li>
        <li className='border-2 border-gray-100 p-[.5rem] rounded-full'>
          <a href='/' aria-label='Go to Twitter'>
            <FaTwitter className='text-Blue hover:text-LightRed transition-colors' />
          </a>
        </li>
        <li className='border-2 border-gray-100 p-[.5rem] rounded-full'>
          <a href='/' aria-label='Go to Instagram'>
            <FaInstagram className='text-Blue hover:text-LightRed transition-colors' />
          </a>
        </li>
      </ul>
      <p className='mt-[1rem] text-center text-Gray font-Franklin md:text-[.75rem] md:mt-[1.1rem]'>
        &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
  )
}
