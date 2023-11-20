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
      <div className="h-[100vh] grid bg-cover-image bg-cover text-white px-10" id='headLine'>
          {/* <img className='' src={backgroundImage} alt="background Image"/> */}
          <div className='mt-10'>
            <h1 className='text-8xl font-[300]'>
              Innovate Here 2024
            </h1>
            <h2 className='text-4xl font-[300] text-blue-highlight'>
              March 7
            </h2>
          </div>  
      </div>
    </>
  )
}
