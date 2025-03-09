import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function Form1(props) 
{
    
    // State to store form data
    const [formData, setFormData] = useState({
        laundryName: "",
        landmark: "",
        pincode: "",
        city: "",
        state: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        // Log data (you can also pass this to parent)
        
        // Pass data to props if needed
        props.setUserObj(prev => ({
            ...prev,
            ...formData
        }));
        
        console.log("Form Data:", formData);
        console.log("Form Data:", props.UserObj);

        // Show success toast
        toast.success('Data saved...');

        // Move to the next step
        props.progress(25);
        props.setSwitch(2);
    };

    return (
        <>
            <form className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto" onSubmit={handleSubmit}>

                <div className="mb-6">
                    <h3 className="text-gray-800 text-xl font-bold">Create an account in 3 steps</h3>
                </div>

                <div className="space-y-6">

                    {/* Laundry Name */}
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Laundry Name</label>
                        <div className="relative flex items-center">
                            <input 
                                required 
                                name="laundryName"  
                                type="text"  
                                value={formData.laundryName} 
                                onChange={handleChange} 
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-cyan-500" 
                                placeholder="Enter Laundry name" 
                            />
                        </div>
                    </div>

                    <p className='text-center '>Address Info</p>

                    <div className='grid md:grid-cols-2 gap-3 border border-gray-200 p-2 rounded'>

                        {/* Landmark */}
                        <div>
                            <label className="text-gray-600 text-sm mb-2 block">Landmark</label>
                            <div className="relative flex items-center">
                                <input 
                                    required 
                                    name="landmark"  
                                    type="text"  
                                    value={formData.landmark} 
                                    onChange={handleChange} 
                                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-cyan-500" 
                                    placeholder="Enter landmark" 
                                />
                            </div>
                        </div>

                        {/* Pincode */}
                        <div>
                            <label className="text-gray-600 text-sm mb-2 block">Pincode</label>
                            <div className="relative flex items-center">
                                <input 
                                    required 
                                    name="pincode"  
                                    type="number"  
                                    value={formData.pincode} 
                                    onChange={handleChange} 
                                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-cyan-500" 
                                    placeholder="Enter pincode" 
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div>
                            <label className="text-gray-600 text-sm mb-2 block">City</label>
                            <div className="relative flex items-center">
                                <input 
                                    required 
                                    name="city"  
                                    type="text"  
                                    value={formData.city} 
                                    onChange={handleChange} 
                                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-cyan-500" 
                                    placeholder="Enter city" 
                                />
                            </div>
                        </div>

                        {/* State */}
                        <div>
                            <label className="text-gray-600 text-sm mb-2 block">State</label>
                            <div className="relative flex items-center">
                                <input 
                                    required 
                                    name="state"  
                                    type="text"  
                                    value={formData.state} 
                                    onChange={handleChange} 
                                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-cyan-500" 
                                    placeholder="Enter state" 
                                />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="mt-8">
                    <button type="submit" className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-cyan-800 hover:bg-cyan-900 focus:outline-none cursor-pointer">
                        Next
                    </button>
                </div>

            </form>
        </>
    );
}
