// // import { useState, useRef, useEffect } from 'react';
// // import { Routes, Route, useLocation } from 'react-router-dom';
// // import './App.css';

// // import Header from './Components/Header/Header';
// // import SignIn from "./Pages/SignIn";
// // import SignUp from "./Pages/SignUp";
// // import Home from './Pages/Home';
// // import ContactPage from './Pages/ContactUs';
// // import Footer from './Components/Footer/Footer';
// // import AboutUs from './Pages/AboutUs';
// // import Restaurant from './Pages/Restaurant';
// // import GalleryPage from './Pages/Gallery';
// // import Services from './Pages/Services';
// // import Activities from './Pages/Activities';
// // import Events from './Pages/Event';
// // import BookNow from './Pages/BookNow';
// // import RoomDetail from './Pages/RoomDetail';
// // import LuxeVista from './Pages/LuxeVista';
// // import BeachHotel from './Pages/BeachHotel';
// // import SeaSide from './Pages/SeaSide';
// // import ApartmentHotel from './Pages/ApartmentHotel';
// // import MountainHotel from './Pages/MountainHotel';
// // import ClientCity from './Pages/ClientCity';
// // import HotelBeach from './Pages/HotelBeach';
// // import ScrollToTop from './Components/ScrollToTop';
// // import WhatsAppFloat from './Pages/WhatsAppFloat';
// // import ExecutiveRoom from './Components/roomdetails/ExecutiveRoom';
// // import TradditionalCottage from './Components/roomdetails/TradditionalCottage';
// // import FamilySuites from './Components/roomdetails/FamilyRoom';
// // import LuxurySuites from './Components/roomdetails/LuxurySuites';
// // import Blog from './Pages/Blog';

// // // Admin Components
// // import AdminLayout from './Pages/Admin/AdminLayout';
// // import Dashboard from './Pages/Admin/Dashboard';
// // import Bookings from './Pages/Admin/Bookings';
// // import Rooms from './Pages/Admin/Rooms';
// // import Users from './Pages/Admin/Users';
// // import Settings from './Pages/Admin/Settings';
// // import Payments from './Pages/Admin/Payments';
// // import GalleryAdmin from './Pages/Admin/Gallery';
// // import Analytics from './Pages/Admin/Analytics';

// // function App() {
// //   const [showSignIn, setShowSignIn] = useState(false);
// //   const [showSignUp, setShowSignUp] = useState(false);
// //   const modalRef = useRef();

// //   const location = useLocation();

// //   // CLOSE POPUPS ON ROUTE CHANGE
// //   useEffect(() => {
// //     setShowSignIn(false);
// //     setShowSignUp(false);
// //   }, [location.pathname]);

// //   // AUTO OPEN SIGN-IN POPUP ON FIRST LOAD
// //   useEffect(() => {
// //     setShowSignIn(true);
// //   }, []);

// //   const isBeachPage =
// //     location.pathname.toLowerCase().startsWith("/beachhotel") ||
// //     location.pathname.toLowerCase().startsWith("/seaside");

// //   // Admin area flag
// //   const isAdminPage = location.pathname.toLowerCase().startsWith("/admin");

// //   const hideGlobalFooterPages = ["/beachhotel", "/oceanbreeze", "/seaside"];
// //   const isFooterHidden = hideGlobalFooterPages.some(path =>
// //     location.pathname.toLowerCase().startsWith(path)
// //   );

// //   const handleOverlayClick = (e) => {
// //     if (modalRef.current && !modalRef.current.contains(e.target)) {
// //       setShowSignIn(false);
// //       setShowSignUp(false);
// //     }
// //   };

// //   return (
// //     <div className={`relative ${isBeachPage ? 'bg-black text-white' : ''}`}>
// //       <WhatsAppFloat />

// //       {!isBeachPage && !isAdminPage && (
// //         <Header
// //           onSignInClick={() => setShowSignIn(true)}
// //           onSignUpClick={() => setShowSignUp(true)}
// //         />
// //       )}

// //       <ScrollToTop />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/contactus" element={<ContactPage />} />
// //         <Route path="/about" element={<AboutUs />} />
// //         <Route path="/gallery" element={<GalleryPage />} />
// //         <Route path="/restaurant" element={<Restaurant />} />
// //         <Route path="/service" element={<Services />} />
// //         <Route path="/event" element={<Events />} />
// //         <Route path="/activities" element={<Activities />} />
// //         <Route path="/booknow" element={<BookNow />} />
// //         <Route path="/book-now" element={<BookNow />} />

