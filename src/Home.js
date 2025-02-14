import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import Logo from "./logo.png";
import s1 from "./Scroll1.png";
import s2 from "./Scroll2.png";
import s3 from "./Scroll3.png";
import s4 from "./Scroll4.png";
import s5 from "./Scroll5.png";
import s6 from "./Scroll6.png";
import one1 from "./one1.png";
import one2 from "./one2.png";
import one3 from "./one3.png";
import one4 from "./one4.png";
import two1 from "./two1.png";
import two2 from "./two2.png";
import two3 from "./two3.png";
import two4 from "./two4.png";
import four1 from "./four1.png";
import four2 from "./four2.png";
import four3 from "./four3.png";
import four4 from "./four4.png";
import five1 from "./Five1.png";
import five2 from "./Five2.png";
import five3 from "./Five3.png";
import five4 from "./Five4.png";
import six from "./six.png";
import seven1 from "./Seven1.png";
import seven2 from "./Seven2.png";
import seven3 from "./Seven3.png";
import seven4 from "./seven4.png";
import three from "./inian artisan.png";
import deal1 from "./deal1.png";
import deal2 from "./deal2.png";
import deal3 from "./deal3.png";
import deal4 from "./deal4.png";
import deal5 from "./deal5.png";
import choco from "./choco.png";
import "./Home.css";


