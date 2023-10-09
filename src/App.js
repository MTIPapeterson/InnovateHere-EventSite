import './App.css';
import Headerline from './headline/index'; 
import NavBar from './navBar';
import React, { useState, useEffect } from 'react'
import Event from './events/index'
import Banner from './banner/index';
import InfoCards from './infoCard/index';
import Footer from './footer/index';

function App() {
  
  const [screenSize, setScreenSize] = useState(window.innerWidth);

    // Event listener to update screen size state when window is resized
  const handleResize = () => {
      setScreenSize(window.innerWidth);
  }; 

  useEffect(() => {
      // Add event listener to window resize event
      window.addEventListener('resize', handleResize);
      // Remove event listener on component unmount
      return () => {
      window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <div className="main">
      <NavBar/>
      <Headerline screenSize={screenSize}/>
      <Banner/>
      <div className='events' id="events">
        <h1>What to Expect</h1>
        <Event title={"key note speaker"} description={"Keynote speakers will represent a diverse range of expertise within the bio, photonics, and quantum realms. Their presentations promise to provide attendees with a comprehensive understanding of the latest breakthroughs, challenges, and opportunities in these rapidly advancing fields, offering invaluable insights for startups and professionals alike. "}
        subHead={"Highlighted guest speakers include:"} subDescription={"Gov. Gianforte, Senators John Tester and Steve Daines, Director Scott Osterman. Bob Sutor, author Dancing with Qubits. Futurist and speaker on the creative intersection of technology & business and fostering the next generation innovators."}/>
        <Event title={"Panel Discussions"} description={"These panels will provide a dynamic and interactive platform for conference attendees to engage with experts, share insights, and explore Montana’s key role in the foundation and future of bio, photonics, and quantum innovations. The topics covered in these sessions will look at the current landscape and future possibilities in these exciting and rapidly evolving fields. "}
        subHead={"Join us for:"} subDescription={"Origin Stories: Commercializing disruptive technologies – Business Showcase panel with 4 successful Montana tech firms in photonics, bio, and quantum. The Promise of Quantum for Interdisciplinary Discoveries. Q&A Roundtable: U.S. federal investments in quantum capabilities with DARPA, NSF, and NIH SBIR Program leaders."}/>
        <Event title={"Interactive skill-building streams"} description={"The skill-building workshops are designed to be highly interactive, providing participants with practical knowledge and hands-on experiences. By focusing on SBIR innovation, government contracting, and Intellectual Property for company formations, the series aims to empower entrepreneurs with the skills needed to navigate complex processes, secure funding, and protect their innovations in today's competitive business landscape. "}
        subHead={""} subDescription={""}/>
        <Event title={"next-gen & Partner Showcase"} description={"We will also highlight Montana’s next-generation of leaders with opportunities for attendees to learn more about Code Girls United, the Montana Science Center, early entrepreneurial university ventures, as well as meet with Montana’s network of support organizations."}
        subHead={""} subDescription={""}/>
      </div>
        <InfoCards/>
      <Footer/>
    </div>
  );
}

export default App;
