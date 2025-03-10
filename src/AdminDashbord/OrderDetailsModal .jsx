import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const statusSteps = ["Pending", "Work in Progress", "Completed", "Out for Delivery", "Delivered"];

const statusColors = {
  "Pending": "text-yellow-500",
  "Work in Progress": "text-blue-500",
  "Completed": "text-green-500",
  "Out for Delivery": "text-purple-500",
  "Delivered": "text-gray-500",
};

const OrderDetailsModal = ({ order, onClose, onUpdateStatus }) => {
  const [currentStatus, setCurrentStatus] = useState(order.status);

  const handleUpdateStatus = () => {
    const nextIndex = statusSteps.indexOf(currentStatus) + 1;
    if (nextIndex < statusSteps.length) {
      const newStatus = statusSteps[nextIndex];
      setCurrentStatus(newStatus);
      onUpdateStatus(order.id, newStatus);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-md z-50">
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl h-full flex flex-col justify-center items-center"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4 w-full">
          <h2 className="text-xl font-semibold text-gray-800">Order Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {/* Order Information */}
        <div className="space-y-2 text-center">
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Order Type:</strong> {order.orderType}</p>
          <p><strong>Order Date:</strong> {order.date}</p>
          <p><strong>Order Day:</strong> {order.orderDay}</p>
          <p>
            <strong>Status:</strong> 
            <span className={`font-bold ${statusColors[currentStatus]}`}> {currentStatus}</span>
          </p>
          <p className={order.deadline === "Late" ? "text-red-500 font-bold" : "text-green-500 font-bold"}>
            <strong>Deadline:</strong> {order.deadline}
          </p>
        </div>

        {/* Update Status Button */}
        <div className="mt-4 flex justify-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleUpdateStatus}
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${
              currentStatus === "Delivered" ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentStatus === "Delivered"}
          >
            {currentStatus === "Delivered" ? "Order Delivered" : "Update Status"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderDetailsModal;
