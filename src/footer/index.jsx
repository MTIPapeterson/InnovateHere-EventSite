import React from 'react'
import msuLogo from "./assets/msuLogo.png"
import MTIPLogo from "./assets/MTIP_Logo.png"
import techlinkLogo from "./assets/tecklinkLogo.webp"
import prosperaLogo from "./assets/prosperaLogo.svg"
import MTBSALogo from "./assets/MBSA_White.webp"
import MTPQLogo from "./assets/MTPQ.webp"
import SeedFundLogo from "./assets/American_Seen_Fund_Logo.webp"
import MT_DC from "./assets/MT_DC_Logo.png"

export default function Footer() {
  return (
    <div className='border-t-[1px] py-4 border-transparent-blue-25 border-solid bg-transparent-blue-25 backdrop-blur-lg mt-10'>
        <div className='text-white px-4 sm:px-4 lg:px-10 grid grid-cols-3'>
            <div className='grid col-span-3 sm:col-span-3 lg:col-span-3 mb-4'>
                <div className='flex'>
                <a className='hover:text-blue-highlight mr-4' href="#headLine">Top</a>
                <a className='hover:text-blue-highlight mr-4' href="#about">About</a>
                <a className='hover:text-blue-highlight mr-4' href="#events">Events</a>
                <a className='hover:text-blue-highlight' href="#schedule">Schedule</a>
                </div>
            
            </div>
            
            <div className='border-t-solid border-t-transparent-blue-25 border-t-[1px] col-span-3 mt-2 mb-4'>
                <div className='pt-4'>
                    <h3 className='text-bright-purple font-[700] text-center mb-4'>Thank you to our sponsors</h3>
                    <div className='items-center gap-6 grid justify-items-center sm:justify-items-center sm:grid pt-2 lg:grid-rows-2  
                     lg:grid-flow-col'>
                        <img  className="max-w-[150px] self-center" src={MTIPLogo} alt="MTIP logo" />
                        <img className="max-w-[180px] self-center" src={msuLogo} alt="msu logo" />
                        <img className="max-h-[75px] self-center" src={techlinkLogo} alt="techLink logo" />
                        <img className="max-w-[200px] self-center" src={prosperaLogo} alt="prospera logo" />
                        <img className="max-h-[75px] self-center" src={MTBSALogo} alt="MTBSA logo" />
                        <img className="max-h-[75px] self-center" src={MTPQLogo} alt="MTPQ logo" />
                        <img className="max-h-[75px] self-center" src={SeedFundLogo} alt="American Seed Fund logo" />
                        <img className="max-h-[75px] self-center" src={MT_DC} alt="Montana DC logo" />
                    </div>
                </div>
            </div>
      
            <div className='col-span-3 mt-4 mb-4 grid justify-items-center text-center border-t-solid border-t-transparent-blue-25 border-t-[1px]'>
                <p className='text-[14px] text-bright-purple w-[90%] sm:w-[90%] lg:w-[70%] pt-4'>
                    The Montana Innovation Partnership (MTIP) is based at Montana State University TechLink Center. We are funded in part through a cooperative agreement with the U.S. Small Business Administration with additional funding from the Montana Department of Commerce
                </p>
                <a className='text-[14px] text-bright-purple w-[90%] sm:w-[90%] lg:w-[70%] pt-4 underline' href='https://www.montana.edu/legalcounsel/legal-privacy/index.html'>
                We inherit MSU Privacy Policy as a program under MSU
                </a>
            </div>
        </div>
        
    </div>
  )
}
