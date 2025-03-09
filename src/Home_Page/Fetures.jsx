import React from 'react';
import { Globe, Map, LayoutDashboard, ShieldCheck, Settings, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    { title: "Easy Online Booking", description: "Customers can schedule laundry pickups and deliveries.", icon: <Globe className="text-blue-600" size={32} />, bgColor: "bg-blue-50" },
    { title: "Order Tracking", description: "Customers can track their laundry status in real-time.", icon: <Map className="text-red-600" size={32} />, bgColor: "bg-red-50" },
    { title: "Owner Dashboard", description: "Laundry shop owners can manage orders, customers, and payments.", icon: <LayoutDashboard className="text-purple-600" size={32} />, bgColor: "bg-purple-50" },
    { title: "Secure Payments", description: "Integration with online payment gateways.", icon: <ShieldCheck className="text-green-600" size={32} />, bgColor: "bg-green-50" },
    { title: "Service Customization", description: "Different washing, drying, and ironing options.", icon: <Settings className="text-cyan-700" size={32} />, bgColor: "bg-cyan-50" },
    { title: "Notifications & Alerts", description: "SMS/email updates on order status.", icon: <Bell className="text-yellow-600" size={32} />, bgColor: "bg-yellow-50" }
];

export default function Features() {
    return (
        <div className='px-4 sm:px-10 mb-20'>
            <div className="mt-20 max-w-7xl mx-auto">
                <div className="mb-16 max-w-2xl text-center mx-auto">
                    <h2 className="md:text-4xl text-3xl font-semibold mb-6">Our Features</h2>
                    <p className="mt-6">We provide a seamless online solution for both customers and laundry owners, ensuring effortless order management, secure payments, and an intuitive dashboard for efficient service tracking.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
                    {features.map((feature, index) => (
                        <motion.div key={index}
                            className="sm:p-6 p-4 flex bg-white rounded-md border border-gray-200 hover:shadow-lg transition duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={`w-12 h-12 mr-6 ${feature.bgColor} p-1 rounded-md shrink-0 flex items-center justify-center`}>
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
