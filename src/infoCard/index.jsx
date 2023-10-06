import React from 'react'
import "./index.css"

export default function InfoCard({title, message, info}) {
  return (
    <div>
        <h1 className='infoHeader'>{title}</h1>
        <div className='infoMessage'>
            <h2>*{message}</h2>
        </div>
        <div className='info'>
            <p>{info}</p>
        </div>
    </div>
  )
}
