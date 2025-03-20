import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !mobile.trim()) {
      alert("Please enter both Name and Mobile Number.");
      return;
    }

    // Save the name in localStorage to use on the MapPage
    localStorage.setItem("userName", name);

    // Navigate to the Map Page
    navigate("/map");
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-gradient-to-r from-violet-600 to-indigo-600 gap-40">
      <Navbar />
      <div className=" p-10 rounded-xl shadow-lg w-full max-w-md bg-gradient-to-r from-purple-200 to-blue-200 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Search a Location
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none bg-gray-200 text-black placeholder-gray-500"
            required
          />

          {/* Mobile Number Input */}
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 border rounded-lg bg-gray-200 focus:outline-none text-black placeholder-gray-500"
            pattern="\d{10}" /* Ensures exactly 10 digits */
            maxLength="10"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Search & Proceed to Map
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
