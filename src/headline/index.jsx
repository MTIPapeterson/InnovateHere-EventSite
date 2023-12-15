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
      <div className="h-[100vh] grid grid-rows-3 bg-cover-image bg-cover text-white px-4 lg:px-10 sm:px-4 overflow-hidden" id='headLine'>
          {/* <img className='' src={backgroundImage} alt="background Image"/> */}
          <div className='mt-10 grid'>
            <h1 className='text-[4rem] leading-[4rem] sm:text-[4rem] sm:leading-[4rem] md:leading-[8rem] md:text-[8rem] lg:leading-[9rem] lg:text-[9rem] font-[100] uppercase'>
              Innovate Here 2024
            </h1>
            <h2 className='text-[3rem] sm:text-3[rem] md:text-[4rem] lg:text-[6rem] text-blue-highlight self-start font-[300]'>
              March 7
            </h2>

            <div>
              <h3 className='font-[100] self-end'>*Registration opening soon</h3>
            </div>
          </div>  
      </div>
    </>
  )
}
