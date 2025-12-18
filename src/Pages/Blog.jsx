


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import axios from "axios"; 

// --- API Configuration ---
const REVIEW_API_URL = "https://backend-waghera.onrender.com/api/reviews"; // Your Spring Boot Review Controller Base URL

// Blog posts with best detailed descriptions (kept for local content)
const blogPosts = [
  // ... (Your existing blogPosts array remains here)
  {
    id: 1,
    title: "Discover Luxury: A Journey Through Our Hotel's Unique Offerings",
    image: "https://html.themewant.com/moonlit/assets/images/pages/blog/1.webp",
    author: "Madison Roy",
    time: "10 Min Read",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    content: `
      Step into a world of unmatched luxury and elegance. 
      Our hotel offers a curated blend of comfort, world-class service, 
      and premium experiences that redefine modern hospitality.
      
      ● Enjoy panoramic views from our rooftop lounge  
      ● Experience personalized butler service  
      ● Relax in spa suites designed for ultimate rejuvenation  
      ● Explore gourmet dining crafted by award-winning chefs  

      Whether you're on a romantic getaway or a business retreat, 
      our hotel promises a stay that exceeds expectations.
    `,
  },
  {
    id: 2,
    title: "Exclusive Deals: How to Make the Most of Your Stay at Bokinn",
    image: "https://html.themewant.com/moonlit/assets/images/pages/blog/2.webp",
    author: "Alice Roy",
    time: "10 Min Read",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    content: `
      Unlock the best offers at Bokinn and enjoy more luxury for less.
      From seasonal discounts to loyalty rewards, our hotel ensures that
      every guest receives premium value.

      ● Early-bird discounts up to 40%  
      ● Complimentary breakfast for premium suites  
      ● Free room upgrades during off-season  
      ● Spa & wellness vouchers for long stays  

      Make sure to check our exclusive online deals and save big on your next stay.
    `,
  },
  {
    id: 3,
    title: "Indulge in Luxury: A Guide to Bokinn Premium Amenities",
    image: "https://html.themewant.com/moonlit/assets/images/pages/blog/3.webp",
    author: "Jonas Lee",
    time: "8 Min Read",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    content: `
      Our premium amenities are crafted to elevate your entire stay.
      
      ● Infinity pool overlooking the skyline  
      ● Private cinema rooms for intimate screenings  
      ● 24/7 fitness center with personal trainers  
      ● Ultra-modern conference suites for business meetings  
      ● Smart room automation & luxury bedding  

      Experience the perfect combination of technology and comfort at Bokinn.
    `,
  },
  {
    id: 4,
    title: "Veg Delights: Taste the Authentic Flavors",
    image:
      "https://i.pinimg.com/1200x/ee/87/c6/ee87c622879c76616cfe26ab46d8c2c7.jpg",
    author: "Sneha Shinde",
    time: "5 Min Read",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    content: `
      Discover a world of vegetarian delicacies crafted with authentic
      ingredients and traditional techniques.

      ● Fresh farm-to-table vegetables  
      ● Authentic Maharashtrian spices  
      ● Slow-cooked gravies bursting with flavor  
      ● Light, aromatic, and wholesome meals  

      From Misal Pav to Veg Kolhapuri, every dish brings a taste of home.
    `,
  },
  {
    id: 5,
    title: "Non-Veg Specials: Savor the Rich Meaty Dishes",
    image:
      "https://i.pinimg.com/736x/2f/d4/f9/2fd4f971e5509c2ae8efa7363bfbd1b6.jpg",
    author: "Sneha Shinde",
    time: "6 Min Read",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    content: `
      Sink into the rich flavors of our signature non-veg dishes 
      prepared using traditional techniques and aromatic spices.

      ● Juicy Tandoori platters  
      ● Slow-cooked chicken rassa  
      ● Authentic mutton thali  
      ● Seafood cooked in fresh coconut masala  

      Perfect for spice lovers and food explorers!
    `,
  },
  {
    id: 8,
    title: "Drinks & More: Unwind at Our Bar",
    image:
      "https://i.pinimg.com/originals/1f/81/bd/1f81bd51f92e2975f7995a890dd26c1a.gif",
    author: "Sneha Shinde",
    time: "3 Min Read",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    content: `
      Our bar offers a relaxing and stylish atmosphere to unwind
      after a long day.

      ● Signature cocktails  
      ● Premium international wines  
      ● Chilled mocktails for non-alcoholic guests  
      ● Live music & candle-light evenings  

      Come, sip, relax, and enjoy the vibe.
    `,
  },
];

const Blog = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  // State is initialized to an empty array (no default reviews)
  const [reviews, setReviews] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    avatar: "", // Optional input for the user, defaults handled in payload
    rating: 5,
  });

  // --- API CALL: FETCH REVIEWS ---
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(REVIEW_API_URL);
        setReviews(response.data); 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews from the server. Check backend status (8080) and CORS configuration.");
        setLoading(false);
      }
    };
    fetchReviews();
  }, []); 

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  // --- API CALL: SUBMIT REVIEW (CORRECTED PAYLOAD & ERROR HANDLING) ---
// Inside Blog.jsx component

