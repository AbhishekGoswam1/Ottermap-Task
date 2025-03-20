import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