function Home() {

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setMenuOpen(false);
        }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

  const [menuOpen, setMenuOpen] = useState(false); 

  const scrollLeft = (id) => {
    let container = document.getElementById(id);
    let imgWidth = container.querySelector("img").clientWidth + 20; // Image width + margin
    container.scrollBy({ left: -imgWidth, behavior: "smooth" });
  };
  
  const scrollRight = (id) => {
    let container = document.getElementById(id);
    let imgWidth = container.querySelector("img").clientWidth + 20; // Image width + margin
    container.scrollBy({ left: imgWidth, behavior: "smooth" });
  };
  
  return (
    <>
     <header className="bg-gray-900 text-white py-2 px-6 flex items-center justify-between relative">
            {/* Left Section - Logo & Location */}
            <div className="flex items-center">
                <a href="/" className="flex items-center">
                    <img src={Logo} alt="Amazon Logo" className="h-8 w-auto mr-2" />
                    <span className="text-xl font-bold">amazon.in</span>
                </a>
                <div className="hidden md:flex ml-6 items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="white">
                        <path d="M10 2a6 6 0 00-6 6c0 3.314 6 10 6 10s6-6.686 6-10a6 6 0 00-6-6zM8 10a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                    <span>Deliver to India</span>
                </div>
            </div>

            {/* Middle Section - Search Bar */}
            <div className="hidden md:flex relative flex-grow max-w-2xl mx-6">
                <div className="flex w-full">
                    <select className="px-3 py-2 text-sm bg-gray-300 rounded-l-md">
                        <option value="all">All</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search Amazon"
                        className="w-full px-3 py-2 text-black rounded-r-md focus:outline-none"
                    />
                    <button className="absolute right-0 top-0 h-full px-3 bg-yellow-500 hover:bg-yellow-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="black">
                            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Right Section - Desktop Links */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
                <a href="#" className="hover:underline">English</a>
                <a href="#" className="hover:underline">Account & Lists</a>
                <a href="#" className="hover:underline">Returns & Orders</a>
                <a href="#" className="flex items-center hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="white">
                        <path d="M3 1a1 1 0 000 1h1.22l.305 1.222A2 2 0 015.48 5h9.04a2 2 0 011.953 1.511l.957 4.785a1 1 0 01-1.342.887H6.053a1 1 0 01-.998-.887L4.98 3.217A1 1 0 004 2H1a1 1 0 00-1 1zM4 19a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    Cart (0)
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24">
                    <path d="M3 6h18M3 12h18m-18 6h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>

            {/* Mobile Sidebar */}
            {menuOpen && (
                <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-800 text-white p-4 shadow-lg z-50 flex flex-col space-y-4">
                    <button className="self-end text-xl" onClick={() => setMenuOpen(false)}>×</button>
                    <a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">English</a>
                    <a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">Account & Lists</a>
                    <a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded">Returns & Orders</a>
                    <a href="#" className="block py-2 px-3 hover:bg-gray-700 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="white">
                            <path d="M3 1a1 1 0 000 1h1.22l.305 1.222A2 2 0 015.48 5h9.04a2 2 0 011.953 1.511l.957 4.785a1 1 0 01-1.342.887H6.053a1 1 0 01-.998-.887L4.98 3.217A1 1 0 004 2H1a1 1 0 00-1 1zM4 19a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                        Cart (0)
                    </a>
                    {/* Show Search Bar inside Sidebar if no space in header */}
                    <div className="md:hidden">
                        <input type="text" placeholder="Search Amazon" className="w-full px-3 py-2 text-black rounded-md focus:outline-none" />
                    </div>
                </div>
            )}
        </header>

      {/* Navigation Bar */}
<nav className="bg-gray-800 text-white px-4 py-2 flex space-x-6 text-sm overflow-x-auto whitespace-nowrap">
  <button className="flex items-center">
    ☰ <span className="ml-2 font-semibold">All</span>
  </button>
  <a href="#" className="hover:underline">Today's Deals</a>
  <a href="#" className="hover:underline">Customer Service</a>
  <a href="#" className="hover:underline">Gift Cards</a>
  <a href="#" className="hover:underline">Registry</a>
  <a href="#" className="hover:underline">Sell</a>
  <a href="#" className="hover:underline">Amazon Pay</a>
  <a href="#" className="hover:underline">Buy Again</a>
  <a href="#" className="hover:underline">Customer Service</a>
  <a href="#" className="hover:underline">History</a>
  <a href="#" className="hover:underline">Improvements</a>
  <a href="#" className="hover:underline">Subscribe & Save</a>
</nav>

      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scrollLeft("product-scroll")}>❮</button>
        
        <div id="product-scroll" className="scroll-content">
          <img src={s1} alt="Product 1" />
          <img src={s2} alt="Product 2" />
          <img src={s3} alt="Product 3" />
          <img src={s4} alt="Product 4" />
          <img src={s5} alt="Product 5" />
          <img src={s6} alt="Product 6" />
          {/* Add more images as needed */}
        </div>

        <button className="scroll-btn right" onClick={() => scrollRight("product-scroll")}>❯</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">
        {[
          { title: "International returns", img: one1 },
          { title: "Gifts", img: one2 },
          { title: "Toys", img: one3 },
          { title: "Electronics", img: one4 },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md" />
            <a href="#" className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
              Shop more
            </a>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">
        {[
          { title: "Grooming Products", img: two1 },
          { title: "Latest devices", img: two2 },
          { title: "Pets Food", img: two3 },
          { title: "Fashion Mart ", img: two4 },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md" />
            <a href="#" className="mt-4 inline-block text-green-600 font-semibold hover:underline">
              Shop more
            </a>
          </div>
        ))}
      </div>
      
      <div className="px-6 py-8">
        <h2 className="text-xl font-semibold mb-4">Up to 70% off | Top picks sourced from Indian artisans</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex justify-center">
          <img src={three} alt="Featured Artisan Product" className="w-full max-w-screen-lg h-auto object-contain" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">
        {[
          { title: "Stationary", img: four1 },
          { title: "Laptops", img: four2 },
          { title: "Office Chairs", img: four3 },
          { title: "Aiming Monitor", img: four4 },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md" />
            <a href="#" className="mt-4 inline-block text-pink-600 font-semibold hover:underline">
              Shop more
            </a>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">
        {[
          { title: "Best Seller in Books", img: five1 },
          { title: "No cost EMI", img: five2 },
          { title: "Sports", img: five3 },
          { title: "Up to 50% off", img: five4 },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md" />
            <a href="#" className="mt-4 inline-block text-orange-600 font-semibold hover:underline">
              Shop more
            </a>
          </div>
        ))}
      </div>

      <div className="px-6 py-8">
        <h2 className="text-xl font-semibold mb-4">Inspired by your shopping trends</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex justify-center">
          <img src={six} alt="Featured Artisan Product" className="w-full max-w-screen-lg h-auto object-contain" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">
        {[
          { title: "Pick up where you left", img: seven1 },
          { title: "Categories to explore", img: seven2 },
          { title: "Customers' Most Loved", img: seven3 },
          { title: "Revamp your home in style", img: seven4 },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md" />
            <a href="#" className="mt-4 inline-block text-red-600 font-semibold hover:underline">
              Shop more
            </a>
          </div>
        ))}
      </div>

        {/* Deals Under $25 Section */}
      <div className="px-6 py-8">
        <h2 className="text-xl font-semibold mb-4">Deals Under $25</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { img: deal1, discount: "40% off", price: "$14.99", description: "Great value product" },
            { img: deal2, discount: "30% off", price: "$19.99", description: "Best choice for you" },
            { img: deal3, discount: "50% off", price: "$9.99", description: "Limited time deal" },
            { img: deal4, discount: "25% off", price: "$22.99", description: "Top-rated product" },
            { img: deal5, discount: "35% off", price: "$16.99", description: "Highly recommended" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
              <img src={item.img} alt="Deal Item" className="w-full h-40 object-cover rounded-md mb-2" />
              <span className="text-red-500 font-bold">{item.discount}</span>
              <p className="text-lg font-semibold">{item.price}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-8">
        <h2 className="text-xl font-semibold mb-4">Refresh your mood with these sweet Chocolates</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex justify-center">
          <img src={choco} alt="Featured Artisan Product" className="w-full max-w-screen-lg h-auto object-contain" />
        </div>
      </div>

      <footer className="bg-gray-900 text-white mt-8">
        <div className="text-center py-4 bg-gray-800 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8">
          {[
            { title: "Get to Know Us", links: ["About Us", "Careers", "Press Releases", "Amazon Science"] },
            { title: "Connect with Us", links: ["Facebook", "Twitter", "Instagram"] },
            { title: "Make Money with Us", links: ["Sell on Amazon", "Amazon Associates", "Advertise Your Products", "Self-Publish with Us"] },
            { title: "Let Us Help You", links: ["Your Account", "Returns Centre", "Help"] }
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="text-sm hover:underline cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 py-4 flex flex-col items-center">
          <img src={Logo} alt="Amazon Logo" className="w-24 mb-2" />
          <div className="flex space-x-4">
            <select className="bg-gray-800 text-white p-2 rounded">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
            <select className="bg-gray-800 text-white p-2 rounded">
              <option>United States</option>
              <option>India</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Home;