// //         {/* Room Detail Routes */}
// //         <Route path="/room-detail/*" element={<RoomDetail />}>
// //           <Route path="executive-room" element={<ExecutiveRoom />} />
// //           <Route path="traditional-cottage" element={<TradditionalCottage />} />
// //           <Route path="family-suites" element={<FamilySuites />} />
// //           <Route path="luxury-suites" element={<LuxurySuites />} />
// //         </Route>
        
// //         <Route path="/luxevista" element={<LuxeVista />} />
// //         <Route path="/beachhotel" element={<BeachHotel />} />
// //         <Route path="/mountainhotel" element={<MountainHotel />} />
// //         <Route path="/seaside" element={<SeaSide />} />
// //         <Route path="/apartmenthotel" element={<ApartmentHotel />} />
// //         <Route path="/clientcity" element={<ClientCity />} />
// //         <Route path="/hotelbeach" element={<HotelBeach />} />
// //         <Route path="/blog" element={<Blog />} />

// //         {/* Admin Routes */}
// //         <Route path="/admin" element={<AdminLayout />}>
// //           <Route index element={<Dashboard />} />
// //           <Route path="dashboard" element={<Dashboard />} />
// //           <Route path="bookings" element={<Bookings />} />
// //           <Route path="rooms" element={<Rooms />} />
// //           <Route path="users" element={<Users />} />
// //           <Route path="payments" element={<Payments />} />
// //           <Route path="gallery" element={<GalleryAdmin />} />
// //           <Route path="settings" element={<Settings />} />
// //           <Route path="analytics" element={<Analytics />} />
// //         </Route>

// //         {/* Normal Pages */}
// //         <Route path="/signin" element={<SignIn />} />
// //         <Route path="/signup" element={<SignUp />} />
// //       </Routes>

// //       {!isFooterHidden && !isAdminPage && <Footer />}

// //       {/* SIGN IN POPUP */}
// //       {showSignIn && (
// //         <div
// //           onClick={handleOverlayClick}
// //           className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
// //         >
// //           <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
// //             <button
// //               onClick={() => setShowSignIn(false)}
// //               className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
// //             >
// //               ×
// //             </button>
// //             <SignIn
// //               onSwitchToSignUp={() => {
// //                 setShowSignIn(false);
// //                 setShowSignUp(true);
// //               }}
// //             />
// //           </div>
// //         </div>
// //       )}

// //       {/* SIGN UP POPUP */}
// //       {showSignUp && (
// //         <div
// //           onClick={handleOverlayClick}
// //           className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
// //         >
// //           <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
// //             <button
// //               onClick={() => setShowSignUp(false)}
// //               className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
// //             >
// //               ×
// //             </button>
// //             <SignUp
// //               onSwitchToSignIn={() => {
// //                 setShowSignUp(false);
// //                 setShowSignIn(true);
// //               }}
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;



// // import { useState, useRef, useEffect } from 'react';
// // import { Routes, Route, useLocation } from 'react-router-dom';
// // import './App.css';

// // import Header from './Components/Header/Header';
// // import SignIn from "./Pages/SignIn";
// // import SignUp from "./Pages/SignUp";
// // import Home from './Pages/Home';
// // import ContactPage from './Pages/ContactUs';
// // import Footer from './Components/Footer/Footer';
// // import AboutUs from './Pages/AboutUs';
// // import Restaurant from './Pages/Restaurant';
// // import GalleryPage from './Pages/Gallery';
// // import Services from './Pages/Services';
// // import Activities from './Pages/Activities';
// // import Events from './Pages/Event';
// // import BookNow from './Pages/BookNow';
// // import RoomDetail from './Pages/RoomDetail';
// // import LuxeVista from './Pages/LuxeVista';
// // import BeachHotel from './Pages/BeachHotel';
// // import SeaSide from './Pages/SeaSide';
// // import ApartmentHotel from './Pages/ApartmentHotel';
// // import MountainHotel from './Pages/MountainHotel';
// // import ClientCity from './Pages/ClientCity';
// // import HotelBeach from './Pages/HotelBeach';
// // import ScrollToTop from './Components/ScrollToTop';
// // import WhatsAppFloat from './Pages/WhatsAppFloat';
// // import ExecutiveRoom from './Components/roomdetails/ExecutiveRoom';
// // import TradditionalCottage from './Components/roomdetails/TradditionalCottage';
// // import FamilySuites from './Components/roomdetails/FamilyRoom';
// // import LuxurySuites from './Components/roomdetails/LuxurySuites';
// // import Blog from './Pages/Blog';