const handleDeleteAll = async () => {
    // 1. Confirmation Pop-up
    if (!window.confirm("ARE YOU SURE YOU WANT TO DELETE ALL REVIEWS? This action is permanent and affects the database.")) {
        return;
    }

    try {
        // 2. Backend API Call
        const response = await axios.delete(REVIEW_API_URL); 
        
        // 3. 🚨 Frontend State Update (Clears the reviews from the UI immediately)
        setReviews([]); 
        
        // 4. Success Feedback
        alert(response.data); // Should display "Successfully deleted all reviews."

    } catch (err) {
        console.error("Error deleting all reviews:", err);
        const errorMessage = err.response && err.response.data 
            ? err.response.data 
            : "Failed to delete all reviews. Check the server logs.";
        alert(errorMessage);
    }
};

// ... Rest of the Blog.jsx component code
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 🛑 FIX 1: Payload keys must match the Java Review entity field names exactly.
    const newReviewPayload = {
      name: formData.name,        
      comment: formData.comment,  
      rating: formData.rating,
      avatarUrl: formData.avatar || "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
    };

    try {
      const response = await axios.post(REVIEW_API_URL, newReviewPayload);
      
      const savedReview = response.data; 

      // Add the new review to the local state list
      setReviews([savedReview, ...reviews]);

      // Reset the form
      setFormData({ name: "", comment: "", avatar: "", rating: 5 });

//       alert("Review submitted successfully!");

    } catch (err) {
      console.error("Error submitting review:", err);
      
      // 🛑 FIX 3: Improved Error Handling to display specific validation messages from the server
      const errorMessage = err.response && err.response.data 
        ? err.response.data 
        : "Failed to submit review. Check backend console and browser Network tab for details.";

      alert(errorMessage);
    }
  };

  return (
    <div className=" text-gray-800 bg-gray-50">
      {/* HERO SECTION (omitted for brevity) */}
      <div
        className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl  text-white mb-4">
            Our Blog
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">
            Discover stories, tips, and luxury experiences curated just for you.
          </p>
        </motion.div>
      </div>

      {/* BLOG GRID (omitted for brevity) */}
      <div className="container mx-auto px-4 py-16 gap-8">
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={post.image}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>

                  <p className="text-gray-600 mb-4">
                    Explore our luxury offerings and insider tips to enhance
                    your stay.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.avatar}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="text-gray-700">
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.time}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedPost(post)}
                      className="px-4 py-2 rounded-md bg-yellow-700 text-white hover:bg-yellow-900 transition"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* REVIEWS */}
          <div className="mt-14">
            <h2 className="text-3xl  mb-6">Customer Reviews</h2>

            {/* Display Loading/Error State */}
            {loading && <p className="text-center text-xl text-gray-600">Loading reviews...</p>}
            {error && <p className="text-center text-xl text-red-500">{error}</p>}
            
            {/* Display Reviews (FIX 2: Corrected field names for display) */}
            {!loading && !error && (
                <div className="grid md:grid-cols-2 gap-6">
                {visibleReviews.map((review) => (
                    <motion.div
                    key={review.id}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    >
                    <div className="flex items-center gap-4 mb-4">
                        <img
                        src={review.avatarUrl || "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"} // Use avatarUrl from backend
                        className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                        <h4 className="font-semibold text-gray-800">
                            {review.name} {/* Use name from backend */}
                        </h4>

                        <div className="flex gap-1 text-yellow-400">
                            {Array.from({ length: review.rating || 5 }).map((_, i) => (
                            <span key={i}>★</span>
                            ))}
                        </div>
                        </div>
                    </div>

                    <p className="text-gray-700">{review.comment}</p> {/* Use comment from backend */}
                    </motion.div>
                ))}
                </div>
            )}
            
            {/* Read More button logic remains the same */}
            {!showAllReviews && reviews.length > 3 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllReviews(true)}
                  className="px-6 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition"
                >
                  Read More Reviews
                </button>
              </div>
            )}
          </div>

          {/* WRITE A REVIEW FORM (omitted for brevity) */}
          <div className="mt-16 flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
              <h3 className="text-2xl font-semibold mb-6">Write a Review</h3>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-3 rounded-md"
                  value={formData.name}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <textarea
                  placeholder="Your Review"
                  className="border p-3 rounded-md"
                  rows="4"
                  required
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                ></textarea>

                {/* Rating with React Icons */}
                <div className="flex items-center gap-3 border p-3 rounded-md">
                  <AiFillStar className="text-yellow-500 text-xl" />
                  <select
                    className="flex-1 outline-none bg-transparent"
                    value={formData.rating}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rating: Number(e.target.value),
                      })
                    }
                  >
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>

                {/* Center Button */}
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-700 text-white rounded-md hover:bg-yellow-900 transition"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP (omitted for brevity) */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl max-w-2xl w-full shadow-xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Cancel icon */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                ✖
              </button>

              <h2 className="text-3xl font-semibold mb-4">
                {selectedPost.title}
              </h2>

              <img
                src={selectedPost.image}
                className="w-full h-72 object-cover rounded-md mb-4"
              />

              <p className="text-gray-700 whitespace-pre-line mb-4">
                {selectedPost.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;