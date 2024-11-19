import React, { useState } from 'react'
import OtpInput from './OtpInput'

const PhoneotpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOtpInput, setShowOtpInput]= useState(false)

    const handlePhoneNumber =(event)=>{
        setPhoneNumber(event.target.value)
     };

    
    const handlePhoneSubmit =(event)=>{
        event.preventDefault();

        const regex =/[^0-9]/g;
        if (phoneNumber.length<10 || regex.test(phoneNumber)){
        alert("Invalid Phone Number");
        return;
        }
        setShowOtpInput(true)

    };
    const onOtpSubmit=( otp)=>{
        console.log("Login Successful",otp);
    }
  return (
    <div className='text-center'>
     {!showOtpInput ?<form onSubmit={ handlePhoneSubmit}>
        <input type='text' value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter Phone Number' className='border border-black rounded-lg shadow-lg mr-10 h-10 ' />
        <button type='submit' className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold w-auto  p-2 rounded-md mt-6 mb-5">Submit</button>
     </form>:<div>
            <p> Enter OTP Sent to {phoneNumber}</p>
            <OtpInput length={4}  onOtpSubmit={onOtpSubmit}/>

        </div>}
       
    </div>
  )
}

export default PhoneotpForm