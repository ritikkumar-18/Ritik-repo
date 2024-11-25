import React from 'react'

function Itinerary() {
    const route = [
        { location: "Srinagar", nights: "1 Night", color: "bg-black" },
        { location: "Pahalgam", nights: "2 Nights", color: "bg-blue-500" },
        { location: "Gulmarg", nights: "1 Night", color: "bg-yellow-500" },
        { location: "Srinagar", nights: "1 Night", color: "bg-green-500" },
        { location: "New Delhi ", nights: "3 Night", color: "bg-orange-500" },
      ];
    
  return (
    <div className='min-h-screen '>
        <div className='container mx-auto p-6'>
            
                <div className='p-4 border-b'>
                    <h1 className='text-2xl font-bold text-black'>Winter Wonderland Kashmir</h1>
                    <p className=' text-xl text-gray-400 font-semibold mt-3'>Budget
                    </p>
                    <p className='text-black font-semibold text-xl mt-3'>Affoardable</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3'>
                    <div className='md:col-span-2'>
                        <img src='https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3phbnNrYXIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvdmVyIn19fQ=='alt='kashmir' className='w-full h-full object-cover rounded-bl-lg'/>
                    </div>
                    <div className='grid grid-cols-1 gap-2 p-4'>
                        <img src='https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L2thc2hibG9nLTEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MzYsImhlaWdodCI6MTUwLCJmaXQiOiJjb3ZlciJ9fX0='alt='side'className=' w-full h-full rounded-lg object-cover'/>
                        <img src='https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5LzEtMjUtMTUxMTU5NzczNy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQzNiwiaGVpZ2h0IjoxNTAsImZpdCI6ImNvdmVyIn19fQ=='alt='side'className=' w-full h-full  mt-5 rounded-lg object-cover'/>
                    </div>
                </div>
                <div className="px-6 py-4 flex items-center justify-between border-t">
          <div className="flex space-x-24 hidden md:block">
            
            <button className="text-black text-lg font-medium border-b-2   border-transparent hover:border-yellow-400 hover:text-yellow-400 hover:bg-[#262626]  px-4 py-1 rounded-md transition-all duration-300 ease-in-out">
              Brief
            </button>
            <button className="text-black text-lg font-medium hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400  hover:bg-[#262626]  px-4 py-1 rounded-md transition-all duration-300 ease-in-out">
              Itinerary
            </button>

             <button className="text-black text-lg font-medium hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:bg-[#262626] px-4 py-1 rounded-md transition-all duration-300 ease-in-out">
              Stays
            </button>

            <button className="text-black text-lg font-medium hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:bg-[#262626] px-4 py-1 rounded-md transition-all duration-300 ease-in-out">
              Activites
            </button>
           </div> 
          <div>
            <button className="bg-yellow-400 text-black text-lg font-semibold py-2 px-4 border border-black rounded-lg shadow-md hover:bg-black hover:text-white transition-all sm:text-sm">
              Log in to proceed
            </button>
          </div>
        
            
            
          </div>
            
        </div>

     <div className="grid grid-col grid-cols-2 lg:flex-row gap-6 p-6 md:grid-cols-2 md:w-auto sm:grid-cols-2 sm:text-left "> 
  
      <div className="w-full lg:w-1/3 ">
        <h2 className="text-3xl font-bold mb-8 ml-10">Route</h2>
        <div className="space-y-4">
          {route.map((stop, index) => (
            <div key={index}
              className="flex items-center gap-4 p-4 "
            >
              <div
                className={`w-4 h-4 ${stop.color} rounded-full`}
              ></div>
              <div>
                <h3 className="text-lg font-semibold">{stop.location}</h3>
                <p className="text-sm text-gray-500">{stop.nights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="w-full lg:w-2/3 mt-12">
        <iframe
          title="Google Map"
          className="w-full h-96 border rounded-md"
          src="https://www.google.com/maps/embed"
        ></iframe>
      </div>


      
      </div>
    </div>
  );
};

export default Itinerary