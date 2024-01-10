//eventContainer

import { useState } from "react"
import KeynoteBanner from "../keynote/keynoteBanner"

const keynoteBanner = <KeynoteBanner/>

const events = [
  {
    title: "keynote speakers",
    description: "Keynote speakers will represent a diverse range of expertise within the bio, photonics, and quantum realms. Their presentations promise to provide attendees with a comprehensive understanding of the latest breakthroughs, challenges, and opportunities in these rapidly advancing fields, offering invaluable insights for startups and professionals alike.",
    subHead: "Highlighted guest speakers include:",
    listItems: [],
   hasTable: false,
   hasSpecial: true 
  },

  {
    title: "Panel Discussions",
    description: "These panels will provide a dynamic and interactive platform for conference attendees to engage with experts, share insights, and explore Montana’s key role in the foundation and future of bio, photonics, and quantum innovations. The topics covered in these sessions will look at the current landscape and future possibilities in these exciting and rapidly evolving fields.",
    subHead: "Join us for:",
    listItems: ["Origin Stories: Commercializing disruptive technologies", "Business Showcase panel with 4 successful Montana tech firms in photonics, bio, and quantum. The Promise of Quantum for Interdisciplinary Discoveries", "Q&A Roundtable: U.S. federal investments in quantum capabilities with DARPA, NSF, and NIH SBIR Program leaders"],
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
    title: "1-1 meetings with agency program officers and partners",
    description: "Meet one-on-one with agency representatives to discuss how your technology aligns with their missions and identify next steps for participating in their SBIR or STTR program.",
    subHead: "",
    listItems: [],
    hasTable: false,
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
        Innovation Track 
      </h3>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Elements of winning proposals - preparing your investment pitch to a federal agency partner 
      </p>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Understanding your market for “disruptive” technologies  
      </p>
    </div>
    <div className="grid auto-rows-max">
      <h3 className="font-[700] p-2 border-solid border-[1px] border-transparent-blue-25">
       GovCon Track 
      </h3>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Government contracting opportunities (MT APEX Accelerator) 
      </p>
      <p className="border-solid p-2 border-[1px] border-transparent-blue-25">
      Small Business Certifications  
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
        <div className="col-span-3 mb-6">
        {open && hasSpecial && keynoteBanner}
        </div>
    </div>
  )
}


export default function Events() {

  return (
    <div className="grid grid-cols-5 mb-10" id="events">
      <h1 className="col-span-5 text-4xl mt-4 uppercase my-4">What to expect</h1>
     {events.map((e) => <Event title={e.title} description={e.description} subHead={e.subHead} listItems={e.listItems} hasTable={e.hasTable} hasSpecial={e.hasSpecial} key={e.title}/>)}
    </div>
  )
}
