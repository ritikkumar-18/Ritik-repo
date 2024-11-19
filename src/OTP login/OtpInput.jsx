import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({length = 4 ,onOtpSubmit =() => {}}) => {
     const [otp,setOtp]=useState(new Array(length).fill(" "));
     const inputrefs=useRef([]);

     useEffect(()=>{
        if(inputrefs.current[0]){
            inputrefs.current[0].focus();
        }
     })
    //  console.log(inputrefs)

     const handleChange =(index ,e )=>{
        const value = e.target.value;
        if(isNaN(value))return
        const newOtp =[...otp];
        newOtp[index]=value.substring(value.length -1);
        setOtp(newOtp);

        const combinedOtp =newOtp.join("");
        if(combinedOtp.length===length);
        onOtpSubmit(combinedOtp)


        if(value && index < length- 1 && inputrefs.current[index + 1]){
            inputrefs.current[index +1 ].focus()
        }

     }
     const handleClick=()=>{}
     const handleKeyDown =()=>{}
  return (
    <div>
        {
            otp.map((value,index)=>{
                return <input key={index} type='text'  ref ={(input)=>(inputrefs.current[index]=input)}value={value} onChange={(e)=> handleChange( index ,e )} onClick={()=> handleClick(index)}
                    onKeyDown={(e)=> handleKeyDown(index, e)} className='w-[40px] h-[40px] m-[5px] rounded-lg shadow-md shadow-black text-center border border-black mt-10 p-3'
                />

            })
           
         }
    </div>
  )
}

export default OtpInput