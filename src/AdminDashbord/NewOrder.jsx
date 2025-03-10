import React, { useState } from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { CheckCheck, CircleX } from "lucide-react";
import { motion } from "framer-motion";
import FackOrder from "./FackOrder"; // Import FakeOrder

const NewOrder = () => {
  const [newOrders, setNewOrders] = useState([
    { id: 101, customer: "Rajesh Kumar", orderType: "Wash & Fold", date: new Date().toISOString().split("T")[0] },
    { id: 102, customer: "Priya Sharma", orderType: "Dry Cleaning", date: new Date().toISOString().split("T")[0] },
  ]);

  const addOrder = (orderData) => {
    setNewOrders((prevOrders) => [
      ...prevOrders,
      { id: prevOrders.length + 101, ...orderData, date: new Date().toISOString().split("T")[0] },
    ]);
  };

  return (
    <div className="w-full max-w-md mx-auto max-h-[50vh] overflow-y-auto p-3 rounded-lg">
      <div className="sticky top-0 bg-gray-800 z-10 p-2 text-white text-center rounded-md shadow-lg mb-3">
        <Typography variant="h5" className="font-bold">New Orders</Typography>
      </div>

      <FackOrder addOrder={addOrder} /> {/* Pass function to FakeOrder */}

      <div className="space-y-4">
        {newOrders.map((order) => (
          <motion.div key={order.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="shadow-md border border-gray-200 bg-white rounded-lg">
              <CardBody className="flex justify-between items-center p-4 sm:p-6">
                <div>
                  <Typography variant="h6" color="blue-gray" className="font-semibold">
                    Order #{order.id}
                  </Typography>
                  <Typography variant="small" className="text-gray-600">👤 {order.customer}</Typography>
                  <Typography variant="small" className="text-gray-500">📅 {order.date}</Typography>
                  <Typography variant="small" className="text-gray-500">🛠 {order.orderType}</Typography>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <Typography>Pick-up</Typography>
                  <Button variant="gradient" color="red" size="sm" className="rounded-full p-2 shadow-md hover:shadow-lg">
                    <CircleX size={18} />
                  </Button>
                  <Button variant="gradient" color="green" size="sm" className="rounded-full p-2 shadow-md hover:shadow-lg">
                    <CheckCheck size={18} />
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewOrder;
