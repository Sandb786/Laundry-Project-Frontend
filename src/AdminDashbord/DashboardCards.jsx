import { Users, Clock, Check, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const DashboardCards = () => 
{
  return (
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:p-4 p-3">

      {/* Total Customers Card */}
      <motion.div 
        className="bg-white shadow-xl rounded-lg p-6 flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
      >
        <div className="bg-blue-500 text-white md:p-4 p-3 rounded-full">
          <Users size={32} />
        </div>
        <div>
          <h2 className="text-gray-800">Total Customers</h2>
          <p className="text-2xl font-bold">1,234</p>
        </div>
      </motion.div>

      {/* New Order Card */}
      <motion.div 
        className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
      >
        <div className="bg-emerald-500 text-white md:p-4 p-3 rounded-full">
          <ShoppingCart size={32} />
        </div>
        <div>
          <h2 className="text-gray-800">New Orders</h2>
          <p className="text-2xl font-bold">8</p>
        </div>
      </motion.div>

      {/* Pending Orders Card */}
      <motion.div 
        className="bg-white shadow-xl rounded-lg p-6 flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
      >
        <div className="bg-yellow-500 text-white md:p-4 p-3 rounded-full">
          <Clock size={32} />
        </div>
        <div>
          <h2 className="text-gray-800">Pending Orders</h2>
          <p className="text-2xl font-bold">56</p>
        </div>
      </motion.div>

      {/* Done Orders Card */}
      <motion.div 
        className="bg-white shadow-xl rounded-lg p-6 flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
      >
        <div className="bg-green-500 text-white md:p-4 p-3 rounded-full">
          <Check size={32} />
        </div>
        <div>
          <h2 className="text-gray-800 ">Completed Orders</h2>
          <p className="text-2xl font-bold">3</p>
        </div>
      </motion.div>

    </div>
  );
};

export default DashboardCards;
