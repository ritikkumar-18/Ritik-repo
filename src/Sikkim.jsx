import React from 'react'
import { Navbar } from './Navbar'
import Form from './Footer'
import { useEffect } from 'react'
import { Button } from './Jammubutton'
import Slides from './JammuOTher'
import WhyPlanWithUs from './JammuForm'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import { S1 } from './S1'
import S2 from './S2'
import S3 from './S3'
import S4 from './S4'

const Sikkim = () => {
    useEffect(() => {
        // Scroll to the top of the page when App1 is rendered
        window.scrollTo({
            top:0,
            behavior:'smooth'
          });
          
        }, []);
  return (
    <>
    <Navbar/>
    <S1/>
    <S2/>
    <S3/>
    <S4/>
    <Button/>
    <Slides/>
    <WhyPlanWithUs/>
    <Happy/>
    <Jammuarticle/>
    <Jammucontact/>
    <Form/>

    </>
  )
}

export default Sikkim