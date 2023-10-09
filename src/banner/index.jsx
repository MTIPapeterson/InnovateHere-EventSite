import React from 'react'
import "./index.css"

export default function Banner() {
  return (
    <div className='banner' id="about">
        <div className='bannerElement'>
            <h2>the event</h2>
            <p>
            The Innovate Here Conference aims to bring together early-stage technology startups specializing in disruptive innovations in bio, photonics, and quantum technologies. The conference is designed to provide a platform for networking, knowledge exchange, and collaboration among entrepreneurs, researchers, support organizations, and industry experts. 
            </p>
        </div>
        <div className='bannerElement'>
        <h2>pre-day event march 6th</h2>
            <p>
                Pre-day cross-country skiing at Crosscut and VIP event with hearty hors d'oeurves and refreshments at Peach Street Studios with concert.
            </p>
        </div>
    </div>
  )
}
