
import React from 'react';
import Slider from 'react-slick'
 export default function R3(){
   

const trips = [
    {
      title: "Shahbaz's Jaipur and Ajmer's Cultural Immersion",
      locations: "Ajmer    •   Pushkar    • Jaipur  ",
      curator: "Shahbaz Ansari",
      nights: "3 nights",
      details:'2 Stays ︱ 1 Transfers ︱ 0 Flights ︱ 0 Activities',
      price: "₹31,005",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',       
    },
    {
      title: "Shivani's Jaipur and Ajmer's Cultural Immersion",
      locations: " Ajmer    •   Pushkar    • Jaipur ",
      curator: "Shivani Kumari Agarwal",
      nights: "3 nights",
      details:'2 Stays ︱ 1 Transfers ︱0 Flights ︱ 0 Activities  ',
      price: "₹31,005",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
    {
      title: "Keshav's Jaipur and Ajmer's Cultural Immersion",
      locations: "Ajmer    •   Pushkar    • Jaipur",
      curator: "Kesahv",
      nights: "3 nights",
      details:'2 Stays ︱ 1 Transfers ︱ 0 Flights ︱0 Activities',
      price: "₹31,005",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
   
    },
    {
      title:"Dibakar's Jaipur and Ajmer's Cultural Immersion",
      locations:'Ajmer    •   Pushkar    • Jaipur',
      curator:'Dibakar',
      nights:'3 nights',
      details:'1 Stays ︱3 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹31,005',
      people:'for 2 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
    {
        title:"Keshav's Jaipur and Ajmer's Cultural Immersion",
        locations:' Ajmer    •   Pushkar    • Jaipur',
        curator:'Keshav',
        price:'₹31,005',
        people:'for 2 person',
        nights:'3 nights',
        details:'2 Stays ︱ 1  Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',

    },

    {
       title:"Keshav's Jaipur and Ajmer's Cultural Immersion",
       locations:'Ajmer    •   Pushkar    • Jaipur',
       curator:'Kesahv',
       nights:'3 nights',
       details:'2 Stays ︱ 1 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹31,005',
       people:'for 2 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
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
                       <p className='text-xs text-gray-400'>{trip.curator}</p>
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
