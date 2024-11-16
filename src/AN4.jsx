import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

function AN4() {
  
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);

  return (
    <div className='mx-28 '>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Andaman & Nicobar</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Andaman is a beautiful destination for travelers looking for a tropical paradise. It is an archipelago comprising of many islands located in the Bay of Bengal, off the eastern coast of India. Blessed with captivating beauty, it is an ideal place to relax and unwind. From pristine beaches to lush green forests, this place has something to offer to everyone. It's an ideal place to enjoy some beautiful sunsets and a great opportunity to explore the unique wildlife and marine life. The crystal clear waters of Andaman are perfect for snorkeling and scuba diving, allowing tourists to explore the colorful coral reefs and beautiful underwater life. It offers many activities like sea walking, glass bottom boat rides, banana boat rides, and jet skiing. Andaman is also renowned for its heritage, culture, and history. It is home to many ancient monuments, caves, and forts. Tourists can also explore the tribal villages of Andaman, meet the local community, and learn about their culture and traditions. Whether you're looking for a relaxing beach holiday, a thrilling dive adventure, or an educational expedition, the Andaman Islands have something to offer for all types of travelers.

      </p>
      <div className='text-center'>
      <button onClick={openPopup}className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Andaman & Nicobar now!</button></div>
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default AN4