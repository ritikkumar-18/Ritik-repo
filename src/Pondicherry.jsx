import React from 'react'
import { Navbar } from './Navbar'
import { Button } from './Jammubutton'
import Slides from './JammuOTher'
import WhyPlanWithUs from './JammuForm'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import Form from './Footer'
import { PO1 } from './PO1'
import PO2 from './PO2'
import PO4 from './PO4'
import PO3 from './PO3'
import { useEffect } from 'react'

const Pondicherry = () => {
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
    <PO1/>
    <PO2/>
    <PO3/>
    <PO4/>
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

export default Pondicherry