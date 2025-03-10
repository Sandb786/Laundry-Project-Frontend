import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import OrderDetailsModal from "./OrderDetailsModal ";

const PendingOrdersTable = () => 
{
  const [orders, setOrders] = useState([
    { id: 1, customer: "Rajesh Sharma", orderType: "Wash & Fold", date: "10-03-2025", status: "Pending", orderDay: "Monday", deadline: "3 days left" },
    { id: 2, customer: "Priya Verma", orderType: "Dry Cleaning", date: "09-03-2025", status: "Pending", orderDay: "Sunday", deadline: "2 days left" },
    { id: 3, customer: "Amit Kumar", orderType: "Ironing", date: "08-03-2025", status: "Pending", orderDay: "Saturday", deadline: "Today" },
    { id: 4, customer: "Sunita Reddy", orderType: "Wash & Fold", date: "07-03-2025", status: "Pending", orderDay: "Friday", deadline: "Late" },
    { id: 5, customer: "Vikram Singh", orderType: "Dry Cleaning", date: "06-03-2025", status: "Pending", orderDay: "Thursday", deadline: "Late" },
    { id: 6, customer: "Neha Patil", orderType: "Ironing", date: "08-03-2025", status: "Pending", orderDay: "Saturday", deadline: "Today" },
    { id: 7, customer: "Arun Mehta", orderType: "Wash & Fold", date: "07-03-2025", status: "Pending", orderDay: "Friday", deadline: "Late" },
    { id: 8, customer: "Sneha Iyer", orderType: "Dry Cleaning", date: "09-03-2025", status: "Pending", orderDay: "Sunday", deadline: "2 days left" },
    { id: 9, customer: "Karan Malhotra", orderType: "Ironing", date: "06-03-2025", status: "Pending", orderDay: "Thursday", deadline: "Late" },
    { id: 10, customer: "Pooja Joshi", orderType: "Wash & Fold", date: "10-03-2025", status: "Pending", orderDay: "Monday", deadline: "3 days left" }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="p-4 overflow-x-auto max-w-full shadow-lg">
      <div className="max-h-85 overflow-auto rounded-lg pr-2 scrol">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white sticky top-0 z-10">
            <tr>
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-left">Order Type</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Order Day</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Deadline</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6">{order.customer}</td>
                <td className="py-3 px-6">{order.orderType}</td>
                <td className="py-3 px-6">{order.date}</td>
                <td className="py-3 px-6 font-semibold">{order.orderDay}</td>
                <td className="py-3 px-6 text-yellow-500 font-bold">{order.status}</td>
                <td className={`py-3 px-6 font-semibold ${order.deadline === "Late" ? "text-red-500" : "text-green-500"}`}>{order.deadline}</td>
                <td className="py-3 px-6 flex items-center gap-2">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => setSelectedOrder(order)}
                  >
                    <Button variant="outlined" size="sm" color="blue" className="py-3 px-4">
                      More...
                    </Button>
                  </motion.button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedOrder && <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} onUpdateStatus={updateOrderStatus} />}
    </div>
  );
};

export default PendingOrdersTable;
