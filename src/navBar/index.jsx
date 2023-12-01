import React from 'react'

function NavElement({title, location}){
    return(
        <div className='p-4 pl-0 text-sm hover:text-blue-highlight'>
            <a href={location}>{title}</a>
        </div>
    )
}

export default function NavBar() {
  return (
    <div className='w-full uppercase sticky top-0 border-b-[1px] border-transparent-blue-25 border-solid bg-transparent-blue-25 backdrop-blur-lg text-white z-10'>
        <div className='grid grid-cols-5 mx-10'>
          <div className='col-span-2 flex'>
            <NavElement title="About" location="#about"/>
            <NavElement title="Events" location="#events"/>
            <NavElement title="Schedule" location="#schedule"/>
          </div>
          <div className='col-end-6'>
            <NavElement title="Contact" location="#contact"/>
          </div>
        </div>
       
    </div>
  )
}
