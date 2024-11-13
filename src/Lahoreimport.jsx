import React, { useEffect } from 'react'
import { Lahore } from './Lahore'
import Lahorecontent from './Lahore.content'
import { Navbar } from './Navbar'
import Form from './Footer'
import { Happy } from './Happy'
import LahoreTrips from './Lahoreuser'
import Aboutlahore from './Lahoremap'
import WhyPlanWithUs from './JammuForm'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import Slides from './JammuOTher'
import { Button } from './Jammubutton'

const Lahoreimport = () => {
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
    <Lahore/>
    <Lahorecontent/>
    <LahoreTrips/>
    <Aboutlahore/>
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
  export default Lahoreimport
