import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

function AS3() {
  
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);

  return (
    <div className='mx-28 '>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Assam</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Assam is a beautiful Indian state in the Northeastern part of the country. It is a paradise for nature lovers, with its lush green tea gardens, dense forests, and stunning wildlife. It is home to the one-horned rhinoceros, the endangered species of the Asian elephant, and the rare species of the Bengal tiger. The mighty Brahmaputra River flows through the region, making it a perfect spot for river rafting and fishing. Assam is also known for its rich culture and heritage, with many ancient temples, including the Kamakhya Temple. The local cuisine is unique and delicious, with its own distinct flavours. For a truly unique experience, visit the Majuli Islands, the largest river island in the world, and the Kaziranga National Park, home to the one-horned rhinoceros. Assam is a perfect destination for travellers seeking a unique and unforgettable experience.




      </p>
      <div className='text-center'>
      <button onClick={openPopup}className="text-black  text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Assam now!</button></div>
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default AS3