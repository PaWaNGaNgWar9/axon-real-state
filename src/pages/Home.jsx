import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

import first from "../assets/Bg.jpeg";
import second from "../assets/card1.jpeg";
import third from "../assets/Card2.jpeg";
import royalvilla from "../assets/Card3.jpeg";
import card4 from "../assets/Card3.jpeg";
import card5 from "../assets/Card4.jpeg";
import card6 from "../assets/Card5.jpeg";
import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaAward,
} from "react-icons/fa";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Delhi",
    price: "₹2.5 Cr",
    image: first,
  },

  {
    id: 2,
    title: "Modern Apartment",
    location: "Mumbai",
    price: "₹1.2 Cr",
    image: second,
  },

  {
    id: 3,
    title: "Beach House",
    location: "Goa",
    price: "₹3.8 Cr",
    image: third,
  },

  {
    id: 4,
    title: "Royal Penthouse",
    location: "Bangalore",
    price: "₹5.5 Cr",
    image: card4,
  },

  {
    id: 5,
    title: "Luxury Farmhouse",
    location: "Punjab",
    price: "₹4.2 Cr",
    image:card5,
  },

  {
    id: 6,
    title: "Modern Cottage",
    location: "Manali",
    price: "₹1.8 Cr",
    image: card6,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Properties */}
      <section className="px-6 py-20 text-white bg-black md:px-12">

        <div className="text-center mb-14">

          <h2 className="mb-5 text-5xl font-bold text-[#F9F295]">
            Featured Properties
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Discover luxury homes, villas, apartments, and premium properties
            designed for modern living and comfort.
          </p>

        </div>

        {/* Property Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {properties.map((property) => (
            <div
              key={property.id}
              className="transition duration-300 transform hover:-translate-y-3"
            >
              <PropertyCard property={property} />
            </div>
          ))}

        </div>

      </section>

      {/* About Section */}
      <section className="px-6 py-20 text-white bg-gray-900 md:px-12">

        <div className="grid items-center mx-auto max-w-7xl lg:grid-cols-2 gap-14">

          {/* Left Content */}
          <div>

            <h2 className="mb-6 text-5xl font-bold text-[#F9F295]">
              Find Your Dream Home
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-400">
              We provide premium luxury properties across India with modern
              architecture, world-class amenities, and elegant interiors.
              Whether you are looking for a villa, penthouse, apartment,
              farmhouse, or beach house — we have the perfect property for you.
            </p>

            <p className="text-lg leading-8 text-gray-400">
              Our mission is to help families and investors discover properties
              that match their lifestyle and future goals.
            </p>

            <Link
              to="/properties"
              className="inline-block px-8 py-4 mt-8 font-semibold text-black transition duration-300 bg-[#F9F295] rounded-xl hover:scale-105 hover:bg-[#f5ec7a]"
            >
              Explore More
            </Link>

          </div>

          {/* Right Image */}
          <div className="overflow-hidden shadow-2xl rounded-3xl">

            <img
              src={royalvilla}
              alt="Luxury Home"
              className="object-cover w-full h-full transition duration-700 hover:scale-110"
            />

          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-black">

        <div className="grid gap-10 mx-auto text-center max-w-7xl sm:grid-cols-2 lg:grid-cols-4">

          <div className="p-10 transition border bg-gray-900 rounded-2xl border-[#F9F295]/10 hover:border-[#F9F295]">

            <div className="flex justify-center mb-5 text-5xl text-[#F9F295]">
              <FaHome />
            </div>

            <h2 className="mb-3 text-4xl font-bold text-white">
              500+
            </h2>

            <p className="text-gray-400">
              Premium Properties
            </p>

          </div>

          <div className="p-10 transition border bg-gray-900 rounded-2xl border-[#F9F295]/10 hover:border-[#F9F295]">

            <div className="flex justify-center mb-5 text-5xl text-[#F9F295]">
              <FaUsers />
            </div>

            <h2 className="mb-3 text-4xl font-bold text-white">
              1200+
            </h2>

            <p className="text-gray-400">
              Happy Clients
            </p>

          </div>

          <div className="p-10 transition border bg-gray-900 rounded-2xl border-[#F9F295]/10 hover:border-[#F9F295]">

            <div className="flex justify-center mb-5 text-5xl text-[#F9F295]">
              <FaBuilding />
            </div>

            <h2 className="mb-3 text-4xl font-bold text-white">
              50+
            </h2>

            <p className="text-gray-400">
              Cities Covered
            </p>

          </div>

          <div className="p-10 transition border bg-gray-900 rounded-2xl border-[#F9F295]/10 hover:border-[#F9F295]">

            <div className="flex justify-center mb-5 text-5xl text-[#F9F295]">
              <FaAward />
            </div>

            <h2 className="mb-3 text-4xl font-bold text-white">
              10+
            </h2>

            <p className="text-gray-400">
              Years Experience
            </p>

          </div>

        </div>

      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 text-white bg-gray-900">

        <div className="text-center mb-14">

          <h2 className="mb-5 text-5xl font-bold text-[#F9F295]">
            What Our Clients Say
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400">
            Trusted by hundreds of happy families and investors.
          </p>

        </div>

        <div className="grid gap-10 mx-auto max-w-7xl md:grid-cols-3">

          <div className="p-8 bg-black border rounded-2xl border-[#F9F295]/10">

            <p className="mb-6 leading-7 text-gray-400">
              “Amazing service and beautiful properties. I found my dream villa
              within a week.”
            </p>

            <h3 className="text-xl font-bold text-[#F9F295]">
              Rahul Sharma
            </h3>

          </div>

          <div className="p-8 bg-black border rounded-2xl border-[#F9F295]/10">

            <p className="mb-6 leading-7 text-gray-400">
              “Professional team with premium property options. Highly
              recommended for luxury homes.”
            </p>

            <h3 className="text-xl font-bold text-[#F9F295]">
              Priya Verma
            </h3>

          </div>

          <div className="p-8 bg-black border rounded-2xl border-[#F9F295]/10">

            <p className="mb-6 leading-7 text-gray-400">
              “Excellent experience from start to finish. Smooth buying process
              and great support.”
            </p>

            <h3 className="text-xl font-bold text-[#F9F295]">
              Aman Kapoor
            </h3>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 text-center text-white bg-black">

        <h2 className="mb-6 text-5xl font-bold text-[#F9F295]">
          Ready To Find Your Dream Property?
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-400">
          Explore our luxury collection of villas, apartments, and premium
          homes today.
        </p>

        <Link
          to="/contact"
          className="inline-block px-10 py-4 font-bold text-black transition duration-300 bg-[#F9F295] rounded-xl hover:scale-105 hover:bg-[#f5ec7a]"
        >
          Contact Us
        </Link>

      </section>

      <Footer />
    </>
  );
};

export default Home;