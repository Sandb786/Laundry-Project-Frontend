import React from "react";
import { useNavigate } from "react-router-dom";


  
 
  
export default function Body1() 
{
    const navigate = useNavigate();  // ✅ Get the navigate function

    return (
        <div>
            <div className="relative">
                <div className="px-4 sm:px-10">
                    <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">

                        <h1 className="md:text-5xl text-2xl font-semibold mb-5 pb-2 md:!leading-[80px] leading-[45px]  border-b-2 ">
                        <span className="text-cyan-900 md:text-7xl text-5xl">LaundryHub </span> <br />Streamlined Laundry Management for Owners & Customers
                        </h1>

                        <p className="text-base ">
                            We provide an online solution for laundry owners to manage their customers easily. 
                            Customers can book laundry services online, and owners can track and manage orders with ease.
                        </p>

                        <div className="mt-10">
                            <button 
                                onClick={() => navigate("/register")}  // ✅ Navigates to /register
                                className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800 cursor-pointer"
                            >
                                Get Started Now
                            </button>
                        </div>
                    </div>
              
               <hr className="my-12 border-gray-300" />

                    {/* Replace This Images With Some Good Thinss.. */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/2975/2975175.png" className="w-28 mx-auto" alt="washing-machine-icon" />
                        <img src="https://cdn-icons-png.flaticon.com/512/16919/16919203.png" className="w-28 mx-auto" alt="clothes-wash-icon" />
                        <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" className="w-28 mx-auto" alt="laundry-service-icon" />
                        <img src="https://cdn-icons-png.flaticon.com/512/10551/10551890.png" className="w-32 mx-auto" alt="dry-cleaning-icon" />
                    </div>
                </div>

              {/* Text Ke piche Background lagane ke kaam he... */}
                <img src="https://static.vecteezy.com/system/resources/previews/038/949/537/non_2x/ai-generated-laundry-basket-with-dirty-clothes-on-blurred-background-of-washing-machine-photo.jpg" 
                     className="absolute inset-0 w-full h-full opacity-0 " 
                     alt="background-laundry" />
            </div>
        </div>
    );
}
