import { useParams, useNavigate, Link } from "react-router-dom";

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
  FaArrowLeft,
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
    description:
      "Luxury villa with premium interiors, private garden, swimming pool, and smart home features.",
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
    description:
      "Modern apartment located in the heart of Mumbai with elegant interiors and luxury amenities.",
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
    description:
      "Beautiful beach house with sea-facing balcony and modern architecture.",
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
    description:
      "Luxury penthouse with rooftop lounge and skyline city views.",
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
    description:
      "Cozy mountain cottage surrounded by nature and scenic landscapes.",
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
    description:
      "Spacious farmhouse with private garden and luxurious amenities.",
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
    description:
      "Compact modern studio apartment perfect for urban living.",
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
    image: card7,
    description:
      "Ultra luxury royal mansion with grand interiors and premium lifestyle facilities.",
  },
  {
    id: 9,
    title: "Luxury Villa",
    location: "Delhi",
    price: "₹2.5 Cr",
    beds: 4,
    baths: 3,
    area: "4500 Sq.ft",
    type: "Villa",
    image: card8,
    description:
      "Luxury villa with premium interiors and private garden.",
  },
  {
    id: 10,
    title: "Modern Apartment",
    location: "Mumbai",
    price: "₹1.2 Cr",
    beds: 3,
    baths: 2,
    area: "3200 Sq.ft",
    type: "Apartment",
    image: card9,
    description:
      "Modern apartment with premium amenities and spacious rooms.",
  },
  {
    id: 11,
    title: "Beach House",
    location: "Goa",
    price: "₹3.8 Cr",
    beds: 5,
    baths: 4,
    area: "6000 Sq.ft",
    type: "Beach House",
    image: card10,
    description:
      "Luxury beach house with stunning sea views.",
  },
  {
    id: 12,
    title: "Royal Penthouse",
    location: "Bangalore",
    price: "₹5.5 Cr",
    beds: 6,
    baths: 5,
    area: "8000 Sq.ft",
    type: "Penthouse",
    image: card11,
    description:
      "Premium penthouse with rooftop lounge and skyline views.",
  },
  {
    id: 14,
    title: "Modern Cottage",
    location: "Manali",
    price: "₹1.8 Cr",
    beds: 3,
    baths: 2,
    area: "3500 Sq.ft",
    type: "Cottage",
    image: card11,
    description:
      "Beautiful mountain cottage surrounded by nature.",
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = propertiesData.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <div className="flex items-center justify-center min-h-screen text-4xl font-bold text-white bg-black">
        Property Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen px-6 py-20 text-white bg-black">
        <div className="max-w-6xl mx-auto">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-3 px-6 py-3 mb-10 font-semibold text-black transition bg-[#F9F295] rounded-xl hover:bg-[#f5ec7a]"
          >
            <FaArrowLeft />
            Back
          </button>

          <div className="grid gap-12 lg:grid-cols-2">

            <img
              src={property.image}
              alt={property.title}
              className="object-cover w-full h-[500px] rounded-3xl shadow-2xl"
            />

            <div>
              <span className="px-5 py-2 text-sm font-semibold text-black rounded-full bg-[#F9F295]">
                {property.type}
              </span>

              <h1 className="mt-6 text-5xl font-bold text-[#F9F295]">
                {property.title}
              </h1>

              <div className="flex items-center gap-3 mt-5 text-gray-400">
                <FaMapMarkerAlt className="text-[#F9F295]" />
                <span>{property.location}</span>
              </div>

              <h2 className="mt-8 text-4xl font-bold text-white">
                {property.price}
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                {property.description}
              </p>

              <div className="grid grid-cols-3 gap-5 mt-10">
                <div className="p-6 text-center bg-gray-900 rounded-2xl">
                  <FaBed className="mx-auto mb-3 text-3xl text-[#F9F295]" />
                  <h3 className="text-2xl font-bold">{property.beds}</h3>
                  <p className="text-gray-400">Bedrooms</p>
                </div>

                <div className="p-6 text-center bg-gray-900 rounded-2xl">
                  <FaBath className="mx-auto mb-3 text-3xl text-[#F9F295]" />
                  <h3 className="text-2xl font-bold">{property.baths}</h3>
                  <p className="text-gray-400">Bathrooms</p>
                </div>

                <div className="p-6 text-center bg-gray-900 rounded-2xl">
                  <h3 className="mb-3 text-2xl font-bold text-[#F9F295]">
                    {property.area}
                  </h3>
                  <p className="text-gray-400">Area</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block px-10 py-4 mt-10 font-bold text-black transition bg-[#F9F295] rounded-xl hover:bg-[#f5ec7a]"
              >
                Contact Agent
              </Link>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PropertyDetails;