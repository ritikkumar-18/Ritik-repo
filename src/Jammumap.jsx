import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

function AboutJK() {
  
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);
  return (
    <div className='mx-28 '>
      <h1 className='text-4xl font-bold mb-10 text-center'>A little about Jammu & Kashmir</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Nestled in the Himalayas, Kashmir is a glittering jewel among India’s many states. Kashmir is known 
        for its rich culture and picturesque beauty and is home to a number of monuments and historical sites. 
        Traveling to Kashmir is an experience like no other. The valley of Kashmir is dotted with a 
        number of attractions, like the Shalimar Bagh and the Chashme Shahi Gardens. Tourists can also visit 
        the many mosques, temples, and shrines scattered across the state. Kashmir is the epitome of 
        beauty and culture. The stunning mountains, lush valleys, and picturesque meadows make it a 
        paradise for travelers. One can explore the many monuments and the unique culture and history of 
        the place. The mouth-watering cuisine and plethora of outdoor activities make Kashmir an ideal 
        destination for adventurers. So if you're looking for a beautiful place to escape and relax, Kashmir is 
        the abode for you!
      </p>
      <div className='text-center'>
      <button onClick={openPopup}className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Jammu & Kashmir now!</button></div>
      
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default AboutJK
