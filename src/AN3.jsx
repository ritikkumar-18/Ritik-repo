
import React from 'react';
import Slider from 'react-slick'
 export default function AN3(){
   

const trips = [
    {
      title: "Nizzar's Getaway with Friends to Andaman & Nicobar",
      locations: "Havelock  •   Port Blair ",
      curator: " Curated by NIZZAR",
      nights: "3 nights",
      details:'2 Stays ︱ 2 Transfers ︱ 2 Flights ︱ 0 Activities',
      price: "₹7,47,272",
      people: "for 30 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjQ5MjU3NTI2Mzk3NzA1MDc4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',       
    },
    {
      title: "Ali's Family Excursion in Andaman Islands",
      locations: "Andaman Islands",
      curator: " Curated by Aki Sajid",
      nights: "6 nights",
      details:'0 Stays ︱ 0 Transfers ︱0 Flights ︱ 0 Activities  ',
      price: "",
      people: "",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net/media/website/transparent.png',
    },
    {
      title: "Badrinath's Getaway to Andaman & Nicobar",
      locations: "Neil Island • Havelock • Port Blair",
      curator: "Curated by Badrinath S",
      nights: "6 nights",
      details:'4 Stays ︱ 3 Transfers ︱ 0 Flights ︱7 Activities',
      price: "₹29,319",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjUyNTcxOTc2MTg0ODQ0OTcwNzAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
   
    },
    {
      title:"Nishit's Family Excrusion in Andaman & Nicobar",
      locations:'Neil Island • Port Blair',
      curator:' Curated by Nishit',
      nights:'5 nights',
      details:'3 Stays ︱3 Transfers ︱ 0 flights ︱ 2 Activities',
      price:'₹36,623',
      people:'for 3 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjUxMTgzNzYyNTUwMzU0MDAzOTA2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
    {
        title:"Nishit's Family Excrusion in Andaman & Nicobar",
        locations:' Neil Island • Port Blair',
        curator:'Curated by Nishit',
        price:'₹41,096',
        people:'for 3 person',
        nights:'4 nights',
        details:'3 Stays ︱ 3 Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjQ5MjU3NTI2Mzk3NzA1MDc4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',

    },

    {
       title:"Shrikant's Family Excrusion in Andaman & Nicobar",
       locations:' Neil Island • Port Blair',
       curator:' Curated by Shrikant Tiwari',
       details:'3 Stays ︱ 2 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹25,616',
       people:'for 2 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjUzNDA5MDQ5NTEwOTU1ODEwNTQ2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
  ];
  const settings = {
   dots:true,
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   speed: 2000,
   autoplaySpeed: 2000,
   cssEase: "linear"
 };

   return (
           <div className='p-6 bg-gray-100'>
               <h1 className='text-4xl font-bold mb-16'>Trip by our users</h1>
               <div className='grid md:grid-cols-1 mx-auto gap-4'>
               <Slider {...settings}>
               {trips.map((trip,index)=>(
               <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden mx-auto mb-10'>
                   <img src={trip.image}alt={trip.name} className='w-full h-48 object-cover'/>
                   <div className='p-4'>
                       <h2 className='text-lg font-semibold'>{trip.title}</h2>
                       <p className='text-sm text-gray-500'>{trip.locations}</p>
                       <p className='text-xs text-black font-semibold'>{trip.curator}</p>
                       <div className='text-gray-700 text-sm mt-2'>
                           <p>{trip.details}</p>
                       </div>
                       <div className=' flex justify-between items-center mt-4'>
                           <div>
                               <p className='text-lg font-semibold'>{trip.price}</p>
                               <p className='text-xs text-gray-500'>{trip.people}</p>
                           </div>
                           <div className='text-center'>
                           <button className='bg-yellow-400 text-black px-3 py-1 rounded hover:bg-black hover:text-white'>View Details</button></div>
                       </div>
                   </div>
                   
                </div>     
            ))}
            </Slider>
                   </div>
       </div>
      
  )}
