import React from 'react'
import { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import { toast, ToastContainer } from 'react-toastify';
import Hadder from '../Home_Page/Hadder';
import Confirmation from './Confirmation';

export default function Registretion(props) 
{
    const [progress, setProgress] = useState(1);
    const [Form_swithing, setForm_swithing] = useState(1);

   



    console.log();

    const renderForm = () => {
        console.log('Valu: ', Form_swithing);

        switch (Form_swithing) {
            case 1:
                return <Form1 setSwitch={setForm_swithing} UserObj={props.UserObj} setUserObj={props.setUserObj} progress={setProgress} />
                break;

            case 2:
                return <Form2 setSwitch={setForm_swithing} UserObj={props.UserObj} setUserObj={props.setUserObj} progress={setProgress} />
                break;

            case 3:
                return <Form3 setSwitch={setForm_swithing} UserObj={props.UserObj} setUserObj={props.setUserObj} progress={setProgress} />
                break;

            case 4:
                return <Form4 setSwitch={setForm_swithing} UserObj={props.UserObj} setUserObj={props.setUserObj} progress={setProgress} />
                break;


            case 5:
                return <Confirmation UserObj={props.UserObj} />
                break;

            default:
                
                break;
        }
    };

    return (
        <div className="h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-500 bg-cover bg-center md:overflow-hidden">


            <Hadder />

            <div className=" bg-gray-200 rounded-sm dark:bg-gray-500 mt-2 ml-3">
                <div className="bg-cyan-700 text-xs font-medium text-blue-100 text-center p-2 leading-none  rounded-sm rounded-r-md" style={{ width: `${progress}%` }}>{progress}%</div>
            </div>


            <div className=" font-sans mt-5   max-w-4xl flex items-center mx-auto md:h-screen p-4 md:-mt-15">


                <div className="bg-white grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.6)] rounded-xl overflow-hidden">

                    <div className="max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-cyan-900 to-cyan-800 lg:px-8 px-4 py-4">

                        <div>
                            <h4 className="text-white text-lg">👉 Create Your Account</h4>
                            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
                        </div>

                        <div>
                            <h4 className="text-white text-lg">👉 Simple & Secure Registration</h4>
                            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                                Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.
                            </p>
                            <ul className="mt-3 text-[14px] text-gray-300 space-y-1">
                                <li>✅ <span className="font-semibold">Step 1:</span> Laundry & Owner Information</li>
                                <li>✅ <span className="font-semibold">Step 2:</span> Laundry Service Info</li>
                                <li>✅ <span className="font-semibold">Step 3:</span> Select Plan</li>
                            </ul>
                        </div>


                    </div>


                    <div className="md:col-span-2 w-full ">
                        {renderForm()}
                        
                    </div>

                    


                </div>
            </div>

            <ToastContainer />

        </div>
    )
}

