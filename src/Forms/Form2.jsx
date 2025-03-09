import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function Form2(props) {
    const [serviceInput, setServiceInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    
    const laundryServices = [
        "Washing", "Dry Cleaning", "Ironing", "Folding", "Stain Removal", "Premium Wash"
    ];

    const handleServiceChange = (event) => {
        setServiceInput(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPriceInput(event.target.value);
    };

    const addService = () => {
        if (serviceInput.trim() !== "" && priceInput.trim() !== "" && 
            !props.UserObj.services.some(s => s.name === serviceInput)) {

            // Create a new services array and update UserObj
            const updatedServices = [...props.UserObj.services, { name: serviceInput, price: priceInput }];
            props.setUserObj({ ...props.UserObj, services: updatedServices });

            console.log('User Object:', props.UserObj);

            setServiceInput("");
            setPriceInput("");

            toast.success('Service added...', { position: 'top-center' });
        }

        if(props.UserObj.services.some(s => s.name === serviceInput))
        {
            toast.error('Service already added...', { position: 'top-center' });
        }
    };

    return (
        <>
            <form 
                className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-white shadow-lg rounded-lg" 
                onSubmit={(e) => { 
                    e.preventDefault();
                    props.progress(50);
                    props.setSwitch(3);
                }}
            >
                <div className="mb-6 text-center">
                    <h3 className="text-gray-900 text-xl font-bold">Laundry Services</h3>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="text-gray-700 text-sm mb-2 block">Select Service</label>
                        <div className="relative flex flex-col sm:flex-row items-center gap-3">
                            <select
                                value={serviceInput}
                                onChange={handleServiceChange}
                                className="text-gray-900 bg-gray-100 border border-gray-300 w-full sm:w-80 text-sm p-2.5 rounded-md focus:ring-2 focus:ring-cyan-500"
                            >
                                <option value="">-- Select a Service --</option>
                                {laundryServices.map((service, index) => (
                                    <option key={index} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label className="text-gray-700 text-sm mb-2 block">Enter Price</label>
                        <input
                            type="number"
                            value={priceInput}
                            onChange={handlePriceChange}
                            className="text-gray-900 bg-gray-100 border border-gray-300 w-full sm:w-80 text-sm p-2.5 rounded-md focus:ring-2 focus:ring-cyan-500"
                            placeholder="Enter price"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={addService}
                        className="bg-cyan-800 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
                    >
                        Add Service
                    </button>

                    <p className='text-center text-gray-800 font-medium'>Added Services</p>
                    <div className='grid grid-cols-1 gap-3 border border-gray-300 p-3 rounded-lg bg-gray-50'>
                        <div className="px-4 pt-2 pb-2 flex flex-wrap gap-2">
                            {props.UserObj.services.map((service, index) => (
                                <span 
                                    key={index} 
                                    className="bg-cyan-100 text-cyan-800 rounded-full px-4 py-1 text-sm font-semibold shadow-sm"
                                >
                                    {service.name} - ₹{service.price}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        onClick={() => { toast.success('Data saved...'); }}
                        className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-cyan-800 hover:bg-cyan-900 focus:ring-2 focus:ring-cyan-500 transition-all"
                    >
                        Next
                    </button>
                </div>
            </form>
        </>
    );
}
