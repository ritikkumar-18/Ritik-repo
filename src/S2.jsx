import React from 'react'
import Slider from 'react-slick'



const content =[
    {
        name:'Gangtok',
        description:'Mountains, Adventure, Treks, Monasteries, Culture',
        price:'₹5,093',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjQ3MTUwMjc5NzczMDA4ODIzMzk0Nzc1MzkwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{
    name:'Lachung',
    description:'Mountains, Adventure, Treks, Nature, Culture',
    price:'₹5,467',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk3NDYwMjY5MTY2MzY5NDM4MTcxMzg2NzE4OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0='
},

{
   name:'Lachen',
   descriptio:'Mountains, Adventure, Treks, Nature, Culture',
   price:'₹5,341',
   image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk3NDYyNDAxMDI2MjIwMzIxNjU1MjczNDM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{

    name:'Namchi',
    description:'Mountains, Adventure, Treks, Nature, Culture',
    price:'₹3,240',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzE0NDYyNzUxMTA5MDg5ODUxMzc5Mzk0NTMxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},


{
    name:'Yukson',
    description:'Mountains, Adventure, Treks, Nature, Culture',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzE0NDc3MDExNDI5MzA3NDYwNzg0OTEyMTA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

]

const S2 = () => {
    const settings = {
        dots:true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    
    <div className='bg-gray-100 container  px-4 mt-14'>
            <h2 className='text-3xl font-bold text-gray-800 mb-16'>Top locations across Sikkim</h2> 
                <div className='grid grid-cols-1 gap-4 mb-8 ml-32 '>
                <Slider {...settings}>
                {content.map((contents,index)=>(
                    <div key={index} className='bg-gray-100 rounded-lg overflow-hidden mx-auto '>
                        <img src={contents.image}alt={contents.name}className='h-full w-full object-cover rounded-b-lg '/>
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-gray-800'>{contents.name}</h3>
                            <p className='text-gray-600'>{contents.description}</p>{contents.price&&(
                                <p className='text-black font-bold mt-2'>From{contents.price}/-per day</p>
                            )}
                     </div>
                    </div>

                ))}
            
                  </Slider>
                  </div>
            
        </div>
  )
}

export default S2