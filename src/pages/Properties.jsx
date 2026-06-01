import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bgimage from "../assets/Bg.jpeg";
import card1 from "../assets/card1.jpeg";
import card2 from "../assets/Card2.jpeg";
import card3 from "../assets/Card3.jpeg";
import card4 from "../assets/Card4.jpeg";
import card5 from "../assets/Card5.jpeg";
import card6 from "../assets/Card6.jpeg";
import card7 from "../assets/royalvilla.jpeg";
import card8 from "../assets/Hero.jpeg";
import card9 from "../assets/First.jpg";
import card10 from "../assets/Second.jpg";
import card11 from "../assets/Third.jpg";

import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaSearch,
  FaHeart,
} from "react-icons/fa";

const propertiesData = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Delhi",
    price: "₹2.5 Cr",
    beds: 4,
    baths: 3,
    area: "4500 Sq.ft",
    type: "Villa",
    image: bgimage,
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Mumbai",
    price: "₹1.2 Cr",
    beds: 3,
    baths: 2,
    area: "2200 Sq.ft",
    type: "Apartment",
    image: card1,
  },
  {
    id: 3,
    title: "Beach House",
    location: "Goa",
    price: "₹3.8 Cr",
    beds: 5,
    baths: 4,
    area: "5200 Sq.ft",
    type: "Beach House",
    image: card2,
  },
  {
    id: 4,
    title: "Penthouse",
    location: "Bangalore",
    price: "₹4.5 Cr",
    beds: 6,
    baths: 5,
    area: "6200 Sq.ft",
    type: "Penthouse",
    image: card3,
  },
  {
    id: 5,
    title: "Mountain Cottage",
    location: "Manali",
    price: "₹1.8 Cr",
    beds: 3,
    baths: 2,
    area: "2800 Sq.ft",
    type: "Cottage",
    image: card4,
  },
  {
    id: 6,
    title: "Luxury Farmhouse",
    location: "Punjab",
    price: "₹5.2 Cr",
    beds: 7,
    baths: 5,
    area: "8500 Sq.ft",
    type: "Farmhouse",
    image: card5,
  },
  {
    id: 7,
    title: "City Studio",
    location: "Pune",
    price: "₹75 Lakh",
    beds: 2,
    baths: 1,
    area: "1200 Sq.ft",
    type: "Studio",
    image: card6,
  },
  {
    id: 8,
    title: "Royal Mansion",
    location: "Jaipur",
    price: "₹9 Cr",
    beds: 10,
    baths: 8,
    area: "15000 Sq.ft",
    type: "Mansion",
    image:card7,
  },
  {
    id: 9,
    title: "Royal Mansion",
    location: "Jaipur",
    price: "₹9 Cr",
    beds: 10,
    baths: 8,
    area: "15000 Sq.ft",
    type: "Mansion",
    image:card8,
  },
  {
    id: 10,
    title: "Royal Mansion",
    location: "Jaipur",
    price: "₹9 Cr",
    beds: 10,
    baths: 8,
    area: "15000 Sq.ft",
    type: "Mansion",
    image: card9,
  },
  {
    id: 11,
    title: "Royal Mansion",
    location: "Jaipur",
    price: "₹9 Cr",
    beds: 10,
    baths: 8,
    area: "15000 Sq.ft",
    type: "Mansion",
    image: card10,
  },
  {
    id: 12,
    title: "Royal Mansion",
    location: "Jaipur",
    price: "₹9 Cr",
    beds: 10,
    baths: 8,
    area: "15000 Sq.ft",
    type: "Mansion",
    image: card11,
  },
];

const Properties = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredProperties = propertiesData.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen text-white bg-black">

        {/* Hero Section */}
        <div className="relative h-[70vh] flex items-center justify-center text-center px-6">
          <img
            src={card8}
            alt="hero"
            className="absolute inset-0 object-cover w-full h-full opacity-40"
          />

          <div className="relative z-10">
            <h1 className="mb-6 text-5xl font-bold md:text-7xl text-[#F9F295]">
              Find Your Dream Property
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Explore premium villas, apartments, penthouses, beach houses,
              farmhouses, and luxury homes across India.
            </p>

            <button className="px-8 py-4 mt-8 font-semibold text-black bg-[#F9F295] rounded-xl hover:scale-105">
              Explore Now
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative z-20 max-w-6xl px-6 mx-auto -mt-12">
          <div className="p-6 bg-gray-900 border rounded-2xl border-[#F9F295]/20">
            <div className="flex overflow-hidden border rounded-xl border-[#F9F295]/20">
              <input
                type="text"
                placeholder="Search luxury properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-5 text-white bg-black outline-none"
              />
              <button className="px-8 py-5 text-black bg-[#F9F295]">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="px-6 py-20 mx-auto max-w-7xl">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="overflow-hidden transition border bg-gray-900 rounded-2xl border-[#F9F295]/10 hover:-translate-y-2"
              >

                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover w-full h-64"
                  />

                  <button className="absolute p-3 text-red-500 bg-white rounded-full top-4 right-4">
                    <FaHeart />
                  </button>

                  <span className="absolute px-4 py-1 text-sm text-black rounded-full bottom-4 left-4 bg-[#F9F295]">
                    {property.type}
                  </span>
                </div>

                <div className="p-5">

                  <h3 className="text-2xl font-bold text-[#F9F295]">
                    {property.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMapMarkerAlt />
                    {property.location}
                  </div>

                  <div className="flex justify-between mt-3 text-gray-300">
                    <span><FaBed /> {property.beds}</span>
                    <span><FaBath /> {property.baths}</span>
                  </div>

                  <p className="mt-2 text-gray-400">{property.area}</p>

                  <div className="flex items-center justify-between mt-4">

                    <h4 className="text-xl font-bold text-[#F9F295]">
                      {property.price}
                    </h4>

                    <button
                      onClick={() => navigate(`/property/${property.id}`)}
                      className="px-5 py-2 text-black bg-[#F9F295] rounded-lg"
                    >
                      Details
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Properties;