//eventContainer

import { useState } from "react"
import KeynoteBanner from "../keynote/keynoteBanner"

const keynoteBanner = <KeynoteBanner/>

const events = [
  {
    title: "Panel Discussions",
    description: "These panels will provide a dynamic and interactive platform for conference attendees to engage with experts, share insights, and explore Montana’s key role in the foundation and future of bio, photonics, and quantum innovations. The topics covered in these sessions will look at the current landscape and future possibilities in these exciting and rapidly evolving fields.",
    subHead: "",
    listItems: [],
   hasTable: false,
   hasSpecial: false    
  },

  {
    title: "Break-Out Sessions",
    description: "The skill-building workshops are designed to be highly interactive, providing participants with practical knowledge and hands-on experiences. By focusing on SBIR innovation, government contracting, and Intellectual Property for company formations, the series aims to empower entrepreneurs with the skills needed to navigate complex processes, secure funding, and protect their innovations in today's competitive business landscape.",
    subHead: "",
    listItems: [],
    hasTable: true,
    hasSpecial: false
  },
  {
    title: "next-gen & Partner Showcase",
    description: "We will also highlight Montana's next-generation of leaders with opportunities for attendees to learn more about Code Girls United, the Montana Science Center, early entrepreneurial university ventures, as well as meet with Montana's network of support organizations.",
    subHead: "",
    listItems: [],
    hasTable: false,
    hasSpecial: false    
  },

]

function Event({title, description, subHead, listItems, hasTable, hasSpecial}){

  const table = <div className="grid auto-cols gap-y-4">
    <div className="grid auto-rows-max">
      <h3 className="font-[700] p-2 border-solid border-[1px] border-transparent-blue-25">
      Innovation Track 1:  
      </h3>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Getting Started with America's Seed Fund 
      </p>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Getting Started with America's Seed Fund will offer you a look at the mission of the SBIR/STTR programs, how to identify agencies and topics that may align with your innovation, and critical steps to set you up for success.       </p>
      <h3 className="font-[700] p-2 border-solid border-[1px] border-transparent-blue-25">
      Innovation Track 2:  
      </h3>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Elements of winning proposals - preparing your investment pitch to a federal agency partner 
      </p>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Winning proposals take time and preparation. Learn how to navigate the instructions, how proposals are reviewed, and the important elements that must be explained in your SBIR/STTR proposal.
      </p>
    </div>
    <div className="grid auto-rows-max">
      <h3 className="font-[700] p-2 border-solid border-[1px] border-transparent-blue-25">
       GovCon Track 
      </h3>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Working with the APEX Accelerators for government contracting
      </p>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Transitioning research and development to government programs
      </p>
    </div>
    <div className="grid auto-rows-max">
      <h3 className="font-[700] p-2 border-solid border-[1px] border-transparent-blue-25">
      Company formation  
      </h3>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Intellectual Property for bioscience, computer software/algorithms... 
      </p>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Fractional CXO's: when you're not ready to hire in-house  
      </p>
    </div>
  </div>

  const descriptionBody = <>
    <p className="text-bright-purple">{description}</p>
      <div className="mt-4 text-bright-purple">
        <h3 className="font-[700] mb-2">{subHead}</h3>
        <ul>
          {listItems.map(i => (<li key={i}> • {i}</li>))}
        </ul>
        {hasTable && table}  
      </div>
  </>
  
 

  const [open, setOpen] = useState(false)
  const [showIcon, setShowIcon] = useState("+")

  const handleShow = () => {
    setOpen(!open)
    let newShowIcon = open ? "+" : "–"
    setShowIcon(newShowIcon) 
  }

  return (
    <div className="col-span-5 grid grid-cols-3 pr-4 border-t-[1px] py-4 border-dark-blue border-solid cursor-pointer" onClick={handleShow}>
        <h2 className="uppercase text-lg col-span-2">{title}</h2>
        <div className="col-span-1 justify-self-end">
          <h3 className="text-lg font-[900] text-bright-purple">{showIcon}</h3>
        </div>
        <div className="col-span-3 text-[16px] lg:col-span-2 sm:col-span-3">
        {open && descriptionBody}
        </div>
    </div>
  )
}


export default function Events() {

  return (
    <div className="grid grid-cols-5 mb-10" id="events">
      <div className="col-span-5 my-10">
      {keynoteBanner}
      </div>
     
     {events.map((e) => <Event title={e.title} description={e.description} subHead={e.subHead} listItems={e.listItems} hasTable={e.hasTable} hasSpecial={e.hasSpecial} key={e.title}/>)}
    </div>
  )
}
