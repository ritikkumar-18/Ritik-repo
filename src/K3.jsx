
 import React from 'react';
 import Slider from 'react-slick'
  export default function K3(){
    

 const trips = [
     {
       title: "Volunteering in The Heritage City",
       locations: "Shravanabelagola    •   Kochi    •   Mysore    •   Coorg    •   Mandya    •   Ooty",
       curator: " Curated by Muskan",
       nights: "14 nights",
       details:'2 Stays ︱ 4 Transfers ︱ 0 Flights ︱ 3 Activities',
       price: "₹62,519",
       people: "for 2 person",
       image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5LzE1NTk4OTE2NDFfc2h1dHRlcnN0b2NrXzE1Mjk0MTgzMi5qcGcuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19',       
     },
     {
       title: "Ananyas's Romantic Getaway to Kerala",
       locations: " Trivandrum    •   Alleppey   •   Kochi",
       curator: " Curated by Ananya Purty",
       nights: "5 nights",
       details:'2 Stays ︱ 4 Transfers ︱0 Flights ︱ 0 Activities  ',
       price: "₹99,110",
       people: "for 2 person",
       image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjIzNzcwNjc0MTM2NzYwMjM0ODMyNzYzNjcxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=',
     },
     {
       title: "Corporate Gateway to Wayanad",
       locations: "Wayanad",
       curator: " Handcrafted by Us",
       nights: "4 nights",
       details:'1 Stays ︱ 0 Transfers ︱ 0 Flights ︱7 Activities',
       price: "₹11,172",
       people: "for per person",
       image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjEzMzIzMDM2Mzc1NjMyMjg2MDcxNzc3MzQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    
     },
     {
       title:"Mohamed's Getaway with friends to...",
       locations:'Munnar',
       curator:' Curated by Mohamed numan',
       nights:'3 nights',
       details:'1 Stays ︱3 Transfers ︱ 0 flights ︱ 0 Activities',
       price:'₹61,579',
       people:'for 7 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjIzNjAyMDExMjQwMTkzODQzODQxNTUyNzM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=',
     },
     {
         title:"Rocky's Solo Backpacking in Kerala",
         locations:' Trivandrum    •   Alleppey   •   Kochi',
         curator:'Curated by Rocky',
         price:'₹51,774',
         people:'for 4 person',
         nights:'4 nights',
         details:'2 Stays ︱ 4 Transfers ︱0 Flights ︱ 0 Activities ',
         image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjIzNzcwNjcyNTUwOTMzMzYxMDUzNDY2Nzk2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19',

     },

     {
        title:"Sreekesh's Romantic Getaway to Kerala",
        locations:' Trivandrum    •   Alleppey   •   Kochi',
        curator:' Curated by Sreekesh n',
        details:'2 Stays ︱ 3 Transfers ︱0 Flights ︱ 0 Activities ',
        price:'₹18,514',
        people:'for 2 person',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjI0NDI5OTU4MDAwMDk3Mjc0NzgwMjczNDM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=',
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
