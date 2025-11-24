import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Updated Blog Posts with new categories
const blogPosts = [
  // Existing posts
  {
    id: 1,
    title: "Discover Luxury: A Journey Through Our Hotel's Unique Offerings",
    image: "https://html.themewant.com/moonlit/assets/images/pages/blog/1.webp",
    author: "Madison Roy",
    time: "10 Min Read",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    title: "Exclusive Deals: How to Make the Most of Your Stay at Bokinn",
    image: "https://html.themewant.com/moonlit/assets/images/pages/blog/2.webp",
    author: "Alice Roy",
    time: "10 Min Read",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    title: "Indulge in Luxury: A Guide to Bokinn Premium Amenities",
    image: "https://html.themewant.com/moonlit/assets/images/pages/blog/3.webp",
    author: "Jonas Lee",
    time: "8 Min Read",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  // Veg Food Blog
  {
    id: 4,
    title: "Veg Delights: Taste the Authentic Flavors",
    image: "https://i.pinimg.com/1200x/ee/87/c6/ee87c622879c76616cfe26ab46d8c2c7.jpg",
    author: "Sneha Shinde",
    time: "5 Min Read",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  // Non-Veg Food Blog
  {
    id: 5,
    title: "Non-Veg Specials: Savor the Rich Meaty Dishes",
    image: "https://i.pinimg.com/736x/2f/d4/f9/2fd4f971e5509c2ae8efa7363bfbd1b6.jpg",
    author: "Sneha Shinde",
    time: "6 Min Read",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
 
 
  // Drinking Shop
  {
    id: 8,
    title: "Drinks & More: Unwind at Our Bar",
    image: "https://i.pinimg.com/736x/85/49/8b/85498b60574f03452edb645e93f69807.jpg",
    author: "Sneha Shinde",
    time: "3 Min Read",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
  },
];

// Updated Reviews including new blogs
const reviews = [
  {
    id: 1,
    name: "Samantha Lee",
    comment: "The blog articles are super insightful and really make me want to visit the hotel!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Daniel Kim",
    comment: "Great tips and behind-the-scenes info. Loved the latest post about amenities!",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Rohit Sharma",
    comment: "Loved the veg dishes, really authentic flavors!",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Singh",
    comment: "The non-veg specialties are amazing, highly recommend the chicken curry.",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Amit Joshi",
    comment: "Our stay in the double room was comfortable and luxurious.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Sneha Shinde",
    comment: "We also visited the bar section — great ambiance and drinks!",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
];

const Blog = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
            Our Blog
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">
            Discover stories, tips, and luxury experiences curated just for you.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
        {/* Main Blog Grid */}
        <div className="lg:col-span-2 space-y-10">
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
              <Link to={`/blog-details/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">
                  Explore our luxury offerings and insider tips to enhance your stay.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-gray-700">
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Reviews Section */}
          <div>
            <h2 className="text-3xl font-serif mb-6">Customer Reviews</h2>
            <div className="space-y-6">
              {reviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <div className="flex gap-1 text-yellow-400">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

    
       
      </div>
    </div>
  );
};

export default Blog;
