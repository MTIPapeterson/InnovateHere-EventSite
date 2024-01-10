import Headline from './headline/index'; 
import NavBar from './navBar';
import React, { useState, useEffect } from 'react'
import Events from './events/index'
import Banner from './banner/index';
import InfoCards from './infoCard/index';
import Footer from './footer/index';
import Schedule from './schedule';
import KeynoteBanner from './keynote/keynoteBanner';


function App() {
  
  const [screenSize, setScreenSize] = useState(window.innerWidth);

    // Event listener to update screen size state when window is resized *** 
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
    <div>
      <NavBar/>
      <Headline screenSize={screenSize}/>
      <div className=" pt-0 font-satoshi bg-background-gradient bg-cover text-white">
        <div className='p-4 lg:p-10 sm:p-4'>
          <Banner/>
          <Events/>
          <KeynoteBanner/>
          <Schedule/>
          <InfoCards/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
