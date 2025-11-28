import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("monthly");

  const stats = [
    {
      title: "Total Bookings",
      value: "128",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "bg-[#a8815e]",
    },
    {
      title: "Available Rooms",
      value: "24",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      color: "bg-[#a8815e]",
    },
    {
      title: "Active Users",
      value: "1,248",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      color: "bg-[#a8815e]",
    },
    {
      title: "Revenue",
      value: "$24,560",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "bg-[#a8815e]",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: "New booking received",
      description: "John Doe booked a Deluxe Room for 3 nights",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Room status updated",
      description: "Executive Suite marked as Occupied",
      time: "4 hours ago",
    },
    {
      id: 3,
      title: "New user registered",
      description: "Sarah Johnson created an account",
      time: "1 day ago",
    },
    {
      id: 4,
      title: "Payment received",
      description: "Payment of $450 confirmed for booking #124",
      time: "2 days ago",
    },
  ];

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

  return (
    <div className="p-4 space-y-6">
      {/* Header + Admin Booking button */}
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#a8815e]">Dashboard</h1>
          <p className="text-gray-600">Welcome to your admin dashboard</p>
        </div>
        <button
          onClick={() => navigate("/admin/bookings")}
          className="px-4 py-2 bg-[#a8815e] text-white rounded-md text-sm font-semibold hover:bg-yellow-800 transition-colors"
        >
          Go to Bookings
        </button>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={stat.icon}
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-600">
                  {stat.title}
                </h2>
                <p className="text-2xl font-bold text-[#a8815e]">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Room Status Overview
          </h3>
          <p className="text-gray-600 mb-4">
            Breakdown of cancelled, booked, and available rooms.
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={120}
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
            <h3 className="text-xl font-semibold text-gray-700">
              Booking Trends
            </h3>
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

          <ResponsiveContainer width="100%" height={280}>
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

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Activity
          </h2>
          <button className="text-[#a8815e] hover:text-yellow-800 text-sm font-medium">
            Refresh
          </button>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-[#a8815e]">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
