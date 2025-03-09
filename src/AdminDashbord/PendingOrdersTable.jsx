import { Button } from "@material-tailwind/react";
import "./style.css";
import { CheckCheck, CircleX, Ellipsis } from "lucide-react";
import NewOrder from "./NewOrder";
import { motion } from "framer-motion";

const PendingOrdersTable = () => {
  const orders = [
    { id: 1, customer: "John Doe", date: "2025-02-20", status: "Pending" },
    { id: 2, customer: "Jane Smith", date: "2025-02-19", status: "Pending" },
    { id: 3, customer: "Alice Johnson", date: "2025-02-18", status: "Pending" },
    { id: 4, customer: "Bob Brown", date: "2025-02-17", status: "Pending" },
    { id: 5, customer: "Charlie White", date: "2025-02-16", status: "Pending" },
    { id: 6, customer: "David Black", date: "2025-02-15", status: "Pending" },
    { id: 6, customer: "David Black", date: "2025-02-15", status: "Pending" },
    { id: 6, customer: "David Black", date: "2025-02-15", status: "Pending" },
    { id: 6, customer: "David Black", date: "2025-02-15", status: "Pending" }
  ];

  return (
    <div className="p-4 overflow-x-auto  max-w-full shadow-lg">

      {/* Scrollable Table Container */}
      <div className="max-h-85 overflow-auto rounded-lg pr-2 scrol">

        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden ">

          {/* Sticky Header */}
          <thead className="bg-gray-800 text-white sticky top-0 z-10  ">
            <tr>
            
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-300 hover:bg-gray-100">
              
                <td className="py-3 px-6">{order.customer}</td>
                <td className="py-3 px-6">{order.date}</td>
                <td className="py-3 px-6 text-yellow-500 font-bold">{order.status}</td>

                <td className="py-3 px-6 flex items-center gap-2">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button variant="outlined" size="sm" color="blue" className="py-3 px-4 ">
                      More...
                    </Button>
                  </motion.button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default PendingOrdersTable;
