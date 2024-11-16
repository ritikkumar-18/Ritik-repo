import React from 'react'
import { useState } from 'react'
import GetTravelForm from './GetTravelForm'

function PO4() {
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);
  

  return (
    <div className='mx-28 '>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Pondicherrry </h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Pondicherry is a beautiful coastal town in India, located in the southern part of the country. It is known for its French colonial architecture, golden beaches, and spiritual atmosphere. The old town of Pondicherry is a great place to explore, with its cobbled streets, colonial buildings, and quaint cafes. The city is also home to several temples, churches and monuments, making it a great place to explore India's rich cultural heritage. The beaches of Pondicherry are the perfect place to relax and unwind, with plenty of opportunities for swimming, sunbathing and watersports. Whether you're looking for a peaceful getaway or an exciting adventure, Pondicherry has something for everyone. With its laid-back atmosphere, stunning scenery and friendly locals, Pondicherry is the perfect destination for a memorable holiday.


      </p>
      <div className='text-center'>
      <button onClick={openPopup} className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Pondicherry now!</button></div>
      
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default PO4