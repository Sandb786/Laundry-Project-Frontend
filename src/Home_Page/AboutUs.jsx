import React from "react";
import { Briefcase, Users, Settings, ShieldCheck } from "lucide-react";
import Hadder from "./Hadder";
import { Link } from "react-router-dom";


export default function AboutUs() {
  return (
    <>
    <Hadder colorTo={'about'}/>
    <div className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-gray-600 mt-4">
          We provide an advanced platform for laundry service providers to manage their business online. Our platform includes powerful admin and customer dashboards to streamline operations and enhance customer satisfaction.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Empowering Laundry Businesses</h2>
          <p className="text-gray-600 mt-4">
            Our platform enables laundry service providers to efficiently manage their customers, orders, and payments in one place. Whether you run a small laundry shop or a large-scale service, our solution is designed to scale with your needs.
          </p>
        </div>
        <div>
          <img
            src="https://swashlaundrysoftware.com/wp-content/uploads/2022/09/image.png"
            alt="Laundry Management Platform"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Our Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Briefcase className="w-10 h-10 mx-auto text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Business Management</h3>
            <p className="text-gray-600 mt-2">Easily manage customers, services, and payments with our intuitive dashboard.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-10 h-10 mx-auto text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Customer Dashboard</h3>
            <p className="text-gray-600 mt-2">Provide your customers with a seamless booking and tracking experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Settings className="w-10 h-10 mx-auto text-yellow-600" />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Customizable Services</h3>
            <p className="text-gray-600 mt-2">Tailor services, pricing, and schedules according to your business needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ShieldCheck className="w-10 h-10 mx-auto text-red-600" />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Secure Transactions</h3>
            <p className="text-gray-600 mt-2">Ensure safe and hassle-free online payments for both providers and customers.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Join Us Today</h2>
        <p className="text-gray-600 mt-4">
          Transform your laundry business with our online solution. Sign up now and take control of your operations with ease.
        </p>
        <Link 
          to="/register"
          className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Get Started
        </Link>
      </section>
    </div>
    </>
  );
}
