import React from 'react'
import "./index.css"
import msuLogo from "./assets/msuLogo.png"
import MTIPLogo from "./assets/MTIP_Logo.png"
import techlinkLogo from "./assets/tecklinkLogo.webp"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footerContainer'>
            <h2 className='logoHeader'>Thank you to our sponsors</h2>
            <div className='footerLogos'>
                <img src={MTIPLogo} alt="MTIP logo" />
                <img src={msuLogo} alt="msu logo" />
                <img src={techlinkLogo} alt="techLink logo" />
            </div>
        </div>
        
    </div>
  )
}
