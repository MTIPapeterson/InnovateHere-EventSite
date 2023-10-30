import React from 'react'
import "./index.css"

const events = [
  {
    category: "Pre-day Event",
    title: "X-country ski outing at Crosscut",
    description: "",
    time: "time: March 6th",
    link: ""
  },
  {
    category: "Welcome Address",
    title: "Ann Peterson Program Director, Montana Innovation Partnership powered by MSU TechLink Center",
    description: "",
    time: "time: *TBA",
    link: ""
  },
  {
    category: "Opening Address",
    title: "Montana (Gov. Gianforte, Scott Osterman, or Senators Tester and Daines)",
    description: "",
    time: "time: *TBA",
    link: ""
  },
  {
    category: "Business Showcase Panels",
    title: "Origin stories from 3-4 Successful Montana Tech firms",
    description: "",
    time: "time: *TBA",
    link: ""
  },
  {
    category: "KEYNOTE",
    title: "Clarice Aiello, Director UCLA's Quantum Biology Lab",
    description: "",
    time: "time: *TBA",
    link: ""
  },
  {
    category: "Montana Innovation Clusters Panel",
    title: "The Promise of Quantum - Bio and Photonics Clusters in Montana",
    description: "",
    time: "time: *TBA",
    link: ""
  },
  {
    category: "Q&A Roundtable Panel",
    title: "Private and U.S. federal investments in quantum capabilities - DARPA, NSF, NIH SBIR program officers, Private Equity/Angel firms ",
    description: "",
    time: "time: *TBA",
    link: ""
  },
  {
    category: "Event",
    title: "Code Girls United practice pitches",
    description: "",
    time: "time: *TBA",
    link: ""
  },
]

function Event({event}){
  return(
    <div className='scheduleEvent'>
      <p>{event.category}</p>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>{event.time}</p>
    </div>
  )
}

export default function Schedule() {
  return (
    <div className='schedule' id='schedule'>
      <h1 className='scheduleHeader'>Schedule</h1>
      <div className='scheduleEvents'>
        {events.map(e => <Event event={e} key={e.title}/>)}
      </div>  
    </div>
  )
}
