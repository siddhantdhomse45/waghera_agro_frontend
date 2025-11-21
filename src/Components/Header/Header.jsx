import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Loader from "../Loader";

export default function Header({ onSignInClick, onSignUpClick, bg }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopHeader, setHideTopHeader] = useState(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPagesClicked, setIsPagesClicked] = useState(false);
  const [isRoomsClicked, setIsRoomsClicked] = useState(false);
  const [isHomeClicked, setIsHomeClicked] = useState(false);
  const [isBlogClicked, setIsBlogClicked] = useState(false);
  const location = useLocation();
  const isSeasidePage = location.pathname.toLowerCase().startsWith("/seaside");
  const isOceanbreezePage = location.pathname.toLowerCase().startsWith("/oceanbreeze");
  const isBeachHotelPage = location.pathname.toLowerCase().startsWith("/beachhotel");
  const [scrolled, setScrolled] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [mobileRoomsOpen, setMobileRoomsOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [mobileRoomOpen, setMobileRoomOpen] = useState(false);
  const [mobileRoomStyleOpen, setMobileRoomStyleOpen] = useState(false);
  const [mobileRoomDetailOpen, setMobileRoomDetailOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);

  useEffect(() => {
    // Simulate brief loading (e.g., 800ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const homeMenuItems = [
    {
      name: "Luxury Hotel",
      href: "/",
      img: "https://html.themewant.com/moonlit/assets/images/menu/main.webp",
    },

  ];

  const pages = [
    { name: "About", path: "/about" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Gallery", path: "/gallery" },
    { name: "Service", path: "/service" },
    { name: "Event", path: "/event" },
    { name: "Activities", path: "/activities" },
  ];


  // Scroll handler to hide top header
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHideTopHeader(true);
      } else {
        // Scrolling up
        setHideTopHeader(true);
      }

      if (currentScrollY === 0) {
        setHideTopHeader(false); // Show header at the very top
      }

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleLinkClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsBlogOpen(false); // optional: close dropdown
      navigate(path);
    }, 1000); // 1s loading simulation
  };

  const handleBookNowClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Optional — will unmount if navigating
      navigate("/booknow");
    }, 1000); // 1 second delay
  };

  // 🔐 Ensure dropdown is closed after page navigation (loader ends)
  useEffect(() => {
    if (!loading) {
      setIsHomeOpen(false);
      setIsHomeClicked(false);
    }
  }, [loading]);


  const rooms = [
    { name: "Room One", path: "/room-one" },
    { name: "Room Two", path: "/room-two" },
    { name: "Room Three", path: "/room-three" },
    { name: "Room Four", path: "/room-four" },
  ];

  return (

    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Header */}
      <div
        className={`transition-all duration-500 px-4 sm:px-6 py-3 hidden sm:flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 ${hideTopHeader ? "sm:hidden" : ""
          } ${bg === "black"
            ? "bg-black text-white"
            : isSeasidePage || isOceanbreezePage // 👈 Add this condition
              ? "bg-transparent text-white"
              : "bg-white text-gray-700 shadow"
          }
`}
      >

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm px-4 sm:px-18">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-xs" /> +12505550199
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-xs" /> wagheraagrotourism@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm px-4 sm:px-18">
          <FaMapMarkerAlt className="text-xs" />
          <span>280 Augusta Avenue, M5T 2L9 Toronto, Mahabaleshwar</span>
        </div>
      </div>
      <hr className="border-t border-gray-200 hidden sm:block" />

      <nav
        className={`sticky top-0 py-4 flex items-center justify-between transition-all duration-300 z-40 px-4 sm:px-24 ${bg === "black"
          ? "bg-black text-white shadow-md"
          : isSeasidePage || isOceanbreezePage
            ? scrolled
              ? "bg-black text-white shadow-md"
              : "bg-transparent text-white"
            : "bg-white text-black shadow-md"
          }`}
      >

        {loading && <Loader />}
        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex gap-5 text-sm font-medium ${bg === "black" || isSeasidePage || isOceanbreezePage ? "text-white" : "text-gray-700"
            }`}

        >
          {/* HOME MENU */}
          <li className="relative cursor-pointer">
            <div
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  navigate("/");
                }, 600);
              }}
              className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer"
            >
              Home
            </div>
          </li>



          {/* ROOMS MENU */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => {
              if (!isRoomsClicked) setIsRoomsOpen(true);
            }}
            onMouseLeave={() => {
              if (!isRoomsClicked) setIsRoomsOpen(false);
            }}
          >
            {/* Trigger Button (Click + Hover) */}
            <div
              onClick={() => {
                const newClicked = !isRoomsClicked;
                setIsRoomsClicked(newClicked);
                setIsRoomsOpen(newClicked);
              }}
              className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer"
            >
              Rooms
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`mt-[2px] transform transition-transform duration-300 ${isRoomsOpen ? "rotate-180" : ""
                  }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isRoomsOpen && (
              <div className="absolute top-full left-0 mt-2 z-50 bg-white shadow-lg w-60">
                {/* Room Style + submenu */}
                <div className="group relative px-6 py-3 mt-4 flex text-gray-800 justify-between items-center hover:text-yellow-600">
                  Room Style
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>

                  <div className="absolute top-5 left-full bg-white shadow-lg w-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50">
                    {rooms.map((room, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setLoading(true);
                          setIsRoomsClicked(false);
                          setIsRoomsOpen(false);
                          setTimeout(() => {
                            setLoading(false);
                            handleLinkClick(room.path);
                          }, 500);
                        }}
                        className="cursor-pointer block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-yellow-600"
                      >
                        {room.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Room Details + submenu */}
                <div className="group relative px-6 py-3 flex text-gray-800 justify-between items-center hover:text-yellow-600">
                  Room Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>

                  <div className="absolute top-0 left-full bg-white shadow-lg w-52 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50">
                    {[
                      { label: "Room Detail 1", path: "/book-now" },
                      { label: "Room Detail 2", path: "/room-detail" },
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setLoading(true);
                          setIsRoomsClicked(false);
                          setIsRoomsOpen(false);
                          setTimeout(() => {
                            setLoading(false);
                            handleLinkClick(item.path);
                          }, 500);
                        }}
                        className="cursor-pointer block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-yellow-600"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Loader */}
                {loading && (
                  <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[9999]">
                    <div className="w-12 h-12 border-4 border-[#af7b4f] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            )}
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => {
              if (!isPagesClicked) setIsPagesOpen(true);
            }}
            onMouseLeave={() => {
              if (!isPagesClicked) setIsPagesOpen(false);
            }}
          >
            {/* Clickable trigger */}
            <div
              onClick={() => {
                const newClicked = !isPagesClicked;
                setIsPagesClicked(newClicked);
                setIsPagesOpen(newClicked); // toggle visibility
              }}
              className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer"
            >
              Amenities
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`mt-[2px] transform transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''
                  }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Dropdown menu */}
            {isPagesOpen && (
              <div className="absolute top-full left-0 mt-4 z-50 bg-white shadow-lg w-55">
                {pages.map((page, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      // ✅ Close dropdown and reset clicked state
                      setIsPagesOpen(false);
                      setIsPagesClicked(false);
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                        navigate(page.path);
                      }, 500);
                    }}
                    className="block px-4 py-2 text-gray-800 mt-2 hover:text-yellow-600 cursor-pointer"
                  >
                    {page.name}
                  </div>
                ))}
              </div>
            )}
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => {
              if (!isBlogClicked) setIsBlogOpen(true);
            }}
            onMouseLeave={() => {
              if (!isBlogClicked) setIsBlogOpen(false);
            }}
          >
            {/* Toggle Button */}
            <div
              onClick={() => {
                const clicked = !isBlogClicked;
                setIsBlogClicked(clicked);
                setIsBlogOpen(clicked);
              }}
              className="flex items-center gap-1 hover:text-yellow-600 group"
            >
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`mt-[2px] transform transition-transform duration-300 ${isBlogOpen ? "rotate-180" : ""
                  }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isBlogOpen && (
              <div className="absolute top-full left-0 mt-2 z-50 bg-white shadow-lg w-56">
                {loading ? (
                  <div className="px-4 py-2 text-gray-600">Loading...</div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setIsBlogClicked(false);
                        setIsBlogOpen(false);
                        handleLinkClick("/blog");
                      }}
                      className="cursor-pointer block w-full text-left px-4 py-2 text-gray-800 hover:text-yellow-600"
                    >
                      Blog
                    </button>
                    <button
                      onClick={() => {
                        setIsBlogClicked(false);
                        setIsBlogOpen(false);
                        handleLinkClick("/blog-details");
                      }}
                      className="cursor-pointer block w-full text-left px-4 py-2 text-gray-800 hover:text-yellow-600"
                    >
                      Blog Details
                    </button>
                  </>
                )}
              </div>
            )}
          </li>


          <li
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false); // optional if Contact page handles its own loading
                navigate("/contactus");
              }, 1000); // 1 second loader before navigating
            }}
            className="cursor-pointer hover:text-yellow-600"
          >
            Contact
          </li>

        </ul>


        {/* Logo */}
        <Link to="/">
          {/* <img
    src="https://html.themewant.com/moonlit/assets/images/logo/logo.svg"
    alt="Logo"
    className={`h-10 w-auto cursor-pointer ${isSeasidePage || isOceanbreezePage  ? "invert" : ""}`}
  /> */} <h1>Waghera Agro Tourism</h1>
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3 font-semibold">
          <button
            onClick={onSignInClick} // 🔁 This triggers the modal now
            className="cursor-pointer border border-gray-300 px-4 py-2 rounded hover:bg-[#a8815e]"
          >
            Sign In
          </button>
          <button
            onClick={onSignUpClick}
            className="cursor-pointer border border-gray-300 px-4 py-1 rounded hover:bg-[#a8815e]"
          >
            Register
          </button>
          {loading ? (
            <div className="flex items-center justify-center h-screen">
              <div className="w-12 h-12 border-4 border-[#af7b4f] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <button
              onClick={handleBookNowClick}
              className="cursor-pointer bg-[#af7b4f] text-white px-4 py-2 rounded hover:bg-yellow-800 transition duration-300"
            >
              Book Now
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          <button className="hidden sm:inline-block bg-yellow-700 text-white px-4 py-1 rounded hover:bg-yellow-800">
            Book Now
          </button>
          <button
            className="text-3xl bg-yellow-700 text-white p-1 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white shadow-md p-4 flex flex-col gap-4 z-50 lg:hidden">
          <div
            className={`fixed inset-0 z-50 transition-transform duration-300 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
              } bg-black p-6 overflow-y-auto`}
          >
            {/* Logo + Close button */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <Link to="/">
                  {/* <img
      src="https://html.themewant.com/moonlit/assets/images/logo/logo.svg"
      alt="Logo"
      className="h-10 w-auto filter invert cursor-pointer"
    /> */}
                </Link>
              </div>
              <button onClick={() => setMenuOpen(false)}>
                <HiX className="text-white text-3xl" />
              </button>
            </div>

            <p className="text-white leading-relaxed mb-20 mt-10">
              Welcome to Waghera Agro Tourism, where luxury meets comfort in the heart of Canada. Since 1999,
              we have been dedicated to providing.
            </p>

            <ul className="flex flex-col text-white text-lg gap-8 pt-6 border-t border-gray-700">
              {/* HOME */}
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer hover:text-orange-600"
                  onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                >
                  <span>Home</span>
                  <span>{mobileHomeOpen ? "−" : "+"}</span>
                </div>
                {mobileHomeOpen && (
                  <ul className="ml-4 mt-2 space-y-2 text-base text-gray-300">
                    {homeMenuItems.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setLoading(true);
                          setMenuOpen(false);
                          setTimeout(() => {
                            navigate(item.href);
                            setLoading(false);
                          }, 500);
                        }}
                        className="cursor-pointer hover:text-yellow-500"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* ROOMS */}
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer border-t border-gray-700 hover:text-orange-600"
                  onClick={() => setMobileRoomOpen(!mobileRoomOpen)}
                >
                  <span>Rooms</span>
                  <span>{mobileRoomOpen ? "−" : "+"}</span>
                </div>
                {mobileRoomOpen && (
                  <ul className="ml-4 mt-2 space-y-2 text-base text-gray-300">
                    {/* Room Style */}
                    <li>
                      <div
                        className="flex justify-between items-center cursor-pointer border-t border-gray-700 hover:text-yellow-500"
                        onClick={() => setMobileRoomStyleOpen(!mobileRoomStyleOpen)}
                      >
                        <span>Room Style</span>
                        <span>{mobileRoomStyleOpen ? "−" : "+"}</span>
                      </div>
                      {mobileRoomStyleOpen && (
                        <ul className="ml-4 mt-2 space-y-2">
                          {rooms.map((room, idx) => (
                            <li
                              key={idx}
                              onClick={() => {
                                setLoading(true);
                                setMenuOpen(false);
                                setTimeout(() => {
                                  navigate(room.path);
                                  setLoading(false);
                                }, 500);
                              }}
                              className="cursor-pointer text-lg border-t border-gray-700 hover:text-yellow-500"
                            >
                              {room.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    {/* Room Details */}
                    <li>
                      <div
                        className="flex justify-between items-center border-t border-gray-700 cursor-pointer hover:text-yellow-500"
                        onClick={() => setMobileRoomDetailOpen(!mobileRoomDetailOpen)}
                      >
                        <span>Room Details</span>
                        <span>{mobileRoomDetailOpen ? "−" : "+"}</span>
                      </div>
                      {mobileRoomDetailOpen && (
                        <ul className="ml-2 mt-8 space-y-2">
                          {[
                            { label: "Room Detail 1", path: "/book-now" },
                            { label: "Room Detail 2", path: "/room-detail" },
                          ].map((detail, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setLoading(true);
                                setMenuOpen(false);
                                setTimeout(() => {
                                  navigate(detail.path);
                                  setLoading(false);
                                }, 500);
                              }}
                              className="cursor-pointer text-lg border-t border-gray-700 hover:text-yellow-500"
                            >
                              {detail.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* PAGES */}
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer text-xl border-t border-gray-700 hover:text-orange-400"
                  onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                >
                  <span>Pages</span>
                  <span>{mobilePagesOpen ? "−" : "+"}</span>
                </div>
                {mobilePagesOpen && (
                  <ul className="ml-4 mt-2 space-y-2 text-base text-gray-300">
                    {pages.map((page, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setLoading(true);
                          setMenuOpen(false);
                          setTimeout(() => {
                            navigate(page.path);
                            setLoading(false);
                          }, 500);
                        }}
                        className="cursor-pointer border-t border-gray-700 hover:text-yellow-500"
                      >
                        {page.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* BLOG */}
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer text-lg border-t border-gray-700 hover:text-orange-500"
                  onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                >
                  <span>Blog</span>
                  <span>{mobileBlogOpen ? "−" : "+"}</span>
                </div>
                {mobileBlogOpen && (
                  <ul className="ml-4 mt-2 space-y-2 text-base text-gray-300">
                    <li
                      className="cursor-pointer hover:text-yellow-500"
                      onClick={() => {
                        setLoading(true);
                        setMenuOpen(false);
                        setTimeout(() => {
                          navigate("/blog");
                          setLoading(false);
                        }, 500);
                      }}
                    >
                      Blog
                    </li>
                    <li
                      className="cursor-pointer hover:text-yellow-500"
                      onClick={() => {
                        setLoading(true);
                        setMenuOpen(false);
                        setTimeout(() => {
                          navigate("/blog-details");
                          setLoading(false);
                        }, 500);
                      }}
                    >
                      Blog Details
                    </li>
                  </ul>
                )}
              </li>

              {/* CONTACT */}
              <li
                onClick={() => {
                  setLoading(true);
                  setMenuOpen(false);
                  setTimeout(() => {
                    navigate("/contactus");
                    setLoading(false);
                  }, 500);
                }}
                className="cursor-pointer text-lg border-t border-gray-700 hover:text-orange-500"
              >
                Contact
              </li>

              {/* SIGN IN */}
              <li
                onClick={() => {
                  setLoading(true);
                  setMenuOpen(false);
                  setTimeout(() => {
                    onSignInClick();
                    setLoading(false);
                  }, 500);
                }}
                className="cursor-pointer text-lg border-t border-gray-700 hover:text-yellow-500"
              >
                Sign In
              </li>

              {/* REGISTER */}
              <li
                onClick={() => {
                  setLoading(true);
                  setMenuOpen(false);
                  setTimeout(() => {
                    onSignUpClick();
                    setLoading(false);
                  }, 500);
                }}
                className="cursor-pointer text-lg border-t border-gray-700 hover:text-yellow-500"
              >
                Register
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-2 text-white text-sm border-gray-700 pt-4">
              <span className="text-xl">Phone</span>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-xs" /> +12505550199
              </div>
              <span className="text-xl">E-mail</span>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xs" /> moonlit@gmail.com
              </div>
              <span className="text-xl">Address</span>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xs" />
                <span>280 Augusta Avenue, M5T 2L9 Toronto, Canada</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
