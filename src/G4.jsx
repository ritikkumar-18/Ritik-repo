import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

function G4() {
  
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);

  return (
    <div className='mx-28'>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Goa</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Goa is an Indian state situated on the south-western coast. Maharashtra and Karnataka are the neighboring states to North and southeast respectively, with the Arabian Sea surrounding on its western side. The beauty of Goa is due to the beaches lying along the Arabian Sea and the Western Ghats covering them on the sides. The flora and fauna of Goa are diverse due to the climate and its belongingness to the sea. A large variety of water life exists here and gives life to the delicious seafood for the lover of them. Goa is perfect for a getaway to clean beaches, breezy wind, amazing food, and party vibes. Famous for its pristine beaches and lip-smacking seafood, Goa is also considered the party capital of India. Generally divided into two sides, North and South, North Goa is the place for you to party and South Goa is the place to just unwind and relax. Goa also has a rich heritage since it was an overseas holding for the Portuguese territory and hence you can see a lot of Portuguese settlements too. It is the smallest state in India and has the highest GDP per capita among all other states. Panaji is the capital of Goa and Vasco Da Gama is its largest city. It is considered the richest state of India and therefore the development of the state is at its peak.


      </p>
      <div className='text-center'>
      <button onClick={openPopup}className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Goa now!</button></div>
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default G4