// // // Admin Components
// // import AdminLayout from './Pages/Admin/AdminLayout';
// // import Dashboard from './Pages/Admin/Dashboard';
// // import Bookings from './Pages/Admin/Bookings';
// // import Rooms from './Pages/Admin/Rooms';
// // import Users from './Pages/Admin/Users';
// // import Settings from './Pages/Admin/Settings';
// // import Payments from './Pages/Admin/Payments';
// // import GalleryAdmin from './Pages/Admin/Gallery';
// // import Analytics from './Pages/Admin/Analytics';

// // function App() {
// //   const [showSignIn, setShowSignIn] = useState(false);
// //   const [showSignUp, setShowSignUp] = useState(false);
// //   const modalRef = useRef();

// //   const location = useLocation();

// //   // CLOSE POPUPS ON ROUTE CHANGE
// //   useEffect(() => {
// //     setShowSignIn(false);
// //     setShowSignUp(false);
// //   }, [location.pathname]);

// //   // AUTO OPEN SIGN-IN POPUP ON FIRST LOAD
// //   useEffect(() => {
// //     setShowSignIn(true);
// //   }, []);

// //   const isBeachPage =
// //     location.pathname.toLowerCase().startsWith("/beachhotel") ||
// //     location.pathname.toLowerCase().startsWith("/seaside");

// //   // Admin area flag
// //   const isAdminPage = location.pathname.toLowerCase().startsWith("/admin");

// //   const hideGlobalFooterPages = ["/beachhotel", "/oceanbreeze", "/seaside"];
// //   const isFooterHidden = hideGlobalFooterPages.some(path =>
// //     location.pathname.toLowerCase().startsWith(path)
// //   );

// //   const handleOverlayClick = (e) => {
// //     if (modalRef.current && !modalRef.current.contains(e.target)) {
// //       setShowSignIn(false);
// //       setShowSignUp(false);
// //     }
// //   };

// //   return (
// //     <div className={`relative ${isBeachPage ? 'bg-black text-white' : ''}`}>
// //       <WhatsAppFloat />

// //       {!isBeachPage && !isAdminPage && (
// //         <Header
// //           onSignInClick={() => setShowSignIn(true)}
// //           onSignUpClick={() => setShowSignUp(true)}
// //         />
// //       )}

// //       <ScrollToTop />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/contactus" element={<ContactPage />} />
// //         <Route path="/about" element={<AboutUs />} />
// //         <Route path="/gallery" element={<GalleryPage />} />
// //         <Route path="/restaurant" element={<Restaurant />} />
// //         <Route path="/service" element={<Services />} />
// //         <Route path="/event" element={<Events />} />
// //         <Route path="/activities" element={<Activities />} />
// //         <Route path="/booknow" element={<BookNow />} />
// //         <Route path="/book-now" element={<BookNow />} />

// //         {/* Room Detail Routes */}
// //         <Route path="/room-detail/*" element={<RoomDetail />}>
// //           <Route path="executive-room" element={<ExecutiveRoom />} />
// //           <Route path="traditional-cottage" element={<TradditionalCottage />} />
// //           <Route path="family-suites" element={<FamilySuites />} />
// //           <Route path="luxury-suites" element={<LuxurySuites />} />
// //         </Route>
        
// //         <Route path="/luxevista" element={<LuxeVista />} />
// //         <Route path="/beachhotel" element={<BeachHotel />} />
// //         <Route path="/mountainhotel" element={<MountainHotel />} />
// //         <Route path="/seaside" element={<SeaSide />} />
// //         <Route path="/apartmenthotel" element={<ApartmentHotel />} />
// //         <Route path="/clientcity" element={<ClientCity />} />
// //         <Route path="/hotelbeach" element={<HotelBeach />} />
// //         <Route path="/blog" element={<Blog />} />

// //         {/* Admin Routes */}
// //         <Route path="/admin" element={<AdminLayout />}>
// //           <Route index element={<Dashboard />} />
// //           <Route path="dashboard" element={<Dashboard />} />
// //           <Route path="bookings" element={<Bookings />} />
// //           <Route path="rooms" element={<Rooms />} />
// //           <Route path="users" element={<Users />} />
// //           <Route path="payments" element={<Payments />} />
// //           <Route path="gallery" element={<GalleryAdmin />} />
// //           <Route path="settings" element={<Settings />} />
// //           <Route path="analytics" element={<Analytics />} />
// //         </Route>

// //         {/* Normal Pages */}
// //         <Route path="/signin" element={<SignIn />} />
// //         <Route path="/signup" element={<SignUp />} />
// //       </Routes>

// //       {!isFooterHidden && !isAdminPage && <Footer />}

