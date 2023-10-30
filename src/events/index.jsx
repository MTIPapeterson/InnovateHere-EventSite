import React, { useState, useEffect } from 'react'
import "./index.css"

export default function Event({title, description, subHead, subDescription, listItems}) {
  return (
    <div className='eventContainer'>
      <h2 className='eventTitle'>{title}</h2>
      <dir className='eventDescription'>
        <p >{description}</p>
        <h3>{subHead}</h3>
        <ul>
          {listItems.map(i => (<li key={i}>{i}</li>))}
        </ul>
      </dir>
    </div>
  )
}
