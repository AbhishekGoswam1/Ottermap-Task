import React, { useEffect, useState } from "react";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";

function MapPage() {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
    // console.log("username:", storedName); //for test
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center">
      <Navbar userName={userName} />
      <div className="w-full h-full mt-2 p-2 bg-white rounded-lg shadow-md">
        <Maps />
      </div>
    </div>
  );
}

export default MapPage;