// //       {/* SIGN IN POPUP */}
// //       {showSignIn && (
// //         <div
// //           onClick={handleOverlayClick}
// //           className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
// //         >
// //           <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
// //             <button
// //               onClick={() => setShowSignIn(false)}
// //               className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
// //             >
// //               ×
// //             </button>
// //             <SignIn
// //               onSwitchToSignUp={() => {
// //                 setShowSignIn(false);
// //                 setShowSignUp(true);
// //               }}
// //             />
// //           </div>
// //         </div>
// //       )}

// //       {/* SIGN UP POPUP */}
// //       {showSignUp && (
// //         <div
// //           onClick={handleOverlayClick}
// //           className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
// //         >
// //           <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
// //             <button
// //               onClick={() => setShowSignUp(false)}
// //               className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
// //             >
// //               ×
// //             </button>
// //             <SignUp
// //               onSwitchToSignIn={() => {
// //                 setShowSignUp(false);
// //                 setShowSignIn(true);
// //               }}
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;




// // import { useState, useRef, useEffect } from "react";
// // import { Routes, Route, useLocation } from "react-router-dom";
// // import "./App.css";

// // import Header from "./Components/Header/Header";
// // // import SignIn from "./Pages/SignIn";
// // // import SignUp from "./Pages/SignUp";
// // import Home from "./Pages/Home";
// // import ContactPage from "./Pages/ContactUs";
// // import Footer from "./Components/Footer/Footer";
// // import AboutUs from "./Pages/AboutUs";
// // import Restaurant from "./Pages/Restaurant";
// // import GalleryPage from "./Pages/Gallery";
// // import Services from "./Pages/Services";
// // import Activities from "./Pages/Activities";
// // import Events from "./Pages/Event";
// // import BookNow from "./Pages/BookNow";
// // import RoomDetail from "./Pages/RoomDetail";
// // import LuxeVista from "./Pages/LuxeVista";
// // import BeachHotel from "./Pages/BeachHotel";
// // import SeaSide from "./Pages/SeaSide";
// // import ApartmentHotel from "./Pages/ApartmentHotel";
// // import MountainHotel from "./Pages/MountainHotel";
// // import ClientCity from "./Pages/ClientCity";
// // import HotelBeach from "./Pages/HotelBeach";
// // import ScrollToTop from "./Components/ScrollToTop";
// // import WhatsAppFloat from "./Pages/WhatsAppFloat";
// // import ExecutiveRoom from "./Components/roomdetails/ExecutiveRoom";
// // import TradditionalCottage from "./Components/roomdetails/TradditionalCottage";
// // import FamilySuites from "./Components/roomdetails/FamilyRoom";
// // import LuxurySuites from "./Components/roomdetails/LuxurySuites";
// // import Blog from "./Pages/Blog";

// // // Admin
// // import AdminLayout from "./Pages/Admin/AdminLayout";
// // import Dashboard from "./Pages/Admin/Dashboard";
// // import Bookings from "./Pages/Admin/Bookings";
// // import Rooms from "./Pages/Admin/Rooms";
// // import Users from "./Pages/Admin/Users";
// // import Settings from "./Pages/Admin/Settings";
// // import Payments from "./Pages/Admin/Payments";
// // import GalleryAdmin from "./Pages/Admin/Gallery";
// // import Analytics from "./Pages/Admin/Analytics";
// // import Combo from "./Pages/Admin/Combo";
// // import ContactMessages from "./Pages/Admin/ContactMessages";
// // import AdminActivity from "./Pages/Admin/AdminActivity";
// // import AdminEvent from "./Pages/Admin/AdminEvent";

// // function App() {
// // //   const [showSignIn, setShowSignIn] = useState(false);
// // //   const [showSignUp, setShowSignUp] = useState(false);
// // const [showSignIn, setShowSignIn] = useState(false);
// // const [showSignUp, setShowSignUp] = useState(false);
// // // const modalRef = useRef();

// // const signInRef = useRef();
// // const signUpRef = useRef();


// // const handleSignInOverlayClick = (e) => {
// //   if (signInRef.current && !signInRef.current.contains(e.target)) {
// //     setShowSignIn(false);
// //   }
// // };

// // const handleSignUpOverlayClick = (e) => {
// //   if (signUpRef.current && !signUpRef.current.contains(e.target)) {
// //     setShowSignUp(false);
// //   }
// // };


  

// //   // Close modals on route change
// //   useEffect(() => {
// //     setShowSignIn(false);
// //     setShowSignUp(false);
// //   }, [location.pathname]);

