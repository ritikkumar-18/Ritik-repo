import React from 'react'
import { Navbar } from './Navbar'
import { Button } from './Jammubutton'
import Slides from './JammuOTher'
import WhyPlanWithUs from './JammuForm'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import Form from './Footer'
import { G1 } from './G1'
import G2 from './G2'
import { useEffect } from 'react'
import G3 from './G3'
import G4 from './G4'

const Goa = () => {
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
      <G1/>
      <G2/>
      <G3/>
      <G4/>
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

export default Goa