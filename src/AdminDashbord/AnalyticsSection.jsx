import { Card, Typography } from "@material-tailwind/react";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 1000 },
  { month: "Feb", revenue: 2500 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4000 },
  { month: "May", revenue: 3000 },
];


const orderData = [
  { month: "Jan", orders: 120 },
  { month: "Feb", orders: 150 },
  { month: "Mar", orders: 180 },
  { month: "Apr", orders: 220 },
  { month: "June", orders: 180 },
  { month: "JUly", orders: 150 },
  { month: "Augest", orders: 140 },
  { month: "Septembar", orders: 160 },
  { month: "Octomber", orders: 200 },
  { month: "Novamber", orders: 190 },
  { month: "December", orders: 230 },
];



const AnalyticsSection = () => 
{
  return (

    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5 bg-gray-200">

      {/* Revenue Line Chart */}
      <Card className="shadow-lg p-4">

        <Typography variant="h5" className="text-center  font-bold mb-4">
          Revenue Trend
        </Typography>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }} />
            <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} dot={{ stroke: "#3B82F6", strokeWidth: 2, r: 5 }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

      </Card>

    

      {/* Order Bar Chart */}
      <Card className="shadow-lg p-4">
        <Typography variant="h5" className="text-center font-bold mb-4">
          Orders Per Month
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={orderData}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="orders" fill="#4F46E5"/>

          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default AnalyticsSection;