// //   // Auto open sign-in on first load
// //   useEffect(() => {
// //     setShowSignIn(true);
// //   }, []);

// //   const isBeachPage =
// //     location.pathname.toLowerCase().startsWith("/beachhotel") ||
// //     location.pathname.toLowerCase().startsWith("/seaside");

// //   const isAdminPage = location.pathname.toLowerCase().startsWith("/admin");

// //   const hideGlobalFooterPages = ["/beachhotel", "/oceanbreeze", "/seaside"];
// //   const isFooterHidden = hideGlobalFooterPages.some(path =>
// //     location.pathname.toLowerCase().startsWith(path)
// //   );

// // //   const handleOverlayClick = (e) => {
// // //     if (modalRef.current && !modalRef.current.contains(e.target)) {
// // //       setShowSignIn(false);
// // //       setShowSignUp(false);
// // //     }
// // //   };

// // const handleOverlayClick = (e) => {
// //   if (modalRef.current && !modalRef.current.contains(e.target)) {
// //     setShowSignIn(false);
// //     setShowSignUp(false);
// //   }
// // };



// //   return (
// //     <div className={`relative ${isBeachPage ? "bg-black text-white" : ""}`}>
// //       <WhatsAppFloat />

// //       {!isBeachPage && !isAdminPage && (
// //         // <Header
// //         //   onSignInClick={() => setShowSignIn(true)}
// //         //   onSignUpClick={() => setShowSignUp(true)}
// //         // />

// //         <Header
// //   onSignInClick={() => setShowSignIn(true)}
// //   onSignUpClick={() => setShowSignUp(true)}
// // />

// //       )}

// //       <ScrollToTop />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/contactus" element={<ContactPage />} />
// //         <Route path="/about" element={<AboutUs />} />
// //         <Route path="/gallery" element={<GalleryPage />} />
// //         <Route path="/restaurant" element={<Restaurant />} />
// //         <Route path="/service" element={<Services />} />
// //         <Route path="/event" element={<Events />} />
// //         <Route path="/activities" element={<Activities />} />
// //         <Route path="/booknow" element={<BookNow />} />
// //         <Route path="/book-now" element={<BookNow />} />

// //         {/* Room Details */}
// //         <Route path="/room-detail/*" element={<RoomDetail />}>
// //           <Route path="executive-room" element={<ExecutiveRoom />} />
// //           <Route path="traditional-cottage" element={<TradditionalCottage />} />
// //           <Route path="family-suites" element={<FamilySuites />} />
// //           <Route path="luxury-suites" element={<LuxurySuites />} />
// //         </Route>

// //         <Route path="/luxevista" element={<LuxeVista />} />
// //         <Route path="/beachhotel" element={<BeachHotel />} />
// //         <Route path="/mountainhotel" element={<MountainHotel />} />
// //         <Route path="/seaside" element={<SeaSide />} />
// //         <Route path="/apartmenthotel" element={<ApartmentHotel />} />
// //         <Route path="/clientcity" element={<ClientCity />} />
// //         <Route path="/hotelbeach" element={<HotelBeach />} />
// //         <Route path="/blog" element={<Blog />} />

// //         {/* Admin Routes */}
// //         <Route path="/admin" element={<AdminLayout />}>
// //           <Route index element={<Dashboard />} />
// //           <Route path="dashboard" element={<Dashboard />} />
// //           <Route path="bookings" element={<Bookings />} />
// //           <Route path="rooms" element={<Rooms />} />
// //           <Route path="contact-messages" element={<ContactMessages />} />
// //           <Route path="combos" element={<Combo />} />
// //           <Route path="users" element={<Users />} />
// //           <Route path="payments" element={<Payments />} />
// //           <Route path="gallery" element={<GalleryAdmin />} />
// //           <Route path="settings" element={<Settings />} />
// //           <Route path="analytics" element={<Analytics />} />
// //           <Route path="activities" element={<AdminActivity />} />
// //           <Route path="events" element={<AdminEvent />} />
// //         </Route>

// //         {/* <Route path="/signin" element={<SignIn />} /> */}
// //         {/* <Route path="/signup" element={<SignUp />} /> */}
// //       </Routes>

// //       {!isFooterHidden && !isAdminPage && <Footer />}

     
// //     {/* SIGN IN MODAL */}
// // {showSignIn && (
// //   <div
// //     onClick={handleSignInOverlayClick}
// //     className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
// //   >
// //     <div
// //       ref={signInRef}
// //       className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-6"
// //     >
// //       <button
// //         onClick={() => setShowSignIn(false)}
// //         className="absolute top-3 right-4 text-xl text-gray-500 hover:text-black"
// //       >
// //         ✕
// //       </button>
// //       <SignIn
// //         onSwitchToSignUp={() => {
// //           setShowSignIn(false);
// //           setShowSignUp(true);
// //         }}
// //         onLoginSuccess={() => setShowSignIn(false)}
// //       />
// //     </div>
// //   </div>
// // )}


