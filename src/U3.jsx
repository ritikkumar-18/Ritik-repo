
import React from 'react';
import Slider from 'react-slick'
 export default function U3(){
   

const trips = [
    {
      title: "Akki's Family Excursion in Mussoorie",
      locations: "Mussoorie ",
      curator: "Curated by Akki rana",
      nights: "5 nights",
      details:'1 Stays ︱ 2 Transfers ︱ 0 Flights ︱ 0 Activities',
      price: "₹65,092",
      people: "for 4 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MTg0Njg2Njk3OTAxMzkxOTgzMDMyMjI2NTYyNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',       
    },
    {
      title: "Ayush's Getaway with Friend's to Uttarakhand",
      locations: " Dehradun    •   Haridwar    • Mussoorie  •  Rishikesh ",
      curator: "Curated by Ayush",
      nights: "4 nights",
      details:'3 Stays ︱ 3 Transfers ︱0 Flights ︱ 0 Activities  ',
      price: "₹27,540",
      people: "for 4 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MTE4NzA5MTgwNDI0OTUwMTIyODMzMjUxOTUzMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
    {
      title: "Geetansh's Getaway with Friend's to Uttarakhand",
      locations: "Dehradun    •   Jim Corbett National Park  • Rishikesh",
      curator: "Curated by Geetansh Kumar",
      nights: "3 nights",
      details:'3 Stays ︱ 3 Transfers ︱ 0 Flights ︱0 Activities',
      price: "₹46,149",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MTE4NzA5MTk2MzMyODkwOTg3Mzk2MjQwMjM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
   
    },
    {
      title:"Suryakant's Getaway with Friends to North India",
      locations:'Vrindavan    •   Rishikesh   • Jaipur',
      curator:'Curated by Suryakant Kamat',
      nights:'3 nights',
      details:'4 Stays ︱5 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹2,73,613',
      people:'for 10 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI0NzI0MTc3ODM3MzcxODI2MTcxODc1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
    },
    {
        title:"Vardan's Family Excursion in Nainital",
        locations:'Nainital',
        curator:'Curated by Vardan Chugh',
        price:'₹39,879',
        people:'for 4 person',
        nights:'3 nights',
        details:'1 Stays ︱ 2  Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MTY1ODczNzAxNzA1OTU4ODQzMjMxMjAxMTcxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',

    },

    {
       title:"Veema's Getaway with Friends to Nainital",
       locations:'Nainital',
       curator:'Curated by Vema Pooja Thanusri',
       nights:'3 nights',
       details:'1 Stays ︱ 2 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹54,416',
       people:'for 5 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MTY1ODczNzAxNzA1OTU4ODQzMjMxMjAxMTcxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
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
