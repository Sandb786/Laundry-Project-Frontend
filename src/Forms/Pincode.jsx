import React from 'react'
import axios from 'axios'


export default function Pincode() 
{
    const [pincode,setPincode]=React.useState('');
    const [city,setCity]=React.useState('');
    const [state,setState]=React.useState('');

    const fatchData=(pin)=>
        {
            console.log('PIN: ',pin);
            
            axios.get(`https://api.postalpincode.in/pincode/${pin}`)
            .then((res)=>{console.log('DATA: ',res.data[0].PostOffice[2].State)})
            .catch((err)=>{console.log('ERROR: ',err)})
           
        }
  return (
    <div>
        
    </div>
  )
}