// // {/* SIGN UP MODAL */}
// // {showSignUp && (
// //   <div
// //     onClick={handleSignUpOverlayClick}
// //     className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
// //   >
// //     <div
// //       ref={signUpRef}
// //       className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-6"
// //     >
// //       <button
// //         onClick={() => setShowSignUp(false)}
// //         className="absolute top-3 right-4 text-xl text-gray-500 hover:text-black"
// //       >
// //         ✕
// //       </button>
// //       <SignUp
// //         onSwitchToSignIn={() => {
// //           setShowSignUp(false);
// //           setShowSignIn(true);
// //         }}
// //         onClose={() => setShowSignUp(false)} // ✅ make sure SignUp gets this prop
// //       />
// //     </div>
// //   </div>
// // )}

// //     </div>
// //   );
// // }

// // export default App;





// import { useState, useRef, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';

// import Header from './Components/Header/Header';
// import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";
// import Home from './Pages/Home';
// import ContactPage from './Pages/ContactUs';
// import Footer from './Components/Footer/Footer';
// import AboutUs from './Pages/AboutUs';
// import Restaurant from './Pages/Restaurant';
// import GalleryPage from './Pages/Gallery';
// import Services from './Pages/Services';
// import Activities from './Pages/Activities';
// import Events from './Pages/Event';
// import BookNow from './Pages/BookNow';
// import RoomDetail from './Pages/RoomDetail';
// import LuxeVista from './Pages/LuxeVista';
// import BeachHotel from './Pages/BeachHotel';
// import SeaSide from './Pages/SeaSide';
// import ApartmentHotel from './Pages/ApartmentHotel';
// import MountainHotel from './Pages/MountainHotel';
// import ClientCity from './Pages/ClientCity';
// import HotelBeach from './Pages/HotelBeach';
// import ScrollToTop from './Components/ScrollToTop';
// import WhatsAppFloat from './Pages/WhatsAppFloat';
// import ExecutiveRoom from './Components/roomdetails/ExecutiveRoom';
// import TradditionalCottage from './Components/roomdetails/TradditionalCottage';
// import FamilySuites from './Components/roomdetails/FamilyRoom';
// import LuxurySuites from './Components/roomdetails/LuxurySuites';
// import Blog from './Pages/Blog';

// // Admin Components
// import AdminLayout from './Pages/Admin/AdminLayout';
// import Dashboard from './Pages/Admin/Dashboard';
// import Bookings from './Pages/Admin/Bookings';
// import Rooms from './Pages/Admin/Rooms';
// import Users from './Pages/Admin/Users';
// import Settings from './Pages/Admin/Settings';
// import Payments from './Pages/Admin/Payments';
// import GalleryAdmin from './Pages/Admin/Gallery';
// import Analytics from './Pages/Admin/Analytics';
// // === NEW IMPORT ===
// import Combo from './Pages/Admin/Combo';
// import ContactMessages from './Pages/Admin/ContactMessages';
// import AdminActivity from './Pages/Admin/AdminActivity';
// import AdminEvent from './Pages/Admin/AdminEvent';

// // ==================

// function App() {
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);
//   const modalRef = useRef();

//   const location = useLocation();

//   // CLOSE POPUPS ON ROUTE CHANGE
//   useEffect(() => {
//     setShowSignIn(false);
//     setShowSignUp(false);
//   }, [location.pathname]);

//   // AUTO OPEN SIGN-IN POPUP ON FIRST LOAD
//   useEffect(() => {
//     setShowSignIn(true);
//   }, []);

//   const isBeachPage =
//     location.pathname.toLowerCase().startsWith("/beachhotel") ||
//     location.pathname.toLowerCase().startsWith("/seaside");

//   // Admin area flag
//   const isAdminPage = location.pathname.toLowerCase().startsWith("/admin");

//   const hideGlobalFooterPages = ["/beachhotel", "/oceanbreeze", "/seaside"];
//   const isFooterHidden = hideGlobalFooterPages.some(path =>
//     location.pathname.toLowerCase().startsWith(path)
//   );

//   const handleOverlayClick = (e) => {
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       setShowSignIn(false);
//       setShowSignUp(false);
//     }
//   };

