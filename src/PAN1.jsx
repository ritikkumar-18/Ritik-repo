import React from 'react'
import './Header.css'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

export const PAN1= () => {
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);
  return (
    <header className="relative h-screen overflow-hidden">
    <img
      src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzAxNDM5Njc0NDQxODE0NDIyNjA3NDIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIyNDAsImhlaWdodCI6MTA0MCwiZml0IjoiY292ZXIifX19"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    
    <div className=" absolute h-5/6 inset-0  opacity-25"></div>
    <div className="relative flex items-center justify-between px-10 h-full">
      
      <div className="text-white max-w-5xl space-y-6 absolute top-16 left-24">
        <h1 className="text-5xl font-extrabold leading-tight">Punjab Trip Planner<br />Let AI Be Your Expert Guide.</h1>
        <p className="text-2xl">Bid farewell to generic holiday packages. <br /> Get Your AI-Personalised Itineraries</p>
        <button onClick={openPopup}className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold py-3 px-6 rounded-md mt-4">
          Plan Itinerary For Free!
        </button>
        <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
      </div>
     
      <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow-lg max-w-md absolute right-14 top-10">
        <h2 className="text-3xl font-bold mb-7">Get your free travel plan now</h2>

        
        <label className="block mb-2 text-lg font-bold">What do you want to explore?</label>
        <input type="text" placeholder="Delhi, IN" className="w-full mb-1 p-3 border rounded-md focus:outline-none" />
        <input type="text" placeholder="Search destination" className="w-full mb-4 p-3 border rounded-md focus:outline-none" />
        <button type="button" className="text-blue-500 mt-2 ">
               + Add Destination
           </button>

        
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
    
    <div className="absolute bottom-28 left-32 flex space-x-24 text-white text-center">
      <div className="flex flex-col items-center">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvZ2VuZXJhbC90cmF2ZWwucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ==" alt="Icon 1" className="h-10 mb-2 invert" />
        <span>Free Personalized <br /> Itineraries</span>
      </div>


      <div className="flex flex-col items-center">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvZ2VuZXJhbC9ib29raW5nLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciJ9fX0=" alt="Icon 2" className="h-10 mb-2 invert" />
        <span>Affordable & Flexible <br /> Bookings</span>
      </div>


      <div className="flex flex-col items-center">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaWNvbnMvZ2VuZXJhbC9tb25leS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19" alt="Icon 3" className="h-10 mb-2 invert" />
        <span>Zero Hidden <br /> Charges</span>
      </div>
    </div>
  </header>
  
);
  
}