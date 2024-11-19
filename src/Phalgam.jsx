import React from 'react'
import { Navbar } from './Navbar'
import Form from './Footer'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import Slides from './JammuOTher'
import WhyPlanWithUs from './JammuForm'
import { P1 } from './P1'
import P2 from './P2'
import P3 from './P3'
import { useEffect } from 'react'

const Phalgam = () => {
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
    <P1/>
    <P2/>
    <P3/>
    
    <Slides/>
    <WhyPlanWithUs/>
    <Happy/>
    <Jammuarticle/>
    <Jammucontact/>
    <Form/>
    </>
  )
}

export default Phalgam