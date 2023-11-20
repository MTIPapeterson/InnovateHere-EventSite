//eventContainer

import { useState } from "react"

const events = [
  {
    title: "key note speaker",
    description: "Keynote speakers will represent a diverse range of expertise within the bio, photonics, and quantum realms. Their presentations promise to provide attendees with a comprehensive understanding of the latest breakthroughs, challenges, and opportunities in these rapidly advancing fields, offering invaluable insights for startups and professionals alike.",
    subHead: "Highlighted guest speakers include:",
    listItems: ["Gov. Gianforte", "Senators John Tester", "Senator Steve Daines", "Director Scott Osterman", "Bob Sutor, author Dancing with Qubits","Dr. Clarice Aiello, UCLA's Quantum Biology Lab - The Promise of Quantum for Interdisciplinary Discoveries ","Futurist and speaker on the creative intersection of technology & business and fostering the next generation innovators"]
  },
  {
    title: "Panel Discussions",
    description: "These panels will provide a dynamic and interactive platform for conference attendees to engage with experts, share insights, and explore Montana’s key role in the foundation and future of bio, photonics, and quantum innovations. The topics covered in these sessions will look at the current landscape and future possibilities in these exciting and rapidly evolving fields.",
    subHead: "Join us for:",
    listItems: ["Origin Stories: Commercializing disruptive technologies", "Business Showcase panel with 4 successful Montana tech firms in photonics, bio, and quantum. The Promise of Quantum for Interdisciplinary Discoveries", "Q&A Roundtable: U.S. federal investments in quantum capabilities with DARPA, NSF, and NIH SBIR Program leaders"]
  },
  {
    title: "Interactive skill-building streams",
    description: "The skill-building workshops are designed to be highly interactive, providing participants with practical knowledge and hands-on experiences. By focusing on SBIR innovation, government contracting, and Intellectual Property for company formations, the series aims to empower entrepreneurs with the skills needed to navigate complex processes, secure funding, and protect their innovations in today's competitive business landscape.",
    subHead: "",
    listItems: []
  },
  {
    title: "1-1 meetings with agency program officers and partners",
    description: "Meet one-on-one with agency representatives to discuss how your technology aligns with their missions and identify next steps for participating in their SBIR or STTR program.",
    subHead: "",
    listItems: []
  },
  {
    title: "next-gen & Partner Showcase",
    description: "We will also highlight Montana's next-generation of leaders with opportunities for attendees to learn more about Code Girls United, the Montana Science Center, early entrepreneurial university ventures, as well as meet with Montana's network of support organizations.",
    subHead: "",
    listItems: []
  },
]

function Event({title, description, subHead, listItems}){

 

  // useState
  return (
    <div className="col-span-3 grid grid-cols-3 pr-4 border-t-[1px] pt-4 mb-4 border-white border-solid">
        <h2 className="uppercase text-2xl col-span-2 mb-4">{title}</h2>
        <div className="col-span-1 justify-self-end" >
          <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 95 52" fill="none">
              <path d="M2 2.5L47.5 48L93 2.5" stroke="white" stroke-width="5"/>
          </svg>
        </div>
        <div className="col-span-3 text-[.9rem]">
        {/* <p>{description}</p>
          <div className="mt-4">
            <h3 className="font-[700] mb-2">{subHead}</h3>
            <ul>
              {listItems.map(i => (<li key={i}>_ {i}</li>))}
            </ul>
          </div> */}
        </div>
    </div>
  )
}


export default function Events() {

  return (
    <div className="grid grid-cols-5 mb-10">
      <h1 className="col-span-5 text-4xl mt-4 uppercase my-4">What to expect</h1>
     {events.map((e) => <Event title={e.title} description={e.description} subHead={e.subHead} listItems={e.listItems}/>)}
    </div>
  )
}
