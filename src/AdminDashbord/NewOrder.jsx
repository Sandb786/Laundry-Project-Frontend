import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { CheckCheck, CircleX } from "lucide-react";
import { motion } from "framer-motion";

const newOrders = [
  { id: 101, customer: "Rajesh Kumar", date: "2025-02-21" },
  { id: 102, customer: "Priya Sharma", date: "2025-02-20" },
  { id: 103, customer: "Amit Verma", date: "2025-02-19" },
  { id: 104, customer: "Neha Singh", date: "2025-02-18" },
  { id: 105, customer: "Vikram Patel", date: "2025-02-17" },
  { id: 106, customer: "Sonia Reddy", date: "2025-02-16" },
];

const NewOrder = () => {
  return (
    <div className="w-full max-w-md mx-auto max-h-[50vh] overflow-y-auto p-3 rounded-lg">
      
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gray-800 z-10 p-2 text-white text-center rounded-md shadow-lg mb-3">
        <Typography variant="h5" className="font-bold">
          New Orders
        </Typography>
      </div>

      {/* Orders List - One visible at a time */}
      <div className="space-y-4">
        {newOrders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <Card className="shadow-md border border-gray-200 bg-white rounded-lg">
              <CardBody className="flex justify-between items-center p-4 sm:p-6">
                <div>
                  <Typography variant="h6" color="blue-gray" className="font-semibold">
                    Order #{order.id}
                  </Typography>
                  <Typography variant="small" className="text-gray-600">
                    👤 {order.customer}
                  </Typography>
                  <Typography variant="small" className="text-gray-500">
                    📅 {order.date}
                  </Typography>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <Typography>Pick-up</Typography>
                  <Button 
                    variant="gradient" 
                    color="red" 
                    size="sm" 
                    className="rounded-full p-2 shadow-md hover:shadow-lg"
                  >
                    <CircleX size={18} />
                  </Button>
                  <Button 
                    variant="gradient" 
                    color="green" 
                    size="sm" 
                    className="rounded-full p-2 shadow-md hover:shadow-lg"
                  >
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
