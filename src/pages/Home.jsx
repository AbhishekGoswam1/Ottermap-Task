import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchLocation.trim()) {
      alert("Please enter a location.");
      return;
    }
    console.log("Searching for:", searchLocation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !mobile.trim()) {
      alert("Please enter both Name and Mobile Number.");
      return;
    }

    localStorage.setItem("userName", name);
    navigate("/map");
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-gradient-to-r from-violet-500 to-indigo-500 gap-40">
      <Navbar />
      
      <div className="p-10 rounded-xl shadow-lg w-full max-w-3xl bg-gradient-to-r from-purple-200 to-blue-200 shadow-xl flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Search a Location & Enter Details
        </h2>

        {/* Search Bar & Button (Separate Section) */}
        <div className="flex w-full gap-4 mb-6 flex-wrap">
          <input
            type="text"
            placeholder="Enter a location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:outline-none bg-gray-200 text-black placeholder-gray-500"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {/* Name & Mobile Inputs with Separate Button */}
        <form onSubmit={handleSubmit} className="flex w-full gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:outline-none bg-gray-200 text-black placeholder-gray-500"
            required
          />

          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="flex-1 p-2 border rounded-lg bg-gray-200 focus:outline-none text-black placeholder-gray-500"
            pattern="\d{10}"
            maxLength="10"
            required
          />

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;