
import { Head } from './Header'
import { Navbar } from './Navbar'
import { Content } from './Content'
import Why from './Why'
import Slide from './Slider'
import Country2 from './Countries2'
import { Form } from './Footer' 
import { Mood } from './Mood'
import { Happy } from './Happy'
import Europe from './Europe'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { JK } from './JK.jsx'
import GetTravelForm from './GetTravelForm.jsx'


  



function App() {

  return (
    <>
    
  
    
      <Navbar/>
      <Head/>
      <Content/>
      <Slide/>
      <Country2/>
      <Europe/>
      <Mood/>
      <Why/>
      <Happy/>
      <Form/>
      <GetTravelForm/>
      
    </>
  )
}

export default App
