import React from 'react'
import "./index.css"

function NavElement({title, location}){
    return(
        <div className='navElement'>
            <a href={location}>{title}</a>
        </div>
    )
}

export default function NavBar() {
  return (
    <div className='navBar'>
        <NavElement title="Events" location="events"/>
        <NavElement title="Schedual" location="schedual"/>
        <NavElement title="About" location="about"/>
    </div>
  )
}
