import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import ScrollToTop from "../Components/ScrollToTop";
import blog from "../../src/assets/images/blog.jpeg";
import room from "../../src/assets/images/room1.jpeg";
import tent from "../../src/assets/images/tent.jpeg";
import room2 from "../../src/assets/images/room6.jpeg";
import veg from "../../src/assets/images/veg.jpeg";
import nonveg from "../../src/assets/images/nonveg.jpeg";
import misal from "../../src/assets/images/misal.jpeg";
// --- API Configuration ---
const REVIEW_API_URL = "https://backend-waghera.onrender.com/api/reviews"; // Your Spring Boot Review Controller Base URL

// Blog posts with best detailed descriptions (kept for local content)
const blogPosts = [
  // ... (Your existing blogPosts array remains here)
  {
    id: 1,
    title: "A Perfect Stay for the Whole Family",
    image: room,
    author: "Prasad Langhe",
    time: "10 Min Read",
    // avatar: "",
    content: `
Step into the heart of nature at Waghera Agro Tourism.
Our agro retreat offers a harmonious blend of rural charm, peaceful surroundings,
and genuine hospitality—designed to reconnect you with nature and tradition.

● Wake up to fresh air and scenic farm views
● Enjoy authentic farm-to-table Maharashtrian cuisine
● Experience hands-on farming activities and village life
● Relax in comfortable cottages surrounded by greenery

Whether you’re planning a family outing, a school visit, or a peaceful weekend escape,
Waghera Agro Tourism promises a refreshing, memorable, and soul-soothing experience.
 `,
  },
  {
    id: 2,
    title: "Tent",
    image: tent,
    author: "Minashi kubhade",
    time: "10 Min Read",
    // avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    content: `
 Unlock the best offers at Waghera Agro Tourism and enjoy more for less.
From seasonal packages to family-friendly deals, we ensure every guest receives
great value along with an authentic rural experience.

● Special discounts on weekday and group bookings
● Complimentary traditional breakfast with select stays
● Exclusive offers for school trips and family outings
● Customized packages for long stays and corporate visits

Don’t miss our exclusive online offers—plan your visit to Waghera Agro Tourism
and enjoy nature, comfort, and savings together.
 `,
  },
  {
    id: 3,
    title: "Where Families Feel at Home",
    image: room2,
    author: "Prem Halde",
    time: "8 Min Read",
    // avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    content: `
Our thoughtfully designed amenities are crafted to enrich your stay at Waghera Agro Tourism.

● Spacious cottages surrounded by lush greenery
● Clean swimming pool for relaxation and family fun
● Traditional village-style seating areas (chulha & courtyard spaces)
● Children’s play area and open lawns for outdoor activities
● Authentic Maharashtrian meals prepared with farm-fresh ingredients

Experience the perfect blend of nature, comfort, and rural hospitality at Waghera Agro Tourism, where every moment feels refreshing and memorable.
 `,
  },
  {
    id: 4,
    title: "Veg Delights: Taste the Authentic Flavors",
    image:
      veg,
    author: "Sneha Shinde",
    time: "5 Min Read",
    // avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    content: `
Enjoy a wholesome pure vegetarian thali prepared with fresh farm-grown ingredients and authentic Maharashtrian flavors.

● Seasonal vegetable sabzi
● Dal or varan with homemade spices
● Chapati / Bhakri with steamed rice
● Fresh salad and pickle
● Papad and traditional dessert

A complete, nutritious meal that reflects the true taste of Maharashtrian home-style cooking at Waghera Agro Tourism.
 `,
  },
  {
    id: 5,
    title: "Non-Veg Specials: Savor the Rich Meaty Dishes",
    image:
      nonveg,
    author: "Sneha Shinde",
    time: "6 Min Read",
    // avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    content: `
Indulge in the rich, bold flavors of our signature non-vegetarian dishes,
prepared using traditional Maharashtrian techniques and freshly ground spices.

● Juicy, perfectly marinated Tandoori chicken
● Slow-cooked Chicken Rassa with authentic masala
● Traditional Mutton Thali cooked to tender perfection
● Fresh local seafood prepared in coconut-based gravy

Perfect for spice lovers, food explorers, and those craving authentic village-style non-veg cuisine at Waghera Agro Tourism.
 `,
  },
  {
    id: 8,
    title: "Waghera Special Misal Pav",
    image:
     misal,
    author: "Sneha Shinde",
    time: "3 Min Read",
    // avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    content: `
Our Waghera Special Misal offers the perfect blend of spice, tradition, and comfort.
Prepared using authentic Maharashtrian recipes, it delivers a bold flavor experience
that refreshes and satisfies at any time of the day.

● Spicy, flavorful misal gravy (tarri)
● Fresh farsan and finely chopped onions
● Soft pav served hot and fresh
● Traditional homemade masala for authentic taste

Come, relish the spice, and enjoy the true taste of Waghera Special Misal—a must-try delight for every food lover.
 `,
  },
];

const Blog = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); // State is initialized to an empty array (no default reviews)
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    // avatar: "", 
    rating: 5,
  }); // --- API CALL: FETCH REVIEWS ---

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(REVIEW_API_URL);
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError(
          "Failed to load reviews from the server. Check backend status (8080) and CORS configuration."
        );
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3); // --- API CALL: SUBMIT REVIEW (CORRECTED PAYLOAD & ERROR HANDLING) ---

  // Inside Blog.jsx component

  const handleDeleteAll = async () => {
    // 1. Confirmation Pop-up
    if (
      !window.confirm(
        "ARE YOU SURE YOU WANT TO DELETE ALL REVIEWS? This action is permanent and affects the database."
      )
    ) {
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
      const errorMessage =
        err.response && err.response.data
          ? err.response.data
          : "Failed to delete all reviews. Check the server logs.";
      alert(errorMessage);
    }
  };

  // ... Rest of the Blog.jsx component code
  const handleSubmit = async (e) => {
    e.preventDefault(); // 🛑 FIX 1: Payload keys must match the Java Review entity field names exactly.
    const newReviewPayload = {
      name: formData.name,
      comment: formData.comment,
      rating: formData.rating,
    //   avatarUrl:
    //     formData.avatar ||
    //     "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    };

    try {
      const response = await axios.post(REVIEW_API_URL, newReviewPayload);
      const savedReview = response.data; // Add the new review to the local state list

      setReviews([savedReview, ...reviews]); // Reset the form

      setFormData({ name: "", comment: "",  rating: 5 });

      //       alert("Review submitted successfully!");
    } catch (err) {
      console.error("Error submitting review:", err);

      // 🛑 FIX 3: Improved Error Handling to display specific validation messages from the server
      const errorMessage =
        err.response && err.response.data
          ? err.response.data
          : "Failed to submit review. Check backend console and browser Network tab for details.";

      alert(errorMessage);
    }
  };

  return (
    <div className=" text-gray-800 bg-gray-50">
      <ScrollToTop />
            {/* HERO SECTION (omitted for brevity) */}     {" "}
      <div
        className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${blog})`,
        }}
      >
                <div className="absolute inset-0 bg-black/50" />       {" "}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
                   {" "}
          <h1 className="text-4xl sm:text-5xl md:text-6xl  text-white mb-4">
                        Our Blog          {" "}
          </h1>
                   {" "}
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">
                        Discover stories, tips, and luxury experiences curated
            just for you.          {" "}
          </p>
                 {" "}
        </motion.div>
             {" "}
      </div>
            {/* BLOG GRID (omitted for brevity) */}     {" "}
      <div className="container mx-auto px-4 py-16 gap-8">
               {" "}
        <div className="lg:col-span-2">
                   {" "}
          <div className="grid md:grid-cols-3 gap-8">
                       {" "}
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
                               {" "}
                <img
                  src={post.image}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                               {" "}
                <div className="p-6">
                                   {" "}
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3> 
                                 {" "}
                  <p className="text-gray-600 mb-4">
                                        Explore our luxury offerings and insider
                    tips to enhance                     your stay.              
                       {" "}
                  </p>
                                   {" "}
                  <div className="flex items-center justify-between">
                                       {" "}
                    <div className="flex items-center gap-3">
                                           {" "}
                      {/* <img
                        src={post.avatar}
                        className="w-10 h-10 rounded-full object-cover"
                      /> */}
                                           {" "}
                      <div className="text-gray-700">
                                               {" "}
                        <p className="font-medium">{post.author}</p>           
                                   {" "}
                        <p className="text-sm text-gray-500">{post.time}</p>   
                                         {" "}
                      </div>
                                         {" "}
                    </div>
                                       {" "}
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="px-4 py-2 rounded-md bg-yellow-700 text-white hover:bg-yellow-900 transition"
                    >
                                            Read More                    {" "}
                    </button>
                                     {" "}
                  </div>
                                 {" "}
                </div>
                             {" "}
              </motion.div>
            ))}
                     {" "}
          </div>
                    {/* REVIEWS */}         {" "}
          <div className="mt-14">
                        <h2 className="text-3xl  mb-6">Customer Reviews</h2>   
                    {/* Display Loading/Error State */}           {" "}
            {loading && (
              <p className="text-center text-xl text-gray-600">
                Loading reviews...
              </p>
            )}
                       {" "}
            {error && (
              <p className="text-center text-xl text-red-500">{error}</p>
            )}
                                   {" "}
            {/* Display Reviews (FIX 2: Corrected field names for display) */} 
                     {" "}
            {!loading && !error && (
              <div className="grid md:grid-cols-2 gap-6">
                               {" "}
                {visibleReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                                       {" "}
                    <div className="flex items-center gap-4 mb-4">
                                             {" "}
                      <img
                        src={
                          review.avatarUrl ||
                          "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                        } // Use avatarUrl from backend
                        className="w-12 h-12 rounded-full object-cover"
                      />
                                             {" "}
                      <div>
                                               {" "}
                        <h4 className="font-semibold text-gray-800">
                                                      {review.name}{" "}
                          {/* Use name from backend */}                       {" "}
                        </h4>
                                               {" "}
                        <div className="flex gap-1 text-yellow-400">
                                                     {" "}
                          {Array.from({ length: review.rating || 5 }).map(
                            (_, i) => (
                              <span key={i}>★</span>
                            )
                          )}
                                                 {" "}
                        </div>
                                               {" "}
                      </div>
                                         {" "}
                    </div>
                                       {" "}
                    <p className="text-gray-700">{review.comment}</p>{" "}
                    {/* Use comment from backend */}                   {" "}
                  </motion.div>
                ))}
                               {" "}
              </div>
            )}
                                   {" "}
            {/* Read More button logic remains the same */}           {" "}
            {!showAllReviews && reviews.length > 3 && (
              <div className="text-center mt-6">
                               {" "}
                <button
                  onClick={() => setShowAllReviews(true)}
                  className="px-6 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition"
                >
                                    Read More Reviews                {" "}
                </button>
                             {" "}
              </div>
            )}
                     {" "}
          </div>
                    {/* WRITE A REVIEW FORM (omitted for brevity) */}         {" "}
          <div className="mt-16 flex justify-center">
                       {" "}
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
                           {" "}
              <h3 className="text-2xl font-semibold mb-6">Write a Review</h3>   
                       {" "}
              <form onSubmit={handleSubmit} className="grid gap-4">
                               {" "}
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
                               {" "}
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
                                {/* Rating with React Icons */}               {" "}
                <div className="flex items-center gap-3 border p-3 rounded-md">
                                   {" "}
                  <AiFillStar className="text-yellow-500 text-xl" />           
                       {" "}
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
                      <option value="2">2 Stars</option>                   {" "}
                    <option value="1">1 Star</option>                 {" "}
                  </select>
                                 {" "}
                </div>
                                {/* Center Button */}               {" "}
                <div className="flex justify-center mt-4">
                                   {" "}
                  <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-700 text-white rounded-md hover:bg-yellow-900 transition"
                  >
                                        Submit Review                  {" "}
                  </button>
                                 {" "}
                </div>
                             {" "}
              </form>
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
            {/* POPUP (omitted for brevity) */}     {" "}
      <AnimatePresence>
               {" "}
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
                       {" "}
            <motion.div
              className="bg-white p-6 rounded-xl max-w-2xl w-full shadow-xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
                            {/* Cancel icon */}             {" "}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                                ✖              {" "}
              </button>
                           {" "}
              <h2 className="text-3xl font-semibold mb-4">
                                {selectedPost.title}             {" "}
              </h2>
                           {" "}
              <img
                src={selectedPost.image}
                className="w-full h-72 object-cover rounded-md mb-4"
              />
                           {" "}
              <p className="text-gray-700 whitespace-pre-line mb-4">
                                {selectedPost.content}             {" "}
              </p>
                         {" "}
            </motion.div>
                     {" "}
          </motion.div>
        )}
             {" "}
      </AnimatePresence>
         {" "}
    </div>
  );
};

export default Blog;
