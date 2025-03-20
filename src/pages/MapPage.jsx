import React, { useEffect, useState } from "react";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";

function MapPage() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "Guest";
    setUserName(storedName);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center">

      <Navbar username={userName} /> {/*username passing*/}

      <div className="w-fit h-full mt-2">
        <Maps />
      </div>
    </div>
  );
}

export default MapPage;