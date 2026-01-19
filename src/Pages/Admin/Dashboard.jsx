


import React, { useState, useEffect } from "react";
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
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("daily"); // default view

  const [statsData, setStatsData] = useState({
    totalRooms: 0,
    bookedToday: 0,
    availableRooms: 0,
    occupiedRooms: 0,
    totalBookings: 0,
  });

  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        console.log("Fetching dashboard data...");
        
        // FETCH ROOMS DATA
        const roomsRes = await axios.get(
          "https://backend-waghera.onrender.com/api/admin/rooms"
        );
        const roomsData = Array.isArray(roomsRes.data) ? roomsRes.data : roomsRes.data.data || [];
        console.log("Rooms data:", roomsData);
        
        // FETCH BOOKINGS DATA
        const bookingsRes = await axios.get(
          "https://backend-waghera.onrender.com/api/bookings"
        );
        const bookingsData = Array.isArray(bookingsRes.data) ? bookingsRes.data : [];
        console.log("Bookings data:", bookingsData);
        
        // CALCULATE STATS
        const totalRooms = roomsData.length;
        const availableRooms = roomsData.filter(room => room.status === 'AVAILABLE').length;
        const occupiedRooms = roomsData.filter(room => room.status === 'OCCUPIED').length;
        
        console.log("Room stats:", { totalRooms, availableRooms, occupiedRooms });
        
        // Get today's bookings
        const today = new Date().toDateString();
        const bookedToday = bookingsData.filter(booking => {
          const checkInDate = new Date(booking.checkInDate).toDateString();
          return checkInDate === today;
        }).length;
        
        const totalBookings = bookingsData.length;
        
        const stats = {
          totalRooms,
          availableRooms,
          occupiedRooms,
          bookedToday,
          totalBookings
        };

        console.log("Final stats:", stats);
        setStatsData(stats);

        // GENERATE CHART DATA FROM BOOKINGS
        // Daily data (last 7 days)
        const last7Days = [];
        for (let i = 6; i >= 0; i--) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dayStr = date.toLocaleDateString('en-US', { weekday: 'short' });
          const dateStr = date.toDateString();
          
          const dayBookings = bookingsData.filter(booking => {
            const checkIn = new Date(booking.checkInDate).toDateString();
            return checkIn === dateStr;
          }).length;
          
          last7Days.push({ day: dayStr, Booked: dayBookings });
        }
        setDailyData(last7Days);

        // Weekly data (last 4 weeks)
        const last4Weeks = [];
        for (let i = 3; i >= 0; i--) {
          const weekStart = new Date();
          weekStart.setDate(weekStart.getDate() - (i * 7));
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekEnd.getDate() + 6);
          
          const weekBookings = bookingsData.filter(booking => {
            const checkIn = new Date(booking.checkInDate);
            return checkIn >= weekStart && checkIn <= weekEnd;
          }).length;
          
          last4Weeks.push({ 
            week: `Week ${4-i}`, 
            Booked: weekBookings 
          });
        }
        setWeeklyData(last4Weeks);

        // Monthly data (last 12 months)
        const last12Months = [];
        for (let i = 11; i >= 0; i--) {
          const date = new Date();
          date.setMonth(date.getMonth() - i);
          const monthStr = date.toLocaleDateString('en-US', { month: 'short' });
          
          const monthBookings = bookingsData.filter(booking => {
            const checkIn = new Date(booking.checkInDate);
            return checkIn.getMonth() === date.getMonth() && 
                   checkIn.getFullYear() === date.getFullYear();
          }).length;
          
          last12Months.push({ month: monthStr, Booked: monthBookings });
        }
        setMonthlyData(last12Months);

        // Yearly data (last 3 years)
        const last3Years = [];
        for (let i = 2; i >= 0; i--) {
          const year = new Date().getFullYear() - i;
          const yearBookings = bookingsData.filter(booking => {
            const checkIn = new Date(booking.checkInDate);
            return checkIn.getFullYear() === year;
          }).length;
          
          last3Years.push({ year: year.toString(), Booked: yearBookings });
        }
        setYearlyData(last3Years);

        setError("");
        setLoading(false);
      } catch (err) {
        console.error("Dashboard API error:", err);
        console.error("Error details:", err.response?.data || err.message);
        
        setError("Failed to load dashboard data. Please check your connection and try again.");
        
        // Set fallback data to prevent UI from breaking
        setStatsData({
          totalRooms: 0,
          availableRooms: 0,
          occupiedRooms: 0,
          bookedToday: 0,
          totalBookings: 0
        });
        
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const pieData = [
    { name: "Booked Today", value: statsData.bookedToday },
    { name: "Available Rooms", value: statsData.availableRooms },
  ];
  const colors = ["#FF4C4C", "#4CAF50"];

  const stats = [
    {
      title: "Total Rooms",
      value: statsData.totalRooms,
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "bg-[#a8815e]",
    },
    {
      title: "Available Rooms",
      value: statsData.availableRooms,
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      color: "bg-[#a8815e]",
    },
    {
      title: "Booked Today",
      value: statsData.bookedToday,
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      color: "bg-[#a8815e]",
    },
    {
      title: "Total Bookings",
      value: statsData.totalBookings,
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "bg-[#a8815e]",
    },
  ];

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="text-xl font-semibold text-gray-600 mb-2">
          Loading Dashboard...
        </div>
        <div className="text-sm text-gray-500">
          Fetching rooms and bookings data...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center">
        <div className="text-xl font-semibold text-red-600 mb-2">
          Error Loading Dashboard
        </div>
        <div className="text-sm text-gray-600 mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#a8815e] text-white rounded-md hover:bg-yellow-800"
        >
          Retry
        </button>
      </div>
    );
  }

  // LINE CHART DATA based on view
  let lineData = [];
  let dataKey = "Booked";
  let xKey = "day";

  if (view === "daily") {
    lineData = dailyData;
    xKey = "day";
  } else if (view === "weekly") {
    lineData = weeklyData;
    xKey = "week";
  } else if (view === "monthly") {
    lineData = monthlyData;
    xKey = "month";
  } else if (view === "yearly") {
    lineData = yearlyData;
    xKey = "year";
  }

  return (
    <div className="p-2 sm:p-4 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#a8815e]">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600">Welcome to your admin dashboard</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => window.location.reload()}
            className="px-3 py-2 sm:px-4 bg-[#a8815e] text-white rounded-md text-xs sm:text-sm font-semibold hover:bg-yellow-800 transition-colors"
          >
            Refresh Data
          </button>
          <button
            onClick={() => navigate("/admin/bookings")}
            className="px-3 py-2 sm:px-4 bg-[#a8815e] text-white rounded-md text-xs sm:text-sm font-semibold hover:bg-yellow-800 transition-colors"
          >
            Go to Bookings
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-3 sm:p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row items-center">
              <div className={`${stat.color} p-2 sm:p-3 rounded-full text-white mb-2 sm:mb-0`}>
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={stat.icon}
                  />
                </svg>
              </div>
              <div className="sm:ml-4 text-center sm:text-left">
                <h2 className="text-xs sm:text-lg font-semibold text-gray-600">
                  {stat.title}
                </h2>
                <p className="text-lg sm:text-2xl font-bold text-[#a8815e]">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            Room Status Overview
          </h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={80}
                innerRadius={40}
                paddingAngle={5}
                label={({ name, value }) => `${name}: ${value}`}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={colors[index]}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between mb-4 gap-3">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
              Booking Trends
            </h3>

            <div className="flex flex-wrap gap-1 sm:gap-3">
              {["daily","weekly","monthly","yearly"].map(v => (
                <button
                  key={v}
                  className={`px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm ${
                    view === v ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setView(v)}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke="#3B82F6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
