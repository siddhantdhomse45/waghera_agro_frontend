import React, { useState } from 'react';
import jsPDF from 'jspdf';

const Payments = () => {
  const [payments] = useState([
    { 
      id: 1, 
      bookingId: 'BK-2023-001', 
      customer: 'John Doe', 
      amount: 450.00, 
      date: '2023-06-15', 
      method: 'Credit Card', 
      status: 'Confirmed',
      room: 'Deluxe Room',
      checkIn: '2023-06-15',
      checkOut: '2023-06-20'
    },
    { 
      id: 2, 
      bookingId: 'BK-2023-002', 
      customer: 'Jane Smith', 
      amount: 750.00, 
      date: '2023-06-18', 
      method: 'PayPal', 
      status: 'Confirmed',
      room: 'Executive Suite',
      checkIn: '2023-06-18',
      checkOut: '2023-06-25'
    },
    { 
      id: 3, 
      bookingId: 'BK-2023-003', 
      customer: 'Robert Johnson', 
      amount: 380.00, 
      date: '2023-06-22', 
      method: 'Bank Transfer', 
      status: 'Confirmed',
      room: 'Family Cottage',
      checkIn: '2023-06-22',
      checkOut: '2023-06-24'
    },
    { 
      id: 4, 
      bookingId: 'BK-2023-004', 
      customer: 'Emily Davis', 
      amount: 1200.00, 
      date: '2023-06-25', 
      method: 'Credit Card', 
      status: 'Confirmed',
      room: 'Luxury Villa',
      checkIn: '2023-06-25',
      checkOut: '2023-06-30'
    },
    { 
      id: 5, 
      bookingId: 'BK-2023-005', 
      customer: 'Michael Wilson', 
      amount: 320.00, 
      date: '2023-07-01', 
      method: 'Debit Card', 
      status: 'Confirmed',
      room: 'Standard Room',
      checkIn: '2023-07-01',
      checkOut: '2023-07-05'
    },
  ]);

  const [activeMenu, setActiveMenu] = useState(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(null);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = (payment) => {
    alert(`Payment Details:
ID: ${payment.id}
Booking ID: ${payment.bookingId}
Customer: ${payment.customer}
Amount: $${payment.amount}
Date: ${payment.date}
Method: ${payment.method}
Status: ${payment.status}`);
    setActiveMenu(null);
  };

  const handleDownloadPDF = (payment) => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
    
    // Set font and size
    doc.setFontSize(20);
    doc.text('INVOICE', 105, 20, null, null, 'center');
    
    // Add hotel information
    doc.setFontSize(12);
    doc.text('WAGHERA AGRO TOURISM', 105, 35, null, null, 'center');
    doc.text('280 Augusta Avenue, M5T 2L9 Toronto, Mahabaleshwar', 105, 42, null, null, 'center');
    doc.text('Email: wagheraagrotourism@gmail.com | Phone: +12505550199', 105, 49, null, null, 'center');
    
    // Add horizontal line
    doc.line(20, 55, 190, 55);
    
    // Add payment details
    doc.setFontSize(12);
    doc.text(`Booking ID: ${payment.bookingId}`, 20, 65);
    doc.text(`Customer: ${payment.customer}`, 20, 72);
    doc.text(`Room: ${payment.room}`, 20, 79);
    doc.text(`Check-in: ${payment.checkIn}`, 20, 86);
    doc.text(`Check-out: ${payment.checkOut}`, 20, 93);
    doc.text(`Payment Method: ${payment.method}`, 20, 100);
    doc.text(`Date: ${payment.date}`, 20, 107);
    
    // Add amount and status
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(`Amount: $${payment.amount.toFixed(2)}`, 20, 120);
    doc.text(`Status: ${payment.status}`, 20, 127);
    
    // Add thank you message
    doc.setFont(undefined, 'normal');
    doc.setFontSize(12);
    doc.text('Thank you for your payment!', 105, 140, null, null, 'center');
    
    // Save the PDF
    doc.save(`invoice-${payment.bookingId}.pdf`);
    
    setActiveMenu(null);
  };

  const toggleMenu = (paymentId) => {
    setActiveMenu(activeMenu === paymentId ? null : paymentId);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#a8815e]">Payment Management</h1>
        <p className="text-gray-600">View and manage all payment transactions</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payment.bookingId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.room}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatCurrency(payment.amount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
                    <button 
                      onClick={() => toggleMenu(payment.id)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>

                    {activeMenu === payment.id && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu">
                          <button
                            onClick={() => handleViewDetails(payment)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => handleDownloadPDF(payment)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Download Invoice
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice Modal */}
      {showInvoiceModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md shadow-xl">
            <InvoiceModal 
              payment={showInvoiceModal} 
              onClose={() => setShowInvoiceModal(null)} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Invoice Modal Component
const InvoiceModal = ({ payment, onClose }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const handleDownload = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
    
    // Set font and size
    doc.setFontSize(20);
    doc.text('INVOICE', 105, 20, null, null, 'center');
    
    // Add hotel information
    doc.setFontSize(12);
    doc.text('WAGHERA AGRO TOURISM', 105, 35, null, null, 'center');
    doc.text('280 Augusta Avenue, M5T 2L9 Toronto, Mahabaleshwar', 105, 42, null, null, 'center');
    doc.text('Email: wagheraagrotourism@gmail.com | Phone: +12505550199', 105, 49, null, null, 'center');
    
    // Add horizontal line
    doc.line(20, 55, 190, 55);
    
    // Add payment details
    doc.setFontSize(12);
    doc.text(`Booking ID: ${payment.bookingId}`, 20, 65);
    doc.text(`Customer: ${payment.customer}`, 20, 72);
    doc.text(`Room: ${payment.room}`, 20, 79);
    doc.text(`Check-in: ${payment.checkIn}`, 20, 86);
    doc.text(`Check-out: ${payment.checkOut}`, 20, 93);
    doc.text(`Payment Method: ${payment.method}`, 20, 100);
    doc.text(`Date: ${payment.date}`, 20, 107);
    
    // Add amount and status
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(`Amount: ${formatCurrency(payment.amount)}`, 20, 120);
    doc.text(`Status: ${payment.status}`, 20, 127);
    
    // Add thank you message
    doc.setFont(undefined, 'normal');
    doc.setFontSize(12);
    doc.text('Thank you for your payment!', 105, 140, null, null, 'center');
    
    // Save the PDF
    doc.save(`invoice-${payment.bookingId}.pdf`);
    
    onClose();
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-[#a8815e] mb-4">Invoice Preview</h2>
      <div className="mb-4">
        <p className="text-gray-600"><span className="font-medium">Booking ID:</span> {payment.bookingId}</p>
        <p className="text-gray-600"><span className="font-medium">Customer:</span> {payment.customer}</p>
        <p className="text-gray-600"><span className="font-medium">Room:</span> {payment.room}</p>
        <p className="text-gray-600"><span className="font-medium">Check-in:</span> {payment.checkIn}</p>
        <p className="text-gray-600"><span className="font-medium">Check-out:</span> {payment.checkOut}</p>
        <p className="text-gray-600"><span className="font-medium">Amount:</span> {formatCurrency(payment.amount)}</p>
        <p className="text-gray-600"><span className="font-medium">Payment Method:</span> {payment.method}</p>
        <p className="text-gray-600"><span className="font-medium">Date:</span> {payment.date}</p>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-[#a8815e] text-white rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Payments;