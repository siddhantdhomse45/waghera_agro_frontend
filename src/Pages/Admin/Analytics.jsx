import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

function Analytics() {
  const [view, setView] = useState("monthly");

  // 12 MONTHS DATA
  const monthlyData = [
    { month: "Jan", Booked: 320 },
    { month: "Feb", Booked: 280 },
    { month: "Mar", Booked: 250 },
    { month: "Apr", Booked: 380 },
    { month: "May", Booked: 400 },
    { month: "Jun", Booked: 520 },
    { month: "Jul", Booked: 700 },
    { month: "Aug", Booked: 650 },
    { month: "Sep", Booked: 480 },
    { month: "Oct", Booked: 520 },
    { month: "Nov", Booked: 600 },
    { month: "Dec", Booked: 750 },
  ];

  const yearlyData = [
    { month: "2020", Booked: 3000 },
    { month: "2021", Booked: 4200 },
    { month: "2022", Booked: 5300 },
    { month: "2023", Booked: 6100 },
    { month: "2024", Booked: 7200 },
  ];

  const pieData = [
    { name: "Cancelled Rooms", value: 120 },
    { name: "Booked Rooms", value: 450 },
    { name: "Available Rooms", value: 280 },
  ];

  const colors = ["#FF4C4C", "#4CAF50", "#3B82F6"];

  const stats = [
    { title: "Total Booked", value: "2,300" },
    { title: "Total Revenue", value: "₹4,20,000" },
    { title: "Total Customers", value: "1,150" },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen mt-0">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800">
        Restaurant Analytics Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="p-5 bg-white rounded-xl border border-gray-300 shadow-sm
            hover:border-amber-500 hover:shadow-2xl hover:scale-105
            transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-lg font-semibold text-gray-600">{item.title}</h2>
            <p className="text-3xl font-bold text-gray-900 mt-2">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Room Status Overview
          </h2>

          <p className="text-gray-600 mb-4">
            A visual breakdown of cancelled, booked, and available rooms.
          </p>

          <ResponsiveContainer width="100%" height={330}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={130}
                innerRadius={60}
                paddingAngle={5}
                label={({ name, value }) => `${name}: ${value}`}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={colors[index]}
                    stroke="#ffffff"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Order Trends</h2>

            <div className="space-x-3">
              <button
                className={`px-4 py-2 rounded-md ${
                  view === "monthly"
                    ? "bg-amber-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setView("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  view === "yearly"
                    ? "bg-amber-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setView("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={view === "monthly" ? monthlyData : yearlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Booked"
                stroke="#3B82F6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Analytics;