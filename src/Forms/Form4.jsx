import { User } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Confirmation from './Confirmation';

export default function Form4(props) 
{
  const [Plan, setPlan] = useState('');

  
 // Create a new object and update the state properly
 const handlePlan=(plan)=>
{
  setPlan(plan);

 const updatedUserObj = { ...props.UserObj, selectedPlan: plan };
  props.setUserObj(updatedUserObj);
 
 console.log('User Object:', props.UserObj);
 
 }
 

  return (
    <>
      <form className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto" 
            onSubmit={(e) => { e.preventDefault(); props.progress(100); props.setSwitch(5); }}>

        <div className="mb-6">
          <h3 className="text-gray-800 text-xl font-bold text-center">Select The Plan </h3>
        </div>

        <section className="max-w-4xl text-center px-4 md:px-0">
          
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
            
            <div className={`p-6 w-80 bg-white shadow-lg rounded-lg  text-center cursor-pointer ${Plan === 'Basic' ? 'border-2 border-cyan-600' : ''}`} 
                 onClick={() => handlePlan('Basic')}>
              <h4 className="text-xl font-bold text-gray-800">Basic Plan</h4>
              <p className="text-gray-600 mt-2"><del>₹25/month</del> <br /> <span className='text-green-700'>Free</span> for 1 month</p>
              <ul className="mt-4 text-gray-600 space-y-2">
              <li>✔ All Feature </li>
                <li>✔ Admin Dashbord</li>
                
              </ul>
            </div>

            <div className={`p-6 w-80 bg-white shadow-lg rounded-lg text-center cursor-pointer ${Plan === 'Premium' ? 'border-2 border-green-600' : ''}`} 
                 onClick={() => handlePlan('Premium')}>
              <h4 className="text-xl font-bold text-gray-800">Premium Plan</h4>
              <p className="text-gray-600 mt-2">₹250/Year</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li>✔ All Feature </li>
                <li>✔ Admin Dashbord </li>
                <li>✔ Contect Support.... </li>
                
              </ul>
            </div>

          </div>

        </section>

        {/* Submit Button */}
        <div className="mt-8">
          <button type="submit" 
                  onClick={() => { 
                    if (Plan) {
                      toast.success(`Plan Selected: ${Plan}`); 
                    } else {
                      toast.error('Please select a plan');
                    }
                  }} 
                  className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-cyan-800 hover:bg-cyan-900 focus:outline-none">
            Next
          </button>
        </div>
      </form>
    </>
  );
}
