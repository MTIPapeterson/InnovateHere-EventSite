import React from 'react'
import AH from "./assets/Alison_Harmon_MSU_VPR.jpg"
import BS from "./assets/BobSutor.jpg"
import CA from "./assets/Clarice_Aiello_400x400.jpg"

export default function KeynoteBanner() {
  return (
    <div className='grid grid-cols-3 gap-3'>
        {/* <h2 className='col-span-3 uppercase text-4xl mb-0'>
            Keynote Speakers
        </h2> */}
        <div className='mt-4 bg-transparent-blue-10 backdrop-blur-lg rounded-3xl p-4 col-span-3 sm:col-span-3 lg:col-span-1 grid justify-items-center sm:justify-items-start lg:justify-items-center grid-cols-1 gap-0 sm:grid-cols-3 lg:grid-cols-1 '>
            <img className="rounded-full h-[170px] mb-4 border-[2px] border-transparent-blue-25 border-solid col-span-1 flex justify-self-center" src={CA} alt="Head shot of Clarice Aiello"/>
            <div className='col-span-2'>
                <h3 className='uppercase text-lg text-center sm:text-start lg:text-center mb-2'>Clarice Aiello</h3>
                <p className='text-bright-purple text-center sm:text-start lg:text-center font-[100]'>Clarice Aiello is a Quantum Engineer working in the field of Quantum Biology, how quantum physics informs biological systems. She is currently the Principal Investigator at Quantum Biology Tech Lab (QuBiT) in Los Angeles. </p>
            </div>
        </div>
        <div className='mt-4 bg-transparent-blue-10 backdrop-blur-lg rounded-3xl p-4 col-span-3 sm:col-span-3 lg:col-span-1 grid justify-items-center sm:justify-items-start lg:justify-items-center grid-cols-1 gap-0 sm:grid-cols-3 lg:grid-cols-1 '>
            <img className="rounded-full h-[170px] mb-4 border-[2px] border-transparent-blue-25 border-solid col-span-1 flex justify-self-center" src={BS} alt="Head shot of Bob Sutor"/>
            <div className='col-span-2'>
                <h3 className='uppercase text-lg text-center sm:text-start lg:text-center mb-2'>Bob Sutor</h3>
                <p className='text-bright-purple text-center sm:text-start lg:text-center font-[100]'>Bob Sutor is currently Vice President and Chief Quantum Advocate at Infleqtion / ColdQuanta. A theoretical mathematician by training, Sutor has been a technical lead and executive in the IT industry for over 40 years. He is the Author of “Dancing with Qubits: How quantum computing works and how it can change the world”.</p>
            </div>
        </div>
        <div className='mt-4 bg-transparent-blue-10 backdrop-blur-lg rounded-3xl p-4 col-span-3 sm:col-span-3 lg:col-span-1 grid justify-items-center sm:justify-items-start lg:justify-items-center grid-cols-1 gap-0 sm:grid-cols-3 lg:grid-cols-1 '>
            <img className="rounded-full h-[170px] mb-4 border-[2px] border-transparent-blue-25 border-solid col-span-1 flex justify-self-center" src={AH} alt="Head shot of Alison Harmon"/>
            <div className='col-span-2'>
                <h3 className='uppercase text-lg text-center sm:text-start lg:text-center mb-2'>Alison Harmon</h3>
                <p className='text-bright-purple text-center sm:text-start lg:text-center font-[100]'>Alison Harmon is the Vice President of Research and Economic Development at Montana State University. As Vice President, Harmon oversees the state’s largest research enterprise with more than $230 million in annual expenditures. </p>
            </div>
        </div>
    </div>
    
  )
}
