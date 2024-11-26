import React from 'react'
import Slider from 'react-slick'



const content =[
    {
        name:'Bikaner',
        description:'Camel Safari, Forts, History',
        price:'₹8,042',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjU2NzI1NzAyNDA4NTExNjM4NjQxMzU3NDIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==',
},

{
    name:'Jaipur',
    description:'Pink City, Historical Sites, Forts, Palaces',
    price:'₹9,355',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MTM1NjkzMjM5MzIwNTQ5OTY0OTA0Nzg1MTU2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ=='
},

{
   name:'Jaisalmer',
   description:'Desert, Forts, Culture, History',
   price:'₹12,578',
   image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjQyODM2OTIzMzEwMzUzNzU1OTUwOTI3NzM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{

    name:'Jodhpur',
    description:'Blue City, Forts, Palaces',
    price:'₹10,381',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjM3MDU5MTczMTQyMDA2Mzk3MjQ3MzE0NDUzMS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Pushkar',
    description:'Holy City, Rajasthan, Camel Fair, Brahma Temple',
    price:'₹6,865',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1ODUxMjk1NDI2OTQwNzE1MzEyOTU3NzYzNjcxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},


{

    name:'Udaipur',
    description:'Romantic, Palaces, Lakes, Heritage',
    price:'₹9,489',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjIyNzQxNjkwODUzNjI0MzQzODcyMDcwMzEyNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},


{
    name:'Alwar',
    description:'Historical, Forts, Wildlife, Nature',
    price:'₹7,534',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjAwNzE1NTc4MTYyNjcwMTM1NDk4MDQ2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Churu',
    description:'Wildlife, Forts, Desert, Heritage, Cultural',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEzODc3MTQwNjg2NTExOTkzNDA4MjAzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Chittorgarh',
    description:'Historical, Fort, Heritage',
    price:'₹5,431',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1OTI0ODAwMTUyNTE0MjM1OTczMzU4MTU0Mjk2OS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{
    name:'Fatehpur',
    description:'Mughal Architecture, Historical Sites',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE1MDA5MDMxOTk2NzI2OTg5NzQ2MDkzOC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Nawalgarh',
    description:'Heritage, Havelis, Art, Culture',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI2OTM4NzAyNzA5Njc0ODM1MjA1MDc4MS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Mandawa',
    description:'Heritage, Havelis, Art, Culture,Rajasthan',
    price:'₹7,972',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI1NjMxMjM0MDQwMjYwMzE0OTQxNDA2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Neemrana',
    description:'Historical, Forts, Palaces, Heritage',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI2OTczNjEzNTYwMTk5NzM3NTQ4ODI4MS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19'
},
{
    name:'Khuri Village',
    description:'Desert, CAmel Safari, Stargrazing',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2Nzc5MDk2NjQyMTczMDYzNzU1MDM1NDAwMzkwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{
    name:'Nathdwara',
    description:'Shrine, Temples, Pilgrimage, Art',
    price:'₹3,417',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI2ODk5NDEwMzUwMzIyNzIzMzg4NjcxOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Osian',
    description:'Desert, Temples, History, Culture',
    price:'₹2,891',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI3MTQ1MjM5MTU1MjkyNTEwOTg2MzI4MS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Bundi',
    description:'History, Forts, Palaces, Stepwells',
    price:'₹3,413',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEzMzI1NzUyNDAzNzM2MTE0NTAxOTUzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Kota',
    description:'Coaching, Education, Lake Pichola, Rajashthan',
    price:'₹2,945',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI0Mzk3NTMwMTE0NjUwNzI2MzE4MzU5NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

]

const R2 = () => {
    const settings = {
        dots:true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive:[
            {
              breakpoint:1200,
              settings:{
                slidesToShow:2,
                slidesToScroll:1,
                arrows:false,
                
              },
            },
            {
              breakpoint:768,
              settings:{
                slidesToShow:1,
                slidesToScroll:1,
                arrows:false,
                dots:false,
              },
            },]
      };
  return (
    
    <div className='bg-gray-100 container  px-4 mt-14'>
            <h2 className='text-3xl font-bold text-gray-800 mb-16 sm:text-2xl md:text-4xl'>Top locations across Rajasthan</h2> 
                <div className='grid grid-cols-1 gap-4 mb-8 ml-48 md:ml-48 sm:ml-auto mx-auto md:w-full md:h-full  '>
                <Slider {...settings}>
                {content.map((contents,index)=>(
                    <div key={index} className='bg-gray-100 rounded-lg overflow-hidden mx-auto '>
                        <img src={contents.image}alt={contents.name}className='h-full w-full object-cover rounded-b-lg xs:w-full xs:h-full sm:w-full sm:h-full'/>
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

export default R2