//   return (
//     <div className={`relative ${isBeachPage ? 'bg-black text-white' : ''}`}>
//       <WhatsAppFloat />

//       {!isBeachPage && !isAdminPage && (
//         <Header
//           onSignInClick={() => setShowSignIn(true)}
//           onSignUpClick={() => setShowSignUp(true)}
//         />
//       )}

//       <ScrollToTop />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contactus" element={<ContactPage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/gallery" element={<GalleryPage />} />
//         <Route path="/restaurant" element={<Restaurant />} />
//         <Route path="/service" element={<Services />} />
//         <Route path="/event" element={<Events />} />
//         <Route path="/activities" element={<Activities />} />
//         <Route path="/booknow" element={<BookNow />} />
//         <Route path="/book-now" element={<BookNow />} />

//         {/* Room Detail Routes */}
//         <Route path="/room-detail/*" element={<RoomDetail />}>
//           <Route path="executive-room" element={<ExecutiveRoom />} />
//           <Route path="traditional-cottage" element={<TradditionalCottage />} />
//           <Route path="family-suites" element={<FamilySuites />} />
//           <Route path="luxury-suites" element={<LuxurySuites />} />
//         </Route>
//         
//         <Route path="/luxevista" element={<LuxeVista />} />
//         <Route path="/beachhotel" element={<BeachHotel />} />
//         <Route path="/mountainhotel" element={<MountainHotel />} />
//         <Route path="/seaside" element={<SeaSide />} />
//         <Route path="/apartmenthotel" element={<ApartmentHotel />} />
//         <Route path="/clientcity" element={<ClientCity />} />
//         <Route path="/hotelbeach" element={<HotelBeach />} />
//         <Route path="/blog" element={<Blog />} />

//         {/* Admin Routes */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="bookings" element={<Bookings />} />
//           <Route path="rooms" element={<Rooms />} />
//     <Route path="/admin/contact-messages" element={<ContactMessages />} />

//           
//           {/* === NEW COMBO ROUTE === */}
//           <Route path="combos" element={<Combo />} />
//           {/* ======================= */}

//           <Route path="users" element={<Users />} />
//           <Route path="payments" element={<Payments />} />
//           <Route path="gallery" element={<GalleryAdmin />} />
//           <Route path="settings" element={<Settings />} />
//           <Route path="analytics" element={<Analytics />} />
//    {/* <Route path="/admin/activities" element={<AdminActivity />} /> */}
//     <Route path="activities" element={<AdminActivity />} />
//         <Route path="events" element={<AdminEvent />} />

// </Route>

//         {/* Normal Pages */}
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>

//       {!isFooterHidden && !isAdminPage && <Footer />}

//       {/* SIGN IN POPUP (Unchanged) */}
//       {showSignIn && (
//         <div
//           onClick={handleOverlayClick}
//           className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
//         >
//           <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
//             <button
//               onClick={() => setShowSignIn(false)}
//               className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
//             >
//               ×
//             </button>
//             <SignIn
//               onSwitchToSignUp={() => {
//                 setShowSignIn(false);
//                 setShowSignUp(true);
//               }}
//             />
//           </div>
//         </div>
//       )}

//       {/* SIGN UP POPUP (Unchanged) */}
//       {showSignUp && (
//         <div
//           onClick={handleOverlayClick}
//           className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
//         >
//           <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
//             <button
//               onClick={() => setShowSignUp(false)}
//               className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
//             >
//               ×
//             </button>
//             <SignUp
//               onSwitchToSignIn={() => {
//                 setShowSignUp(false);
//                 setShowSignIn(true);
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from './Pages/Home';
import ContactPage from './Pages/ContactUs';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs';
import Restaurant from './Pages/Restaurant';
import GalleryPage from './Pages/Gallery';
import Services from './Pages/Services';
import Activities from './Pages/Activities';
import Events from './Pages/Event';
import BookNow from './Pages/BookNow';
import RoomDetail from './Pages/RoomDetail';
import LuxeVista from './Pages/LuxeVista';
import BeachHotel from './Pages/BeachHotel';
import SeaSide from './Pages/SeaSide';
import ApartmentHotel from './Pages/ApartmentHotel';
import MountainHotel from './Pages/MountainHotel';
import ClientCity from './Pages/ClientCity';
import HotelBeach from './Pages/HotelBeach';
import ScrollToTop from './Components/ScrollToTop';
import WhatsAppFloat from './Pages/WhatsAppFloat';
import ExecutiveRoom from './Components/roomdetails/ExecutiveRoom';
import TradditionalCottage from './Components/roomdetails/TradditionalCottage';
import FamilySuites from './Components/roomdetails/FamilyRoom';
import LuxurySuites from './Components/roomdetails/LuxurySuites';
import Blog from './Pages/Blog';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

