import React from 'react'
import { Button, Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { Wrench, Trash2, Plus, Edit } from "lucide-react";
import { useState } from "react";


export default function Laundry_Services() 
{
    const [services, setServices] = useState([
        { name: "Steam Press", price: 50 },
        { name: "Dry Cleaning", price: 100 },
        { name: "Wash & Fold", price: 80 },
        { name: "Ironing", price: 40 },
        { name: "Shoe Cleaning", price: 120 },
        { name: "Shoe Cleaning", price: 120 },
        { name: "Shoe Cleaning", price: 120 },
        { name: "Shoe Cleaning", price: 120 },
        { name: "Shoe Cleaning", price: 120 },
        { name: "Shoe Cleaning", price: 120 },
        { name: "Shoe Cleaning", price: 120 }
      ]);
    
      const [open, setOpen] = useState(false); // Add service modal state
      const [selectedService, setSelectedService] = useState("");
      const [selectedPrice, setSelectedPrice] = useState("");
      const [editIndex, setEditIndex] = useState(null); // Track which service price is being edited
      const [editPrice, setEditPrice] = useState(""); // Temporary price value for editing
    
      const laundryServices = [
        "Washing", "Dry Cleaning", "Ironing", "Folding", "Stain Removal", "Premium Wash"
      ];
    
      const handleOpen = () => setOpen(!open);
    
      // Add Service with Price
      const addService = () => {
        if (selectedService.trim() !== "" && selectedPrice !== "" && !services.some(s => s.name === selectedService)) {
          setServices([...services, { name: selectedService, price: parseFloat(selectedPrice) }]);
          setSelectedService("");
          setSelectedPrice("");
          setOpen(false); // Close modal
        } else if (services.some(s => s.name === selectedService)) {
          alert("Service already exists");
        }
      };
    
      // Delete Service
      const deleteService = (index) => {
        setServices(services.filter((_, i) => i !== index));
      };
    
      // Enable Price Editing
      const enableEditPrice = (index) => {
        setEditIndex(index);
        setEditPrice(services[index].price);
      };
    
      // Save Updated Price
      const savePrice = (index) => {
        const updatedServices = [...services];
        updatedServices[index].price = parseFloat(editPrice);
        setServices(updatedServices);
        setEditIndex(null);
      };
    
  return (
    <>
    <Card className="w-full h-180 p-2 shadow-lg col-span-2">
        
          <Typography variant="h5" color="black" className="font-bold border-b-2 border-gray-300 pb-4 flex justify-between">
            <div className="flex gap-2">
              <Wrench size={24} className="mt-0.5" />
              Laundry Services
            </div>

            <div>
              <Button onClick={handleOpen} variant="fill" size="md" color="green">
                <Plus size={15} />
              </Button>
            </div>
          </Typography>

          {/* Services Table */}
          <div className="overflow-x-auto mt-4 rounded-lg">
            <table className="min-w-full bg-white shadow-md rounded-lg ">
              <thead className="bg-gray-800 text-white sticky z-10 top-0 ">
                <tr>
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">Service Name</th>
                  <th className="py-3 px-6 text-left">Price (₹)</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{service.name}</td>
                    <td className="py-3 px-6">
                      {editIndex === index ? (
                        <input
                          type="number"
                          value={editPrice}
                          onChange={(e) => setEditPrice(e.target.value)}
                          className="border p-1 w-15 text-center rounded"
                        />
                      ) : (
                        `₹${service.price} /Cloth`
                      )}
                    </td>
                    <td className="py-3  px-6 text-center">
                      {editIndex === index ? (
                        <Button variant="filled" color="green" onClick={() => savePrice(index)}>
                          Save
                        </Button>
                      ) : (
                        <Button variant="outlined" color="blue" onClick={() => enableEditPrice(index)}>
                          <Edit size={18} />
                        </Button>
                      )}
                      <Button variant="outlined" color="red" onClick={() => deleteService(index)} className="ml-2">
                        <Trash2 size={18} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>


        {/* Add Service Modal */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="border-b-1 border-gray-500">Add New Service</DialogHeader>
        <DialogBody>
          <label className="block font-semibold text-lg mb-2">Service</label>
          <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
            <option value="">-- Select a Service --</option>
            {laundryServices.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>

          <label className="block font-semibold text-lg mt-3">Price (₹)</label>
          <input type="number" value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" />
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen}>Cancel</Button>
          <Button variant="filled" color="green" onClick={addService} disabled={!selectedService || !selectedPrice}>Add Service</Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
