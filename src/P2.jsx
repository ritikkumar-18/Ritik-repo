
import React from 'react';
import Slider from 'react-slick'
 export default function P2(){
   

const trips = [
    {
      title: "Winter Wonderland Kashmir",
      locations: "Pahalgam   •   Srinagar   •   Gulmarg    •   NewDelhi   ",
      curator: " Handcrafetd by Us",
      nights: "5 nights",
      details:'0 Stays ︱ 0 Transfers ︱ 0 Flights ︱ 0 Activities',
      price: "",
      people: "",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3phbnNrYXIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwLCJoZWlnaHQiOjMwMH19fQ==',       
    },
    {
      title: "NY in Winter Wonderland of kashmir",
      locations: "Pahalgam   •   Srinagar   •   Gulmarg ",
      curator: " Curated by Physics Wallah",
      nights: "4 nights",
      details:'4 Stays ︱ 1 Transfers ︱0 Flights ︱ 1 Activities  ',
      price: "₹10,828",
      people: "for per person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3phbnNrYXIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwLCJoZWlnaHQiOjMwMH19fQ==',
    },
    {
      title: "Jafeer's Getaway With Friends to Jammu & Kashmir",
      locations: "Pahalgam   •   Srinagar ",
      curator: "Curated by Jafeer Alam",
      nights: "5 nights",
      details:'3 Stays ︱ 4  Transfers ︱ 0 Flights ︱0 Activities',
      price: "₹7,574",
      people: "for 4 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTY0MjkzMzA5ODk4MDMwNzU3OTA0MDUyNzM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
   
    },
    {
      title:"Krish's Getaway With Friends to Jammu & Kashmir",
      locations:'Pahalgam   •   Srinagar  • Sonamarg',
      curator:'Curated by Krish',
      nights:'8 nights',
      details:'4 Stays ︱3 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹10,693',
      people:'for 7 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1ODUzMDEwMTU0MzQ3NDg4ODgwMTU3NDcwNzAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
    {
        title:"Meet's getaway to Jammu & Kashmir",
        locations:' Pahalgam   •   Srinagar   •   Gulmarg',
        curator:'Curated by Meet Bambhaniya',
        price:'₹1,00,360',
        people:'for 2 person',
        nights:'6 nights',
        details:'4 Stays ︱ 3 Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net/media/website/transparent.png',

    },

    {
       title:"Monali's Family trip to Jammu & Kashmir",
       locations:' Pahalgam   •   Srinagar',
       curator:'Monali Borhade',
       details:'3 Stays ︱ 2 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹26,813',
       people:'for 2 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTY0MjkzMzA4MjQyNDQ3Mzc2MjUxMjIwNzAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
  ];
  const settings = {
   dots:true,
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   speed: 2000,
   autoplaySpeed: 1000,
   cssEase: "linear"
 };

   return (
           <div className='p-6 bg-gray-100 mt-14'>
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
