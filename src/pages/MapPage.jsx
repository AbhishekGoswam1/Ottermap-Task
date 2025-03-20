import React from "react";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";

function MapPage() {
  const userName = localStorage.getItem("userName") || "Guest";

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center">
      {/* <h1 className="text-3xl font-bold text-gray-800 mt-4">{userName}</h1> */}
      <Navbar name = {userName}/>

      <div className="w-full h-full mt-2 p-2 bg-white rounded-lg shadow-md">
        <Maps />
      </div>
    </div>
  );
}

export default MapPage;
