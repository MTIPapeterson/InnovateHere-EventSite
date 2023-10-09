import React from 'react'
import "./index.css"

export default function InfoCards() {
  return (
    <div className='infoCards' id="schedule">
        <div>
            <h1 className='infoHeader'>Schedule</h1>
            <div className='infoMessage'>
                <h2>*To be Announced</h2>
            </div>
        </div>
        <div>
            <h1 className='infoHeader'>Contact</h1>
            <div className='infoContact'>
                <h3>Ann Peterson</h3>
                <p>406.994.7788</p>
                <a href='mailto: techlinksbir@montana.edu'>techlinksbir@montana.edu</a>
            </div>
        </div>
    </div>
  )
}
