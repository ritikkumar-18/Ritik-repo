import React, { useState } from 'react'
import './Header.css'
import GetTravelForm from './GetTravelForm';

export const Head = () => {
  // const navigate = useNavigate();
  

  
  
  // const goTo = () => {
  //   navigate('form'); }
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);
  
  return (
    <header className="relative h-screen overflow-hidden">
    <img
      src=" https://img.freepik.com/free-photo/pool-nature-landscape-palm-ocean_1203-4912.jpg?semt=ais_hybrid"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover xs:w-full"
    />
    
    <div className=" absolute h-5/6 inset-0 "></div>
    <div className="relative flex items-center justify-between px-10  md:px-10 h-full">
      
      <div className="text-white md:space-y-6  md:top-16  xs:top-28 xs:left-20 sm:left-28 left-32 md:left-24 text-center md:text-left max-w-5xl space-y-6 absolute top-40">
        <h1 className="text-5xl xs:text-xl mb-5 xs:mb-2 sm:text-2xl md:text-5xl font-extrabold leading-tight">Effortless Travel Planning!<br />Let AI Be Your Expert Guide.</h1>
        <p className="text-2xl mb-5 xs:mb-2 sm:text-2xl">Bid farewell to generic holiday packages. <br /> Get Your AI-Personalised Itineraries</p>
        <button onClick={openPopup} className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold py-3 px-6 rounded-md mt-4">
          Plan Itinerary For Free!
        </button>
        <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
      </div>
     
      <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-lg max-w-md absolute right-20 top-16 hidden md:block">
        <h2 className="text-3xl font-bold mb-8">Get your free travel plan now</h2>

        
        <label className="block mb-2 text-lg font-bold">What do you want to explore?</label>
        <input type="text" placeholder="Delhi, IN" className="w-full mb-1 p-3 border rounded-md focus:outline-none" />
        <input type="text" placeholder="Search destination" className="w-full mb-4 p-3 border rounded-md focus:outline-none" />

        
        <label className="block mb-3 text-lg font-bold">When are you planning to travel?</label>
        <div className='text-md font-bold flex items-center justify-between mr-32 mb-1'>
          <p>Start Date</p>
          <p>End Date</p>
        </div>


        <div className="flex items-center justify-center space-x-4">
          <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
          <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
        </div>


        <div className="flex items-center text-center mt-5">
          <input type="checkbox" id="unsure" className="mr-2" />
          <label htmlFor="unsure" className="text-sm font-semibold">Not sure? Let us decide best time for your trip.</label>
        </div>


        <button className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
          Continue
        </button>
      </div>
    </div>
    
    <div className="absolute bottom-36 mx-5 xs:left-2 sm:bottom-32 sm:mx-auto md:bottom-28 xs:mx-auto sm:mt-20 lg:left-32 left-32 flex space-x-24 text-white text-center">
      <div className="flex flex-col items-center">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvZ2VuZXJhbC90cmF2ZWwucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ==" alt="Icon 1" className="h-10 mb-2  xs:h-6 invert" />
        <span className='xs:text-xs '>Free Personalized <br /> Itineraries</span>
      </div>


      <div className="flex flex-col items-center">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvZ2VuZXJhbC9ib29raW5nLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciJ9fX0=" alt="Icon 2" className="h-10 mb-2 xs:h-6 invert" />
        <span className='xs:text-xs'>Affordable & Flexible <br /> Bookings</span>
      </div>


      <div className="flex flex-col items-center">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvZ2VuZXJhbC9tb25leS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19" alt="Icon 3" className="h-10 mb-2 xs:h-6 invert" />
        <span className='xs:text-xs'>Zero Hidden <br /> Charges</span>
      </div>
    </div>
  </header>
  
);
  
}
