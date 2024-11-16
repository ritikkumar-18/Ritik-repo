import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

function S4() {
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);
  return (
    <div className='mx-28 '>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Sikkim</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Sikkim is a small yet beautiful state in India, nestled in the Himalayas. It is a paradise for nature lovers and adventure seekers. The state is home to some of the most spectacular mountain views, lush green valleys, pristine lakes, and breathtaking waterfalls. For trekking enthusiasts, there are numerous trails to explore, ranging from easy to challenging. The state is also known for its rich cultural heritage and Buddhist monasteries. The locals are warm and friendly and the food is delicious. Sikkim is also home to the world’s third highest peak, Kanchenjunga, making it a great destination for mountaineers. With its stunning natural beauty and unique culture, Sikkim is an ideal destination for travellers looking for an unforgettable experience.


      </p>
      <div className='text-center'>
      <button onClick={openPopup}className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Sikkim now!</button></div>
      
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default S4