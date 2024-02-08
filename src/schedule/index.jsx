import React from 'react'

const events = [
  {
    category: "Welcome Address",
    title: "Ann Peterson Program Director, Montana Innovation Partnership powered by MSU TechLink Center",
    description: "",
    time: "9:00 - 9:10",
    link: ""
  },
  {
    category: "Opening Address",
    title: "Dr. Alison Harmon - Vice President for Research and Economic Development",
    description: "",
    time: "9:10 - 9:30",
    link: ""
  },
  {
    category: "Business Showcase Panels",
    title: "Origin stories from 3-4 Successful Montana Tech firms",
    description: "",
    time: "9:30 - 10:00",
    link: ""
  },
  {
    category: "KEYNOTE",
    title: "Clarice Aiello, Director UCLA's Quantum Biology Lab",
    description: "",
    time: "10:05 - 10:45",
    link: ""
  },
  {
    category: "Q&A Roundtable Panel",
    title: "Private and U.S. federal investments in quantum capabilities - Federal SBIR program officers",
    description: "",
    time: "10:55  - 11:25",
    link: ""
  },
  {
    category: "Lunch and break-out sessions",
    title: "",
    description: "",
    time: "11:30 - 1:00",
    link: ""
  },
  {
    category: "KEYNOTE",
    title: "Bob Sutor, VP and quantum advocate at Infleqtion and author of Dancing with Qubits",
    description: "",
    time: "1:00 - 1:45",
    link: ""
  },
  {
    category: "Montana Innovation Clusters Panel",
    title: "The Promise of Quantum - Bio and Photonics Clusters in Montana",
    description: "",
    time: "1:45 - 2:30",
    link: ""
  },
  {
    category: "Keynote",
    title: "Krishna Rupavatharam, Director of MSU Spectrum Lab",
    description: "",
    time: "2:30 - 3:00",
    link: ""
  },
  {
    category: "NextGen Showcase",
    title: "Showcase areas will offer opportunities for attendees to speak with entrepreneurial support organizations, professional services firms, partners and other organizations driving innovation in Montana. ",
    description: "",
    time: "Afternoon",
    link: ""
  },
]

function Event({event}){
  return(
    <div className='col-span-5 grid grid-cols-3 pr-4 border-t-[1px] pt-4 mb-4 border-transparent-blue-25 border-solid'>
      <p className='uppercase text-lg col-span-2 mb-2'>{event.category}</p>
      <div className='col-span-3 sm:col-span-3 lg:col-span-1 lg:justify-self-end sm:mb-2 mb-2 lg:mb-0'>
        <p className=' bg-transparent-blue-25 rounded-3xl p-2 py-[1px] font-[600] text-bright-purple w-max'>{event.time}</p>
      </div>
      <h3 className='col-span-3 sm:col-span-3 lg:col-span-2 text-bright-purple'>{event.title}</h3>
      
     
    </div>
  )
}

export default function Schedule() {
  return (
    <div id="schedule" className='bg-transparent-blue-10 backdrop-blur-lg rounded-3xl p-4'>
      <h1 className='uppercase text-4xl mb-4'>Schedule</h1>
      <div className='grid grid-cols-5'>
        {events.map(e => <Event event={e} key={e.time}/>)}
      </div>  
    </div>
  )
}
