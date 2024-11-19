
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
import { Otp } from './Otp.jsx'
import Otplogin from './OTP login/Otplogin.jsx'
import OtpAuthentication from './Loginpage.jsx'


  



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
      {/* <Otp/> */}
      
      <OtpAuthentication/>
      
      
    </>
  )
}

export default App
