import React from 'react';
import { toast } from 'react-toastify';

export default function Form3(props) 
{
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setUserObj({ ...props.UserObj, [name]: value });
    };

    const ownerPhone = props.UserObj.ownerPhone || "";
    const laundryMobile = props.UserObj.laundryMobile || "";

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default before validation

        // Handle undefined values safely
       
        // Correct validation condition (use `||` instead of `&&`)
        if (ownerPhone.length !== 10 || laundryMobile.length !== 10) 
        {
            toast.error('Each mobile number should be exactly 10 digits.', { position: 'top-center' });
            return; // Stop execution if validation fails
        }

        toast.success('Data saved...');
        console.log("Form Data:", ownerPhone);
        props.progress(75);
        props.setSwitch(4);
    };

    return (
        <form className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="mb-6">
                <h3 className="text-gray-800 text-xl font-bold text-center">Some Information About Owner</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="text-gray-600 text-sm mb-2 block">Owner Name</label>
                    <div className="relative flex items-center">
                        <input required name="ownerName" type="text" value={props.UserObj.ownerName || ''} onChange={handleChange} 
                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-cyan-500" 
                            placeholder="Enter name" />
                        <i className="ri-user-2-fill text-gray-400 w-4 h-5 absolute right-3"></i>
                    </div>
                </div>

                <p className='text-center'>Laundry Contact Information</p>

                <div className='grid md:grid-cols-2 gap-3 border border-gray-200 p-2 rounded'>
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Laundry Mobile No.</label>
                        <div className="relative flex items-center">
                            <input required name="laundryMobile" type="number" value={props.UserObj.laundryMobile || ''} onChange={handleChange} 
                                className={`text-gray-800 bg-white ${(laundryMobile.length !== 10)?'border-2 border-red-500':'border border-gray-300'} w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-cyan-500`} 
                                placeholder="Enter laundry mobile" />
                            <i className="ri-smartphone-line text-gray-400 w-5 h-5 absolute right-3"></i>
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Laundry Email</label>
                        <div className="relative flex items-center">
                            <input required name="laundryEmail" type="email" value={props.UserObj.laundryEmail || ''} onChange={handleChange} 
                                className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-cyan-500" 
                                placeholder="Enter laundry email" />
                            <i className="ri-mail-line text-gray-400 w-4 h-5 absolute right-3"></i>
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Owner Mobile No.</label>
                        <div className="relative flex items-center">
                            <input required name="ownerPhone" type="text" value={props.UserObj.ownerPhone || ''} onChange={handleChange}
                                className={`text-gray-800 bg-white ${(ownerPhone.length !== 10) ?'border-2 border-red-500':'border border-gray-300'} w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-cyan-500`}  
                                placeholder="Enter owner mobile" />
                            <i className="ri-smartphone-line text-gray-400 w-4 h-5 absolute right-3"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <button type="submit" className="w-full py-2.5 px-4 tracking-wider text-sm 
                    rounded-md text-white bg-cyan-800 hover:bg-cyan-900 focus:outline-none cursor-pointer">
                    Next
                </button>
            </div>
        </form>
    );
}
