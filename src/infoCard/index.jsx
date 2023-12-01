import React from 'react'

export default function InfoCards() {
  return (
    <div id="contact" className='mt-4 bg-transparent-blue-10 backdrop-blur-lg rounded-3xl p-4'>
        <h1 className='uppercase text-4xl mb-4'>Contact</h1>
        <div className = "border-t-[1px] pt-4 mb-4 border-transparent-blue-25 border-solid text-bright-purple grid grid-cols-3">
            <div className='lg:col-span-2 col-span-3 sm:col-span-3'>
              <h3 className='text-lg font-[600]'>Ann Peterson</h3>
              <p>406.994.7788</p>
              <a href='mailto: techlinksbir@montana.edu'>techlinksbir@montana.edu</a>
            </div>
        </div>
    </div>
  )
}
