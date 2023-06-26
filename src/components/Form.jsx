import React, { useState } from 'react'

export const Form = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.length !== 0) {
      const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

      if (!validEmail.test(email)) {
        setStatus(false)
      } else {
        setEmail('')
        setStatus(true)
      }
    }
  }

  return (
    <form className='mt-[2.5rem] md:mt-[2.3rem] md:flex max-w-[640px] md:gap-[1.1rem] mx-auto relative' onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Your email address...' aria-label='Your email address' className='block w-full py-[.8rem] px-[1.4rem] border-2 border-PaleBlue rounded-full placeholder:text-PaleBlue font-Franklin' />
      <p className={status === false ? 'font-Franklin text-[.8rem] ml-[1rem] text-LightRed absolute bottom-[-1.2rem]' : 'hidden'}>Please provide a valid email address</p>
      <button type='submit' className='w-full mt-[1rem] bg-Blue shadow-md rounded-full py-[.8rem] px-[1.4rem] text-white font-Franklin font-semibold hover:bg-BlueHover transition-colors md:mt-0 md:max-w-[12.5rem]'>Notify Me</button>
    </form>
  )
}
