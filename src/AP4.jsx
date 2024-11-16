import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

function AP4() {
  
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);

  return (
    <div className='mx-28 '>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Arunachal Pradesh</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Arunachal Pradesh is a beautiful destination in India with its stunning landscapes, lush green forests, and picturesque mountains. It is known as the "The Land of Rising Sun", and is home to many unique cultural and religious practices. The state is a paradise for nature lovers and adventure seekers, offering a wide range of activities such as trekking, rafting, kayaking, mountain biking, and bird watching. It also has a rich cultural heritage, with its many tribal communities, traditional festivals, and ancient monuments. With its stunning scenery, vibrant culture, and abundance of outdoor activities, Arunachal Pradesh is the perfect destination for a traveler looking for an unforgettable experience.



      </p>
      <div className='text-center'>
      <button onClick={openPopup}className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Arunachal Pradesh now!</button></div>
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default AP4