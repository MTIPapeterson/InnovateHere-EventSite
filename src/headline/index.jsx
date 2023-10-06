import React, { useState, useEffect } from 'react'
import "./index.css"
import titlecard_wide from "./assets/Titlecard_wide.svg"
import titlecard_mid from "./assets/Titlecard_mid.svg"
import titlecard_mobile from "./assets/Titlecard_mobile.svg"


function TitleCard({screenSize}){
    const [currentImage, setCurrentImage] = useState(titlecard_wide)
    
    console.log(screenSize)

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
    <div className='headline'>
     <TitleCard screenSize={screenSize}/>
    </div>
  )
}
