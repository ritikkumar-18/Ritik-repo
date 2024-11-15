// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {  Link, useNavigate } from 'react-router-dom';






// const Slide = () => {
//   const navigate = useNavigate();
//   const goTo=()=>{
//     navigate('/JK');
//   }


  

//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 5000,
//         autoplaySpeed: 2000,
//         cssEase: "linear"
//       };
        
//   return (
//     <div className=' bg-gray-100 w-auto m=auto'>
//         <div className='mt-20'>
//         <div className="container ">
//         <h2 className="text-4xl font-bold mb-16 px-10">Plan as per the best destinations in India</h2></div>
//               <Slider {...settings}>

//             {data.map((d) =>(
//                 <div className='bg-gray-100 h-[450px] text-black rounded-xl'>


//                     <div className='h-56 rounded-t-xl bg-gray-100 flex justify-center items-center mx-10'>
                      
//                       <img src={d.image} alt='' onClick={goTo} className='h-60 w-full object-cover rounded-2xl transform translate duration-300 hover:scale-105 cursor-pointer '/>
//                     </div>
//                     <div className=' bg-gray-100 flex flex-col justify-center items-center gap-4 p-4'>
                  
//                     <p className='text-xl font-semibold'>{d.name}</p>
//                     <p className='font-semibold'>From{d.price}/-per day</p>
//                    <Link to='/jk'><button onClick={goTo} className ='bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold py-3 px-6 rounded-md mt-4'>Plan a trip</button></Link>
//                     </div>
//                     </div>




//             ))}
//             </Slider>
//         </div>
//         <div className='bg-gray-100 mt-10 text-center mb-14'>
//         <button className='mt-2 py-2 px-4 translate-all border border-black rounded-lg hover:bg-black hover:text-white font-semibold'>Start your journey to India now !</button>
//       </div>
//     </div>
//   )
// }
const data=[
    {
        name: "Jammu & Kashmir",
        price: "₹11,295",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM1MDYxMDA4NTA0MzkwNzE2NTUyNzM0MzguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=", 
        route:'/jk',
      },
      {
        name: "Ladakh",
        price: "₹6,133",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjMyMzQxMjI0NjIxNTM0MzQ3NTM0MTc5NjkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=",
        route:'/lahore'
      },
      {
        name: "Kerala",
        price: "₹6,551",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM2MjM4NzMwNzEyNDEzNzg3ODQxNzk2ODguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=",
        route:'/kerala',
      },
      {
        name: "Rajasthan",
        price: "₹6,916",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc1MzU3OTQwODA0MDg5MzA3Nzg1MDM0MTc5NjkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=",
        route:'/rajasthan',
      },
      {
        name: "Andaman & Nicobar",
        price: "₹5,538",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM4NjQ2MDQ4NTg3NTYwNjUzNjg2NTIzNDQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=",
        route:'/an',
      },
      {
        name: "Himachal Pradesh",
        price: "₹7,838",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM5OTc3MjI3NTczODcxNjEyNTQ4ODI4MTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=",
        route:'/h',

      },
      {
        name: "Uttrakhand",
        price: "₹8,538",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzE1NDc1NDU1NzMyMzQ1NTgxMDU0Njg3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==",
        route:'/u'
      },
      {
        name: "Sikkim",
        price: "₹9,538",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzA1OTY3MDQ2NTc1NTQ2MjY0NjQ4NDM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==",
        route:'/s'
      },
      {
        name: "Goa",
        price: "₹7,500",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM2NzY0MTM1Njg3MzUxMjI2ODA2NjQwNjIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=",
      },
      {
        name: "Arunanchal Pradesh",
        price: "₹1,404",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNTUwNDQ0ODI0MjI1OTAyNTU3MzczMDQ2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==",
      },
      {
        name: "Meghalaya",
        price: "₹6,555",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNjAyNDA0MTQ4MDQ5MzU0NTUzMjIyNjU2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==",
      },
      {
        name: "Assam",
        price: "₹3,555",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNTU2ODY0NzQyOTk2NjkyNjU3NDcwNzAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==",
      },
      {
        name: "Pondicherry",
        price: "₹6,479",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1Mjk2ODQ3NDUyNTMwODYwOTAwODc4OTA2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==",
      },
      {
        name: "Punjab",
        price: "₹3,852per day",
        image: "https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzAxNDM5Njc0NDQxODE0NDIyNjA3NDIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==",
      },
      {
        name: "Chattisgarh",
        price: "₹3,860per day",
        image:"https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNTY5ODg3NjAzNDczNjYzMzMwMDc4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==",
      },
    
]
// export default Slide
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  useNavigate } from 'react-router-dom';

const Slide = () => {
  const navigate = useNavigate();

  
  
  const goTo = (route) => {
    navigate(route); 
  
  };
   
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="bg-gray-100 w-auto m-auto">
      <div className="mt-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 px-10">Plan as per the best destinations in India</h2>
        </div>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-gray-100 h-[450px] text-black rounded-xl">
              <div className="h-56 rounded-t-xl bg-gray-100 flex justify-center items-center mx-10">
                <img
                  src={d.image}
                  alt=""
                  onClick={()=>goTo(d.route)} 
                  className="h-60 w-full object-cover rounded-2xl transform translate duration-300 hover:scale-105 cursor-pointer"
                />
              </div>
              <div className="bg-gray-100 flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="font-semibold">From {d.price}/-per day</p>
                <button 
                  onClick={()=>goTo(d.route)} 
                  className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold py-3 px-6 rounded-md mt-4"
                >
                  Plan a trip
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-gray-100 mt-10 text-center mb-14">
        <button className="mt-2 py-2 px-4 translate-all border border-black rounded-lg hover:bg-black hover:text-white font-semibold">
          Start your journey to India now!
        </button>
      </div>
    </div>
  );
};


export default Slide;

