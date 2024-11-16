import React from 'react'
import Slider from 'react-slick'



const content =[
    {
        name:'Jowai',
        description:'waterfalls, Nature, Hills, Culture, Tradition',
        price:'',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTIzMTEyMDE5Nzc5NjgyMTU5NDIzODI4MS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Jaintia Hills',
    description:'Living Root Bridges, Lush Greenery, Tribal Culture',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTIyNjY5OTExMzM2ODk4ODAzNzEwOTM3NS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19'
},

{
   name:'Dawki',
   description:'Livings Root Bridges, Crystal Clear Water',
   price:'',
   image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE0MTc0NDk5MjExMzExMzQwMzMyMDMxMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{

    name:'cherrapunji',
    description:'Rainforests, Living Roots Bridges, Mawsmai',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU0Mjk0ODQwMjU3MTY3ODE2MTYyMTA5NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Shillong',
    description:'Mountains, Nature, Adventure, Waterfalls, Culture',
    price:'₹6,555',
    image:'https://d31aoa0ehgvjdi.cloudfront.net/media/website/transparent.png',
},


{

    name:'Mawphlang',
    description:'Living Root Bridges, Meghalaya, Nature, Adventure',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI1OTE3MDc3MDU0OTc3NDE2OTkyMTg3NS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Tura',
    description:'Hills, Nature, Culture, Adventure, Wildlife',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjY0MTU0ODYwODc2MTA0ODMxNjk1NTU2NjQwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{
    name:'Mawlynnog',
    description:'Cleanest Village, Living Root Bridges, Nature',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI1OTAwNzQyMTEzNTkwMjQwNDc4NTE1Ni5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Williamnagar',
    description:'Hills, Nature, Trekking, Culture, Local Tribes',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU2NTU2MDI1OTQxMzcxOTE3NzI0NjA5NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Nongpoh',
    description:'Living Root Bridges, Meghalaya, Adventure',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI3MDc3MDQ3NDcyMDAwMTIyMDcwMzEyNS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

]

const M2 = () => {
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
            <h2 className='text-3xl font-bold text-gray-800 mb-16'>Top locations across Rajasthan</h2> 
                <div className='grid grid-cols-1 gap-4 mb-8 ml-32 '>
                <Slider {...settings}>
                {content.map((contents,index)=>(
                    <div key={index} className='bg-gray-100 rounded-lg overflow-hidden mx-auto '>
                        <img src={contents.image}alt={contents.name}className='h-full w-full object-cover rounded-b-lg '/>
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-gray-800'>{contents.name}</h3>
                            <p className='text-gray-600'>{contents.description}</p>{contents.price&&(
                                <p className='text-black font-bold mt-2'>From {contents.price}/-per day</p>
                            )}
                     </div>
                    </div>

                ))}
            
                  </Slider>
                  </div>
            
        </div>
  )
}

export default M2