// Admin Components
import AdminLayout from './Pages/Admin/AdminLayout';
import Dashboard from './Pages/Admin/Dashboard';
import Bookings from './Pages/Admin/Bookings';
import Rooms from './Pages/Admin/Rooms';
import Users from './Pages/Admin/Users';
import Settings from './Pages/Admin/Settings';
import Payments from './Pages/Admin/Payments';
import GalleryAdmin from './Pages/Admin/Gallery';
import Analytics from './Pages/Admin/Analytics';
// === NEW IMPORT ===
import Combo from './Pages/Admin/Combo';
import ContactMessages from './Pages/Admin/ContactMessages';
import AdminActivity from './Pages/Admin/AdminActivity';
import AdminEvent from './Pages/Admin/AdminEvent';

// ==================

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const modalRef = useRef();

  const location = useLocation();

  // CLOSE POPUPS ON ROUTE CHANGE
  useEffect(() => {
    setShowSignIn(false);
    setShowSignUp(false);
  }, [location.pathname]);

  // AUTO OPEN SIGN-IN POPUP ON FIRST LOAD
  useEffect(() => {
    setShowSignIn(true);
  }, []);

  const isBeachPage =
    location.pathname.toLowerCase().startsWith("/beachhotel") ||
    location.pathname.toLowerCase().startsWith("/seaside");

  // Admin area flag
  const isAdminPage = location.pathname.toLowerCase().startsWith("/admin");

  const hideGlobalFooterPages = ["/beachhotel", "/oceanbreeze", "/seaside"];
  const isFooterHidden = hideGlobalFooterPages.some(path =>
    location.pathname.toLowerCase().startsWith(path)
  );

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowSignIn(false);
      setShowSignUp(false);
    }
  };

  return (
    <div className={`relative ${isBeachPage ? 'bg-black text-white' : ''}`}>
      <WhatsAppFloat />

      {!isBeachPage && !isAdminPage && (
        <Header
          onSignInClick={() => setShowSignIn(true)}
          onSignUpClick={() => setShowSignUp(true)}
        />
      )}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/service" element={<Services />} />
        <Route path="/event" element={<Events />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/book-now" element={<BookNow />} />

        {/* Room Detail Routes */}
        <Route path="/room-detail/*" element={<RoomDetail />}>
          <Route path="executive-room" element={<ExecutiveRoom />} />
          <Route path="traditional-cottage" element={<TradditionalCottage />} />
          <Route path="family-suites" element={<FamilySuites />} />
          <Route path="luxury-suites" element={<LuxurySuites />} />
        </Route>
        
        <Route path="/luxevista" element={<LuxeVista />} />
        <Route path="/beachhotel" element={<BeachHotel />} />
        <Route path="/mountainhotel" element={<MountainHotel />} />
        <Route path="/seaside" element={<SeaSide />} />
        <Route path="/apartmenthotel" element={<ApartmentHotel />} />
        <Route path="/clientcity" element={<ClientCity />} />
        <Route path="/hotelbeach" element={<HotelBeach />} />
        <Route path="/blog" element={<Blog />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="rooms" element={<Rooms />} />
    <Route path="/admin/contact-messages" element={<ContactMessages />} />

          
          {/* === NEW COMBO ROUTE === */}
          <Route path="combos" element={<Combo />} />
          {/* ======================= */}

          <Route path="users" element={<Users />} />
          <Route path="payments" element={<Payments />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="settings" element={<Settings />} />
          <Route path="analytics" element={<Analytics />} />
   {/* <Route path="/admin/activities" element={<AdminActivity />} /> */}
    <Route path="activities" element={<AdminActivity />} />
        <Route path="events" element={<AdminEvent />} />

</Route>

        {/* Normal Pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {!isFooterHidden && !isAdminPage && <Footer />}

      {/* SIGN IN POPUP (Unchanged) */}
      {showSignIn && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
        >
          <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
            >
              ×
            </button>
            <SignIn
              onSwitchToSignUp={() => {
                setShowSignIn(false);
                setShowSignUp(true);
              }}
            />
          </div>
        </div>
      )}

      {/* SIGN UP POPUP (Unchanged) */}
      {showSignUp && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
        >
          <div ref={modalRef} className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setShowSignUp(false)}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
            >
              ×
            </button>
            <SignUp
              onSwitchToSignIn={() => {
                setShowSignUp(false);
                setShowSignIn(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;