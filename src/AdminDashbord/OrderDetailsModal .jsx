import { motion } from "framer-motion";
import { X } from "lucide-react";

const OrderDetailsModal = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 w-96"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Order Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {/* Order Information */}
        <div className="space-y-2">
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Order Type:</strong> {order.orderType}</p>
          <p><strong>Order Date:</strong> {order.date}</p>
          <p><strong>Order Day:</strong> {order.orderDay}</p>
          <p><strong>Status:</strong> <span className="text-yellow-500 font-bold">{order.status}</span></p>
          <p className={order.deadline === "Late" ? "text-red-500 font-bold" : "text-green-500 font-bold"}>
            <strong>Deadline:</strong> {order.deadline}
          </p>
        </div>

        {/* Close Button */}
        <div className="mt-4 flex justify-end">
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderDetailsModal;
