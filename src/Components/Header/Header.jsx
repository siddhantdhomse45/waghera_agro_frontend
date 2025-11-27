import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Loader from "../Loader";

export default function Header({ onSignInClick, onSignUpClick, bg }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopHeader, setHideTopHeader] = useState(false);
  const navigate = useNavigate();
  const [, setIsDropdownOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPagesClicked, setIsPagesClicked] = useState(false);
  const [isHomeClicked, setIsHomeClicked] = useState(false);
  const [isBlogClicked, setIsBlogClicked] = useState(false);
  const location = useLocation();
  const isSeasidePage = location.pathname.toLowerCase().startsWith("/seaside");
  const isOceanbreezePage = location.pathname.toLowerCase().startsWith("/oceanbreeze");
  const isBeachHotelPage = location.pathname.toLowerCase().startsWith("/beachhotel");
  const [scrolled, setScrolled] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
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
    // { name: "About", path: "/about" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Gallery", path: "/gallery" },
    // { name: "Service", path: "/service" },
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

          <li className="relative cursor-pointer">
            <div
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  navigate("/about");
                }, 600);
              }}
              className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer"
            >
              About Us
            </div>
          </li>

          {/* HOME MENU */}
          {/* <li className="relative cursor-pointer">
            <div
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  navigate("/room-detail");
                }, 600);
              }}
              className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer"
            >
              Rooms
            </div>
          </li>
 */}

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

          <li className="relative cursor-pointer">
            <div
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  navigate("/blog");
                }, 600);
              }}
              className="flex items-center gap-1 hover:text-yellow-600 group cursor-pointer"
            >
              Blog
            </div>
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
        <div className="fixed inset-0 z-50 bg-black p-6 overflow-y-auto flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="text-2xl font-serif font-bold text-white">
              Waghera Agro Tourism
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-white text-3xl"
            >
              <HiX />
            </button>
          </div>

          <p className="text-white leading-relaxed mb-10">
            Welcome to Waghera Agro Tourism, where luxury meets comfort in the heart of Canada. Since 1999, we have been dedicated to providing.
          </p>

          <nav className="flex flex-col gap-4 text-white text-lg border-t border-gray-700 pt-6">
            
            

            {/* Single navigations */}
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Rooms", path: "/room-detail" },
              ...pages,
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contactus" },
            ].map(({ name, path }) => (
              <div
                key={name}
                onClick={() => {
                  setLoading(true);
                  setMenuOpen(false);
                  setTimeout(() => {
                    navigate(path);
                    setLoading(false);
                  }, 400);
                }}
                className="cursor-pointer rounded-lg bg-gray-800 bg-opacity-50 px-4 py-3 hover:bg-yellow-600 hover:text-black transition font-semibold"
              >
                {name}
              </div>
            ))}

            {/* Sign In / Register */}
            <div
              onClick={() => {
                setLoading(true);
                setMenuOpen(false);
                setTimeout(() => {
                  onSignInClick();
                  setLoading(false);
                }, 400);
              }}
              className="cursor-pointer rounded-lg bg-gray-800 bg-opacity-50 px-4 py-3 hover:bg-yellow-600 hover:text-black transition text-center font-semibold"
            >
              Sign In
            </div>
            <div
              onClick={() => {
                setLoading(true);
                setMenuOpen(false);
                setTimeout(() => {
                  onSignUpClick();
                  setLoading(false);
                }, 400);
              }}
              className="cursor-pointer rounded-lg bg-gray-800 bg-opacity-50 px-4 py-3 hover:bg-yellow-600 hover:text-black transition text-center font-semibold"
            >
              Register
            </div>
          </nav>

          {/* Sticky Contact Info */}
          <div className="mt-auto pt-6 border-t border-gray-700 text-white text-sm space-y-4 sticky bottom-0 bg-black bg-opacity-80 px-4 py-3 rounded-t-lg">
            <div><FaPhoneAlt className="inline mr-2 text-xs" /> +12505550199</div>
            <div><FaEnvelope className="inline mr-2 text-xs" /> <a href="mailto:moonlit@gmail.com" className="underline">moonlit@gmail.com</a></div>
            <div><FaMapMarkerAlt className="inline mr-2 text-xs" /> 280 Augusta Avenue, M5T 2L9 Toronto, Canada</div>
          </div>
        </div>
      )}

    </header>
  );
}