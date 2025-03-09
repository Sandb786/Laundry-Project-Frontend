import React from 'react';
import { CheckCheck } from "lucide-react";

export default function Subscription() {
    return (
        <div>
            <div className="mt-32 max-w-7xl mx-auto p-2">
                <div className="text-center">
                    <h2 className="md:text-4xl text-3xl font-semibold">Our Subscription Plans</h2>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 mt-16 max-md:max-w-lg max-md:mx-auto">
                    {/* Free Plan */}
                    <div className="hover:shadow-[0_10px_40px_2px_rgba(93,96,127,0.5)] transition delay-50 duration-300 rounded-lg sm:p-6 p-4 border border-gray-200">
                        <h3 className="text-xl font-semibold">Basic Plan</h3>
                        <p className="mt-2">Perfect for individuals and small businesses looking for essential laundry management features.</p>
                        <div className="mt-6">
                            <h2 className="text-4xl font-semibold">₹25<span className="text-gray-500 ml-2 text-[15px]">/ Month</span></h2>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-base font-bold mb-4">Features Included</h4>
                            <ul className="space-y-5">
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-500'/> User & Admin Dashboard</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-500'/> Payment Integration</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-500'/> Order Tracking</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-500'/> Customer Support</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-500'/> Email Notifications</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-500'/> Service Booking & Order Management</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-500'/> Order History</li>
                                
                            </ul>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-cyan-800 text-white rounded-lg sm:p-6 p-4 hover:shadow-[0_10px_40px_2px_rgba(93,96,127,0.7)] transition delay-50 duration-300">
                        <h3 className="text-xl font-semibold">Enterprise Plan</h3>
                        <p className="mt-2">Designed for large businesses that require advanced features, scalability, and premium support.</p>
                        <div className="mt-6">
                            <h2 className="text-4xl font-semibold">₹250<span className="text-gray-300 ml-2 text-[15px]">/ Year</span></h2>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-base font-bold mb-4">Features Included</h4>
                            <ul className="space-y-5">
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-400'/> Advanced Admin & User Dashboard</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-400'/> Secure Payment Integration</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-400'/> Real-time Order Tracking</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-400'/> 24/7 Premium Customer Support</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-400'/> Automated Email & SMS Notifications</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-400'/> Comprehensive Service Booking & Order Management</li>
                                <li className="flex items-center"><CheckCheck size={20} width={30} strokeWidth={3} className='text-green-400'/> Detailed Order History & Reports</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
