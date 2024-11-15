
import React from 'react';
import Slider from 'react-slick'
 export default function H3(){
   

const trips = [
    {
      title: "Manav Saraf's Itinerary",
      locations: "Bir Billing   •   Barot",
      curator: " Curated by Manav Saraf",
      nights: "3 nights",
      details:'2 Stays ︱ 1 Transfers ︱ 0 Flights ︱ 0 Activities',
      price: "₹12,923",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L2JpcmJpbGxpbmd0cmVra2luZy5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',       
    },
    {
      title: "Manali excursion for Students",
      locations: "Manali",
      curator: "Handcrafted by us",
      nights: "3 nights",
      details:'2 Stays ︱ 1 Transfers ︱0 Flights ︱ 0 Activities  ',
      price: "₹7,376",
      people: "for per person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3Zpc2hhbC1iaHV0YW5pLXVneWZ3ZXlva3ZhLXVuc3BsYXNoLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwLCJoZWlnaHQiOjMwMH19fQ==',
    },
    {
      title: "Ultimate Himachal Roadtrip",
      locations: " Jibhi    •   Kasol   •   Amritsar  •  McLead Ganj  •  Bir Billing",
      curator: " Handcrafted by Us",
      nights: "17 nights",
      details:'1 Stays ︱ 0 Transfers ︱ 0 Flights ︱7 Activities',
      price: "₹52,806",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3Jpc2hhYmgtcGFuZG9oLW0xcGZ4Z3EtNXgwLXVuc3BsYXNoLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
   
    },
    {
      title:"Botlab's Manali Excurion",
      locations:'Manali',
      curator:' Curated by Dhruv',
      nights:'2 nights',
      details:'2 Stays ︱2 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹8,770',
      people:'for per person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3Zpc2hhbC1iaHV0YW5pLXVneWZ3ZXlva3ZhLXVuc3BsYXNoLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwLCJoZWlnaHQiOjMwMH19fQ==',
    },
    {
        title:"Pawan's Himachal Excusrion",
        locations:' Solang Valley   •   Naggar   •   Manali',
        curator:'Curated by Pawan Kumar Singh',
        price:'₹29,335',
        people:'for 2 person',
        nights:'4 nights',
        details:'2 Stays ︱ 1 Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk2MDY0Njg1MzQ4Mjk2MTY1NDY2MzA4NTkzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',

    },

    {
       title:"Romantic Retreat to Manali",
       locations:' Naggar   •   Kullu   •   Manali',
       curator:' Curated by Ritika Sahu ',
       details:'1 Stays ︱ 1 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹55,370',
       people:'for 2 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk2MDY0Njg1MzQ4Mjk2MTY1NDY2MzA4NTkzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
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
                               <p className='text-lg font-semibold'>{trip.price}/-</p>
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
