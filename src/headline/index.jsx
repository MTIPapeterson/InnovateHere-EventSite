import React, { useState, useEffect } from 'react'
import titlecard_wide from "./assets/Titlecard_wide.svg"
import titlecard_mid from "./assets/Titlecard_mid.svg"
import titlecard_mobile from "./assets/Titlecard_mobile.svg"
import backgroundImage from "./assets/SplashImageTest.webp"

function TitleCard({screenSize}){
    const [currentImage, setCurrentImage] = useState(titlecard_wide)

    function handleImageSize(screenSize){
      if (screenSize > 1100) {setCurrentImage(titlecard_wide)}
      else if (screenSize < 1100 && screenSize > 700) {setCurrentImage(titlecard_mid)}
      else {setCurrentImage(titlecard_mobile)}
    }

    useEffect(() =>{
      handleImageSize(screenSize)
    }, [screenSize])

    return <img src={currentImage} alt="titleCard"/>
}


export default function Headerline({screenSize}) {
return (
    <>
      {/* <div className='bg-gradient-to-b fixed h-[2]'>
      </div> */}
      <div className="h-full flex flex-col bg-cover-image bg-cover text-white px-4 lg:px-10 sm:px-4 overflow-hidden text-center" id='headLine'>
          {/* <img className='' src={backgroundImage} alt="background Image"/> */}
          <div className='mt-10 h-[700px] flex flex-col items-center'>
            <h1 className='mb-10 text-[4rem] leading-[4rem] sm:text-[4rem] sm:leading-[4rem] md:leading-[8rem] md:text-[8rem] lg:leading-[8rem] lg:text-[8rem] font-[300] uppercase'>
              Innovate Here 2024
            </h1>
            <div className='flex flex-col mb-10'>
              
              <h2 className='text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] text-blue-highlight font-[300] my-0 py-0 leading-[3rem] sm:leading-[3.5rem] md:leading-[4.5rem] lg:leading-[6.5rem]'>
                March 7
              </h2>
              <p className='text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white font-[100] my-0 py-0 leading-[2rem] sm:leading-[2rem] md:leading-[2.5rem] lg:leading-[3rem]'> A one day virtual conference</p>
            </div>
            
              <div className='my-4'>
                <a className="bg-transparent-blue-25 backdrop-blur-lg border-[2px] border-transparent-blue-25 border-solid p-4 rounded-xl text-[18px] lg:text-[24px] sm:text-[18px] uppercase hover:bg-blue-highlight" href="https://share.hsforms.com/10Olxqk0FTjOOnGJntMKfYQ4du3f" target='_blank' rel="noopener noreferrer">Register</a>
              </div>
          </div>  
      </div>
    </>
  )
}
